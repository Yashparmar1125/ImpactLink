import React from "react";
import "../../../styles/ngocard.css";

import { useNavigate } from 'react-router-dom';

const NgoCard = ({ image, title, role, duration, skills }) => {
  const navigate = useNavigate();

  // Function to navigate to Requests page
  const handleRequestClick = () => {
    navigate(`/manageinterns`);
  };

  // Function to navigate to Manage page
  const handleManageClick = () => {
    navigate(`/managecampaign`);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Campaign-img" />
      </div>
      <div className="div-inner-card">
        <div className="inner-card">
          <h3>{title}</h3>
          <p><strong>Role:</strong> {role}</p>
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Skills Required:</strong> {skills}</p>
          <div className="button-container">
            {/* Button to navigate to the Requests page */}
            <button onClick={handleRequestClick} className="requests-button">
              Requests
            </button>
            {/* Button to navigate to the Manage page */}
            <button onClick={handleManageClick} className="manage-button">
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoCard;
