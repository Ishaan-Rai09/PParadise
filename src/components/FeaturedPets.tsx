import React from 'react';
import { Heart } from 'lucide-react';

const featuredPets = [
  {
    id: 1,
    name: 'Luna',
    breed: 'Golden Retriever',
    age: '2 months',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Oliver',
    breed: 'Persian Cat',
    age: '1 year',
    price: '$800',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Charlie',
    breed: 'French Bulldog',
    age: '3 months',
    price: '$2,500',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default function FeaturedPets() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Pets</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredPets.map((pet) => (
            <div key={pet.id} className="group relative">
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href="#">{pet.name}</a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{pet.breed}</p>
                  <p className="mt-1 text-sm text-gray-500">{pet.age}</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">{pet.price}</p>
                  <button className="mt-2 p-1.5 rounded-full text-gray-400 hover:text-red-500">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}