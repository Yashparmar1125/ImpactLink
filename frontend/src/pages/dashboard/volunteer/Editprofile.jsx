import { useState } from 'react';
import Navbar from '../../../components/Navbar'; 
import Sidebar from '../../../components/Sidebar'; 
import Chatbot from '../../../components/Chatbot';
import defaultProfilePic from '../../../assets/Dashboard Images/siddhi-pic.png';

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState('+1 234 567 8900');
  const [bio, setBio] = useState('Passionate volunteer dedicated to making a positive impact in communities through various social initiatives.');
  const [skills, setSkills] = useState(['medical expertise', 'teaching']);
  const [interests, setInterests] = useState(['health', 'education']);
  const [socialLinks, setSocialLinks] = useState({
    instagram: 'https://instagram.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate API call
    setTimeout(() => {
      setPopup({
        show: true,
        message: 'Profile updated successfully!',
        success: true
      });
    }, 1000);
  };

  const closePopup = () => {
    setPopup({
      show: false,
      message: '',
      success: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Header */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen pt-16">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-0">
          <div className="w-full max-w-none">
            {/* Page Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Edit Profile</h1>
                  <p className="text-base lg:text-lg text-gray-600 mt-1">Update your personal information and preferences to enhance your volunteer experience.</p>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                {/* Profile Picture Section */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <img 
                      src={profilePic} 
                      alt="Profile" 
                      className="w-28 h-28 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white/20 shadow-xl mx-auto mb-4"
                    />
                    <label htmlFor="profile-pic-input" className="absolute bottom-2 lg:bottom-3 right-2 lg:right-3 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </label>
                    <input
                      id="profile-pic-input"
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                      className="hidden"
                    />
                  </div>
                  <p className="text-sm lg:text-base text-gray-600">Click the edit icon to change your profile picture</p>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-2 lg:mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      className="w-full h-12 lg:h-14 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 text-sm lg:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-2 lg:mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      className="w-full h-12 lg:h-14 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 text-sm lg:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Bio Section */}
                <div>
                  <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-2 lg:mb-3">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={bio}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 resize-none text-sm lg:text-base"
                    placeholder="Tell us about yourself and your volunteer interests..."
                  />
                </div>

                {/* Skills and Interests */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-2 lg:mb-3">
                      Skills
                    </label>
                    <select 
                      multiple 
                      name="skills" 
                      value={skills}
                      onChange={handleSkillsChange}
                      className="w-full h-28 lg:h-32 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 text-sm lg:text-base"
                    >
                      <option value="medical expertise">Medical Expertise</option>
                      <option value="teaching">Teaching</option>
                      <option value="management">Management</option>
                      <option value="first aid">First Aid</option>
                      <option value="botany">Botany</option>
                      <option value="counseling">Counseling</option>
                      <option value="graphic design">Graphic Design</option>
                      <option value="video editing">Video Editing</option>
                    </select>
                    <p className="text-xs lg:text-sm text-gray-500 mt-2">Hold Ctrl/Cmd to select multiple skills</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-2 lg:mb-3">
                      Interests
                    </label>
                    <select 
                      multiple 
                      name="interests" 
                      value={interests}
                      onChange={handleInterestsChange}
                      className="w-full h-28 lg:h-32 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 text-sm lg:text-base"
                    >
                      <option value="health">Health</option>
                      <option value="environment">Environment</option>
                      <option value="education">Education</option>
                      <option value="animal welfare">Animal Welfare</option>
                      <option value="community service">Community Service</option>
                      <option value="disaster relief">Disaster Relief</option>
                      <option value="elderly care">Elderly Care</option>
                      <option value="children">Children</option>
                    </select>
                    <p className="text-xs lg:text-sm text-gray-500 mt-2">Hold Ctrl/Cmd to select multiple interests</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-2 lg:mb-3">
                      Instagram Profile
                    </label>
                    <input
                      type="url"
                      name="instagram"
                      value={socialLinks.instagram}
                      onChange={handleInputChange}
                      className="w-full h-12 lg:h-14 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 text-sm lg:text-base"
                      placeholder="https://instagram.com/username"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-2 lg:mb-3">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={socialLinks.linkedin}
                      onChange={handleInputChange}
                      className="w-full h-12 lg:h-14 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 text-sm lg:text-base"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4 lg:pt-6">
                  <button 
                    type="submit" 
                    className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-semibold text-base lg:text-lg"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />

      {/* Success/Error Popup */}
      {popup.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className={`bg-white rounded-xl p-6 lg:p-8 max-w-md mx-4 shadow-xl ${popup.success ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
            <div className="flex items-center space-x-3 mb-4 lg:mb-6">
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center ${popup.success ? 'bg-green-100' : 'bg-red-100'}`}>
                {popup.success ? (
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <h3 className={`text-lg lg:text-xl font-semibold ${popup.success ? 'text-green-800' : 'text-red-800'}`}>
                {popup.success ? 'Success!' : 'Error!'}
              </h3>
            </div>
            <p className="text-gray-700 mb-4 lg:mb-6 text-base lg:text-lg">{popup.message}</p>
            <button 
              onClick={closePopup}
              className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 font-medium text-base lg:text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
