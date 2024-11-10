import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const cats = [
  {
    id: 1,
    name: 'Oliver',
    breed: 'Persian Cat',
    age: '1 year',
    price: '$800',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Milo',
    breed: 'Maine Coon',
    age: '6 months',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  // Add more cats as needed
];

export default function Cats() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cats</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {cats.map((cat) => (
            <motion.div
              key={cat.id}
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{cat.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{cat.breed}</p>
                  <p className="mt-1 text-sm text-gray-500">{cat.age}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{cat.price}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}