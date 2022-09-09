import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'

;    


const Header = () => {
    const [toggle, setToggle] = useState(false)
    // const iconHamburger = document.querySelector(".hamburger--icon");
    // const iconCloseMenu = document.querySelector(".icon--close")
    // const navigationMobile = document.querySelector(".menu-hidden");
    const body = document.querySelector("body");
    // const footer = document.querySelector(".footer");
    // const linkOffer = document.querySelector('.offer--menu');
    // const linkRealizations = document.querySelector('.realizations--menu');
    // const linkHome = document.querySelector('.home--menu');
    // const linkContact = document.querySelector('.contact--menu');
    // const linkLogo = document.querySelector('.logo--link');
    const hideElements = function() {
        setToggle(false);
        body.classList.remove("menu-toggled");
        // iconHamburger.classList.remove("icon--inactive");
        // iconCloseMenu.classList.remove("icon--active")
        // navigationMobile.classList.remove("menu-active");
        // main.classList.remove("menu-hidden");
        // footer.classList.remove("menu-hidden")
    }
    const showElements = function() {
        setToggle(true);
        body.classList.add("menu-toggled")
        // iconHamburger.classList.add("icon--inactive");
        // iconCloseMenu.classList.add("icon--active")
        // navigationMobile.classList.add("menu-active");
        // main.classList.add("menu-hidden");
        // footer.classList.add("menu-hidden")
    }


    
    
    // iconHamburger.addEventListener("click", (event) => {
    //     showElements()
    // })
    
    // iconCloseMenu.addEventListener("click", (event) => {
    //     hideElements()
    // })
    
    // linkOffer.addEventListener("click", (event) => {
    //     hideElements()
    // })
    
    // linkRealizations.addEventListener("click", (event) => {
    //     hideElements()
    // })
    
    // linkHome.addEventListener("click", (event) => {
    //     hideElements()
    // })
    
    // linkContact.addEventListener("click", (event) => {
    //     hideElements()
    // })
    
    // linkLogo.addEventListener("click", (event) => {
    //     hideElements()
    // })
    return (  
        <header className="header ">
            <nav className="navigation">
                <Link to="/Home" className="logo--link">
                    <img className="logo-picture" src={require("./images/LOGO-min.png")} alt="picture of logo"></img>
                </Link>
                <div className="menu_links">
                    <Link to="/Home">Strona Główna</Link>
                    <Link to="/Offer">Oferta</Link>
                    <Link to="Realizations">Realizacje</Link>
                    <Link to="/Contact">Kontakt</Link>
                </div>
                <div className={`${toggle === true ? 'menu-active' : '' } menu-hidden`}>
                    <Link to="/Home" onClick={hideElements} className="home--menu">Strona główna</Link>
                    <Link to="/Offer" onClick={hideElements} className="offer--menu">Oferta</Link>
                    <Link to="/Realizations" onClick={hideElements} className="realizations--menu">Realizacje</Link>
                    <Link to="/Contact" onClick={hideElements} className="contact--menu">Kontakt</Link>
                </div>

                <img onClick={hideElements} src={require("./images/close-icon.png")} className={`${toggle === true ? 'icon--active' : '' } icon--close`} alt="close icon"></img>
                <img onClick={showElements} src={require("./images/hamburger-icon.png")} className={`${toggle === true ? 'icon--inactive' : '' } hamburger--icon`} alt="menu icon"></img>
            </nav>
        </header>
    );
}
 
export default Header;