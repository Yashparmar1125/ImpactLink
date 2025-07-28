import { useState } from 'react';
import Navbar from '../../../components/Navbar'; 
import Sidebar from '../../../components/Sidebar'; 
import Chatbot from '../../../components/Chatbot';
import badge1 from '../../../assets/Dashboard Images/badge1.jpg'; 
import badge2 from '../../../assets/Dashboard Images/badge2.jpg'; 
import badge3 from '../../../assets/Dashboard Images/badge3.jpg';
import badge4 from '../../../assets/Dashboard Images/badge4.jpg';
import certificateImage from '../../../assets/Dashboard Images/Certificate1.jpg';
import certificateImage2 from '../../../assets/Dashboard Images/Certificate2.jpg';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('badges');

  const badges = [
    {
      image: badge1,
      title: "Best Volunteer Award",
      year: "2024",
      description: "Outstanding contribution to community service"
    },
    {
      image: badge2,
      title: "Excellence in Service",
      year: "2023",
      description: "Exceptional dedication and commitment"
    },
    {
      image: badge3,
      title: "Participation Badge",
      year: "2022",
      description: "Active participation in volunteer programs"
    },
    {
      image: badge4,
      title: "Leadership Award",
      year: "2023",
      description: "Demonstrated leadership in community projects"
    }
  ];

  const certificates = [
    {
      image: certificateImage,
      organization: "Shelter & Smile Foundation",
      role: "Animal Care Volunteer",
      status: "50 hours completed",
      duration: "01-11-2024 to 31-12-2024",
      description: "Successfully completed animal care and welfare program"
    },
    {
      image: certificateImage2,
      organization: "Wings of Hope Trust",
      role: "Healthcare Support",
      status: "40 hours completed",
      duration: "01-11-2023 to 31-12-2023",
      description: "Provided essential healthcare support to communities"
    }
  ];

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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Achievements & Certificates</h1>
                  <p className="text-base lg:text-lg text-gray-600 mt-1">Celebrate your impact and track your volunteer journey milestones.</p>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Total Badges</p>
                    <p className="text-xl lg:text-2xl font-bold text-primary">{badges.length}</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Certificates</p>
                    <p className="text-xl lg:text-2xl font-bold text-indigo-600">{certificates.length}</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Total Hours</p>
                    <p className="text-xl lg:text-2xl font-bold text-purple-600">90</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8">
              <div className="flex space-x-2 bg-gray-100 rounded-xl p-2 mb-6 lg:mb-8">
                <button
                  onClick={() => setActiveTab('badges')}
                  className={`flex-1 py-2 lg:py-3 px-4 lg:px-6 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
                    activeTab === 'badges'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Badges & Awards
                </button>
                <button
                  onClick={() => setActiveTab('certificates')}
                  className={`flex-1 py-2 lg:py-3 px-4 lg:px-6 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
                    activeTab === 'certificates'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Certificates
                </button>
              </div>

              {/* Badges Section */}
              {activeTab === 'badges' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                  {badges.map((badge, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 lg:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-center">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-3 lg:mb-4 relative">
                          <img 
                            src={badge.image} 
                            alt={badge.title}
                            className="w-full h-full object-cover rounded-full shadow-lg"
                          />
                          <div className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{badge.title}</h3>
                        <p className="text-xs lg:text-sm text-gray-600 mb-2">{badge.description}</p>
                        <span className="inline-block px-2 lg:px-3 py-1 bg-blue-100 text-primary rounded-full text-xs lg:text-sm font-medium">
                          {badge.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Certificates Section */}
              {activeTab === 'certificates' && (
                <div className="space-y-4 lg:space-y-6">
                  {certificates.map((certificate, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 lg:p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        {/* Certificate Image */}
                        <div className="lg:w-64 lg:h-48 w-full h-48 sm:h-64">
                          <img 
                            src={certificate.image} 
                            alt="Certificate"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                          />
                        </div>
                        
                        {/* Certificate Details */}
                        <div className="flex-1 space-y-3 lg:space-y-4">
                          <div>
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">{certificate.organization}</h3>
                            <p className="text-base lg:text-lg font-semibold text-primary mb-1">{certificate.role}</p>
                            <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">{certificate.description}</p>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                            <div className="bg-green-50 rounded-lg p-3 lg:p-4">
                              <p className="text-xs lg:text-sm font-medium text-gray-600 mb-1">Status</p>
                              <p className="text-green-700 font-semibold text-sm lg:text-base">{certificate.status}</p>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-3 lg:p-4">
                              <p className="text-xs lg:text-sm font-medium text-gray-600 mb-1">Duration</p>
                              <p className="text-primary font-semibold text-sm lg:text-base">{certificate.duration}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 lg:gap-3 pt-2">
                            <button className="px-3 lg:px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-sm lg:text-base">
                              Download Certificate
                            </button>
                            <button className="px-3 lg:px-4 py-2 bg-white border-2 border-primary text-primary rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-sm lg:text-base">
                              Share Certificate
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Achievements;