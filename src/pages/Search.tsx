import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { Search as SearchIcon, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchStore } from '../store/searchStore';
import { useWishlistStore } from '../store/wishlistStore';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

// Sample data - in a real app, this would come from an API
const allPets = [
  {
    id: 1,
    name: 'Luna',
    breed: 'Golden Retriever',
    age: '2 months',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'dogs',
  },
  {
    id: 2,
    name: 'Oliver',
    breed: 'Persian Cat',
    age: '1 year',
    price: '$800',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cats',
  },
  // Add more pets here
];

const categories = ['All', 'Dogs', 'Cats', 'Birds', 'Fish'];
const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Newest'];

export default function Search() {
  const {
    searchTerm,
    category,
    sortBy,
    results,
    setSearchTerm,
    setCategory,
    setSortBy,
    setResults,
  } = useSearchStore();

  const addToWishlist = useWishlistStore((state) => state.addItem);
  const addToCart = useCartStore((state) => state.addItem);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);

  useEffect(() => {
    const filtered = allPets.filter((pet) => {
      const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'All' || pet.category === category.toLowerCase();
      return matchesSearch && matchesCategory;
    });

    let sorted = [...filtered];
    if (sortBy === 'Price: Low to High') {
      sorted.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (sortBy === 'Price: High to Low') {
      sorted.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    }

    setResults(sorted);
  }, [searchTerm, category, sortBy]);

  const handleAddToWishlist = (pet: any) => {
    addToWishlist(pet);
    toast.success(`${pet.name} added to wishlist!`);
  };

  const handleAddToCart = (pet: any) => {
    addToCart({
      id: pet.id,
      name: pet.name,
      price: parseFloat(pet.price.replace('$', '')),
      image: pet.image,
    });
    toast.success(`${pet.name} added to cart!`);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Search Pets</h1>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Filter className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for pets..."
                className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  category === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((pet) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{pet.name}</h3>
                  <p className="text-sm text-gray-500">{pet.breed}</p>
                  <p className="text-sm text-gray-500">{pet.age}</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">{pet.price}</p>
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(pet)}
                      className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleAddToWishlist(pet)}
                      disabled={isInWishlist(pet.id)}
                      className={`flex-1 ${
                        isInWishlist(pet.id)
                          ? 'bg-gray-100 text-gray-400'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      } px-4 py-2 rounded-md`}
                    >
                      {isInWishlist(pet.id) ? 'In Wishlist' : 'Add to Wishlist'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {results.length === 0 && searchTerm && (
            <p className="text-center text-gray-500 mt-8">
              No pets found matching your search criteria.
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}