import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import filter from '../../assets/Images/filters.svg';
import animalCare from '.././../assets/Images/AnimalCare.jpg';

const ExploreNGO = () => {
  const [interest, setInterest] = useState(null);
  const [skills, setSkills] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [domain, setDomain] = useState(null);
  const [filteredNgoData, setFilteredNgoData] = useState([]);
  const navigate = useNavigate();

  const interestOptions = [
    { value: 'Community Service', label: 'Community Service' },
    { value: 'Environmental Sustainability', label: 'Environmental Sustainability' },
    { value: 'Animal Welfare', label: 'Animal Welfare' },
    { value: 'Social Justice & Advocacy', label: 'Social Justice & Advocacy' },
    { value: 'Mental Health Awareness', label: 'Mental Health Awareness' },
    { value: 'Children & Education', label: 'Children & Education' },
    { value: 'Disaster Relief', label: 'Disaster Relief' },
    { value: 'Healthcare & Medical Support', label: 'Healthcare & Medical Support' },
    { value: 'Human Rights & Equality', label: 'Human Rights & Equality' },
    { value: 'Fundraising & Charity Events', label: 'Fundraising & Charity Events' },
    { value: 'Elderly Care', label: 'Elderly Care' },
  ];

  const skillsOptions = [
    { value: 'Project Management', label: 'Project Management' },
    { value: 'Communication', label: 'Communication' },
    { value: 'Public Speaking', label: 'Public Speaking' },
    { value: 'Event Planning', label: 'Event Planning' },
    { value: 'Marketing & Branding', label: 'Marketing & Branding' },
    { value: 'Fundraising', label: 'Fundraising' },
    { value: 'Graphic Design', label: 'Graphic Design' },
    { value: 'Video Editing', label: 'Video Editing' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Medical Expertise', label: 'Medical Expertise' },
    { value: 'Teaching', label: 'Teaching' },
  ];

  const availabilityOptions = [
    { value: 'fulltime', label: 'Full-time' },
    { value: 'parttime', label: 'Part-time' },
    { value: 'weekends', label: 'Weekends Only' },
    { value: 'flexible', label: 'Flexible' },
  ];

  const domainOptions = [
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'environment', label: 'Environment' },
    { value: 'community', label: 'Community Development' },
    { value: 'animal_welfare', label: 'Animal Welfare' },
    { value: 'disaster_relief', label: 'Disaster Relief' },
  ];

  const ngoData = [
    {
      img: animalCare,
      name: "Creative Media Foundation",
      role: "Video Editor",
      duration: "40 Hours",
      skills: "Video editing, Creative direction, Attention to detail",
      interest: 'Community Service',
      location: "New York, NY",
      urgency: "High",
      volunteers_needed: 3
    },
    {
      img: animalCare,
      name: "Green Earth Initiative",
      role: "Environmental Protection Volunteer",
      duration: "50 Hours",
      skills: "Sustainability education, Waste management, Planting trees, Recycling",
      interest: 'Environmental Sustainability',
      location: "San Francisco, CA",
      urgency: "Medium",
      volunteers_needed: 5
    },
    {
      img: animalCare,
      name: "Books for Change",
      role: "Teaching Assistant",
      duration: "30 Hours",
      skills: "Teaching, Lesson planning, Communication, Patience",
      interest: 'Children & Education',
      location: "Chicago, IL",
      urgency: "High",
      volunteers_needed: 2
    },
    {
      img: animalCare,
      name: "Disaster Relief Fund",
      role: "Relief Volunteer",
      duration: "70 Hours",
      skills: "Emergency response, Disaster relief coordination, Logistics management",
      interest: 'Disaster Relief',
      location: "Houston, TX",
      urgency: "Critical",
      volunteers_needed: 8
    },
    {
      img: animalCare,
      name: "Health for All Organization",
      role: "Medical Care Assistant",
      duration: "45 Hours",
      skills: "Basic medical knowledge, First Aid, Compassionate care",
      interest: 'Healthcare & Medical Support',
      location: "Los Angeles, CA",
      urgency: "High",
      volunteers_needed: 4
    },
    {
      img: animalCare,
      name: "Animal Rescue Network",
      role: "Animal Care Volunteer",
      duration: "25 Hours",
      skills: "Animal handling, Feeding, Cleaning, Basic veterinary care",
      interest: 'Animal Welfare',
      location: "Miami, FL",
      urgency: "Medium",
      volunteers_needed: 6
    }
  ];

  useEffect(() => {
    let filteredData = ngoData;

    // Filter based on selected interest
    if (interest && interest.value) {
      filteredData = filteredData.filter((ngo) => ngo.interest === interest.value);
    }

    // Filter based on selected skills
    if (skills && skills.length > 0) {
      filteredData = filteredData.filter((ngo) => {
        return skills.some((skill) => ngo.skills.toLowerCase().includes(skill.value.toLowerCase()));
      });
    }

    // Filter based on availability
    if (availability && availability.value) {
      filteredData = filteredData.filter((ngo) => ngo.availability === availability.value);
    }

    // Filter based on domain
    if (domain && domain.value) {
      filteredData = filteredData.filter((ngo) => ngo.domain === domain.value);
    }

    setFilteredNgoData(filteredData);
  }, [interest, skills, availability, domain]);

  const handleInterestChange = (selectedOption) => {
    setInterest(selectedOption);
  };

  const handleSkillsChange = (selectedOption) => {
    setSkills(selectedOption);
  };

  const handleAvailabilityChange = (selectedOption) => {
    setAvailability(selectedOption);
  };

  const handleDomainChange = (selectedOption) => {
    setDomain(selectedOption);
  };

  const handleApplyNow = (ngoName) => {
    console.log(`Applying to: ${ngoName}`);
    navigate(`/explorengos/ngo-detail/campaign-form`);
  };

  const handleSeeDetails = (ngoName) => {
    console.log(`Viewing details for: ${ngoName}`);
    navigate(`/explorengos/ngo-detail`);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
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
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="text-center mb-6 lg:mb-8">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Explore <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NGOs</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud to collaborate with 500+ NGOs dedicated to making a positive impact in various fields. 
              Whether you&apos;re looking to volunteer, support a cause, or partner with an organization, 
              you&apos;ll surely find the perfect NGO here to make a difference!
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-4 lg:p-6 mb-6 lg:mb-8">
            <div className="flex items-center space-x-2 mb-3 lg:mb-4">
              <img className="w-4 h-4 lg:w-5 lg:h-5" src={filter} alt="filter" />
              <h2 className="text-lg lg:text-xl font-bold text-gray-900">Find Your Perfect Match</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              <div>
                <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">Interest Area</label>
                <Select
                  value={interest}
                  onChange={handleInterestChange}
                  options={interestOptions}
                  placeholder="Select Interest"
                  className="w-full"
                  classNamePrefix="select"
                  isClearable
                />
              </div>

              <div>
                <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">Skills Required</label>
                <Select
                  value={skills}
                  onChange={handleSkillsChange}
                  options={skillsOptions}
                  placeholder="Select Skills"
                  className="w-full"
                  classNamePrefix="select"
                  isMulti
                  isClearable
                />
              </div>

              <div>
                <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">Availability</label>
                <Select
                  value={availability}
                  onChange={handleAvailabilityChange}
                  options={availabilityOptions}
                  placeholder="Select Availability"
                  className="w-full"
                  classNamePrefix="select"
                  isClearable
                />
              </div>

              <div>
                <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-1 lg:mb-2">Domain</label>
                <Select
                  value={domain}
                  onChange={handleDomainChange}
                  options={domainOptions}
                  placeholder="Select Domain"
                  className="w-full"
                  classNamePrefix="select"
                  isClearable
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-4 lg:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 lg:mb-4 gap-2">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                Available Opportunities ({filteredNgoData.length})
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs lg:text-sm text-gray-600">Sort by:</span>
                <select className="px-2 lg:px-3 py-1 lg:py-2 border border-gray-200 rounded-lg text-xs lg:text-sm">
                  <option>Most Recent</option>
                  <option>Urgency</option>
                  <option>Duration</option>
                  <option>Location</option>
                </select>
              </div>
            </div>

            {/* NGO Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
              {filteredNgoData.map((data, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-4 lg:p-6">
                    <div className="flex flex-col sm:flex-row gap-3 mb-3">
                      <img 
                        src={data.img} 
                        alt={data.name}
                        className="w-full sm:w-16 h-16 rounded-lg object-cover shadow-md"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="flex-1">
                            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1">{data.name}</h3>
                            <p className="text-sm lg:text-base font-semibold text-primary mb-1">{data.role}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(data.urgency)}`}>
                            {data.urgency}
                          </span>
                        </div>
                        <p className="text-xs lg:text-sm text-gray-600 mb-1">{data.location}</p>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span>⏱️ {data.duration}</span>
                          <span>👥 {data.volunteers_needed} needed</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs lg:text-sm text-gray-700">
                        <span className="font-semibold">Skills Required:</span> {data.skills}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-primary rounded-full text-xs font-medium">
                        {data.interest}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button 
                        onClick={() => handleApplyNow(data.name)}
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-xs lg:text-sm"
                      >
                        Apply Now
                      </button>
                      <button 
                        onClick={() => handleSeeDetails(data.name)}
                        className="px-3 py-2 bg-white border-2 border-primary text-primary rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-xs lg:text-sm"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredNgoData.length === 0 && (
              <div className="text-center py-6 lg:py-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">No Opportunities Found</h3>
                <p className="text-gray-600 mb-3 lg:mb-4 text-xs lg:text-sm">Try adjusting your filters to find more volunteer opportunities.</p>
                <button 
                  onClick={() => {
                    setInterest(null);
                    setSkills(null);
                    setAvailability(null);
                    setDomain(null);
                  }}
                  className="px-3 lg:px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-xs lg:text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-2 lg:px-3 py-1 lg:py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-xs lg:text-sm">
                Previous
              </button>
              <button className="px-2 lg:px-3 py-1 lg:py-2 bg-primary text-white rounded-lg text-xs lg:text-sm">1</button>
              <button className="px-2 lg:px-3 py-1 lg:py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-xs lg:text-sm">2</button>
              <button className="px-2 lg:px-3 py-1 lg:py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-xs lg:text-sm">3</button>
              <button className="px-2 lg:px-3 py-1 lg:py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-xs lg:text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ExploreNGO;
