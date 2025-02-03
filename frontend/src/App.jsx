import React from 'react'
import Login from './pages/authentication/Login'
import SignUp from './pages/authentication/SignUp'
import LoginNgo from './pages/authentication/LoginNgo'
import { Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './pages/landingpage/Home'
import ExploreNGO from './pages/explore-ngo-page/ExploreNGO'
import Dashboard from './pages/dashboard/volunteer/Dashboard'
import EditProfile from './pages/dashboard/volunteer/EditProfile'
import Achievements from './pages/dashboard/volunteer/Achievements'
import NgoDashboard from './pages/dashboard/ngo/Dashboard'
import ManageCampaign from './pages/dashboard/ngo/ManageCampaign'
import ManageInterns from './pages/dashboard/ngo/ManageInterns'
import CreateCampaignForm from './pages/dashboard/ngo/CreateCampaignForm'

import NgoDetail from './pages/explore-ngo-page/NgoDetail'
import CampaignForm from './pages/explore-ngo-page/CampaignForm'
const App = () => {

  const LoginVolunteer = () => {
    return (
      <GoogleOAuthProvider clientId='110469472851-6qagf9127o3glbgte1nd4n2sigcev0pe.apps.googleusercontent.com'>
        <Login></Login>
      </GoogleOAuthProvider>
    )
  }
  const LoginNgoG = () => {
    return (
      <GoogleOAuthProvider clientId='110469472851-6qagf9127o3glbgte1nd4n2sigcev0pe.apps.googleusercontent.com'>
        <LoginNgo></LoginNgo>
      </GoogleOAuthProvider>
    )
  }
  const Register = () => {
    return (
      <GoogleOAuthProvider clientId='110469472851-6qagf9127o3glbgte1nd4n2sigcev0pe.apps.googleusercontent.com'>
        <SignUp></SignUp>
      </GoogleOAuthProvider>
    )
  }
  return (
    <div>
      <Routes>
        <Route path="/volunteer/login" element={<LoginVolunteer />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/ngo/login" element={<LoginNgoG />} />
        <Route path="/" element={<Home />} />
        
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/explorengos" element={<ExploreNGO />} />
        <Route path="/explorengos/ngo-detail" element={<NgoDetail />} />
        <Route path="/explorengos/ngo-detail/campaign-form" element={<CampaignForm />} />
        <Route path="/ngodashboard" element={<NgoDashboard/>} />
        <Route path="/managecampaign" element={<ManageCampaign/>} />
        <Route path="/manageinterns" element={<ManageInterns/>} />
        <Route path="/createcampaign" element={<CreateCampaignForm/>} />
      </Routes>
    </div>
  )
}

export default App
