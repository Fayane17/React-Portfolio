import React from 'react'
import './about.css'
import ME from '../../assets/Subject2.png'
import { FiAward } from 'react-icons/fi'
import { FiUsers } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        {/* ----------i'll fill this in properly at a later date------------------- */}
        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon' />
              <h5>Experience</h5>
              <small>N/a</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>N/a</small>
            </article>
            <article className='about_card'>
              <FaRegFolder className='about_icon' />
              <h5>Projects</h5>
              <small>N/a</small>
            </article>
          </div>

          <p>
          I am currently 22 years old and a full stack developer student at UCF, diving into the exciting world of coding for the first time.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about