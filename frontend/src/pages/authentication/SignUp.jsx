import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/Images/ImpactLogo.png";
import google from "../../assets/Images/google.png";
import facebook from "../../assets/Images/facebook.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import { googleAuthRegister } from "../../API/api";
import { useGoogleLogin } from "@react-oauth/google";

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

  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
        const result = await googleAuthRegister(authResult['code']);
        console.log(result.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleregister = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  });

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-indigo-50/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Header Section */}
      <header className="relative z-20 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="ImpactLink" className="h-12 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                ImpactLink
              </span>
            </div>
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Hero Content */}
          <div className="hidden lg:block">
            <div className="max-w-lg mx-auto">
              {/* Hero Section */}
              <div className="text-center lg:text-left mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Join the Community
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Start Your
                  <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Impact Journey
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Be part of something bigger. Create your account and start making a real difference in communities around the world. Every action counts towards positive change.
                </p>
              </div>

              {/* Features Grid */}
              {/* <div className="grid grid-cols-1 gap-6 mb-12">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
                      <p className="text-gray-600">Connect with 500+ NGOs and volunteers worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Matching</h3>
                      <p className="text-gray-600">Find opportunities that perfectly match your skills and interests</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact Tracking</h3>
                      <p className="text-gray-600">Monitor your contributions and see the real difference you&apos;re making</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Building</h3>
                      <p className="text-gray-600">Build meaningful connections with like-minded individuals</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Stats Section */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Community Impact</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600">Active Volunteers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">50+</div>
                    <div className="text-sm text-gray-600">Partner NGOs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">1000+</div>
                    <div className="text-sm text-gray-600">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="w-full max-w-lg mx-auto">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative">
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-t-3xl"></div>
              
              {/* Mobile Logo */}
              <div className="lg:hidden text-center mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl mb-6">
                  <img 
                    className="h-16 w-auto filter drop-shadow-lg transition-transform duration-300 hover:scale-110" 
                    src={logo} 
                    alt="ImpactLink Logo" 
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Join ImpactLink
                </h2>
                <p className="text-gray-600 font-medium">
                  Create your account and start making a difference
                </p>
              </div>

              {/* Desktop Header */}
              <div className="hidden lg:block text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Create Account
                </h2>
                <p className="text-gray-600 font-medium">
                  Choose your role and get started
                </p>
        </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Account Type Selector */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    I want to join as
                  </label>
              <select
                    className="w-full h-12 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none hover:border-gray-300"
                value={toggleFlow}
                onChange={(e) => setToggleFlow(e.target.value)}
              >
                    <option value="volunteer">Volunteer</option>
                    <option value="ngo">NGO Organization</option>
              </select>
            </div>

            {toggleFlow === "volunteer" ? (
              <>
                    {/* Volunteer Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                <Input
                  type="text"
                          placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                          className="w-full"
                />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                <Input
                  type="text"
                  placeholder="e.g., 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                          className="w-full"
                />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                <Input
                  type="email"
                        placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password *
                      </label>
                <Input
                  type="password"
                        placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Interests
                        </label>
                <Select
                  options={interestsOptions}
                  value={selectedInterests}
                  onChange={handleInterestsChange}
                  isMulti
                          placeholder="Select interests..."
                          className="w-full"
                          classNamePrefix="select"
                />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Skills
                        </label>
                <Select
                  options={interestsOptions}
                  value={selectedSkills}
                  onChange={handleSkillsChange}
                  isMulti
                          placeholder="Select skills..."
                          className="w-full"
                          classNamePrefix="select"
                />
                      </div>
                    </div>
              </>
            ) : (
              <>
                    {/* NGO Fields */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        NGO Name *
                      </label>
                <Input
                  type="text"
                        placeholder="Enter NGO name"
                  value={ngoName}
                  onChange={(e) => setNgoName(e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                <Input
                  type="email"
                          placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Contact Number *
                        </label>
                <Input
                  type="text"
                  placeholder="e.g., 1234567890"
                  value={ngoContactNumber}
                  onChange={(e) => setNgoContactNumber(e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password *
                      </label>
                      <Input
                        type="password"
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Address *
                      </label>
                <Input
                  type="text"
                        placeholder="Enter NGO address"
                  value={ngoAddress}
                  onChange={(e) => setNgoAddress(e.target.value)}
                        className="w-full"
                />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Registration ID *
                      </label>
                <Input
                  type="text"
                  placeholder="e.g., 12wdnddeer3"
                  value={regID}
                  onChange={(e) => setRegID(e.target.value)}
                        className="w-full"
                />
                    </div>
              </>
            )}

                {/* Sign Up Button */}
                <Button
                  text="Create Account"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                />
          </form>

              {/* Social Sign Up for Volunteers */}
          {toggleFlow === "volunteer" && (
                <>
                  {/* Divider */}
                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500 font-medium">Or sign up with</span>
                    </div>
                  </div>

                  {/* Social Sign Up Buttons */}
                  <div className="flex justify-center space-x-4 mb-8">
                    <button
                      onClick={handleGoogleregister}
                      className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      title="Sign up with Google"
                    >
                      <img src={google} alt="Google" className="w-6 h-6" />
                    </button>
                    <button
                      className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      title="Sign up with Facebook"
                    >
                      <img src={facebook} alt="Facebook" className="w-6 h-6" />
                    </button>
            </div>
                </>
              )}

              {/* Login Link */}
              <div className="text-center">
                <p className="text-gray-600 font-medium">
                  Already have an account?{" "}
                  <Link 
                    to={toggleFlow === "volunteer" ? "/volunteer/login" : "/ngo/login"} 
                    className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-purple-400"
                  >
                    Sign In
            </Link>
          </p>
        </div>
      </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
