import React from 'react'

const Buttons = ({ text, onClick }) => {
  return (
    <div>
      <button className='login-btn' onClick={onClick}>{text}</button>
    </div>
  )
}

export default Buttons
