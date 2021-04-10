import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
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
        }, 600)
    }

    const openHamburgerMenu = () => {
        setMenuOpen(!menuOpen);
    }


    return (
        <>
            <div className="menu-bar" onClick={menuOpen? ()=> {setTimeout(()=> openHamburgerMenu(), 600)} : ()=> {}}>
                <img src={Logo} alt="Logo" className="menu-logo" onClick={() => changeTab("/")}/>
                <img src={Hamburger} alt="Logo" className="hamburger-icon" onClick={openHamburgerMenu}/>

                <ul className={menuOpen? "menu-list-mobile" : "menu-list"}>
                    <li className="menu-item" onClick={() => changeTab("/about")}>ABOUT US</li>
                    <li className="menu-item" onClick={() => changeTab("/services")}>SERVICES</li>
                    <li className="menu-item" onClick={() => changeTab("/works")}>WORKS</li>
                    <li className="menu-item" onClick={() => changeTab("/blog")}>BLOG</li>
                    <li className="menu-item" onClick={() => changeTab("/contact")}>CONTACT</li>
                </ul>
            </div>
        </>
    )
}

export default MenuBar;