import React from 'react';
const Header = () => {
    return (  
        <header className="header">
            <nav className="navigation">
                <a href="#home" className="logo--link">
                    <img className="logo-picture" src={require("./images/LOGO-min.png")} alt="picture of logo"></img>
                </a>
                <div className="menu_links">
                    <a href="">Strona Główna</a>
                    <a href="">Oferta</a>
                    <a href="">Realizacje</a>
                    <a href="">Kontakt</a>
                </div>
                <div className="menu-hidden">
                    <a href="" className="home--menu">Strona główna</a>
                    <a href="" className="offer--menu">Oferta</a>
                    <a href="" className="realizations--menu">Realizacje</a>
                    <a href="" className="contact--menu">Kontakt</a>
                </div>

                <img src={require("./images/close-icon.png")} className="icon--close" alt="close icon"></img>
                <img src={require("./images/hamburger-icon.png")} className="hamburger--icon" alt="menu icon"></img>
            </nav>
        </header>
    );
}
 
export default Header;