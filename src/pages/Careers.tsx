import React from 'react';
import PageTransition from '../components/PageTransition';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const jobs = [
  {
    id: 1,
    title: 'Veterinary Technician',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$45,000 - $60,000',
    description: 'Looking for an experienced vet tech to join our growing team.',
  },
  {
    id: 2,
    title: 'Pet Care Specialist',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$35,000 - $45,000',
    description: 'Join us in providing exceptional care for our furry friends.',
  },
  // Add more job listings
];

export default function Careers() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600">
            Help us make the world a better place for pets and their families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold mb-4">{job.title}</h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                  {job.type}
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-2 text-indigo-600" />
                  {job.salary}
                </div>
              </div>
              <p className="text-gray-600 mb-6">{job.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Briefcase className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Opportunities for professional development and advancement
              </p>
            </div>
            {/* Add more benefits */}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}