import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../assets/Images/logo.png'
import chatbot from '../assets/Images/chatbotImg.jpg'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className="navbar-logo">
          <img className="logo" src={logo} alt="Impact Logo" />
        </div>
        <ul className='navlist'>
          <li><Link to="/#" className='links'>Home</Link></li>
          <li><Link to="/explorengos" className='links'>Explore NGO's</Link></li>
          <li><Link to="/" className='links'>Your Workspace</Link></li>
          <li><Link to="/#about" className='links'>About Us</Link></li>
          <div className='chatbot-logo'>
            <li>Ask AI Chatbot
            </li>
            <img className="chat-logo" src={chatbot} alt="Chatbot Logo" />
          </div>
        </ul>
        <div className='auth-btn'>
          <Link to="/volunteer/login">
            <button className='login-home'>Login</button>
          </Link>
          <Link to="/signup">
            <button className='signup-home'>Signup</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
