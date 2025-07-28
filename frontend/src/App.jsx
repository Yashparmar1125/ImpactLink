import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import LoginNgo from './pages/authentication/LoginNgo';
import Home from './pages/landingpage/Home';
import ExploreNGO from './pages/explore-ngo-page/ExploreNGO';
import Dashboard from './pages/dashboard/volunteer/Dashboard';
import EditProfile from './pages/dashboard/volunteer/EditProfile';
import Achievements from './pages/dashboard/volunteer/Achievements';
import InviteFriends from './pages/dashboard/volunteer/InviteFriends';
import NgoDashboard from './pages/dashboard/ngo/Dashboard';
import ManageCampaign from './pages/dashboard/ngo/ManageCampaign';
import ManageInterns from './pages/dashboard/ngo/ManageInterns';
import CreateCampaignForm from './pages/dashboard/ngo/CreateCampaignForm';
import NgoDetail from './pages/explore-ngo-page/NgoDetail';
import CampaignForm from './pages/explore-ngo-page/CampaignForm';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

function App() {
  return (
    <GoogleOAuthProvider clientId="your-client-id-here">
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* Authentication Routes */}
          <Route path="/volunteer/login" element={<Login />} />
          <Route path="/ngo/login" element={<LoginNgo />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Volunteer Dashboard Routes */}
          <Route path="/volunteer/dashboard" element={<Dashboard />} />
          <Route path="/volunteer/profile" element={<EditProfile />} />
          <Route path="/volunteer/achievements" element={<Achievements />} />
          <Route path="/volunteer/invite" element={<InviteFriends />} />
          
          {/* Legacy Volunteer Routes (for backward compatibility) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/invite" element={<InviteFriends />} />
          
          {/* NGO Dashboard Routes */}
          <Route path="/ngo/dashboard" element={<NgoDashboard />} />
          <Route path="/ngo/manage-campaign" element={<ManageCampaign />} />
          <Route path="/ngo/manage-interns" element={<ManageInterns />} />
          <Route path="/ngo/create-campaign" element={<CreateCampaignForm />} />
          
          {/* Legacy NGO Routes (for backward compatibility) */}
          <Route path="/ngodashboard" element={<NgoDashboard />} />
          <Route path="/managecampaign" element={<ManageCampaign />} />
          <Route path="/manageinterns" element={<ManageInterns />} />
          <Route path="/createcampaign" element={<CreateCampaignForm />} />
          
          {/* Explore NGO Routes */}
          <Route path="/explore-ngos" element={<ExploreNGO />} />
          <Route path="/explore-ngos/:id" element={<NgoDetail />} />
          <Route path="/explore-ngos/:id/campaign-form" element={<CampaignForm />} />
          
          {/* Legacy Explore Routes (for backward compatibility) */}
          <Route path="/explorengos" element={<ExploreNGO />} />
          <Route path="/explorengos/ngo-detail" element={<NgoDetail />} />
          <Route path="/explorengos/ngo-detail/campaign-form" element={<CampaignForm />} />
          
          {/* Loading Route */}
          <Route path="/loading" element={<Loading />} />
          
          {/* 404 Route - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
