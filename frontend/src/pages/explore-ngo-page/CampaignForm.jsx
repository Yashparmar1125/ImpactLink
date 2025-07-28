import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CampaignForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    motivation: '',
    availability: '',
    startDate: '',
    skills: [],
    portfolio: '',
    references: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillsChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      skills: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 1500);
  };

  const handleBackToDetail = () => {
    navigate('/explorengos/ngo-detail');
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8 max-w-md mx-4 text-center">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">Your application has been successfully submitted. We&apos;ll review it and get back to you soon.</p>
          <div className="animate-pulse">
            <p className="text-xs lg:text-sm text-gray-500">Redirecting to dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

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
      <div className="relative z-10 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Back Button */}
          <div className="mb-6">
            <button 
              onClick={handleBackToDetail}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 text-sm lg:text-base"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Opportunity Details</span>
            </button>
          </div>

          {/* Form Header */}
          <div className="text-center mb-6 lg:mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
              Apply for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Video Editor</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Complete the form below to apply for the Video Editor position at Creative Media Foundation. 
              We&apos;re excited to learn more about you!
            </p>
          </div>

          {/* Application Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      Preferred Start Date *
                    </label>
                    <Input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Experience & Skills */}
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Experience & Skills</h2>
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      Relevant Experience *
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 resize-none text-sm lg:text-base"
                      placeholder="Describe your relevant experience in video editing and media production..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      Technical Skills *
                    </label>
                    <select 
                      multiple 
                      name="skills" 
                      value={formData.skills}
                      onChange={handleSkillsChange}
                      className="w-full h-28 lg:h-32 px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 text-sm lg:text-base"
                      required
                    >
                      <option value="adobe_premiere">Adobe Premiere Pro</option>
                      <option value="after_effects">Adobe After Effects</option>
                      <option value="final_cut">Final Cut Pro</option>
                      <option value="davinci_resolve">DaVinci Resolve</option>
                      <option value="motion_graphics">Motion Graphics</option>
                      <option value="color_grading">Color Grading</option>
                      <option value="sound_design">Sound Design</option>
                      <option value="storytelling">Storytelling</option>
                      <option value="project_management">Project Management</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple skills</p>
                  </div>
                  
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      Portfolio/Work Samples
                    </label>
                    <Input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="Link to your portfolio or work samples"
                    />
                  </div>
                </div>
              </div>

              {/* Motivation & Availability */}
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Motivation & Availability</h2>
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      Why do you want to volunteer for this position? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 resize-none text-sm lg:text-base"
                      placeholder="Tell us about your motivation and what you hope to achieve..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      Availability *
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full h-10 lg:h-12 px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 text-sm lg:text-base"
                      required
                    >
                      <option value="">Select your availability</option>
                      <option value="10-15_hours">10-15 hours per week</option>
                      <option value="15-20_hours">15-20 hours per week</option>
                      <option value="20-25_hours">20-25 hours per week</option>
                      <option value="25+_hours">25+ hours per week</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">
                      References
                    </label>
                    <textarea
                      name="references"
                      value={formData.references}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 resize-none text-sm lg:text-base"
                      placeholder="Please provide contact information for 1-2 professional references"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="border-t border-gray-200 pt-6 lg:pt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 lg:space-y-0 sm:space-x-4">
                  <div className="text-xs lg:text-sm text-gray-600">
                    <p>* Required fields</p>
                    <p>By submitting this application, you agree to our terms and conditions.</p>
                  </div>
                  <div className="flex space-x-3 lg:space-x-4">
                    <button
                      type="button"
                      onClick={handleBackToDetail}
                      className="px-4 lg:px-6 py-2 lg:py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium text-sm lg:text-base"
                    >
                      Cancel
                    </button>
                    <Button
                      text={loading ? "Submitting..." : "Submit Application"}
                      onClick={handleSubmit}
                      disabled={loading}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CampaignForm;
