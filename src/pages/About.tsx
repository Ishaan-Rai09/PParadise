import React from 'react';
import PageTransition from '../components/PageTransition';
import { Heart, Shield, Truck, Users } from 'lucide-react';

const features = [
  {
    name: 'Quality Care',
    description: 'All our pets receive top-notch care and attention from certified professionals.',
    icon: Heart,
  },
  {
    name: 'Safe Transport',
    description: 'We ensure safe and comfortable transportation for all our animals.',
    icon: Truck,
  },
  {
    name: 'Expert Team',
    description: 'Our team consists of experienced veterinarians and animal care specialists.',
    icon: Users,
  },
  {
    name: 'Health Guarantee',
    description: 'All pets come with a comprehensive health guarantee.',
    icon: Shield,
  },
];

export default function About() {
  return (
    <PageTransition>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Pet Paradise
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Your trusted partner in finding the perfect pet companion since 2024.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Our Mission
                </h3>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  At Pet Paradise, we're dedicated to connecting loving homes with perfect pet companions. 
                  Our mission is to ensure every pet finds their forever home while providing comprehensive 
                  support to pet owners throughout their journey.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <img
                  className="rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Team working with animals"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}