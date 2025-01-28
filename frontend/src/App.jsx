import React from 'react'
import Login from './pages/authentication/Login'
import SignUp from './pages/authentication/SignUp'
import LoginNgo from './pages/authentication/LoginNgo'
import { Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const App = () => {

  const LoginVolunteer=()=>{
    return(
      <GoogleOAuthProvider clientId='110469472851-6qagf9127o3glbgte1nd4n2sigcev0pe.apps.googleusercontent.com'>
        <Login></Login>
      </GoogleOAuthProvider>
    )
  }
  const LoginNgoG=()=>{
    return(
      <GoogleOAuthProvider clientId='110469472851-6qagf9127o3glbgte1nd4n2sigcev0pe.apps.googleusercontent.com'>
        <LoginNgo></LoginNgo>
      </GoogleOAuthProvider>
    )
  }
  const Register=()=>{
    return(
      <GoogleOAuthProvider clientId='110469472851-6qagf9127o3glbgte1nd4n2sigcev0pe.apps.googleusercontent.com'>
        <SignUp></SignUp>
      </GoogleOAuthProvider>
    )
  }
  return (
    <div>
      <Routes>
        <Route path="/volunteer/login" element={<LoginVolunteer/>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/ngo/login" element={<LoginNgoG />} />
      </Routes>
    </div>
  )
}

export default App
