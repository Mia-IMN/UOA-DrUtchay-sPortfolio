import React from 'react'
import { Parallax } from 'react-parallax'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'


const ContactUs = () => {
  return (
    <Parallax className='Contact' id='Contact'>
        <h1>Contact</h1>
        <p>Email:</p>
        <h3>uokorji@uoa.associates</h3>
        <p>Also Connect with me on</p>
        <div className="icons">
        <FaFacebook className='icon' size={25}/>
        <FaTwitter className='icon' size={25}/>
        <FaInstagram className='icon' size={25}/>
        <FaTelegram className='telegram' size={25}/>
        </div>
        <p className='copyright'>&copy; 2021</p>
    </Parallax>
  )
}

export default ContactUs