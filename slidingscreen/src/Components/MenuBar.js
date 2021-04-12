import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from "../assets/logo.png";
import Hamburger from '../assets/hamburger.png';

const MenuBar = (props) => {
    const {visible, setVisible, visible2, setVisible2 } = props;
    const [menuOpen, setMenuOpen] = useState(false);
    let history = useHistory();

    const changeTab = (tab) => {
        setVisible2(!visible2);
        setVisible(!visible);
        setTimeout(() => {
            history.push(tab)
            if(tab !== "/" && menuOpen) {
                setMenuOpen(!menuOpen);
            }
        }, 600)
    }



    return (
        <>
            <div className="menu-bar">
                <div className="container">
                <img src={Logo} alt="Logo" className="menu-logo" onClick={() => changeTab("/")}/>
                <img src={Hamburger} alt="Logo" className="hamburger-icon" onClick={()=> setMenuOpen(!menuOpen)}/>

                <ul className={menuOpen? "menu-list-mobile" : "menu-list"}>
                    <li className="menu-item" onClick={() => changeTab("/about")}>ABOUT US</li>
                    <li className="menu-item" onClick={() => changeTab("/services")}>SERVICES</li>
                    <li className="menu-item" onClick={() => changeTab("/works")}>WORKS</li>
                    <li className="menu-item" onClick={() => changeTab("/blog")}>BLOG</li>
                    <li className="menu-item" onClick={() => changeTab("/contact")}>CONTACT</li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default MenuBar;