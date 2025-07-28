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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 animate-width-expand"></div>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Explore <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NGOs</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are proud to collaborate with <span className="font-semibold text-blue-600">500+ NGOs</span> dedicated to making a positive impact in various fields. 
              Whether you&apos;re looking to volunteer, support a cause, or partner with an organization, 
              you&apos;ll surely find the perfect NGO here to make a difference!
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6 lg:p-8 mb-8 lg:mb-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <img className="w-4 h-4" src={filter} alt="filter" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Find Your Perfect Match</h2>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {filteredNgoData.map((data, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <div className="w-full sm:w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src={data.img} 
                          alt={data.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{data.name}</h3>
                            <p className="text-base lg:text-lg font-semibold text-primary mb-2">{data.role}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(data.urgency)}`}>
                            {data.urgency}
                          </span>
                        </div>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {data.location}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {data.duration}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              {data.volunteers_needed} needed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">Skills Required:</span> {data.skills}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium border border-blue-200">
                        {data.interest}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button 
                        onClick={() => handleApplyNow(data.name)}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-sm group-hover:shadow-xl"
                      >
                        Apply Now
                      </button>
                      <button 
                        onClick={() => handleSeeDetails(data.name)}
                        className="px-4 py-3 bg-white border-2 border-primary text-primary rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-sm group-hover:shadow-xl"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredNgoData.length === 0 && (
              <div className="text-center py-12 lg:py-16">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">No Opportunities Found</h3>
                <p className="text-gray-600 mb-6 text-base lg:text-lg max-w-md mx-auto">Try adjusting your filters to find more volunteer opportunities that match your interests and skills.</p>
                <button 
                  onClick={() => {
                    setInterest(null);
                    setSkills(null);
                    setAvailability(null);
                    setDomain(null);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-base"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 lg:mt-12">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium">
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">1</button>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium">2</button>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium">3</button>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium">
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
