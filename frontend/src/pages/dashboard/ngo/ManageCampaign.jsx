import React from "react";
import Navbar from "../../../components/Navbar";
import NgoSidebar from './NgoSidebar';
import Chatbot from '../../../components/Chatbot';
import VideoEditorImage from '../../../assets/Dashboard Images/VideoEditing.jpg'; 
import InternImage from '../../../assets/Dashboard Images/siddhi-pic.png';

const ManageCampaign = () => {
  const interns = [
    {
      name: "Siddhi Gawade",
      skills: "Video Editing, Animation",
      joiningDate: "01/04/2022",
      endingDate: "01/04/2022",
      experience: "1 Year",
      commitment: "3 Months"
    },
    {
      name: "Rahul Verma",
      skills: "Video Editing, Creative Direction",
      joiningDate: "05/06/2022",
      endingDate: "05/09/2022",
      experience: "2 Years",
      commitment: "4 Months"
    }
  ];

  const handleAccept = (internName) => {
    console.log(`Accepted: ${internName}`);
    // Add your accept logic here
  };

  const handleReject = (internName) => {
    console.log(`Rejected: ${internName}`);
    // Add your reject logic here
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Manage Campaign Requests</h1>
                  <p className="text-base lg:text-lg text-gray-600 mt-1">Review and manage volunteer applications for your campaigns.</p>
                </div>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8 mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Video Editor</h2>
                      <p className="text-sm lg:text-base text-gray-600">Creative Media Foundation</p>
                    </div>
                    <span className="px-3 lg:px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-xs lg:text-sm font-medium">
                      High Priority
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs lg:text-sm text-gray-600">Start Date</p>
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">DD-MM-YYYY</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs lg:text-sm text-gray-600">Duration</p>
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">40 Hours</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs lg:text-sm text-gray-600">Location</p>
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">Remote</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs lg:text-sm text-gray-600">Status</p>
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">Active</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <img 
                    src={VideoEditorImage} 
                    alt="Campaign" 
                    className="w-full h-48 lg:h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Applications Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">Volunteer Applications</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs lg:text-sm font-medium">
                  {interns.length} Applications
                </span>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {interns.map((intern, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 p-4 lg:p-6 shadow-lg">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={InternImage} 
                          alt={intern.name} 
                          className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover shadow-md"
                        />
                        <div>
                          <h4 className="text-lg lg:text-xl font-bold text-gray-900">{intern.name}</h4>
                          <p className="text-sm lg:text-base text-gray-600">{intern.skills}</p>
                        </div>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                        <div>
                          <p className="text-xs lg:text-sm text-gray-600">Joining Date</p>
                          <p className="font-semibold text-gray-900 text-sm lg:text-base">{intern.joiningDate}</p>
                        </div>
                        <div>
                          <p className="text-xs lg:text-sm text-gray-600">Ending Date</p>
                          <p className="font-semibold text-gray-900 text-sm lg:text-base">{intern.endingDate}</p>
                        </div>
                        <div>
                          <p className="text-xs lg:text-sm text-gray-600">Experience</p>
                          <p className="font-semibold text-gray-900 text-sm lg:text-base">{intern.experience}</p>
                        </div>
                        <div>
                          <p className="text-xs lg:text-sm text-gray-600">Commitment</p>
                          <p className="font-semibold text-gray-900 text-sm lg:text-base">{intern.commitment}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleAccept(intern.name)}
                          className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg font-medium text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(intern.name)}
                          className="px-4 py-2 bg-white border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-all duration-300 font-medium text-sm lg:text-base transform hover:scale-105 hover:-translate-y-0.5"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default ManageCampaign;