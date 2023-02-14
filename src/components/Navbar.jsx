import {NavLink} from 'react-router-dom'

const Navbar = () => { 
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                <NavLink to="/login" className="btn btn-outline-primary">Login</NavLink>
                <NavLink to="/profile" className="btn btn-outline-primary">Profile</NavLink>
            </div>
        </nav>
    );
 };

 export default Navbar;
 