import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsSuitHeartFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_log'>Fayane Jean</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
<a href='https://facebook.com'><BsFacebook/></a>
<a href='https://instagram.com'><BsInstagram/></a>
<a href='https://twitter.com'><BsTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Made with <BsSuitHeartFill/></small>
      </div>
      </footer>
  )
}

export default Footer