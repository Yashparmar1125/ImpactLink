import React from 'react'
import logo from '../assets/Images/logo.png'
import insta from '../assets/Images/insta.png'
import youtube from '../assets/Images/youtube.png'
import facebook from '../assets/Images/facebook.png'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white w-full">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img className="h-20 w-auto mb-6 transform hover:scale-105 transition-transform duration-300" src={logo} alt="logo" />
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">NAVIGATE</h3>
            <ul className="space-y-3">
              <li><Link to="/#about" className="hover:text-[#3b82f6] transition-colors duration-300 transform hover:translate-x-1 inline-block">About Us</Link></li>
              <li><span className="hover:text-[#3b82f6] transition-colors duration-300 transform hover:translate-x-1 inline-block cursor-pointer">Contact Us</span></li>
              <li><Link to="/explorengos" className="hover:text-[#3b82f6] transition-colors duration-300 transform hover:translate-x-1 inline-block">Explore NGOs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-3">
              <li><span className="hover:text-[#3b82f6] transition-colors duration-300 transform hover:translate-x-1 inline-block cursor-pointer">Terms and Conditions</span></li>
              <li><span className="hover:text-[#3b82f6] transition-colors duration-300 transform hover:translate-x-1 inline-block cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-[#3b82f6] transition-colors duration-300 transform hover:translate-x-1 inline-block cursor-pointer">Team Bytecoders</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <p className="mb-6">support@impact.com</p>
            <div className="flex space-x-4">
              <img src={insta} alt="Instagram" className="w-8 h-8 bg-white rounded-full p-1 hover:bg-[#3b82f6] transition-all duration-300 cursor-pointer transform hover:scale-110" />
              <img src={facebook} alt="Facebook" className="w-8 h-8 bg-white rounded-full p-1 hover:bg-[#3b82f6] transition-all duration-300 cursor-pointer transform hover:scale-110" />
              <img src={youtube} alt="YouTube" className="w-8 h-8 bg-white rounded-full p-1 hover:bg-[#3b82f6] transition-all duration-300 cursor-pointer transform hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
