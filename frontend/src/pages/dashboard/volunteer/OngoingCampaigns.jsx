import HealthCare from '../../../assets/Dashboard Images/HealthCare.jpg'; 
import Education from '../../../assets/Dashboard Images/Teaching.jpg'; 
import VideoEditing from "../../../assets/Dashboard Images/VideoEditing.jpg";

const ongoingCampaigns = [
  {
    image: HealthCare,
    title: "Health for All Organization",
    role: "Medical Care Assistant",
    duration: "50 hours",
    skills: "Basic medical knowledge, First Aid, Compassionate care",
    progress: 75,
    status: "Active"
  },
  {
    image: Education,
    title: "Teach the Future Initiative",
    role: "Teaching Assistant",
    duration: "40 hours",
    skills: "Teaching skills, Patience, Classroom management",
    progress: 60,
    status: "Active"
  },
  {
    image: VideoEditing,
    title: "Creative Media Foundation",
    role: "Video Editor",
    duration: "30 hours",
    skills: "Video editing, Creative direction, Attention to detail",
    progress: 45,
    status: "Active"
  }
];

const OngoingCampaignsSection = () => {
  return (
    <div className="space-y-4 lg:space-y-6">
      {ongoingCampaigns.map((campaign, index) => (
        <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/20 shadow-lg p-4 lg:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Campaign Image */}
            <div className="lg:w-48 lg:h-32 w-full h-40 sm:h-48">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-full object-cover rounded-lg lg:rounded-xl shadow-md"
              />
            </div>
            
            {/* Campaign Details */}
            <div className="flex-1 space-y-3 lg:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">{campaign.title}</h3>
                  <p className="text-base lg:text-lg font-semibold text-primary mb-1">{campaign.role}</p>
                  <p className="text-sm lg:text-base text-gray-600 mb-2 lg:mb-3">{campaign.skills}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 lg:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs lg:text-sm font-medium">
                    {campaign.status}
                  </span>
                  <span className="px-2 lg:px-3 py-1 bg-blue-100 text-primary rounded-full text-xs lg:text-sm font-medium">
                    {campaign.duration}
                  </span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm font-bold text-primary">{campaign.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 lg:gap-3 pt-2">
                <button className="px-3 lg:px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg lg:rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-sm lg:text-base">
                  View Details
                </button>
                <button className="px-3 lg:px-4 py-2 bg-white border-2 border-primary text-primary rounded-lg lg:rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-sm lg:text-base">
                  Update Progress
                </button>
                <button className="px-3 lg:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg lg:rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-sm lg:text-base">
                  Contact NGO
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Empty State (if no campaigns) */}
      {ongoingCampaigns.length === 0 && (
        <div className="text-center py-8 lg:py-12">
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">No Ongoing Campaigns</h3>
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">You don&apos;t have any active campaigns at the moment. Start exploring opportunities to make a difference!</p>
          <button className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg lg:rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-sm lg:text-base">
            Explore Campaigns
          </button>
        </div>
      )}
    </div>
  );
};

export default OngoingCampaignsSection;