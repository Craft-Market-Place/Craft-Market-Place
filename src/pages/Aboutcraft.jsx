import React from 'react'
import Imagen1 from '../../public/Manta.png'
import Imagen2 from '../../public/muñeca.jpg'
import Imagen3 from'../../public/cogín.jpg'
import "./Aboutcraft.css"

const Aboutcraft = () => {
  return (
    <div className="About">
    <h1>We are your community! Craft-Hand-Made Community.</h1>
    <div className="Imagenes">
    <img className="imagen-muñeca" src={Imagen2} alt="muñeca"></img>
    <img className="imagen-cogín" src={Imagen3} alt="cogín"></img>
    <img className="imagen-manta" src={Imagen1} alt="manta"></img>
    </div>
    <h2>If your first option is second-hand and also handmade, this is your place.  </h2>
    <h3>So tell us, what is your first option?</h3>
    </div>    
  )
}

export default Aboutcraft