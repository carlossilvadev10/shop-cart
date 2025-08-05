import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.png"
import { AuthContext } from "../../contexts/AuthProvider";

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // authInfo
    const {user} = useContext(AuthContext);
    console.log(user);

    // addEventListener
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    });

    return (
        <header className = {`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            {/* Header top start */}
            <div className = {`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className = "container">
                    <div className = "header-top-area">
                        <Link to = "/sing-up"className = "lab-btn me-3">
                            <span>Crear cuenta</span>
                        </Link>
                        <Link to = "/login">
                            <span>Iniciar sesión</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Header botton */}
            <div className = "header-bottom">
                <div className = "container">
                    <div className = "header-wrapper">
                        {/* Logo */}
                        <div className = "logo-search-acte">
                            <div className = "logo">
                                <Link to = "/">
                                    <img src = {Logo} alt = "logo" />
                                </Link>
                            </div>
                        </div>
                        {/* Menu area */}
                        <div className = "menu-area">
                            <div className = "menu">
                                <ul className = {`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li>
                                        <Link to = "/">Inicio</Link>
                                    </li>
                                    <li>
                                        <Link to = "/shop">Tienda</Link>
                                    </li>
                                    <li>
                                        <Link to = "/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to = "/about">Sobre nosotros</Link>
                                    </li>
                                    <li>
                                        <Link to = "/contact">Contacto</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Sign in & log in */}
                            <Link to = "/sign-up" className = "lab-btn me-3 d-none d-md-block">Crear cuenta</Link>
                            <Link to = "/login" className = "d-none d-md-block">Iniciar sesión</Link>
                            {/* Menu toggler */}
                            <div className = {`header-bar d-lg-none ${menuToggle ? "active" : ""}`} onClick = {() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* Social toggler */}
                            <div className = "ellepsis-bar d-md-none" onClick = {() => setSocialToggle(!socialToggle)}>
                                <i className = "icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavItems;