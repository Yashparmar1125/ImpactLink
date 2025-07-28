import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/Images/ImpactLogo.png";
import google from "../../assets/Images/google.png";
import facebook from "../../assets/Images/facebook.png";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuthNgo } from "../../API/api";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
        const result = await googleAuthNgo(authResult['code']);
        console.log(result.status);
        navigate('/ngodashboard');
        alert("Successfully Logged In");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  });

  const handleClick = async () => {
    setLoading(true);
    setError("");
    
    try {
      const url = "http://localhost:5000/api/auth/ngo/login";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Successfully Logged In");
        console.log("Successfully Logged In", data);
      } else {
        const errorData = await response.json();
        console.log("Error:", errorData.message);
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error while logging in:", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/50 to-teal-50/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Header Section */}
      <header className="relative z-20 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="ImpactLink" className="h-12 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
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
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  NGO Portal
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Manage Your
                  <span className="block bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    Impact Campaigns
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Welcome back! Access your NGO dashboard to manage volunteer campaigns, connect with passionate volunteers, and track your organization&apos;s impact in the community.
                </p>
              </div>

              {/* Features Grid */}
              {/* <div className="grid grid-cols-1 gap-6 mb-12">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Management</h3>
                      <p className="text-gray-600">Create and manage volunteer campaigns with ease</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Volunteer Network</h3>
                      <p className="text-gray-600">Connect with passionate volunteers from around the world</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact Analytics</h3>
                      <p className="text-gray-600">Track campaign progress and measure your community impact</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Stats Section */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Platform Statistics</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">Active NGOs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">500+</div>
                    <div className="text-sm text-gray-600">Volunteers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">1000+</div>
                    <div className="text-sm text-gray-600">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative">
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-t-3xl"></div>
              
              {/* Mobile Logo */}
              <div className="lg:hidden text-center mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl mb-6">
                  <img 
                    className="h-16 w-auto filter drop-shadow-lg transition-transform duration-300 hover:scale-110" 
                    src={logo} 
                    alt="ImpactLink Logo" 
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  NGO Portal
                </h2>
                <p className="text-gray-600 font-medium">
                  Sign in to your NGO account
                </p>
              </div>

              {/* Desktop Header */}
              <div className="hidden lg:block text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Sign In
                </h2>
                <p className="text-gray-600 font-medium">
                  Access your NGO dashboard
                </p>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
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
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm font-medium animate-pulse">
                    ⚠️ {error}
                  </div>
                )}

                {/* Login Button */}
                <Button
                  text={loading ? "Signing In..." : "Sign In"}
                  onClick={handleClick}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                />
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="flex justify-center space-x-4 mb-8">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-200 rounded-xl hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  title="Sign in with Google"
                >
                  <img src={google} alt="Google" className="w-6 h-6" />
                </button>
                <button
                  className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-200 rounded-xl hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  title="Sign in with Facebook"
                >
                  <img src={facebook} alt="Facebook" className="w-6 h-6" />
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-gray-600 font-medium">
                  Don&apos;t have an account?{" "}
                  <Link 
                    to="/signup" 
                    className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-400"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
