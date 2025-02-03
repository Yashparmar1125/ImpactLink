import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../../styles/ngoDetail.css'
import videoediting from '../../assets/Images/Video editing.jpg'

const NgoDetail = () => {
  return (
    <div>
      <Navbar />
      <div className='head'>
        <div className='header-line'>
          <h1>Applying for Social Service Internship as Video Editor</h1>
        </div>

        <div className='ngo-detail'>

          <div className='part1'>
            <img className='campaign-img' src={videoediting} alt="" />
            <div className='camp-content'>
              <h2>Video Editor</h2>
              <h3>XYZ Technology</h3>

              <div className='internship-detail'>
                <p>Start Date: DD-MM-YYYY</p>
                <p>Duration: 2 Months</p>
                <p>Internship Mode: On-Site</p>
                <p>Location: Mumbai</p>
                <p>Involvement: Individual</p>
              </div>
            </div>
          </div>

          <hr />
          <div>
            <p className='part-heading'>About the work from home job/internship</p>
            <ol>
              <li>Work on Graph neural network or optimization algorithm to code and then test it</li>
              <li>Work on other Python tasks if not working on a deep learning algorithm</li>
              <li>Participate in daily sync-up calls to discuss progress.</li>
            </ol>
          </div>
          <hr />
          <div>
            <p className='part-heading'>Who can apply?</p>
            <p>Only those candidates can apply who:</p>
            <ol>
              <li>Are available for the work from home job/internship</li>
              <li>can start the work from home job/internship between 7th Jan'25 and 11th Feb'25</li>
              <li>are available for duration of 2 months</li>
              <li>have relevant skills and interests</li>
            </ol>
          </div>
          <hr />
          <div>
            <p className='part-heading'>Other requirements</p>
            <ol>
              <li>Candidates who can spend 40 hrs should apply</li>
              <li>Candidates close to Delhi NCR would be preferred</li>
              <li>The candidate should be ready to work on Saturdays</li>
            </ol>
            <p className='part-heading'>Perks: <span className='span-class'>Letter of recommendation</span></p>
          </div>
          <hr />
          <div>
            <p className='part-heading'>About XYZ Technologies Pvt Ltd</p>
            <p>XYZ Technologies works in the electronics design industry to create automation solutions for faster time to market. We design smart algorithms that help design electronics faster.</p>
          </div>
          <div className='apply-btn'>
            <button>Apply Now</button>
          </div>
        </div>

      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default NgoDetail
