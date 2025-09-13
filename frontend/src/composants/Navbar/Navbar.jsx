import React, {useState} from 'react'
import "./Navbar.css"
import logo from "../Assets/ecommerce_logo.avif"
import cart from "../Assets/cart_icon.png"
const Navbar = () => {
const[Menu,setMenu]=useState("Accueil");

  return (
    <div className="Navbar">

      <div className="logo">  
        <img src={logo} alt="" />
        <p>Black discount</p>
      </div> 
    
      <ul className="catégories">
        <li onClick={()=>{setMenu("Accueil")}}>Acceuil{Menu==="Accueil"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Hommes")}}>Hommes{Menu==="Hommes"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Femmes")}}>Femmes{Menu==="Femmes"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Enfants")}}>Enfants{Menu==="Enfants"?<hr/>:<></>}</li>
      </ul>

      <div className="connexion-panier">
        <button>Connexion</button>
        <img src={cart} alt="" />
      </div>
        
    </div>
    
  )
}

export default Navbar