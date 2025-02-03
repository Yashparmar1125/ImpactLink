import React from 'react';
import Sidebar from '../../../components/Sidebar';
import OngoingCampaigns from '../volunteer/OngoingCampaigns';
import Navbar from '../../../components/Navbar';
import '../../../styles/dashboard.css';
import '../../../styles/sidebar.css';
import '../../../styles/ongoingCampaigns.css';
import '../../../styles/navbar.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <Navbar />
      <div className="main-content">
        <Sidebar />
        <OngoingCampaigns />
      </div>
    </div>
  );
};

export default Dashboard;