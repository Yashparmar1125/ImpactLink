import React, { useState } from 'react';
import '../../../styles/editprofile.css';
import Navbar from '../../../components/Navbar'; 
import Sidebar from '../../../components/Sidebar'; 
import defaultProfilePic from '../../../assets/Dashboard Images/siddhi-pic.png'; 
import editIcon from '../../../assets/Dashboard Images/edit-icon.jpg';

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Navbar /> {/* Add the Navbar component here */}
      <Sidebar /> {/* Add the Sidebar component here */}
      <div className='edit-profile-container'>

      
        <h3 className='edit-profile-heading'>Edit Profile</h3>
        <div className='edit-profile'>
          <form className='edit-profile-form'>
            <div className='profile-pic-container'>
              <img src={profilePic} alt='Profile' className='profile-pic'/>
              <label htmlFor='profile-pic-input' className='edit-icon'>
              <img src={editIcon} alt='Edit Icon' className='edit-icon-img' />
              </label>
              <input
                id='profile-pic-input'
                type='file'
                accept='image/*'
                onChange={handleProfilePicChange}
                style={{ display: 'none' }}
              />
            </div>
            <label>
            <strong>Name:</strong>
              <input type='text' name='name' placeholder='Name' />
            </label>
            <label>
            <strong>Email:</strong>
              <input type='email' name='email' placeholder='Email' />
            </label>
            <label>
            <strong>Password:</strong>
              <input type='password' name='password' placeholder='Password' />
            </label>
            <label>
            <strong>Interests:</strong>
              <select name='interests'>
                <option value=''>Select Interests</option>
                <option value='coding'>Coding</option>
                <option value='music'>Music</option>
                <option value='sports'>Sports</option>
                <option value='reading'>Reading</option>
              </select>
            </label>
            <label>
            <strong>Occupation:</strong>
              <input type='text' name='occupation' placeholder='Occupation' />
            </label>
            <button type='submit' className='save-changes-button'>
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;