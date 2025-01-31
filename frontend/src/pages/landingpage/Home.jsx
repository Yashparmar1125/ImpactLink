/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../../styles/navbar.css'
import '../../styles/footer.css'
import '../../styles/landing.css'
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

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };

   
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    console.log("Clicked");
    setIsChatbotVisible(!isChatbotVisible);
  };

  const duplicateNewsImages = () => {
    const newsFeed = document.querySelector('.news-feed');
    if (newsFeed) {
      newsFeed.innerHTML += newsFeed.innerHTML; // Duplicate content for seamless scrolling
    }
  };

  useEffect(() => {
    duplicateNewsImages();
  }, []);

  const recommendedDomainData = [
    {
      img: Photography,
      name: "Photography",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eius soluta pariatur, corporis ad quo neque repellat labore maiores nisi modi aperiam ullam sunt suscipit voluptatibus. Adipisci explicabo sint corrupti"
    },
    {
      img: videoediting,
      name: "Video Editing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eius soluta pariatur, corporis ad quo neque repellat labore maiores nisi modi aperiam ullam sunt suscipit voluptatibus. Adipisci explicabo sint corrupti"
    },
    {
      img: cooking,
      name: "Cooking",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eius soluta pariatur, corporis ad quo neque repellat labore maiores nisi modi aperiam ullam sunt suscipit voluptatibus. Adipisci explicabo sint corrupti"
    },
    {
      img: eventplanning,
      name: "Event Planning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eius soluta pariatur, corporis ad quo neque repellat labore maiores nisi modi aperiam ullam sunt suscipit voluptatibus. Adipisci explicabo sint corrupti"
    },
  ]

  const voicePersonData = [
    {
      img: aartiSharma,
      name: "Aarti Sharma",
      voice: "Volunteering with [NGO Name] has been a life-changing experience. Painting the school walls was not just an activity; it felt like creating a brighter future for the children."
    },
    {
      img: raviPatel,
      name: "Ravi Patel",
      voice: "Being a part of the beach cleanup drive was rewarding beyond words. Seeing the transformation firsthand made me proud to contribute to such meaningful work."
    },
    {
      img: wingsOfHopeImg,
      name: "Wings of Hope Trust",
      voice: "Our volunteers are the backbone of every project. Their dedication and creativity made the railway station painting activity a huge success."
    },
    {
      img: globalImpactImg,
      name: "Global Impact Partners",
      voice: "We are blessed to have such compassionate individuals who tirelessly worked on the beach cleanup drive. The community owes them a cleaner environment and renewed hope."
    }
  ]

  // For the recommended domains
const recommendedDomain = recommendedDomainData.map((data, index) => (
  <div className='recommend-card' key={index}>
    <img src={data.img} alt={data.name} />
    <div className='rec-card-content'>
      <h2>{data.name}</h2>
      <p>{data.desc}</p>
      <button>Apply Now</button>
    </div>
  </div>
));

// For the people voice content
const peopleVoiceContent = voicePersonData.map((data, index) => (
  <div className='card' key={index}>
    <img src={data.img} alt={data.name} />
    <p className='voice-name'>{data.name}</p>
    <p className='voice'>{data.voice}</p>
  </div>
));


  return (
    <div className='home-container' id="home">
      <Navbar />

      <div className='landing-img'>
        <img src={landingImg} alt="landingImg" />
      </div>

      <h1 className='h1-tag'>Recommended Domains Based on Your Interests</h1>

      <div className='recommendation-slider'>
        {recommendedDomain}
      </div>

      <h1 className='h1-tag'>Keep Updated Yourself</h1>
      <div className='news-feed'>
        <div className='news-imgs'>
          <img src={news1} alt="news1" />
        </div>
        <div className='news-imgs'>
          <img src={news2} alt="news2" />
        </div>
        <div className='news-imgs'>
          <img src={news3} alt="news3" />
        </div>
      </div>
      {/* <hr /> */}

      <div className='about' id="about">
        <div className='about-section' >
          <h1>About Us</h1>
          <p>Our platform, built with modern cutting-edge technologies, bridges the gap between volunteers and NGOs, making it seamless to connect and contribute. We’ve integrated advanced features like a smart chatbot for instant assistance and AI based personalized recommendations to help you find opportunities that align with your passion for social impact.</p>
        </div>
      </div>
      <div className='team-container'>
        <div className='team'>
          <h1>Our Team</h1>
          <div className='member-container'>
            <div className='member'>
              <img className='member-img' src={nayanPic} alt="Nayan Pawar" />
              <p>Nayan Pawar</p>
              <div className='socials-container'>
                <Link to="https://github.com/Nayanpawar03">
                  <img className="github-logo member-socials" src={githubLogo} alt="github" />
                </Link>
                <Link to="https://www.linkedin.com/in/nayan-pawar03/">
                  <img className="member-socials" src={linkedinLogo} alt="linkedIn" />
                </Link>
              </div>
            </div>

            <div className='member'>
              <img className='member-img' src={siddhiPic} alt="Siddhi Gawade" />
              <p>Siddhi Gawade</p>
              <div>
                <Link to="https://github.com/SiddhiGawade">
                  <img className="github-logo member-socials" src={githubLogo} alt="github" />
                </Link>
                <Link to="https://www.linkedin.com/in/siddhi-gawade">
                  <img className="member-socials" src={linkedinLogo} alt="linkedIn" />
                </Link>
              </div>
            </div>

            <div className='member'>
              <img className='member-img' src={yashPic} alt="Yash Parmar" />
              <p>Yash Parmar</p>
              <div>
                <Link to="https://github.com/Yashparmar1125">
                  <img className="github-logo member-socials" src={githubLogo} alt="github" />
                </Link>
                <Link to="https://www.linkedin.com/in/yashparmar1125">
                  <img className="member-socials" src={linkedinLogo} alt="linkedIn" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='choosing-container'>
        <h1>Why Choose Us?</h1>
        <p>Here’s why our platform is the perfect choice! Harnessing the power of cutting-edge technology, we create seamless connections between volunteers and NGOs, making it easier than ever to contribute to causes that matter. Whether you’re an NGO looking for dedicated volunteers or an individual eager to make an impact, our platform helps you find the right fit.
          With smart tools like a chatbot for instant support and AI-based recommendations, we ensure a personalized and efficient experience that connects you to meaningful opportunities for social change.</p>
      </div>


      <div className='voices-container'>
        <h1>Voices of Impact</h1>
        <div className='voicecard-container'>
          {peopleVoiceContent}
        </div>
      </div>
      <div className="floating-button" onClick={toggleChatbot}>
        <span>💬</span>
      </div>

      {/* Conditionally Render the Chatbot */}
      {isChatbotVisible && <Chatbots />}
      <Footer />
    </div >
  )
}

export default Home
