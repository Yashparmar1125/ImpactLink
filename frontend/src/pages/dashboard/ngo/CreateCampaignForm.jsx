import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import NgoSidebar from './NgoSidebar';
import Chatbot from '../../../components/Chatbot';

const CreateCampaignForm = () => {
  const [formData, setFormData] = useState({
    campaignTitle: '',
    startDate: '',
    internshipMode: '',
    taskType: '',
    whoCanApply: '',
    perks: '',
    volunteerRole: '',
    duration: '',
    location: '',
    responsibilities: '',
    otherRequirements: '',
    ngoImage: null,
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/50 to-teal-50/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Header */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen pt-16">
        {/* Sidebar */}
        <NgoSidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-0">
          <div className="w-full max-w-none">
            {/* Page Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Create New Campaign</h1>
                  <p className="text-base lg:text-lg text-gray-600 mt-1">Create a new volunteer campaign to attract talented individuals.</p>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                {/* Campaign Basic Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-4 lg:space-y-6">
                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Campaign Title *
                      </label>
                      <input
                        type="text"
                        name="campaignTitle"
                        value={formData.campaignTitle}
                        onChange={handleInputChange}
                        placeholder="Enter campaign title"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Internship Mode *
                      </label>
                      <select
                        name="internshipMode"
                        value={formData.internshipMode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      >
                        <option value="">Select mode</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">On-site</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Task Type *
                      </label>
                      <select
                        name="taskType"
                        value={formData.taskType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      >
                        <option value="">Select type</option>
                        <option value="individual">Individual</option>
                        <option value="group">Group</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Who Can Apply *
                      </label>
                      <input
                        type="text"
                        name="whoCanApply"
                        value={formData.whoCanApply}
                        onChange={handleInputChange}
                        placeholder="e.g., Students, Professionals, Anyone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Perks
                      </label>
                      <input
                        type="text"
                        name="perks"
                        value={formData.perks}
                        onChange={handleInputChange}
                        placeholder="e.g., Certificate, Letter of Recommendation"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 lg:space-y-6">
                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Volunteer Role *
                      </label>
                      <input
                        type="text"
                        name="volunteerRole"
                        value={formData.volunteerRole}
                        onChange={handleInputChange}
                        placeholder="e.g., Video Editor, Teaching Assistant"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Duration (in hours) *
                      </label>
                      <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        placeholder="e.g., 50"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g., Mumbai, Maharashtra"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Responsibilities *
                      </label>
                      <textarea
                        name="responsibilities"
                        value={formData.responsibilities}
                        onChange={handleInputChange}
                        placeholder="Describe the main responsibilities..."
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        Other Requirements
                      </label>
                      <textarea
                        name="otherRequirements"
                        value={formData.otherRequirements}
                        onChange={handleInputChange}
                        placeholder="Any additional requirements..."
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                        NGO Image
                      </label>
                      <input
                        type="file"
                        name="ngoImage"
                        onChange={handleInputChange}
                        accept="image/*"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Declaration Section */}
                <div className="bg-green-50/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-green-200/50">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Declaration</h3>
                  <div className="space-y-3 lg:space-y-4 text-sm lg:text-base text-gray-700">
                    <p>
                      I hereby acknowledge and understand that the certificate of completion for this internship will only be provided upon the successful completion of all assigned tasks and the full duration of the internship as agreed upon.
                    </p>
                    <p>
                      I also understand that if I fail to complete the internship, including leaving prematurely or not fulfilling the required responsibilities, I will not be eligible to receive the certificate of completion.
                    </p>
                    <p>
                      By checking the box below, I confirm that I have read, understood, and agree to these terms and conditions.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3 mt-4 lg:mt-6">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                      required
                    />
                    <label className="text-sm lg:text-base font-medium text-gray-700">
                      I agree to the terms and conditions.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
                  >
                    Create Campaign
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default CreateCampaignForm;
