import React from 'react';
import NgoOngoingCampaigns from './NgoOngoingCampaigns';
import Navbar from '../../../components/Navbar';
import NgoSidebar from './NgoSidebar';
import Chatbot from '../../../components/Chatbot';

const NgoDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-green-50/50 to-teal-50/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Header */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen pt-16">
        {/* Sidebar */}
        <NgoSidebar />
        
        {/* Main Dashboard Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-0">
          <div className="w-full max-w-none">
            {/* Dashboard Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">NGO Dashboard</h1>
                  <p className="text-base lg:text-lg text-gray-600 mt-1">Manage your campaigns and track volunteer applications.</p>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Active Campaigns</p>
                    <p className="text-xl lg:text-2xl font-bold text-emerald-600">4</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Pending Requests</p>
                    <p className="text-xl lg:text-2xl font-bold text-green-600">12</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Active Volunteers</p>
                    <p className="text-xl lg:text-2xl font-bold text-teal-600">28</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Total Hours</p>
                    <p className="text-xl lg:text-2xl font-bold text-emerald-700">1,240</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Ongoing Campaigns Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Ongoing Campaigns</h2>
                  <p className="text-sm lg:text-base text-gray-600">Manage your active volunteer campaigns</p>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white rounded-lg font-medium text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5">
                  View All
                </button>
              </div>
              
              <NgoOngoingCampaigns />
            </div>
          </div>
        </div>
      </div>
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default NgoDashboard;