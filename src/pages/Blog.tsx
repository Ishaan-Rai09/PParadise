import React from 'react';
import PageTransition from '../components/PageTransition';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'Essential Tips for New Pet Parents',
    excerpt: 'Learn the basics of pet care and what to expect in your first weeks as a pet parent.',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: 'Dr. Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Pet Care',
  },
  {
    id: 2,
    title: 'Choosing the Right Pet for Your Lifestyle',
    excerpt: 'Find out which pet best matches your living situation and daily routine.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: 'Mark Wilson',
    date: 'March 10, 2024',
    category: 'Advice',
  },
  // Add more blog posts
];

export default function Blog() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Pet Paradise Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                  <User className="h-4 w-4 ml-4 mr-2" />
                  {post.author}
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-indigo-600 font-medium flex items-center"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}