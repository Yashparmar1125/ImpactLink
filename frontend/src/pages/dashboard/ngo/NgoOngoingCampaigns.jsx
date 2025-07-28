import React from "react";
import HealthCare from '../../../assets/Dashboard Images/HealthCare.jpg'; 
import Education from '../../../assets/Dashboard Images/Teaching.jpg'; 
import VideoEditing from "../../../assets/Dashboard Images/VideoEditing.jpg"; 
import NgoCard from "./NgoCard";

const NgoOngoingCampaigns = () => {
  const campaigns = [
    {
      image: HealthCare,
      title: "Shelter & Smile Foundation",
      role: "Animal Care",
      duration: "50 hours",
      skills: "Knowledge of animal behavior, First aid for animals, cleaning and hygiene skills"
    },
    {
      image: Education,
      title: "Education for All",
      role: "Teaching Assistant",
      duration: "30 hours",
      skills: "Teaching skills, Patience, Communication skills"
    },
    {
      image: VideoEditing,
      title: "Creative Media Foundation",
      role: "Video Editor",
      duration: "40 hours",
      skills: "Video editing, Creative direction, Attention to detail"
    },
    {
      image: VideoEditing,
      title: "Green Earth Initiative",
      role: "Environmental Protection",
      duration: "60 hours",
      skills: "Sustainability education, Waste management, Planting trees"
    }
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      {campaigns.map((campaign, index) => (
        <NgoCard
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

export default NgoOngoingCampaigns;