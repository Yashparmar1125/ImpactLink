import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/50 to-purple-50/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Header */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-16">
        <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-6">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
            >
              Go Home
            </button>
            <button
              onClick={() => navigate('/explore-ngos')}
              className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Explore NGOs
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => navigate('/volunteer/login')}
                className="p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-300 text-sm font-medium"
              >
                Volunteer Login
              </button>
              <button
                onClick={() => navigate('/ngo/login')}
                className="p-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors duration-300 text-sm font-medium"
              >
                NGO Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors duration-300 text-sm font-medium"
              >
                Sign Up
              </button>
              <button
                onClick={() => navigate('/explore-ngos')}
                className="p-3 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors duration-300 text-sm font-medium"
              >
                Explore NGOs
              </button>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">Still can't find what you're looking for?</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 