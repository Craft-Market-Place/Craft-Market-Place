import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <h5 className= "footerText">© Meraky 2023</h5>
        <Link to={'/warning'}><h5 className= "footerText">Aviso legal</h5></Link>
        <Link to={'/cookies'}><h5 className= "footerText">Política de cookies</h5></Link>
      </div>
    </footer>
  )
}
export default Footer
