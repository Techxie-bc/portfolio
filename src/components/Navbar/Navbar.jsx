import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import './navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../Images/letter-c.png';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const handleNavigation = (path) => {
        setIsMobileMenuOpen(false);
        navigate(path); 
    }

    return (
        <>
            <nav className="header">
                <div className="header-img">
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>

                <>
                    <div className={`navbar ${isMobileMenuOpen ? "active" : ""}`}>
                        <NavLink to="/" onClick={() => handleNavigation('/')}>Home</NavLink>
                        <NavLink to="/work" onClick={() => handleNavigation('/work')}>Work</NavLink>
                        <NavLink to="/resume" onClick={() => handleNavigation('/resume')}>Resume</NavLink>
                        <NavLink to="/contact" onClick={() => handleNavigation('/contact')}>Contact</NavLink>
                    </div>
                    <button className="mobile-menu-icons" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </>
            </nav>
            <Outlet />
        </>
    )
}
