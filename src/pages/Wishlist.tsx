import React from 'react';
import PageTransition from '../components/PageTransition';
import { Heart, ShoppingCart } from 'lucide-react';

const wishlistItems = [
  {
    id: 1,
    name: 'Golden Retriever Puppy',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Persian Cat',
    price: 800,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Wishlist() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h1>
        
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
                </div>
                <div className="space-y-2">
                  <button className="flex items-center justify-center rounded-md p-2 text-red-600 hover:bg-red-50">
                    <Heart className="h-6 w-6 fill-current" />
                  </button>
                  <button className="flex items-center justify-center rounded-md p-2 text-indigo-600 hover:bg-indigo-50">
                    <ShoppingCart className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}