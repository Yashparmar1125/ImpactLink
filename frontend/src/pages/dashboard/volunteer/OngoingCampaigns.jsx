import React from 'react';
import Card from '../../../components/Card'; // Assuming you have a Card component
import HealthCare from '../../../assets/Dashboard Images/HealthCare.jpg'; 
import Education from '../../../assets/Dashboard Images/Teaching.jpg'; 
import VideoEditing from "../../../assets/Dashboard Images/VideoEditing.jpg";  // Import the images

const ongoingCampaigns = [
  {
    image: HealthCare,
    title: "Health for All Organization",
    role: "Medical Care Assistant",
    duration: "50 hours",
    skills: "Basic medical knowledge, First Aid, Compassionate care"
  },
  {
    image: Education,
    title: "Teach the Future Initiative",
    role: "Teaching Assistant",
    duration: "40 hours",
    skills: "Teaching skills, Patience, Classroom management"
  },
  {
    image: VideoEditing,
    title: "Creative Media Foundation",
    role: "Video Editor",
    duration: "30 hours",
    skills: "Video editing, Creative direction, Attention to detail"
  },
  {
    image: HealthCare,
    title: "Health Awareness Campaign",
    role: "Health Educator",
    duration: "45 hours",
    skills: "Public speaking, Health education, Communication skills"
  },
  {
    image: Education,
    title: "Access to Education Program",
    role: "Education Support Volunteer",
    duration: "25 hours",
    skills: "Tutoring, Communication, Supportive attitude"
  },
];

const OngoingCampaignsSection = () => {
  return (
    <div className="ongoing-campaigns">
      <h3>Ongoing Campaigns</h3>
      {ongoingCampaigns.slice(0, 3).map((campaign, index) => (
        <Card
          key={index}
          image={campaign.image}
          title={campaign.title}
          role={campaign.role}
          duration={campaign.duration}
          skills={campaign.skills}
        />
      ))}
    </div>
  );
};

export default OngoingCampaignsSection;