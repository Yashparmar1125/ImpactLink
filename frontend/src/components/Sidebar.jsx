import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import profilePic from '../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Our Team Pics/yashPic.jpg';

const Sidebar = () => {
  const [name] = useState("John Doe");
  const navigate = useNavigate();
  
  const handleNavigation = (route) => {
    navigate(route);
  };

  const menuItems = [
    {
      name: 'Dashboard',
      route: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
        </svg>
      )
    },
    {
      name: 'Edit Profile',
      route: '/editprofile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'Achievements',
      route: '/achievements',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'Explore NGOs',
      route: '/explorengos',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      name: 'Invite Friends',
      route: '/invite',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-white/20">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <img 
              src={profilePic} 
              alt="Profile" 
              className="w-20 h-20 rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">Volunteer</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.route)}
              className="w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl hover:bg-white/50 transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-white/20">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-900">Need Help?</span>
          </div>
          <p className="text-xs text-gray-600 mb-3">Contact our support team for assistance</p>
          <button className="w-full px-3 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm rounded-lg hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
