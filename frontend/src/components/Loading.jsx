import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Spinner */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Loading...</h2>
          <p className="text-lg text-gray-600">Please wait while we prepare your experience</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 