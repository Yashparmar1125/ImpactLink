import React from 'react'
import '../styles/sidebar.css';
import profilePic from '../assets/Dashboard Images/siddhi-pic.png'; // Adjust the path to your image

// Sidebar.js
const Sidebar = () => {
    return (
      <div className='sidebar'>
        
        <div className="profile">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <h3 className="profile-name">Siddhi Gawade</h3>
      </div>

      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">Edit Profile</li>
          <li className="menu-item">Achievements</li>
          <li className="menu-item">Ongoing Campaigns</li>
          <li className="menu-item">Invite Friends</li>
        </ul>
      </div>

      </div>
    );
  };
  
  export default Sidebar;