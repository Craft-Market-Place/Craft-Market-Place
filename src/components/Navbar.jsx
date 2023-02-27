import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from '../assets/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
return (
    <Navbar bg="light" expand="xl" className='navigation'>
        <Container className='menu'>
        <Navbar.Brand to="/">
            <NavLink to="/" className="navbar-home"><img src={logo} alt="" className='logo' /></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="" >
                <NavLink to="/form" className="navbar-Products"><p style={{lineHeight: 1}}>Ofrece un servicio</p></NavLink>
                <NavLink to="/advertisement" className="navbar-DashBoard"><p>Anuncios</p></NavLink>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default Navigation;