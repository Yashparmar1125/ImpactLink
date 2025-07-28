/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import landingImg from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/News/landingImg.png'
import Photography from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Recommended Domains/Photography.png'
import videoediting from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Recommended Domains/VideoEditing.png'
import cooking from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Recommended Domains/Cooking.png'
import eventplanning from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Recommended Domains/EventPlanning.png'
import news1 from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/News/News-1.jpg'
import news2 from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/News/News-2.jpg'
import news3 from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/News/News-3.jpg'
import githubLogo from '../../assets/Images/githubLogo.svg'
import linkedinLogo from '../../assets/Images/linkedinLogo.svg'
import nayanPic from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Our Team Pics/NayanOriginal.jpg'
import siddhiPic from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Our Team Pics/SiddhiOriginal.png'
import yashPic from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Our Team Pics/YashOriginal.jpg'
import aartiSharma from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Testimonials/Aarti Sharma Testimonials.jpg'
import raviPatel from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Testimonials/Ravi Patel Testimonials.png'
import globalImpactImg from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Testimonials/Golbal Impact Partners Testimonials.png'
import wingsOfHopeImg from '../../assets/CodeAThon Images/CodeAThon Images/Landing Page All Images/Testimonials/Wings Of Hope Trust Testimonials.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Chatbots from '../../components/Chatbots';


const Home = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const toggleChatbot = () => setIsChatbotVisible(!isChatbotVisible);

  // --- Recommended Domains Data ---
  const recommendedDomainData = [
    {
      img: Photography,
      name: "Photography",
      desc: "Capture moments and tell stories through your lens. Join our photography volunteers!",
      icon: "📷"
    },
    {
      img: videoediting,
      name: "Video Editing",
      desc: "Edit and create impactful videos for social causes. Showcase your editing skills!",
      icon: "🎬"
    },
    {
      img: cooking,
      name: "Cooking",
      desc: "Cook and serve for community events. Spread joy with your culinary talent!",
      icon: "👩‍🍳"
    },
    {
      img: eventplanning,
      name: "Event Planning",
      desc: "Organize and manage events for NGOs. Be the force behind successful campaigns!",
      icon: "📅"
    },
  ];

  // --- News Data ---
  const newsData = [
    { img: news1, title: "Beach Cleanup Drive", desc: "Volunteers made a difference at the city beach." },
    { img: news2, title: "School Wall Painting", desc: "Brightening up schools with art and color." },
    { img: news3, title: "Fundraiser Success", desc: "Record funds raised for local NGOs." },
  ];

  // --- Why Choose Us Features ---
  const features = [
    { icon: "🤖", title: "AI-Powered Matching", desc: "Smart recommendations for volunteers and NGOs." },
    { icon: "💬", title: "Instant Chatbot Help", desc: "24/7 support for all your queries." },
    { icon: "🔒", title: "Secure & Trusted", desc: "Your data and privacy are our top priority." },
    { icon: "🌐", title: "Global Impact", desc: "Opportunities to make a difference worldwide." },
  ];

  // --- Testimonials Data ---
  const testimonials = [
    {
      img: aartiSharma,
      name: "Aarti Sharma",
      quote: "Volunteering with [NGO Name] has been a life-changing experience. Painting the school walls was not just an activity; it felt like creating a brighter future for the children."
    },
    {
      img: raviPatel,
      name: "Ravi Patel",
      quote: "Being a part of the beach cleanup drive was rewarding beyond words. Seeing the transformation firsthand made me proud to contribute to such meaningful work."
    },
    {
      img: wingsOfHopeImg,
      name: "Wings of Hope Trust",
      quote: "Our volunteers are the backbone of every project. Their dedication and creativity made the railway station painting activity a huge success."
    },
    {
      img: globalImpactImg,
      name: "Global Impact Partners",
      quote: "We are blessed to have such compassionate individuals who tirelessly worked on the beach cleanup drive. The community owes them a cleaner environment and renewed hope."
    }
  ];

  // --- Team Data ---
  const team = [
    {
      img: nayanPic,
      name: "Nayan Pawar",
      github: "https://github.com/Nayanpawar03",
      linkedin: "https://www.linkedin.com/in/nayan-pawar03/"
    },
    {
      img: siddhiPic,
      name: "Siddhi Gawade",
      github: "https://github.com/SiddhiGawade",
      linkedin: "https://www.linkedin.com/in/siddhi-gawade"
    },
    {
      img: yashPic,
      name: "Yash Parmar",
      github: "https://github.com/Yashparmar1125",
      linkedin: "https://www.linkedin.com/in/yashparmar1125"
    }
  ];

  // --- Sliders Settings ---
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 1 } }
    ]
  };
  const newsSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 relative">
      <Navbar />
      
      {/* Hero Section - Full Width */}
      <section className="w-full relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <img 
          className="absolute inset-0 w-full h-full object-cover object-bottom" 
          src={landingImg} 
          alt="Volunteers making impact" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#3b82f6]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#1e3a8a]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#3b82f6]/30 rounded-full blur-lg animate-bounce-slow"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/30 shadow-2xl">
              <span className="text-white text-sm font-semibold drop-shadow-lg">🌟 Join 500+ Active Volunteers</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] animate-fade-in-up">
            Make an Impact, 
            <span className="block text-[#3b82f6] mt-3 animate-fade-in-up-delay bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">One Step at a Time</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-4xl leading-relaxed animate-fade-in-up-delay-2">
            Connecting passionate volunteers with meaningful causes worldwide. 
            <span className="block mt-2 text-[#3b82f6] font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Transform lives, one volunteer at a time.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up-delay-3">
            <a 
              href="#about" 
              className="group px-10 py-5 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] hover:from-[#1e40af] hover:to-[#1e3a8a] text-white rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-[#1e3a8a]/50 animate-bounce-slow relative overflow-hidden"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a 
              href="#domains" 
              className="group px-10 py-5 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white border-2 border-white/50 hover:border-white/70 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-white/20 animate-bounce-slow-delay"
            >
              Explore Opportunities
            </a>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">500+</div>
              <div className="text-[#3b82f6] font-semibold drop-shadow-lg">Active Volunteers</div>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">50+</div>
              <div className="text-[#3b82f6] font-semibold drop-shadow-lg">Partner NGOs</div>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">1000+</div>
              <div className="text-[#3b82f6] font-semibold drop-shadow-lg">Lives Impacted</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center shadow-lg">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Recommended Domains - Full Width */}
      <section className="w-full bg-gradient-to-br from-white via-gray-50 to-white py-24 relative overflow-hidden" id="domains">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="w-20 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-4 animate-width-expand"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Recommended Domains
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
              Discover opportunities that match your skills and passion
            </p>
            <div className="mt-8 text-[#1e3a8a] font-medium">
              ✨ Choose from our curated selection of impactful opportunities
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {recommendedDomainData.map((data, idx) => (
              <div 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden animate-fade-in-up relative" 
                key={idx}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Card Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]"></div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={data.img} 
                    alt={data.name} 
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{data.icon}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1e3a8a] transition-colors duration-300">{data.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base">{data.desc}</p>
                  <button className="w-full py-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] hover:from-[#1e40af] hover:to-[#1e3a8a] text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-[#1e3a8a]/30">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Feed - Full Width */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="w-20 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-4 animate-width-expand"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Latest News & Updates
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
              Stay informed about our latest initiatives and success stories
            </p>
            <div className="mt-8 text-[#1e3a8a] font-medium">
              📰 Discover the impact we&apos;re making together
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsData.map((news, idx) => (
              <div 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden animate-fade-in-up relative" 
                key={idx}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                {/* Card Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]"></div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={news.img} 
                    alt={news.title} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-[#1e3a8a] group-hover:scale-110 transition-transform duration-300">
                    📰 News
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1e3a8a] transition-colors duration-300">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base mb-6">{news.desc}</p>
                  <button className="w-full py-3 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] hover:from-[#1e40af] hover:to-[#1e3a8a] text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-[#1e3a8a]/30">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us - Full Width */}
      <section className="w-full bg-gradient-to-br from-white via-gray-50 to-white py-24 relative overflow-hidden" id="about">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="w-20 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-4 animate-width-expand"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              About ImpactLink
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
              Building bridges between passion and purpose
            </p>
            <div className="mt-8 text-[#1e3a8a] font-medium">
              🌟 Connecting hearts, creating impact
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative animate-fade-in-up">
              <div className="relative">
                <img 
                  src={landingImg} 
                  alt="About ImpactLink" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white p-6 rounded-2xl shadow-2xl animate-bounce-slow">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm font-medium">Active Volunteers</div>
              </div>
            </div>
            <div className="animate-fade-in-up-delay">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                About ImpactLink
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our platform bridges the gap between passionate volunteers and meaningful causes. 
                Built with cutting-edge technology, we provide AI-powered matching, instant chatbot 
                assistance, and personalized recommendations to maximize your social impact.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 animate-fade-in-up group">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-[#1e3a8a] transition-colors duration-300">Connect with NGOs and volunteers worldwide</span>
                </div>
                <div className="flex items-center space-x-4 animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
                  <div className="w-4 h-4 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-[#1e3a8a] transition-colors duration-300">Fast, secure, and easy-to-use platform</span>
                </div>
                <div className="flex items-center space-x-4 animate-fade-in-up group" style={{ animationDelay: '0.4s' }}>
                  <div className="w-4 h-4 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-[#1e3a8a] transition-colors duration-300">Make a real difference in your community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Full Width */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="w-20 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-4 animate-width-expand"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Why Choose ImpactLink?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
              We provide the tools and connections you need to make a meaningful impact
            </p>
            <div className="mt-8 text-[#1e3a8a] font-medium">
              ✨ Experience the difference with our innovative platform
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((f, idx) => (
              <div 
                className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden" 
                key={idx}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Card Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]"></div>
                
                <div className="w-16 h-16 bg-gradient-to-r from-[#e6f3ff] to-[#dbeafe] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#1e3a8a] group-hover:to-[#1e40af] transition-all duration-500 transform group-hover:scale-110">
                  <span className="text-2xl group-hover:text-white transition-colors duration-500">{f.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1e3a8a] transition-colors duration-300">{f.title}</h4>
                <p className="text-gray-600 leading-relaxed text-base">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Full Width */}
      <section className="w-full bg-gradient-to-br from-white via-gray-50 to-white py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="w-20 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-4 animate-width-expand"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Meet Our Team
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
              The passionate minds behind ImpactLink
            </p>
            <div className="mt-8 text-[#1e3a8a] font-medium">
              👥 Dedicated professionals committed to social impact
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {team.map((member, idx) => (
              <div 
                className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden" 
                key={idx}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                {/* Card Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]"></div>
                
                <div className="relative mb-6">
                  <div className="relative">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-32 h-32 object-cover rounded-2xl mx-auto border-4 border-[#e6f3ff] group-hover:border-[#1e3a8a] transition-all duration-500 transform group-hover:scale-110 shadow-lg" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#1e3a8a] transition-colors duration-300">{member.name}</h4>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-[#1e3a8a] hover:to-[#1e40af] hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
                    title="GitHub"
                  >
                    <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-[#1e3a8a] hover:to-[#1e40af] hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
                    title="LinkedIn"
                  >
                    <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Full Width */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="w-20 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] mx-auto mb-4 animate-width-expand"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Voices of Impact
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
              Hear from our volunteers and partners about their experiences
            </p>
            <div className="mt-8 text-[#1e3a8a] font-medium">
              💬 Real stories from real people making real change
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {testimonials.map((t, idx) => (
              <div 
                className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden" 
                key={idx}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Card Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]"></div>
                
                <div className="relative mb-6">
                  <img 
                    src={t.img} 
                    alt={t.name} 
                    className="w-20 h-20 object-cover rounded-2xl mx-auto border-4 border-[#e6f3ff] group-hover:border-[#1e3a8a] transition-all duration-500 transform group-hover:scale-110 shadow-lg" 
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    &ldquo;
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-base">&ldquo;{t.quote}&rdquo;</p>
                <div className="font-bold text-[#1e3a8a] text-lg group-hover:text-[#1e40af] transition-colors duration-300">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Chatbot Button */}
      <button 
        className="fixed bottom-6 right-6 bg-[#1e3a8a] hover:bg-[#1e40af] text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40" 
        onClick={toggleChatbot} 
        title="Open Chatbot"
      >
        <span className="text-xl">💬</span>
      </button>
      {isChatbotVisible && <Chatbots onClose={toggleChatbot} />}
      <Footer />
    </div>
  );
}

export default Home
