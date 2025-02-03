import React, { useState } from 'react';
import axios from 'axios';  // Import axios for API requests
import '../../../styles/editprofile.css';
import Navbar from '../../../components/Navbar'; 
import Sidebar from '../../../components/Sidebar'; 
import defaultProfilePic from '../../../assets/Dashboard Images/siddhi-pic.png'; 
import editIcon from '../../../assets/Dashboard Images/edit-icon.jpg';

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [socialLinks, setSocialLinks] = useState({
    instagram: '',
    linkedin: ''
  });

  const [popup, setPopup] = useState({
    show: false,
    message: '',
    success: false
  });

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
    if (name === 'bio') setBio(value);
    if (name === 'instagram') setSocialLinks(prevState => ({ ...prevState, instagram: value }));
    if (name === 'linkedin') setSocialLinks(prevState => ({ ...prevState, linkedin: value }));
  };

  const handleSkillsChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSkills(value);
  };

  const handleInterestsChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setInterests(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      profile: {
        bio,
        skills,
        interests,
        social: socialLinks
      }
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/volunteer/updateProfile',
        formData,
        { withCredentials: true }  // Include credentials (cookies)
      );

      if (response.data.success) {
        setPopup({
          show: true,
          message: 'Profile updated successfully!',
          success: true
        });
      } else {
        setPopup({
          show: true,
          message: 'Error updating profile!',
          success: false
        });
      }
    } catch (error) {
      setPopup({
        show: true,
        message: 'Error updating profile: ' + error.message,
        success: false
      });
    }
  };

  const closePopup = () => {
    setPopup({
      show: false,
      message: '',
      success: false
    });
  };

  return (
    <div>
      <Navbar /> {/* Add the Navbar component here */}
      <Sidebar /> {/* Add the Sidebar component here */}
      <div className='edit-profile-container'>
        <h3 className='edit-profile-heading'>Edit Profile</h3>
        <div className='edit-profile'>
          <form className='edit-profile-form' onSubmit={handleSubmit}>
            <div className='profile-pic-container'>
              <img src=""alt='Profile' className='profile-pic'/>
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
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <strong>Phone:</strong>
              <input
                type='text'
                name='phone'
                placeholder='Phone'
                value={phone}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              <strong>Skills:</strong>
              <select multiple name='skills' onChange={handleSkillsChange}>
                <option value='medical expertise'>Medical Expertise</option>
                <option value='teaching'>Teaching</option>
                <option value='management'>Management</option>
                <option value='first aid'>First Aid</option>
                <option value='botany'>Botany</option>
                <option value='counseling'>Counseling</option>
              </select>
            </label>
            <label>
              <strong>Interests:</strong>
              <select multiple name='interests' onChange={handleInterestsChange}>
                <option value='health'>Health</option>
                <option value='environment'>Environment</option>
                <option value='education'>Education</option>
                <option value='animal welfare'>Animal Welfare</option>
              </select>
            </label>
            <label>
              <strong>Instagram:</strong>
              <input
                type='text'
                name='instagram'
                placeholder='Instagram URL'
                value={socialLinks.instagram}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <strong>LinkedIn:</strong>
              <input
                type='text'
                name='linkedin'
                placeholder='LinkedIn URL'
                value={socialLinks.linkedin}
                onChange={handleInputChange}
              />
            </label>
            <button type='submit' className='save-changes-button'>
              Save Changes
            </button>
          </form>
        </div>
      </div>

      {/* Popup Notification */}
      {popup.show && (
        <div className={`popup ${popup.success ? 'success' : 'error'}`}>
          <p>{popup.message}</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
