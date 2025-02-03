import React from 'react'
import '../../../styles/ngosidebar.css'; // Add the correct file extension
// Adjust the path to your image

const Sidebar = () => {
    return (
      <div className='sidebar'>
        
        <div className="profile">
            <img src='' alt="Profile" className="profile-pic" />
            <h3 className="profile-name">Unnatii Trust</h3>
      </div>

      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">Your Campaign </li>
          <li className="menu-item">Create Campaign</li>
        </ul>
      </div>

      </div>
    );
  };
  
  export default Sidebar;