import React from 'react'
import './Nouveau.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
import arrow_icon from '../Assets/arrow.png'

const nouveau = () => {
  return (
 <div className='hero'>
  <div className="hero-left">
      <h2>Nouveautés seulement </h2>
        
        <div className="hero-hand-icon">
          <p>Nouveau</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p>pour tout le monde</p>
        <div className="hero-latest-btn">
          Dernière collection
          <img src={arrow_icon} alt="" />
        </div>
    </div>
     <div className="hero-right">


<img src={hero_image} alt="" />


      </div>
  </div>
  )
}

export default nouveau