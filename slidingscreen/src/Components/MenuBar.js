import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from "../assets/logo.png";
import Hamburger from '../assets/hamburger.png';

const MenuBar = (props) => {
    const {visible, setVisible, smOpen } = props;
    const [menuOpen, setMenuOpen] = useState(false);
    let history = useHistory();

    const changeTab = (tab) => {
        setVisible(!visible);
        setTimeout(() => {
            history.push(tab)
            if(menuOpen) {
                setMenuOpen(false);
            }
        }, 600)
    }

    return (
        <>
            <div className="menu-bar">
                <div className="container">
                    <img src={Logo} alt="Logo" className="menu-logo" onClick={() => changeTab("/")}/>
                    <img src={Hamburger} alt="Hamburger" className="hamburger-icon" onClick={()=> setMenuOpen(!menuOpen)}/>
                    <nav className="menu-nav">
                        <ul className={menuOpen? "menu-list-mobile" : "menu-list"}>
                            <li className="menu-item" onClick={() => changeTab("/about")}>ABOUT US</li>
                            <li className="menu-item" onClick={() => changeTab("/services")}>SERVICES</li>
                            <li className="menu-item" onClick={() => changeTab("/works")}>WORKS</li>
                            <li className="menu-item" onClick={() => changeTab("/blog")}>BLOG</li>
                            <li className="menu-item" onClick={() => changeTab("/contact")}>CONTACT</li>
                            <li className="menu-item sm"><i className="fab fa-connectdevelop"></i></li>
                        </ul>
                    </nav>
                    <div className={smOpen? "menu-sm" : "menu-sm default"}>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuBar;