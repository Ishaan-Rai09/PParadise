import React from 'react';
import PageTransition from '../components/PageTransition';
import { Truck, Package, Clock, MapPin } from 'lucide-react';

export default function Shipping() {
  const shippingMethods = [
    {
      name: 'Standard Shipping',
      price: '$5.99',
      time: '3-5 business days',
      icon: Truck,
    },
    {
      name: 'Express Shipping',
      price: '$15.99',
      time: '1-2 business days',
      icon: Package,
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping Information</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Methods</h2>
            <div className="space-y-4">
              {shippingMethods.map((method) => (
                <div key={method.name} className="flex items-start p-4 border rounded-lg">
                  <method.icon className="h-6 w-6 text-indigo-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium">{method.name}</h3>
                    <p className="text-gray-600">{method.price}</p>
                    <p className="text-sm text-gray-500">{method.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Policy</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Processing Time</h3>
                  <p className="text-gray-600">Orders are processed within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Delivery Areas</h3>
                  <p className="text-gray-600">We ship to all 50 US states</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">How do you ensure safe pet transport?</h3>
              <p className="text-gray-600">We use specialized climate-controlled vehicles and follow all safety protocols for pet transportation.</p>
            </div>
            <div>
              <h3 className="font-medium">What if I'm not home for delivery?</h3>
              <p className="text-gray-600">We require a signature for pet deliveries and will reschedule if you're unavailable.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}