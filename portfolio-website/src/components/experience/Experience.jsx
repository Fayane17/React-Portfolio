import React from 'react'
import './experience.css'
import {BsStars} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
<div className="experience_frontend">
<h3>Frontend development</h3>
<div className='experience_content'>
<article className='experience_details'>
    <BsStars className='experience_details-icon'/>
   <div>
   <h4>HTML</h4>
    <small className='text-light'>Basic</small>
   </div>
  </article>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
    <div>
    <h4>CSS</h4>
    <small className='text-light'>Basic</small>
    </div>
  </article>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
    <div>
    <h4>JavaScript</h4>
    <small className='text-light'>Basic</small>
    </div>
  </article>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
    <div>
    <h4>JQuery</h4>
    <small className='text-light'>Basic</small>
    </div>
  </article>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
    <div>
    <h4>Tailwind</h4>
    <small className='text-light'>Basic</small>
    </div>
  </article>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
    <div>
    <h4>Bootstrap</h4>
    <small className='text-light'>Basic</small>
    </div>
  </article>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
   <div>
   <h4>ReactJS</h4>
    <small className='text-light'>Basic</small>
   </div>
  </article>
  </div>
</div>

<div className="experience_backend">
<h3>Backend development</h3>
  <div className='experience_content'>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
   <div>
   <h4>Node JS</h4>
    <small className='text-light'>Basic</small>
   </div>
  </article>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
    <div>
    <h4>MongoDB</h4>
    <small className='text-light'>Basic</small>
    </div>
  </article>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
    <div>
    <h4>Express JS</h4>
    <small className='text-light'>Basic</small>
    </div>
  </article>
  <article className='experience_details'>
    <BsStars className='experience_details-icon'/>
   <div>
   <h4>MySQL</h4>
    <small className='text-light'>Basic</small>
   </div>
  </article>
</div>
</div>
      </div>
      </section>
  )
}

export default Experience