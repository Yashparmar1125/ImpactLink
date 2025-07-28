import React from 'react'

const Input = ({ className = '', ...props }) => {
  return (
    <div className="w-full">
      <input
        className={`w-full h-12 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white placeholder-gray-400 font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input
