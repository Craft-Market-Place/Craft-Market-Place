import React from 'react'
import "./Footer.css"
import Nav from 'react-bootstrap/Nav';

export const Footer = () => {

  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item >
        <Nav.Link className='footer-text' href="/home">© Craft Marketplace 2023 Spain S.L. Free bulletin board</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='footer-text' eventKey="link-1">Privacy Policy Cookies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  className='footer-text' eventKey="link-2"  >Terms & Conditions </Nav.Link>
       
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='footer-text' eventKey="disabled" disabled>
          About Craft
        </Nav.Link>
      </Nav.Item>
    </Nav>
  //   <footer>
  //     <div className="footerContainer">
  //       <h5 className= "footerText">© Craft Marketplace 2023 Spain S.L. Free bulletin board</h5>
  //       <h5 className= "footerText">Legal</h5>
  //       <h5 className= "footerText">Cookie Settings</h5>
  //       <h5 className= "footerText">Terms & Conditions</h5>
  //       <h5 className= "footerText">Privacy</h5>
  //       <h5 className= "footerText">Returns</h5>
        
  //     </div>
  //   </footer>
 )
}
export default Footer
