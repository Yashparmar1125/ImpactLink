import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import filter from '../../assets/Images/filters.svg'
import '../../styles/exploreNgo.css'
import '../../styles/footer.css'
import animalCare from '.././../assets/Images/AnimalCare.jpg'

const ExploreNGO = () => {
  const [interest, setInterest] = useState(null);
  const [skills, setSkills] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [domain, setDomain] = useState(null);
  const [filteredNgoData, setFilteredNgoData] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const interestOptions = [
    { value: '', label: 'Select Interest' },
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
  ];

  const availabilityOptions = [
    { value: 'fulltime', label: 'Full-time' },
    { value: 'parttime', label: 'Part-time' },
  ];

  const domainOptions = [
    { value: 'domain1', label: 'Domain 1' },
    { value: 'domain2', label: 'Domain 2' },
  ];

  const ngoData = [
    {
      img: animalCare,
      name: "Video Foundation",
      role: "Video Editor",
      duration: "40 Hours",
      skills: "editing Videos",
      interest: 'Video editing'
    },
    {
      img: animalCare,
      name: "Green Earth Initiative",
      role: "Environmental Protection Volunteer",
      duration: "50 Hours",
      skills: "Sustainability education, Waste management, Planting trees, Recycling",
      interest: 'Environmental Sustainability'
    },
    {
      img: animalCare,
      name: "Books for Change",
      role: "Teaching Assistant",
      duration: "30 Hours",
      skills: "Teaching, Lesson planning, Communication, Patience",
      interest: 'Children & Education'
    },
    {
      img: animalCare,
      name: "Disaster Relief Fund",
      role: "Relief Volunteer",
      duration: "70 Hours",
      skills: "Emergency response, Disaster relief coordination, Logistics management",
      interest: 'Disaster Relief'
    },
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
        return skills.every((skill) => ngo.skills.toLowerCase().includes(skill.value.toLowerCase()));
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
    // You can pass the NGO name (or any other data) if needed for the next page
    console.log(`Applying to: ${ngoName}`);
    // Navigate to a different route for application
    navigate(`/explorengos/ngo-detail/campaign-form`);
  };

  const handleSeeDetails = (ngoName) => {
    console.log(`Viewing details for: ${ngoName}`);
    // Navigate to a details page for the selected NGO
    navigate(`/explorengos/ngo-detail`);
  };

  const ngoDataContent = filteredNgoData.map((data, index) => (
    <div key={index} className='explore-ngo-card'>
      <div>
        <img src={data.img} alt="animal" />
      </div>
      <div className='inner-card'>
        <h2>{data.name}</h2>
        <div className='ngo-card-data'>
          <p><span>Role:</span> {data.role}</p>
          <p><span>Duration:</span> {data.duration}</p>
          <p><span>Skills Required:</span> {data.skills}</p>
        </div>
        <div className='btn-container'>
          <button 
            className='apply-button' 
            onClick={() => handleApplyNow(data.name)}>
            Apply Now
          </button>
          <button 
            className='show-details-button' 
            onClick={() => handleSeeDetails(data.name)}>
            See Details
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Navbar />
      <div className='explore-texts'>
        <h1>Explore NGOs</h1>
        <p>We are proud to collaborate with 500+ NGOs dedicated to making a positive impact in various fields. Whether you're looking to volunteer, support a cause, or partner with an organization, you'll surely find the perfect NGO here to make a difference!</p>
      </div>

      <div className='filter'>
        <img className='filter-logo' src={filter} alt="filter" />

        <Select
          className="select-filter"
          name="Interest"
          id="interest"
          value={interest}
          onChange={handleInterestChange}
          options={interestOptions}
          placeholder="Interest"
          isMulti
        />

        <Select
          name="Skills"
          id="skills"
          value={skills}
          onChange={handleSkillsChange}
          options={skillsOptions}
          placeholder="Select Skill"
          isMulti
        />

        <Select
          name="Availability"
          id="availability"
          value={availability}
          onChange={handleAvailabilityChange}
          options={availabilityOptions}
          placeholder="Select Availability"
          isMulti
        />

        <Select
          name="Domain"
          id="domain"
          value={domain}
          onChange={handleDomainChange}
          options={domainOptions}
          placeholder="Select Domain"
          isMulti
        />
      </div>

      <div>
        {ngoDataContent}
      </div>

      <div className='page-change'>
        <button>Previous</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>

        <button>Next</button>
      </div>

      <Footer />
    </>
  );
}

export default ExploreNGO;
