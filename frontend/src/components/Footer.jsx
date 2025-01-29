import React from 'react'
import logo from '../assets/Images/logo.png'
import insta from '../assets/Images/insta.png'
import youtube from '../assets/Images/youtube.png'
import facebook from '../assets/Images/facebook.png'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div>
          <img className='footer-logo' src={logo} alt="logo" />
        </div>
        <div className='footer-contents'>
          <div className='footer-content'>
            <h1>NAVIGATE</h1>
            <div className='underline'></div>
            <ul>
              <Link to="/#about" className='footer-links'>
                <li>About Us</li>
              </Link>
              <li>Contact Us</li>
              <Link to="/explorengos" className='footer-links'>
                <li>Explore NGOs</li>
              </Link>
            </ul>
          </div>

          <div className='footer-content'>
            <h1>INFORMATION</h1>
            <div className='underline-information'></div>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Team Bytecoders</li>
            </ul>
          </div>

          <div className='footer-content'>
            <h1>CONTACT</h1>
            <div className='underline'></div>
            <p>support@impact.com</p>
            <div className='socials'>
              <img className='social-logo-insta' src={insta} alt="insta-logo" />
              <img className='social-logo-face' src={facebook} alt="facebook-logo" />
              <img className='social-logo-you' src={youtube} alt="youtube-logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
