import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { usePetStore } from '../store/petStore';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';

const categories = ['All', 'Dogs', 'Cats', 'Birds', 'Fish'];

export default function Supplies() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const { getSuppliesByCategory } = usePetStore();
  const addToCart = useCartStore((state) => state.addItem);

  const supplies = getSuppliesByCategory(selectedCategory);

  const handleAddToCart = (supply: any) => {
    addToCart({
      id: supply.id,
      name: supply.name,
      price: supply.price,
      image: supply.image,
    });
    toast.success(`${supply.name} added to cart!`);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Pet Supplies</h1>

        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {supplies.map((supply) => (
            <motion.div
              key={supply.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={supply.image}
                  alt={supply.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {supply.name}
                </h3>
                <p className="text-gray-600 mb-4">{supply.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${supply.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(supply)}
                    className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}