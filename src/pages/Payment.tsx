import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';
import { CreditCard, Phone } from 'lucide-react';

export default function Payment() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const { items, clearCart } = useCartStore();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0) + 5.99;

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearCart();
    toast.success('Payment successful! Your pets will be shipped soon.');
    navigate('/');
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center p-4 border-2 border-indigo-600 rounded-lg"
                >
                  <CreditCard className="h-6 w-6 mr-2 text-indigo-600" />
                  <span className="font-medium text-indigo-600">Credit Card</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg"
                >
                  <Phone className="h-6 w-6 mr-2 text-gray-600" />
                  <span className="font-medium text-gray-600">Google Pay</span>
                </motion.button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Shipping</p>
                    <p className="font-medium">$5.99</p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <p className="font-medium">Total</p>
                    <p className="font-medium">${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isProcessing}
              onClick={handlePayment}
              className={`w-full py-3 px-4 text-white font-medium rounded-md ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
            </motion.button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}