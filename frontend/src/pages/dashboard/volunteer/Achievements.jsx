import React from 'react';
import '../../../styles/achievements.css';
import Navbar from '../../../components/Navbar'; 
import Sidebar from '../../../components/Sidebar'; 
import badge1 from '../../../assets/Dashboard Images/badge1.jpg'; 
import badge2 from '../../../assets/Dashboard Images/badge2.jpg'; 
import badge3 from '../../../assets/Dashboard Images/badge3.jpg';
import badge4 from '../../../assets/Dashboard Images/badge4.jpg';
import certificateImage from '../../../assets/Dashboard Images/Certificate1.jpg';
import certificateImage2 from '../../../assets/Dashboard Images/Certificate2.jpg';
import Card from '../../../components/Card';

const Achievements = () => {
  return (
    <div className='main-container'>
      <Navbar /> 
      <Sidebar /> 
      <div className='achievements-section'> 
        <h3 className='achievements-heading'> Your Badges & Achievements</h3>
      <div className='achievements-container'>
        <div className='achievement'>
          <img src={badge1} alt='Achievement 1' className='achievement-img' />
          <p>Best Volunteer Award Badge </p>
          <p>Earned in 2022</p>
        </div>
        <div className='achievement'>
          <img src={badge2} alt='Achievement 2' className='achievement-img' />
          <p>Best Volunteer Award Badge </p>
          <p>Earned in 2024</p>
        </div>
        <div className='achievement'>
          <img src={badge3} alt='Achievement 3' className='achievement-img' />
          <p>Participation Badge </p>
          <p>Earned in 2022</p>
        </div>
        <div className='achievement'>
          <img src={badge4} alt='Achievement 4' className='achievement-img' />
          <p>Best Volunteer Award Badge </p>
          <p>Earned in 2023</p>
        </div>
      </div>
      <hr className='divider' />
        <h3 className='certificates-heading'>Your Certificates</h3>

        <div className='certificates-container'>
        {/* Left Section */}
      <div className="certificates-text">
        <h4>Shelter & Smile Foundation</h4>
        <p><strong>Role:</strong> Animal Care</p>
        <p><strong>Status:</strong> 50 hours completed</p>
        <p><strong>Completion duration:</strong> 01-11-2024 to 31-12-2024</p>
        <button className='download-button'>Download Certificate</button>
      </div>

      {/* Right Section (Certificate Image) */}
      <div className="certificate-image-container">
        <img src={certificateImage} alt='Certificate' className='certificate-img' />
      </div>
</div>

<div className='certificates-container'>
        {/* Left Section */}
      <div className="certificates-text">
        <h4>Wings of Hope Trust</h4>
        <p><strong>Role:</strong> Healthcare Support</p>
        <p><strong>Status:</strong> 40 hours completed</p>
        <p><strong>Completion duration:</strong> 01-11-2023 to 31-12-2023</p>
        <button className='download-button'>Download Certificate</button>
      </div>

      {/* Right Section (Certificate Image) */}
      <div className="certificate-image-container">
        <img src={certificateImage2} alt='Certificate' className='certificate-img' />
      </div>
</div>

    </div>

    
    </div>
  );
};

export default Achievements;