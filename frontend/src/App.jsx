import React from 'react'
import Login from './pages/authentication/Login'
import SignUp from './pages/authentication/SignUp'
import LoginNgo from './pages/authentication/LoginNgo'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/volunteer/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ngo/login" element={<LoginNgo />} />
      </Routes>
    </div>
  )
}

export default App
