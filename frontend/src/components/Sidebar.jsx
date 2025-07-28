import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import profilePic from '../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Our Team Pics/yashPic.jpg';

const Sidebar = () => {
  const [name] = useState("John Doe");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleNavigation = (route) => {
    navigate(route);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      name: 'Dashboard',
      route: '/volunteer/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
        </svg>
      )
    },
    {
      name: 'Edit Profile',
      route: '/volunteer/profile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'Achievements',
      route: '/volunteer/achievements',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'Explore NGOs',
      route: '/explore-ngos',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      name: 'Invite Friends',
      route: '/volunteer/invite',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    }
  ];

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
              <div className="relative">
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border-4 border-white/20 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">{name}</h3>
                <p className="text-xs lg:text-sm text-gray-600">Volunteer</p>
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
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.route)}
                  className="w-full flex items-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 text-left rounded-xl hover:bg-white/50 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-sm lg:text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    {item.name}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          
          {/* Footer Section */}
          <div className="p-4 lg:p-6 border-t border-white/20">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-900">Need Help?</span>
              </div>
              <p className="text-xs text-gray-600 mb-3">Contact our support team for assistance</p>
              <button className="w-full px-3 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm rounded-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Get Support
              </button>
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

export default Sidebar;
