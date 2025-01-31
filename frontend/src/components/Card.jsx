import React from "react";
import "../styles/card.css";

const Card = ({ image, title, role, duration, skills }) => {
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
          <button className="view-progress-button">View Progress</button>
        </div>
      </div>
    </div>
  );
};

export default Card;