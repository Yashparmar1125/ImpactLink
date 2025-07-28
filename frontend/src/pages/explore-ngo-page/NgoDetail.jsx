import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import animalCare from '../../assets/Images/AnimalCare.jpg';

const NgoDetail = () => {
  const navigate = useNavigate();

  const ngoData = {
    img: animalCare,
    name: "Creative Media Foundation",
    role: "Video Editor",
    duration: "40 Hours",
    skills: "Video editing, Creative direction, Attention to detail, Adobe Premiere Pro, After Effects",
    interest: 'Community Service',
    location: "New York, NY",
    urgency: "High",
    volunteers_needed: 3,
    description: "We are seeking passionate video editors to help create compelling content for our community outreach programs. This role involves editing educational videos, promotional content, and documentary-style pieces that highlight the impact of our initiatives.",
    requirements: [
      "Proficiency in video editing software (Adobe Premiere Pro, After Effects)",
      "Strong storytelling and visual communication skills",
      "Ability to work with diverse content and audiences",
      "Experience with motion graphics and animation (preferred)",
      "Strong attention to detail and quality control"
    ],
    benefits: [
      "Gain real-world experience in nonprofit media production",
      "Build a portfolio of impactful community-focused content",
      "Network with professionals in the nonprofit sector",
      "Receive mentorship from experienced video editors",
      "Flexible remote work options available"
    ],
    schedule: "Flexible - 10-15 hours per week",
    start_date: "Immediate",
    end_date: "3 months from start",
    contact: {
      name: "Sarah Johnson",
      email: "sarah.johnson@creativemedia.org",
      phone: "+1 (555) 123-4567"
    }
  };

  const handleApplyNow = () => {
    navigate('/explorengos/ngo-detail/campaign-form');
  };

  const handleBackToExplore = () => {
    navigate('/explorengos');
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
      <div className="relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Back Button */}
          <div className="mb-6">
            <button 
              onClick={handleBackToExplore}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 text-sm lg:text-base"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Explore</span>
            </button>
          </div>

          {/* NGO Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8 mb-6 lg:mb-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* NGO Image */}
              <div className="lg:w-1/3">
                <img 
                  src={ngoData.img} 
                  alt={ngoData.name}
                  className="w-full h-48 lg:h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              {/* NGO Info */}
              <div className="lg:w-2/3 space-y-4 lg:space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{ngoData.name}</h1>
                    <p className="text-lg lg:text-xl font-semibold text-blue-600 mb-3 lg:mb-4">{ngoData.role}</p>
                  </div>
                  <span className="px-3 lg:px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-xs lg:text-sm font-medium">
                    {ngoData.urgency} Priority
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm text-gray-600">Location</p>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">{ngoData.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">{ngoData.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm text-gray-600">Volunteers Needed</p>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">{ngoData.volunteers_needed}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm text-gray-600">Start Date</p>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">{ngoData.start_date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 lg:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs lg:text-sm font-medium">
                    {ngoData.interest}
                  </span>
                  <span className="px-2 lg:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs lg:text-sm font-medium">
                    Remote Work Available
                  </span>
                  <span className="px-2 lg:px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs lg:text-sm font-medium">
                    Training Provided
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              {/* Description */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 lg:p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">About This Opportunity</h2>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{ngoData.description}</p>
              </div>

              {/* Requirements */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 lg:p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Requirements</h2>
                <ul className="space-y-2 lg:space-y-3">
                  {ngoData.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm lg:text-base">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 lg:p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">What You&apos;ll Gain</h2>
                <ul className="space-y-2 lg:space-y-3">
                  {ngoData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm lg:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 lg:space-y-6">
              {/* Apply Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">Ready to Apply?</h3>
                <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-xs lg:text-sm">Schedule:</span>
                    <span className="font-semibold text-sm lg:text-base">{ngoData.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-xs lg:text-sm">Duration:</span>
                    <span className="font-semibold text-sm lg:text-base">{ngoData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-xs lg:text-sm">Start Date:</span>
                    <span className="font-semibold text-sm lg:text-base">{ngoData.start_date}</span>
                  </div>
                </div>
                <button 
                  onClick={handleApplyNow}
                  className="w-full px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-semibold text-sm lg:text-base"
                >
                  Apply Now
                </button>
              </div>

              {/* Contact Information */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">Contact Information</h3>
                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <p className="text-xs lg:text-sm text-gray-600">Contact Person</p>
                    <p className="font-semibold text-gray-900 text-sm lg:text-base">{ngoData.contact.name}</p>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-600">Email</p>
                    <a href={`mailto:${ngoData.contact.email}`} className="font-semibold text-blue-600 hover:text-blue-700 text-sm lg:text-base">
                      {ngoData.contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-600">Phone</p>
                    <a href={`tel:${ngoData.contact.phone}`} className="font-semibold text-blue-600 hover:text-blue-700 text-sm lg:text-base">
                      {ngoData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Skills Required */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">Skills Required</h3>
                <div className="space-y-2">
                  {ngoData.skills.split(', ').map((skill, index) => (
                    <span key={index} className="inline-block px-2 lg:px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs lg:text-sm mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NgoDetail;
