import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Return Home
          </Link>
          <div className="mt-8">
            <p className="text-gray-600">
              Looking for something specific? Try these:
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link
                to="/properties"
                className="text-primary hover:text-primary-dark"
              >
                Browse Properties
              </Link>
              <Link
                to="/contact"
                className="text-primary hover:text-primary-dark"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="text-primary hover:text-primary-dark"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
