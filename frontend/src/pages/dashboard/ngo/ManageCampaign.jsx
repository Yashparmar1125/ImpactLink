import React from "react";
import Navbar from "../../../components/Navbar";
import NgoSidebar from '../ngo/NgoSidebar';
import "../../../styles/manageCampaign.css";
import VideoEditorImage from '../../../assets/Dashboard Images/VideoEditing.jpg'; 
import InternImage from '../../../assets/Dashboard Images/siddhi-pic.png';

const ManageCampaign = () => {
  return (
    <div className="manage-campaign-container">
      <Navbar />
      <div className="manage-campaign-content">
        <NgoSidebar/>
        <div className="manage-campaign">
          <h2>Manage Your Campaign Requests</h2>
          <div className="campaign-box">
            <div className="campaign-content">
              <div className="campaign-text">
                <h3>Video Editor</h3>
                <p>Subtitle goes here</p>
                <div className="campaign-details">
                    <p> <strong>Start Date :</strong> DD-MM-YYYY</p>
                    <p> <strong>Duration :</strong> 2 Months</p>
                    <p> <strong>Internship Mode :</strong> On site</p>
                    <p><strong>Location :</strong> Mumbai</p>
                    <p><strong>Involvement :</strong> Individual </p>
                </div>
              </div>
              <div className="campaign-image">
                <img src={VideoEditorImage} alt="Video Editor" />
              </div>
            </div>
            <hr />
            <h4>Interns Requested </h4>
            <div className="rounded-box">

            <div className="intern-image">
                  <img src={InternImage } alt="Intern" />
                </div>

                <div className="intern-details">
                  <p><strong>Name:</strong> Siddhi Gawade</p>
                  <p><strong>Skills: </strong>Video Editing, Animation</p>
                  <p><strong>Joining Date :</strong> 01/04/2022</p>
                  <p><strong>Ending Date :</strong> 01/04/2022</p>
                  <p><strong>Experience: </strong> 1 Year</p>
                  <p><strong>Commitment :</strong> 3 Months </p>
                </div>
                <div className="intern-actions">
                  <button className="accept-button">Accept</button>
                  <button className="reject-button">Reject</button>
                </div>

            </div> 

            <div className="rounded-box">

            <div className="intern-image">
                  <img src={InternImage } alt="Intern" />
                </div>

                <div className="intern-details">
                  <p><strong>Name:</strong> Siddhi Gawade</p>
                  <p><strong>Skills: </strong>Video Editing, Animation</p>
                  <p><strong>Joining Date :</strong> 01/04/2022</p>
                  <p><strong>Ending Date :</strong> 01/04/2022</p>
                  <p><strong>Experience: </strong> 1 Year</p>
                  <p><strong>Commitment :</strong> 3 Months </p>
                </div>
                <div className="intern-actions">
                  <button className="accept-button">Accept</button>
                  <button className="reject-button">Reject</button>
                </div>

            </div> 
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCampaign;