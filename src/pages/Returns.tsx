import React from 'react';
import PageTransition from '../components/PageTransition';
import { RefreshCw, Shield, MessageCircle, AlertCircle } from 'lucide-react';

export default function Returns() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Returns & Refunds</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Return Policy</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <RefreshCw className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">30-Day Return Window</h3>
                  <p className="text-gray-600">For supplies and accessories only. Pet returns are subject to special conditions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Health Guarantee</h3>
                  <p className="text-gray-600">All pets come with a 14-day health guarantee.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Refund Process</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MessageCircle className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Contact Customer Service</h3>
                  <p className="text-gray-600">Initiate your return by contacting our customer service team.</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Processing Time</h3>
                  <p className="text-gray-600">Refunds are processed within 5-7 business days after receiving the return.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Special Conditions for Pet Returns</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Due to the nature of pet adoption, we have special policies regarding pet returns:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>14-day health guarantee for all pets</li>
              <li>Veterinary documentation required for health-related returns</li>
              <li>Behavioral consultation available before returns</li>
              <li>Full refund available within 48 hours of adoption</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}