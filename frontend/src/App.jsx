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

function App() {
  return (
    <GoogleOAuthProvider clientId="your-client-id-here">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ngo/login" element={<LoginNgo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/explorengos" element={<ExploreNGO />} />
          <Route path="/explorengos/ngo-detail" element={<NgoDetail />} />
          <Route path="/explorengos/ngo-detail/campaign-form" element={<CampaignForm />} />
          <Route path="/invite" element={<InviteFriends />} />
          <Route path="/ngodashboard" element={<NgoDashboard />} />
          <Route path="/managecampaign" element={<ManageCampaign />} />
          <Route path="/manageinterns" element={<ManageInterns />} />
          <Route path="/createcampaign" element={<CreateCampaignForm />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
