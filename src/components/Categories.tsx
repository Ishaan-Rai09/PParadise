import React from 'react';
import { Dog, Cat, Bird, Fish } from 'lucide-react';

const categories = [
  {
    name: 'Dogs',
    icon: Dog,
    description: 'Loyal companions for every lifestyle',
    color: 'bg-blue-500',
  },
  {
    name: 'Cats',
    icon: Cat,
    description: 'Independent and loving felines',
    color: 'bg-purple-500',
  },
  {
    name: 'Birds',
    icon: Bird,
    description: 'Colorful and cheerful friends',
    color: 'bg-yellow-500',
  },
  {
    name: 'Fish',
    icon: Fish,
    description: 'Peaceful aquatic pets',
    color: 'bg-teal-500',
  },
];

export default function Categories() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Find Your Perfect Pet
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Browse through our categories to discover your new family member
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <span className={`rounded-lg inline-flex p-3 ${category.color} text-white ring-4 ring-white`}>
                  <category.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {category.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}