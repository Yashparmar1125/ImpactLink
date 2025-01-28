import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/Images/ImpactLogo.png";
import google from "../../assets/Images/google.png";
import facebook from "../../assets/Images/facebook.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = async () => {
    setLoading(true); // Start loading
    try {
      const url = "http://localhost:5000/api/auth/ngo/login";

      // Make the POST request to the backend
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        console.log("Successfully Logged In", data);
        // You can redirect or store tokens here if necessary
      } else {
        const errorData = await response.json();
        console.log("Error:", errorData.message);
      }
    } catch (error) {
      console.error("Error while logging in:", error);
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="logo-div">
          <img className="logo-down" src={logo} alt="logo" />
        </div>
        <div className="login-content">
          <h1>NGO Login</h1>
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
                  text={loading ? "Logging In..." : "Login"} // Change button text during loading
                  onClick={handleClick}
                  disabled={loading} // Disable the button when loading
                  className={loading ? "loading-button" : ""} // Apply loading class for animation
                />
              </div>
            </div>
          </form>

          <p>OR</p>
          <div>
            <img className="auth-logo" src={google} alt="google-logo" />
            <img className="auth-logo" src={facebook} alt="facebook-logo" />
          </div>

          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="confirmation">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
