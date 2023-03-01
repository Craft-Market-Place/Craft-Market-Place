import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

export const Footer = () => {

  return (
    <footer>
      <div className="footerContainer">
        <h5 className= "footerText">© Craft 2023 Spain S.L. Free bulletin board</h5>
        <Link to={'/warning'}><h5 className= "footerText">Legal</h5></Link>
        <Link to={'/cookies'}><h5 className= "footerText">Cookie Settings</h5></Link>
        {/* Terms & Conditions
        Privacy
        Returns */}
        
      </div>
    </footer>
  )
}
export default Footer
