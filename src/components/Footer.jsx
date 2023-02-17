import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-right">
        <h5 className= "footer-Buy">Buy</h5>
        <h5 className= "footer-Sell">Sell</h5>
        <h5 className= "footer-Help">Subscribe</h5>
        <Link to='/aboutcraft' className="footer-About">About Craft</Link>
        <h5 className= "footer-Help">Help</h5>
    </div>

</footer>
  )
}
export default Footer