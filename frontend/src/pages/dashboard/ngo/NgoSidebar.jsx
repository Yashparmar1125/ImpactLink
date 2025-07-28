import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NgoSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-20 left-4 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:bg-white transition-all duration-300 transform hover:scale-105"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative top-0 left-0 h-full z-50
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-80 lg:w-80
      `}>
        <div className="h-full bg-white/90 backdrop-blur-xl border-r border-white/20 shadow-2xl">
          {/* Header with close button for mobile */}
          <div className="flex items-center justify-between p-6 lg:p-8 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">Unnatii Trust</h3>
                <p className="text-xs lg:text-sm text-gray-600">NGO Organization</p>
              </div>
            </div>
            
            {/* Close button for mobile */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="p-4 lg:p-6 flex-1">
            <nav className="space-y-2">
              <button
                onClick={() => handleNavigation('/ngo/dashboard')}
                className="w-full flex items-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 text-left rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                  </svg>
                </div>
                <span className="text-sm lg:text-base font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                  Your Campaigns
                </span>
              </button>

              <button
                onClick={() => handleNavigation('/ngo/create-campaign')}
                className="w-full flex items-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 text-left rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-sm lg:text-base font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                  Create Campaign
                </span>
              </button>

              <button
                onClick={() => handleNavigation('/ngo/manage-interns')}
                className="w-full flex items-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 text-left rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm lg:text-base font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                  Manage Interns
                </span>
              </button>

              <button
                onClick={() => handleNavigation('/ngo/manage-campaign')}
                className="w-full flex items-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 text-left rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <span className="text-sm lg:text-base font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                  Manage Campaign
                </span>
              </button>
            </nav>
          </div>

          {/* Quick Stats */}
          <div className="p-4 lg:p-6 border-t border-white/20">
            <h4 className="text-xs lg:text-sm font-semibold text-gray-600 mb-3 lg:mb-4">Quick Stats</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs lg:text-sm text-gray-600">Active Campaigns</span>
                <span className="text-xs lg:text-sm font-semibold text-emerald-600">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs lg:text-sm text-gray-600">Pending Requests</span>
                <span className="text-xs lg:text-sm font-semibold text-green-600">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs lg:text-sm text-gray-600">Active Volunteers</span>
                <span className="text-xs lg:text-sm font-semibold text-teal-600">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs lg:text-sm text-gray-600">Total Hours</span>
                <span className="text-xs lg:text-sm font-semibold text-emerald-700">1,240</span>
              </div>
            </div>
          </div>

          {/* Logout Section */}
          <div className="p-4 lg:p-6 border-t border-white/20">
            <button
              onClick={() => handleNavigation('/')}
              className="w-full flex items-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 text-left rounded-xl hover:bg-red-50 transition-all duration-300 group"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
              <span className="text-sm lg:text-base font-medium text-gray-700 group-hover:text-red-600 transition-colors duration-300">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NgoSidebar;