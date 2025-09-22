import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.jpeg'
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>offre Exclisive</h1>
        <h1>pour toi</h1>
        <p>SUR LES PRODUITS LES PLUS POPULAIRES</p>
        <button>Accéder</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
