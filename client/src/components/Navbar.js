import React from "react"
import {Link} from 'react-scroll';
import logo from './images/toplogo.png';




const Navbar = () => {
    return (
        <nav className = "navbar">
           <img src={logo} alt="" className="toplogo"/>
            <div className="links">
                <Link to="Profile" spy={true} smooth={true} offset={50} duration={500} className="link">Profile</Link>
                <Link to="Plannections" spy={true} smooth={true} offset={50} duration={500} className="link">Plannections</Link>

            </div>
        </nav>
    );
}

export default Navbar; 