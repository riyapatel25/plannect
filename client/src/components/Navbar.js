import React from "react"
import logo from './images/toplogo.png';




const Navbar = () => {
    return (
        <nav className = "navbar">
           <img src={logo} alt="" className="toplogo"/>
            <div className="links">
                <a href="/" className="link">Profile</a>
                <a href="/" className="link">Connect</a>
                <a href="/" className="link">Matches</a>

            </div>
        </nav>
    );
}

export default Navbar; 