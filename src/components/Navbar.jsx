import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import Logo from '../assets/Logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation() {
return (

    <Navbar bg="light"  expand="xl" className='navigation'>
        <Container className='menu'>
        <Navbar.Brand to="/">
          <NavLink to="/"className="navbar-home"><img src={Logo} alt="Craft-Marketplace"className='Logo'/></NavLink>
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">  
          <Nav className="">
            <NavLink  to='/' className='text-navbar' href="#home">HOME</NavLink>
                
            <NavLink className='text-navbar' to="/form" href="#Post">UPLOAD PRODUCT</NavLink>
                
            <NavLink className='text-navbar' to="/advertisement" href="#form">DASHBOARD </NavLink>
                
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    
);
}

export default Navigation;