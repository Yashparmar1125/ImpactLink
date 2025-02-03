import React from 'react'
import Navbar from '../../../components/Navbar'
import '../../../styles/createCampaignForm.css'

const CreateCampaignForm = () => {
  return (
    <div>
      <Navbar />

      <div className='form'>

        <div className='header-div'>
          <p>Create Campaign</p>
        </div>

        <div className='main-div'>

          <div className='left-field'>
            <div className='input'>
              <h3>Campaign Title</h3>
              <input type="text" placeholder='Campaign Title' />
            </div>

            <div className='input'>
              <h3>Start Date</h3>
              <input type="text" placeholder='Remote/On-site' />
            </div>

            <div className='input'>
              <h3>Internship Mode</h3>
              <input type="text" placeholder='eg. male' />
            </div>

            <div className='input'>
              <h3>Individual/Group Task</h3>
              <input type="text" placeholder='Individual / Group' />
            </div>

            <div className='input'>
              <h3>Who can apply</h3>
              <input type="text" placeholder='who can apply' />
            </div>

            <div className='input'>
              <h3>Perks</h3>
              <input type="text" placeholder='perks' />
            </div>
          </div>

          <div className='right-field'>
            <div className='input'>
              <h3>Volunteer Role</h3>
              <input type="text" placeholder='Volunteer Role' />
            </div>

            <div className='input'>
              <h3>Duration (In ours only)</h3>
              <input type="text" placeholder='50 hours' />
            </div>

            <div className='input'>
              <h3>Location</h3>
              <input type="text" placeholder='Location' />
            </div>

            <div className='input'>
              <h3>Interns responsibilities</h3>
              <input type="text" placeholder='responsibilities' />
            </div>

            <div className='input'>
              <h3>Other requirements</h3>
              <input type="text" placeholder='responsibilities' />
            </div>

            <div className='input'>
              <h3>Upload image of NGO</h3>
              <input type="text" placeholder='Upload image of NGO' />
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

export default CreateCampaignForm
