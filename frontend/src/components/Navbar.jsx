import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/Images/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { user } = useSelector(store => store.auth);

  return (
    <nav className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] sticky top-0 left-0 w-full z-50 h-16 flex items-center border-b border-[#3b82f6] shadow-lg">
      <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-12 w-auto transform hover:scale-105 transition-transform duration-300" src={logo} alt="Impact Logo" />
        </div>
        
        <ul className="hidden md:flex items-center space-x-10">
          <li><Link to="/#" className="text-white hover:text-[#3b82f6] font-medium text-base transition-all duration-300 border-b-2 border-transparent hover:border-[#3b82f6] pb-1 transform hover:scale-105">Home</Link></li>
          <li><Link to="/explorengos" className="text-white hover:text-[#3b82f6] font-medium text-base transition-all duration-300 border-b-2 border-transparent hover:border-[#3b82f6] pb-1 transform hover:scale-105">Explore NGO&apos;s</Link></li>
          <li><Link to="/" className="text-white hover:text-[#3b82f6] font-medium text-base transition-all duration-300 border-b-2 border-transparent hover:border-[#3b82f6] pb-1 transform hover:scale-105">Your Workspace</Link></li>
          <li><Link to="/#about" className="text-white hover:text-[#3b82f6] font-medium text-base transition-all duration-300 border-b-2 border-transparent hover:border-[#3b82f6] pb-1 transform hover:scale-105">About Us</Link></li>
        </ul>
        
        {user == null && (
          <div className="flex items-center space-x-4 mr-4">
            <button 
              className="px-8 py-2.5 bg-white hover:bg-gray-100 text-[#1e3a8a] rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-0.5"
              onClick={openModal}
            >
              Login
            </button>
            <Link to="/signup">
              <button className="px-8 py-2.5 bg-transparent hover:bg-[#3b82f6] text-white border border-white hover:border-[#3b82f6] rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-0.5">
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
                <button className="w-full py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                  Login as Volunteer
                </button>
              </Link>
              <Link to="/ngo/login" onClick={closeModal} className="block">
                <button className="w-full py-4 bg-[#3b82f6] hover:bg-[#1e3a8a] text-white rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
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
