import React from 'react'
import "./Footer.css"
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'



function Footer ()  {

  return (
    <Nav className='footer'
      // activeKey="/home"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item >
        <Link className='footer-text' to='/'>© Craft Marketplace 2023 Spain S.L.</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='footer-text' to='/CookiesPolicy' href="#CookiesPolicy">Privacy Policy Cookies</Link>
      </Nav.Item>
      <Nav.Item>
        <Link  className='footer-text' to='/AboutMk' href="#AboutMk"> About Craft Marketplace</Link>
      </Nav.Item> 
      
       <Nav.Item>
        <Link className='footer-text' > <img src={facebook} alt="Craft-Marketplace"className='socialmedia'/>       
        </Link>
      </Nav.Item> 
      <Nav.Item>
        <Link className='footer-text' > <img src={instagram} alt="Craft-Marketplace"className='socialmedia'/>       
        </Link>
      </Nav.Item> 
      <Nav.Item>
        <Link className='footer-text' > <img src={twitter} alt="Craft-Marketplace"className='socialmedia'/>       
        </Link>
      </Nav.Item> 
    </Nav>
  
 );
}
export default Footer;
