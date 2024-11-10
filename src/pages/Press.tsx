import React from 'react';
import PageTransition from '../components/PageTransition';
import { Newspaper, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const pressReleases = [
  {
    id: 1,
    title: 'Pet Paradise Expands to 50 New Locations',
    date: 'March 15, 2024',
    excerpt: 'Leading pet retailer announces major expansion plans across the United States.',
    pdf: '#',
  },
  {
    id: 2,
    title: 'New Pet Health Initiative Launched',
    date: 'March 1, 2024',
    excerpt: 'Innovative program aims to improve pet healthcare accessibility.',
    pdf: '#',
  },
  // Add more press releases
];

const newsFeatures = [
  {
    id: 1,
    title: 'The Future of Pet Care',
    publication: 'Pet Industry Weekly',
    date: 'March 10, 2024',
    link: '#',
  },
  {
    id: 2,
    title: 'How Pet Paradise is Revolutionizing Pet Adoption',
    publication: 'Business Today',
    date: 'March 5, 2024',
    link: '#',
  },
  // Add more news features
];

export default function Press() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Press Room</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <motion.div
                  key={release.id}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium mb-2">{release.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{release.date}</p>
                      <p className="text-gray-600">{release.excerpt}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-indigo-600 hover:text-indigo-700"
                    >
                      <Download className="h-6 w-6" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">In the News</h2>
            <div className="space-y-6">
              {newsFeatures.map((feature) => (
                <motion.div
                  key={feature.id}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {feature.publication} • {feature.date}
                      </p>
                    </div>
                    <motion.a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-indigo-600 hover:text-indigo-700"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Media Contact</h2>
          <div className="flex items-start space-x-4">
            <Newspaper className="h-6 w-6 text-indigo-600 mt-1" />
            <div>
              <h3 className="font-medium">Press Inquiries</h3>
              <p className="text-gray-600">For media inquiries, please contact:</p>
              <p className="text-gray-600">press@petparadise.com</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}