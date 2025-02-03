import React, { useEffect, useState } from 'react';
import '../styles/sidebar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import profilePic from '../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Our Team Pics/yashPic.jpg';

const Sidebar = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name,setName] = useState("");
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);  // Navigate to the specified route
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/volunteer/profile', { withCredentials: true })
      .then(response => {
        console.log(response.data.name);
        setName(response.data.name);

        setProfile(response.data.profile);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='sidebar'>
      <div className="profile">
        <img src={profile.profilePhoto || profilePic} alt="Profile" className="profile-pic" />
        <h3 className="profile-name">{name}</h3>
      </div>

      <div className="menu">
        <ul className="menu-list">
        <li className="menu-item" onClick={() => handleNavigation('/editprofile')}>Edit Profile</li>
          <li className="menu-item" onClick={() => handleNavigation('/achievements')}>Achievements</li>
          <li className="menu-item" onClick={() => handleNavigation('/dashboard')}>Ongoing Campaigns</li>
          <li className="menu-item">Invite Friends</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
