import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Privacy() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-indigo">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, including name, email address,
              and any other information you choose to provide.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services,
              to process your transactions, and to communicate with you.
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except as described
              in this privacy policy or with your consent.
            </p>

            <h2>Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss,
              theft, misuse, and unauthorized access.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any
              changes by posting the new privacy policy on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@petparadise.com" className="text-indigo-600 hover:text-indigo-500">
                privacy@petparadise.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}