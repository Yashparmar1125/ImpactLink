import Sidebar from '../../../components/Sidebar';
import OngoingCampaigns from './OngoingCampaigns';
import Navbar from '../../../components/Navbar';
import Chatbot from '../../../components/Chatbot';

const Dashboard = () => {
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
      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar */}
        <div className="w-72 lg:w-80 bg-white/80 backdrop-blur-xl border-r border-white/20 shadow-xl">
          <Sidebar />
        </div>
        
        {/* Main Dashboard Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-none">
            {/* Dashboard Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dashboard</h1>
                  <p className="text-base lg:text-lg text-gray-600 mt-1">Welcome back! Here&apos;s an overview of your volunteer activities and ongoing campaigns.</p>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Active Campaigns</p>
                    <p className="text-xl lg:text-2xl font-bold text-primary">3</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Hours Completed</p>
                    <p className="text-xl lg:text-2xl font-bold text-secondary">120</p>
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
                    <p className="text-sm lg:text-base font-medium text-gray-600">Achievements</p>
                    <p className="text-xl lg:text-2xl font-bold text-accent">8</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-medium text-gray-600">Impact Score</p>
                    <p className="text-xl lg:text-2xl font-bold text-indigo-600">95%</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Ongoing Campaigns Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Ongoing Campaigns</h2>
                </div>
                <button className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-sm lg:text-base font-medium">
                  View All
                </button>
              </div>
              <OngoingCampaigns />
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Dashboard;