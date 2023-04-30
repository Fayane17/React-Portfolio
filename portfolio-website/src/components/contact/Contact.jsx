import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
<article className="contact_option">
  <HiOutlineMail className='icom' />
<h4>Email</h4>
<h5>Fayane.jea17@gmail.com</h5>
<a href='mailto:fayane.jean17@gmail.com' target='_blank'>Send a message</a>
</article>
<article className="contact_option">
  <FaWhatsapp className='icon' />
<h4>WhatsApp</h4>
<h5>123-456-7890</h5>
<a href='#'target='_blank'>Send a message</a>
</article>
        </div>
        {/* End of Contact Options */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea type='message' row='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default contact