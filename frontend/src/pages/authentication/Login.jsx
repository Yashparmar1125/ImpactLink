import React from "react";
import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/Images/ImpactLogo.png"
import google from "../../assets/Images/google.png"
import facebook from "../../assets/Images/facebook.png"
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick = () => {
    console.log("Successfully Logged In")
  }

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="logo-div"><img className="logo-down" src={logo} alt="logo" /></div>
        <div className="login-content">
          <h1>Login</h1>
          <p>Enter your login credentials</p>
        </div>

        <div className="login-fields">
          <form onSubmit={handleSubmit}>
            <p className="p-placeholder">Email address</p>
            <Input
              type="email"
              placeholder="xyz@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="p-placeholder">Password</p>
            <Input
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-submit">
              <div>
                <Button
                  text="Login"
                  onClick={handleClick}
                /></div>
            </div>
          </form>
          <p>OR</p>
          <div>
            <img className="auth-logo" src={google} alt="google-logo" />
            <img className="auth-logo" src={facebook} alt="facebook-logo" />
          </div>

          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="confirmation">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}