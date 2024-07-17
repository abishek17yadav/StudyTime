import React from 'react';

function Pricing() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose a plan that works for you
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            All plans come with great features. Pick the one that suits your needs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <div className="px-6 py-8">
              <h3 className="text-center text-lg font-semibold text-gray-900">Free</h3>
              <div className="mt-4 flex items-center justify-center">
                <span className="px-3 py-1.5 text-sm text-gray-700 bg-gray-200 rounded-md">
                  Basic Features
                </span>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">$0</span>
                <span className="ml-1 text-gray-500">/ month</span>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                  Select Free Plan
                </button>
              </div>
            </div>
          </div>

          {/* Gold Plan */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <div className="px-6 py-8">
              <h3 className="text-center text-lg font-semibold text-gray-900">Gold</h3>
              <div className="mt-4 flex items-center justify-center">
                <span className="px-3 py-1.5 text-sm text-gray-700 bg-yellow-200 rounded-md">
                  Enhanced Features
                </span>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">$29</span>
                <span className="ml-1 text-gray-500">/ month</span>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                  Select Gold Plan
                </button>
              </div>
            </div>
          </div>

          {/* Diamond Premium Plan */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <div className="px-6 py-8">
              <h3 className="text-center text-lg font-semibold text-gray-900">Diamond Premium</h3>
              <div className="mt-4 flex items-center justify-center">
                <span className="px-3 py-1.5 text-sm text-gray-700 bg-pink-200 rounded-md">
                  All Features Unlocked
                </span>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">$99</span>
                <span className="ml-1 text-gray-500">/ month</span>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600"
                >
                  Select Diamond Premium Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
