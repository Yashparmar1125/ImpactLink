import React from 'react'

const Button = ({ text, onClick, disabled = false, className = '', ...props }) => {
  return (
    <div className="w-full">
      <button 
        className={`w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
