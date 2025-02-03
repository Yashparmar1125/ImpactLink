import React from "react";
import "../../../styles/ongoingCampaigns.css";
import HealthCare from '../../../assets/Dashboard Images/HealthCare.jpg'; 
import Education from '../../../assets/Dashboard Images/Teaching.jpg'; 
import VideoEditing from "../../../assets/Dashboard Images/VideoEditing.jpg"; 
import NgoCard from "./NgoCard";

const NgoOngoingCampaigns = () => {
  return (
    <div className="ongoing-campaigns">
      <h3>Ongoing Campaigns</h3>
      <NgoCard
        image={HealthCare}
        title="Shelter & Smile Foundation"
        role="Animal Care"
        duration="50 hours"
        skills="Knowledge of animal behavior, First aid for animals, cleaning and hygiene skills"
      />
      <NgoCard
        image={Education}
        title="Education for All"
        role="Teaching Assistant"
        duration="30 hours"
        skills="Teaching skills, Patience, Communication skills"
      /> 
        <NgoCard 
        className="last-NgoCard"
        image={VideoEditing}
        title="Education for All"
        role="Teaching Assistant"
        duration="30 hours"
        skills="Teaching skills, Patience, Communication skills"
      />
      <NgoCard 
        className="last-NgoCard"
        image={VideoEditing}
        title="Education for All"
        role="Teaching Assistant"
        duration="30 hours"
        skills="Teaching skills, Patience, Communication skills"
      />
      
      
    </div>
  );
};

export default NgoOngoingCampaigns;