import React from 'react'
import "./Footer.css"
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

// import Navbar from 'react-bootstrap/Navbar';


function Footer ()  {

  return (
    <Nav className='footer'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item >
        <NavLink className='footer-text' to='/'>© Craft Marketplace 2023 Spain S.L.</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink className='footer-text' to='/CookiesPolicy' href="#CookiesPolicy">Privacy Policy Cookies</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  className='footer-text' to='/AboutMk' href="#AboutMk"> About Craft Marketplace</NavLink>
      </Nav.Item> 
      
       <Nav.Item>
        <NavLink className='footer-text' eventKey="disabled" disabled> <img src={facebook} alt="Craft-Marketplace"className='socialmedia'/>       
        </NavLink>
      </Nav.Item> 
      <Nav.Item>
        <NavLink className='footer-text' eventKey="disabled" disabled> <img src={instagram} alt="Craft-Marketplace"className='socialmedia'/>       
        </NavLink>
      </Nav.Item> 
      <Nav.Item>
        <NavLink className='footer-text' eventKey="disabled" disabled> <img src={twitter} alt="Craft-Marketplace"className='socialmedia'/>       
        </NavLink>
      </Nav.Item> 
    </Nav>
  
 );
}
export default Footer;
