import React from 'react';
import NgoOngoingCampaigns from '../ngo/NgoOngoingCampaigns';
import Navbar from '../../../components/Navbar';
import NgoSidebar from '../ngo/ngoSidebar';
import '../../../styles/dashboard.css';
import '../../../styles/ongoingCampaigns.css';
import '../../../styles/navbar.css';

const NgoDashboard = () => {
  return (
    <div className="dashboard">
        <Navbar />
      <div className="main-content">
        <NgoSidebar />
        <NgoOngoingCampaigns />
      </div>
    </div>
  );
};

export default NgoDashboard;