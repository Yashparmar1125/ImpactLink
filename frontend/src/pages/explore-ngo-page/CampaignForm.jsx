import React from 'react'
import Navbar from '../../components/Navbar'
import '../../styles/campaignForm.css'

const CampaignForm = () => {
  return (
    <div>
      <Navbar />

      <div className='form'>

        <div className='header-div'>
          <p>Applying for Social Service Internship</p>
        </div>

        <div className='main-div'>

          <div className='left-field'>
            <div className='input'>
              <h3>Name</h3>
              <input type="text" placeholder='Name' />
            </div>

            <div className='input'>
              <h3>Email</h3>
              <input type="text" placeholder='xyz@gmail.com' />
            </div>

            <div className='input'>
              <h3>Gender</h3>
              <input type="text" placeholder='eg. male' />
            </div>

            <div className='input'>
              <h3>Occupation</h3>
              <input type="text" placeholder='eg. Student' />
            </div>

            <div className='input'>
              <h3>Availability</h3>
              <input type="text" placeholder='Days/Hours Available Per Week' />
            </div>
          </div>

          <div className='right-field'>
            <div className='input'>
              <h3>Age</h3>
              <input type="text" placeholder='eg. 18' />
            </div>

            <div className='input'>
              <h3>Contact</h3>
              <input type="text" placeholder='eg. 8913828789' />
            </div>

            <div className='input'>
              <h3>Address</h3>
              <input type="text" placeholder='eg. Mumbai' />
            </div>

            <div className='input'>
              <h3>Duration</h3>
              <input type="text" placeholder='eg. 1 Month' />
            </div>

            {/* <div className='input'>
              <h3>Name</h3>
              <input type="text" placeholder='Name' />
            </div> */}
          </div>
        </div>

        <div className='form-content'>
          <h2>Declaration</h2>
          <p>I hereby acknowledge and understand that the certificate of completion for this internship will only be provided upon the successful completion of all assigned tasks and the full duration of the internship as agreed upon.I also understand that if I fail to complete the internship, including leaving prematurely or not fulfilling the required responsibilities, I will not be eligible to receive the certificate of completion.</p>
          <p>By checking the box below, I confirm that I have read, understood, and agree to these terms and conditions.</p>
          <div className='confirmation'>
            <input type="checkbox" name="" id="" />
            <p>I agree to the terms and conditions.</p>
          </div>

          <div className='submit-btn'>
            <button>Submit Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CampaignForm
