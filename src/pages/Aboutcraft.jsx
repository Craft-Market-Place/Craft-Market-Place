import React from 'react'
import Imagen1 from '../../public/blanket.png'
import Imagen2 from '../../public/doll.jpg'
import Imagen3 from'../../public/cogín.jpg'
import "./Aboutcraft.css"

const Aboutcraft = () => {
  return (
    <div className="About">
    <h1>We are your community! Craft-Hand-Made Community.</h1>
    <div className="images">
    <img className="image-doll" src={Imagen2} alt="doll"></img>
    <img className="image-cogin" src={Imagen3} alt="cogín"></img>
    <img className="image-blanket" src={Imagen1} alt="blanket"></img>
    </div>
    <h2>If your first option is second-hand and also handmade, this is your place.  </h2>
    <h3>So tell us, what is your first option?</h3>
    </div>    
  )
}

export default Aboutcraft