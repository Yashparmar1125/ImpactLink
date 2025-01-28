import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/Images/ImpactLogo.png";
import google from "../../assets/Images/google.png";
import facebook from "../../assets/Images/facebook.png";
import { Link } from "react-router-dom";
import Select from "react-select"

const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [toggleFlow, setToggleFlow] = useState("volunteer");
  const [ngoName, setNgoName] = useState("");
  const [regId, setRegId] = useState("");
  const [city, setCity] = useState("");

  const options = [
    { value: "video-editing", label: "Video Editing" },
    { value: "graphic-desgining", label: "Graphic Designing" },
    { value: "teaching", label: "Teaching" },
    { value: "healthcare", label: "Healthcare" },
    { value: "fundraising", label: "Fundraising" },
    { value: "social-media-management", label: "Social Media Management" },
    { value: "cleaning", label: "Cleaning" },
    { value: "other", label: "Other" },
  ]

  const [selectedOptions, setSelectedOptions] = useState([])
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  const handleClick = () => {
    console.log("Successfully Logged In");
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
            {/* Dropdown to select flow */}
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
                <div className="name-field">
                  <div>
                    <p className="p-placeholder">First Name*</p>
                    <Input
                      className="input-name"
                      type="text"
                      placeholder="First Name"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div>
                    <p className="p-placeholder">Last Name*</p>
                    <Input
                      className="input-name"
                      type="text"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <p className="p-placeholder">Email*</p>
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

                <p className="p-placeholder">Occupation</p>
                <select className='option'>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="other">Other</option>
                </select>

                <p className="p-placeholder">Interests/Skills</p>
                <Select className='option'
                  options={options}
                  value={selectedOptions}
                  onChange={handleChange}
                  isMulti={true}
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

                <p className="p-placeholder">Password</p>
                <Input
                  type="password"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p className="p-placeholder">Registration ID*</p>
                <Input
                  type="id"
                  placeholder="eg. MJBDU9382983"
                  value={regId}
                  onChange={(e) => setRegId(e.target.value)}
                />

                <p className="p-placeholder">City*</p>
                <Input
                  type="text"
                  placeholder="eg. Mumbai"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </>
            )}

            <div className="login-submit">
              <Button text="Sign Up" onClick={handleClick} />
            </div>
          </form>

          <p>OR</p>
          <div>
            <img className="auth-logo" src={google} alt="google-logo" />
            <img className="auth-logo" src={facebook} alt="facebook-logo" />
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="confirmation">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

