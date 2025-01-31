import  { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/Images/logo.png';
import chatbot from '../assets/Images/chatbotImg.jpg';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal
  const openModal = () => setIsModalOpen(true);

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <nav className='navbar'>
        <div className="navbar-logo">
          <img className="logo" src={logo} alt="Impact Logo" />
        </div>
        <ul className='navlist'>
          <li><Link to="/#" className='links'>Home</Link></li>
          <li><Link to="/explorengos" className='links'>Explore NGO&apos;s</Link></li>
          <li><Link to="/" className='links'>Your Workspace</Link></li>
          <li><Link to="/#about" className='links'>About Us</Link></li>
          <div className='chatbot-logo'>
            <li>Ask AI Chatbot</li>
            <img className="chat-logo" src={chatbot} alt="Chatbot Logo" />
          </div>
        </ul>
        <div className='auth-btn'>
          <button className='login-home' onClick={openModal}>
            Login
          </button>
          <Link to="/signup">
            <button className='signup-home'>Signup</button>
          </Link>
        </div>
      </nav>

      {/* Modal for Login Options */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Cross button */}
            <button className="close-modal-btn" onClick={closeModal}>×</button>
            
            <h2>Select Login Type</h2>
            <p>Please choose whether you&apos;re a Volunteer or an NGO to continue.</p>
            <div className="login-options">
              <Link to="/volunteer/login" onClick={closeModal}>
                <button className="login-option-btn volunteer">Login as Volunteer</button>
              </Link>
              <Link to="/ngo/login" onClick={closeModal}>
                <button className="login-option-btn ngo">Login as NGO</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
