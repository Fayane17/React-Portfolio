import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/placeholder.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1}/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/alexbrenes999/project1' className='btn'>Github</a>
          <a href='https://alexbrenes999.github.io/project1/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG2}/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/ChrisEliGirard/Jet-Set-Social' className='btn'>Github</a>
          <a href='https://serene-beach-93535.herokuapp.com/login' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3}/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
      
      </section>
  )
}

export default Portfolio
