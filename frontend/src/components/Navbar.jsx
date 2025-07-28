import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom'; // ✅ Correct source

import logo from '../assets/Images/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { user } = useSelector(store => store.auth);
  const location = useLocation();

  // Determine if we're in NGO or Volunteer flow based on current route
  const isNgoRoute = location.pathname.includes('/ngo') || 
                     location.pathname.includes('/ngodashboard') || 
                     location.pathname.includes('/createcampaign') || 
                     location.pathname.includes('/manageinterns') || 
                     location.pathname.includes('/managecampaign');

  const isVolunteerRoute = location.pathname.includes('/volunteer') || 
                           location.pathname.includes('/dashboard') ||
                           location.pathname.includes('/explorengos');

  // Conditional styling based on route
  const getNavbarStyles = () => {
    if (isNgoRoute) {
      return {
        background: 'bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600',
        borderColor: 'border-emerald-500',
        hoverColor: 'hover:text-emerald-200',
        borderHoverColor: 'hover:border-emerald-200',
        buttonBg: 'bg-white',
        buttonText: 'text-emerald-700',
        buttonHover: 'hover:bg-emerald-50',
        signupBg: 'bg-transparent',
        signupBorder: 'border-white',
        signupHover: 'hover:bg-emerald-500',
        signupHoverBorder: 'hover:border-emerald-500',
        modalButton1: 'bg-emerald-600 hover:bg-emerald-700',
        modalButton2: 'bg-teal-600 hover:bg-teal-700'
      };
    } else if (isVolunteerRoute) {
      return {
        background: 'bg-gradient-to-r from-[#1e3a8a] to-[#1e40af]',
        borderColor: 'border-[#3b82f6]',
        hoverColor: 'hover:text-[#3b82f6]',
        borderHoverColor: 'hover:border-[#3b82f6]',
        buttonBg: 'bg-white',
        buttonText: 'text-[#1e3a8a]',
        buttonHover: 'hover:bg-gray-100',
        signupBg: 'bg-transparent',
        signupBorder: 'border-white',
        signupHover: 'hover:bg-[#3b82f6]',
        signupHoverBorder: 'hover:border-[#3b82f6]',
        modalButton1: 'bg-[#1e3a8a] hover:bg-[#1e40af]',
        modalButton2: 'bg-[#3b82f6] hover:bg-[#1e3a8a]'
      };
    } else {
      // Default styling for landing page
      return {
        background: 'bg-gradient-to-r from-[#1e3a8a] to-[#1e40af]',
        borderColor: 'border-[#3b82f6]',
        hoverColor: 'hover:text-[#3b82f6]',
        borderHoverColor: 'hover:border-[#3b82f6]',
        buttonBg: 'bg-white',
        buttonText: 'text-[#1e3a8a]',
        buttonHover: 'hover:bg-gray-100',
        signupBg: 'bg-transparent',
        signupBorder: 'border-white',
        signupHover: 'hover:bg-[#3b82f6]',
        signupHoverBorder: 'hover:border-[#3b82f6]',
        modalButton1: 'bg-[#1e3a8a] hover:bg-[#1e40af]',
        modalButton2: 'bg-[#3b82f6] hover:bg-[#1e3a8a]'
      };
    }
  };

  const styles = getNavbarStyles();

  return (
    <nav className={`${styles.background} fixed top-0 left-0 w-full z-50 h-16 flex items-center border-b ${styles.borderColor} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-12 w-auto transform hover:scale-105 transition-transform duration-300" src={logo} alt="Impact Logo" />
        </div>
        
        <ul className="hidden md:flex items-center space-x-10">
          <li><Link to="/#" className={`text-white ${styles.hoverColor} font-medium text-base transition-all duration-300 border-b-2 border-transparent ${styles.borderHoverColor} pb-1 transform hover:scale-105`}>Home</Link></li>
          <li><Link to="/explorengos" className={`text-white ${styles.hoverColor} font-medium text-base transition-all duration-300 border-b-2 border-transparent ${styles.borderHoverColor} pb-1 transform hover:scale-105`}>Explore NGO&apos;s</Link></li>
          <li><Link to="/" className={`text-white ${styles.hoverColor} font-medium text-base transition-all duration-300 border-b-2 border-transparent ${styles.borderHoverColor} pb-1 transform hover:scale-105`}>Your Workspace</Link></li>
          <li><Link to="/#about" className={`text-white ${styles.hoverColor} font-medium text-base transition-all duration-300 border-b-2 border-transparent ${styles.borderHoverColor} pb-1 transform hover:scale-105`}>About Us</Link></li>
        </ul>
        
        {user == null && (
          <div className="flex items-center space-x-4 mr-4">
            <button 
              className={`px-8 py-2.5 ${styles.buttonBg} ${styles.buttonHover} ${styles.buttonText} rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-0.5`}
              onClick={openModal}
            >
              Login
            </button>
            <Link to="/signup">
              <button className={`px-8 py-2.5 ${styles.signupBg} ${styles.signupHover} text-white ${styles.signupBorder} ${styles.signupHoverBorder} rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-0.5`}>
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
      
      {/* Modal for Login Options */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative shadow-2xl transform transition-all duration-300 scale-100">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold transition-all duration-300 transform hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Select Login Type</h2>
            <p className="text-gray-600 mb-6 text-center">Please choose whether you&apos;re a Volunteer or an NGO to continue.</p>
            <div className="space-y-4">
              <Link to="/volunteer/login" onClick={closeModal} className="block">
                <button className={`w-full py-4 ${styles.modalButton1} text-white rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}>
                  Login as Volunteer
                </button>
              </Link>
              <Link to="/ngo/login" onClick={closeModal} className="block">
                <button className={`w-full py-4 ${styles.modalButton2} text-white rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}>
                  Login as NGO
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
