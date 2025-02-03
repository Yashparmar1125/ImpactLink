import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import NgoSidebar from '../ngo/NgoSidebar';
import "../../../styles/ManageInterns.css";
import VideoEditorImage from '../../../assets/Dashboard Images/VideoEditing.jpg'; 
import InternImage from '../../../assets/Dashboard Images/siddhi-pic.png';

const ManageInterns = () => {
  // State to handle file upload
  const [file, setFile] = useState(null);

  // Random data for Shelter & Smile Foundation
  const campaignData = {
    title: "Shelter & Smile Foundation",
    role: "Animal Care",
    duration: "50 hours",
    skillsRequired: "Knowledge of animal behavior, First aid for animals, cleaning and hygiene skills",
    startDate: "01-05-2025",
    internshipMode: "On site",
    location: "Mumbai",
    involvement: "Individual"
  };

  // Interns data
  const interns = [
    {
      name: "Siddhi Gawade",
      skills: "Animal Care, First Aid, Cleaning",
      joiningDate: "01/04/2022",
      endingDate: "01/06/2022",
      experience: "1 Year",
      commitment: "3 Months",
      hoursDone: 50,
      progress: 50
    },
    {
      name: "Rahul Verma",
      skills: "Animal Behavior, First Aid, Cleaning",
      joiningDate: "05/06/2022",
      endingDate: "05/09/2022",
      experience: "2 Years",
      commitment: "4 Months",
      hoursDone: 75,
      progress: 75
    }
  ];

  // Handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Handle file upload (this can be customized to upload to a server)
  const handleFileUpload = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    // Handle file upload logic (e.g., send to the server or process locally)
    console.log("File uploaded:", file.name);
    alert(`File uploaded: ${file.name}`);

    // Reset file input after upload
    setFile(null);
  };

  return (
    <div className="manage-campaign-container">
      <Navbar />
      <div className="manage-campaign-content">
        <NgoSidebar />
        <div className="manage-campaign">
          <h2>Manage Your Campaign Interns</h2>
          <div className="campaign-box">
            <div className="campaign-content">
              <div className="campaign-text">
                <h3>{campaignData.title}</h3>
                <p>{campaignData.role}</p>
                <div className="campaign-details">
                  <p><strong>Start Date :</strong> {campaignData.startDate}</p>
                  <p><strong>Duration :</strong> {campaignData.duration}</p>
                  <p><strong>Internship Mode :</strong> {campaignData.internshipMode}</p>
                  <p><strong>Location :</strong> {campaignData.location}</p>
                  <p><strong>Involvement :</strong> {campaignData.involvement}</p>
                  <p><strong>Skills Required :</strong> {campaignData.skillsRequired}</p>
                </div>
              </div>
              <div className="campaign-image">
                <img src={VideoEditorImage} alt="Campaign" />
              </div>
            </div>
            <hr />
            <h4>Interns Requested</h4>
            {interns.map((intern, index) => (
              <div key={index} className="rounded-box">
                <div className="intern-request">
                  <div className="intern-image">
                    <img src={InternImage} alt="Intern" />
                  </div>
                  <div className="intern-details">
                    <p><strong>Name:</strong> {intern.name}</p>
                    <p><strong>Skills:</strong> {intern.skills}</p>
                    <p><strong>Joining Date:</strong> {intern.joiningDate}</p>
                    <p><strong>Ending Date:</strong> {intern.endingDate}</p>
                    <p><strong>Experience:</strong> {intern.experience}</p>
                    <p><strong>Commitment:</strong> {intern.commitment}</p>
                  </div>
                  <div className="intern-actions">
                    <p className="hours-done-text">Hours Done</p>
                    <progress className="progress-bar" value={intern.progress} max="100"></progress>
                    <div className="progress-labels">
                      <span><strong>0</strong></span>
                      <span><strong>50</strong></span>
                    </div>
                    {/* File input for uploading certificate */}
                    <input 
                      type="file" 
                      id={`certificate-upload-${index}`} 
                      style={{ display: "none" }} 
                      onChange={handleFileChange} 
                    />
                    
                    {/* Upload Certificate Button */}
                    <button 
                      className="upload-certificate-button" 
                      onClick={() => document.getElementById(`certificate-upload-${index}`).click()}
                    >
                      Upload Certificate
                    </button>
                    
                    {/* Optional: Display the selected file name */}
                    {file && <p>{file.name}</p>}
                    
                    {/* Button to confirm file upload */}
                    <button onClick={handleFileUpload}>Confirm Upload</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInterns;
