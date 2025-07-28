import { useState } from "react";
import Navbar from "../../../components/Navbar";
import NgoSidebar from './NgoSidebar';
import Chatbot from '../../../components/Chatbot';
import VideoEditorImage from '../../../assets/Dashboard Images/VideoEditing.jpg'; 
import InternImage from '../../../assets/Dashboard Images/siddhi-pic.png';

const ManageInterns = () => {
  const [file, setFile] = useState(null);

  // Campaign data
  const campaignData = {
    title: "Shelter & Smile Foundation",
    role: "Animal Care",
    duration: "50 hours",
    skillsRequired: "Knowledge of animal behavior, First aid for animals, cleaning and hygiene skills",
    startDate: "01-05-2025",
    internshipMode: "On site",
    location: "Mumbai",
    involvement: "Individual"
  };

  // Interns data
  const interns = [
    {
      name: "Siddhi Gawade",
      skills: "Animal Care, First Aid, Cleaning",
      joiningDate: "01/04/2022",
      endingDate: "01/06/2022",
      experience: "1 Year",
      commitment: "3 Months",
      hoursDone: 50,
      progress: 50
    },
    {
      name: "Rahul Verma",
      skills: "Animal Behavior, First Aid, Cleaning",
      joiningDate: "05/06/2022",
      endingDate: "05/09/2022",
      experience: "2 Years",
      commitment: "4 Months",
      hoursDone: 75,
      progress: 75
    }
  ];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }
    console.log("File uploaded:", file.name);
    alert(`File uploaded: ${file.name}`);
    setFile(null);
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Manage Campaign Interns</h1>
                  <p className="text-base lg:text-lg text-gray-600 mt-1">Track and manage your campaign interns and their progress.</p>
                </div>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8 mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-1">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{campaignData.title}</h2>
                  <p className="text-lg lg:text-xl font-semibold text-green-600 mb-4">{campaignData.role}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs lg:text-sm text-gray-600">Start Date</p>
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">{campaignData.startDate}</p>
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
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">{campaignData.duration}</p>
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
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">{campaignData.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs lg:text-sm text-gray-600">Mode</p>
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">{campaignData.internshipMode}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-6">
                    <p className="text-sm lg:text-base text-gray-600">
                      <span className="font-semibold">Skills Required:</span> {campaignData.skillsRequired}
                    </p>
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

            {/* Interns Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">Interns Requested</h3>
                
                {/* File Upload Section */}
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-lg cursor-pointer hover:bg-green-200 transition-colors duration-300 text-sm lg:text-base font-medium"
                  >
                    Upload File
                  </label>
                  {file && (
                    <button
                      onClick={handleFileUpload}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 text-sm lg:text-base font-medium"
                    >
                      Upload
                    </button>
                  )}
                </div>
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
                      
                      <div className="flex flex-col items-end space-y-2">
                        <div className="text-right">
                          <p className="text-xs lg:text-sm text-gray-600">Hours Done</p>
                          <p className="font-semibold text-gray-900 text-sm lg:text-base">{intern.hoursDone}</p>
                        </div>
                        <div className="w-24 lg:w-32 bg-gray-200 rounded-full h-2 lg:h-3">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 lg:h-3 rounded-full transition-all duration-300"
                            style={{ width: `${intern.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs lg:text-sm text-gray-600">{intern.progress}% Complete</span>
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

export default ManageInterns;
