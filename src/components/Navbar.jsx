import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import Logo from '../../public/craft4.png'

const Navbar = () => {
    return (
        <nav className="nav-container" >
            <div className="navbar">
                <img className="logo-Craft" src={Logo} alt="LogoCraft"></img>
                <NavLink to="/" className="navbar-home">Home</NavLink>
                <NavLink to="/login" className="navbar-DashBoard">DashBoard</NavLink>
                <NavLink to="/profile" className="navbar-Products">Products</NavLink>
                <h1 className="navbar-Cart"> 🛒</h1>
            
            </div>
            
        </nav>
    );
};

export default Navbar;
