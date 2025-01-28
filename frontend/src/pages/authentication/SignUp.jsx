import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/Images/ImpactLogo.png";
import google from "../../assets/Images/google.png";
import facebook from "../../assets/Images/facebook.png";
import { Link } from "react-router-dom";
import Select from "react-select";

const SignUp = () => {
  // Common state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Volunteer-specific state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  // NGO-specific state
  const [ngoName, setNgoName] = useState("");
  const [ngoContactNumber, setNgoContactNumber] = useState("");
  const [ngoAddress, setNgoAddress] = useState("");
  const [regID, setRegID] = useState("");

  // Toggle between Volunteer and NGO flows
  const [toggleFlow, setToggleFlow] = useState("volunteer");

  const interestsOptions = [
    { value: "video-editing", label: "Video Editing" },
    { value: "graphic-designing", label: "Graphic Designing" },
    { value: "teaching", label: "Teaching" },
    { value: "healthcare", label: "Healthcare" },
    { value: "fundraising", label: "Fundraising" },
    { value: "social-media-management", label: "Social Media Management" },
    { value: "cleaning", label: "Cleaning" },
    { value: "other", label: "Other" },
  ];

  const handleInterestsChange = (options) => setSelectedInterests(options);
  const handleSkillsChange = (options) => setSelectedSkills(options);

  const validateForm = () => {
    if (!email || !password) {
      alert("Email and Password are required fields.");
      return false;
    }
    if (toggleFlow === "volunteer" && (!name || !phone)) {
      alert("Name and Phone are required for Volunteers.");
      return false;
    }
    if (
      toggleFlow === "ngo" &&
      (!ngoName || !ngoContactNumber || !ngoAddress || !regID)
    ) {
      alert("All fields are required for NGOs.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const commonData = { email, password };

    const userData =
      toggleFlow === "volunteer"
        ? {
            ...commonData,
            name,
            phone,
            interests: selectedInterests.map((opt) => opt.value),
            skills: selectedSkills.map((opt) => opt.value),
          }
        : {
            ...commonData,
            ngoName,
            ngoEmail: email,
            ngoContactNumber,
            ngoAddress,
            regID,
          };

    const endpoint =
      toggleFlow === "volunteer"
        ? "http://localhost:5000/api/auth/volunteer/register"
        : "http://localhost:5000/api/auth/ngo/register";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Sign-up successful! Redirecting to login...");
        console.log("Sign-up successful:", data);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
        console.error("Error during sign-up:", errorData);
      }
    } catch (error) {
      alert("An unexpected error occurred. Please try again later.");
      console.error("Error while signing up:", error);
    }
  };

  return (
    <div className="login-bg">
      <div className="signup-card">
        <div className="logo-div">
          <img className="logo-down" src={logo} alt="logo" />
        </div>

        <div className="login-content">
          <h1>Sign Up</h1>
          <p>Create Your Account</p>
        </div>

        <div className="login-fields">
          <form onSubmit={handleSubmit}>
            <div className="flow-choice">
              <select
                className="option-flow"
                value={toggleFlow}
                onChange={(e) => setToggleFlow(e.target.value)}
              >
                <option value="volunteer">Register as Volunteer</option>
                <option value="ngo">Register as NGO</option>
              </select>
            </div>

            {toggleFlow === "volunteer" ? (
              <>
                <p className="p-placeholder">Name*</p>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <p className="p-placeholder">Phone*</p>
                <Input
                  type="text"
                  placeholder="e.g., 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <p className="p-placeholder">Email*</p>
                <Input
                  type="email"
                  placeholder="xyz@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <p className="p-placeholder">Password*</p>
                <Input
                  type="password"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p className="p-placeholder">Interests</p>
                <Select
                  options={interestsOptions}
                  value={selectedInterests}
                  onChange={handleInterestsChange}
                  isMulti
                />

                <p className="p-placeholder">Skills</p>
                <Select
                  options={interestsOptions}
                  value={selectedSkills}
                  onChange={handleSkillsChange}
                  isMulti
                />
              </>
            ) : (
              <>
                <p className="p-placeholder">NGO Name*</p>
                <Input
                  type="text"
                  placeholder="NGO Name"
                  value={ngoName}
                  onChange={(e) => setNgoName(e.target.value)}
                />

                <p className="p-placeholder">Email*</p>
                <Input
                  type="email"
                  placeholder="xyz@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <p className="p-placeholder">Password*</p>
                <Input
                  type="password"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p className="p-placeholder">Contact Number*</p>
                <Input
                  type="text"
                  placeholder="e.g., 1234567890"
                  value={ngoContactNumber}
                  onChange={(e) => setNgoContactNumber(e.target.value)}
                />

                <p className="p-placeholder">Address*</p>
                <Input
                  type="text"
                  placeholder="NGO Address"
                  value={ngoAddress}
                  onChange={(e) => setNgoAddress(e.target.value)}
                />

                <p className="p-placeholder">Registration ID*</p>
                <Input
                  type="text"
                  placeholder="e.g., 12wdnddeer3"
                  value={regID}
                  onChange={(e) => setRegID(e.target.value)}
                />
              </>
            )}

            <div className="login-submit">
              <Button text="Sign Up" />
            </div>
          </form>

          <p>OR</p>
          <div>
            <img className="auth-logo" src={google} alt="google-logo" />
            <img className="auth-logo" src={facebook} alt="facebook-logo" />
          </div>

          <p>
            Already have an account? {" "}
            <Link to="/login" className="confirmation">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
