import React from "react";
import { Link } from "react-router-dom";

const title = "ShopCart";
const description = "ShopCart es una plataforma de comercio electrónico líder a nivel mundial, donde miles de usuarios compran y venden productos a diario de forma rápida, segura y confiable.";
const itemTitle = "Categorías";
const quickTitle = "Quick Links";
const tweetTitle = "Tweets recientes";

const addressList = [
    {
        iconName: "icofont-google-map",
        text: "Lima, Perú",
    },
    {
        iconName: "icofont-phone",
        text: "+51 987 654 321",
    },
    {
        iconName: "icofont-envelope",
        text: "info@shopcart.com",
    },
]

const socialList = [
    {
        iconName: "icofont-facebook",
        siteLink: "#",
        className: "facebook",
    },
    {
        iconName: "icofont-twitter",
        siteLink: "#",
        className: "twitter",
    },
    {
        iconName: "icofont-linkedin",
        siteLink: "#",
        className: "linkedin",
    },
    {
        iconName: "icofont-instagram",
        siteLink: "#",
        className: "instagram",
    },
    {
        iconName: "icofont-pinterest",
        siteLink: "#",
        className: "pinterest",
    },
]

const itemList = [
    {
        text: "Todos los productos",
        link: "/shop",
    },
    {
        text: "Tienda",
        link: "/shop",
    },
    {
        text: "Blog",
        link: "/blog",
    },
    {
        text: "Sobre nosotros",
        link: "/about",
    },
    {
        text: "Política",
        link: "#",
    },
    {
        text: "Preguntas frecuentes",
        link: "/about",
    }
]

const quickList = [
    {
        text: "Sesiones de verano",
        link: "#",
    },
    {
        text: "Eventos",
        link: "#",
    },
    {
        text: "Galería",
        link: "#",
    },
    {
        text: "Foros",
        link: "#",
    },
    {
        text: "Política de privacidad",
        link: "#",
    },
    {
        text: "Términos y condiciones",
        link: "#",
    },
]

const tweetList = [
    {
        iconName: "icofont-twitter",
        description: (
            <p>
                <a href = "#">@ShopCart</a> ¡Encuentra lo que necesitas al mejor precio! #Descuentos #ShopCart
            </p>
        ),
    },
    {
        iconName: "icofont-twitter",
        description: (
            <p>
                <a href = "#">@ShopCart</a> ¡Compra fácil, rápido y seguro! Explora nuestras categorías hoy mismo.
            </p>
        ),
    },
]

const footerBottomList = [
    {
        text: "Profesorado",
        link: "#",
    },
    {
        text: "Personal",
        link: "#",
    },
    {
        text: "Estudiantes",
        link: "#",
    },
    {
        text: "Alumni",
        link: "#",
    },
]

const Footer = () => {
    return (
        <footer className = "style-2">
            <div className = "footer-top dark-view padding-tb">
                <div className = "container">
                    <div className = "row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                        <div className = "col">
                            <div className = "footer-item our-address">
                                <div className = "footer-inner">
                                    <div className = "footer-content">
                                        <div className = "title">
                                            <h4>{title}</h4>
                                        </div>
                                        <div className = "content">
                                            <p style = {{ paddingRight: "4rem", textAlign: "justify" }}>{description}</p>
                                            <ul className = "lab-ul office-address">
                                                {
                                                    addressList.map((val, i) => (
                                                        <li key = {i}>
                                                            <i className = {val.iconName}></i>
                                                            {val.text}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <ul className = "lab-ul social-icons">
                                                {
                                                    socialList.map((val, i) => (
                                                        <li key = {i}>
                                                            <a href = {val.siteLink} className = {val.className} style = {{ padding: "0.5rem" }}>
                                                                <i className = {`${val.iconName} p-1`}></i>
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "footer-item our-address">
                                <div className = "footer-inner">
                                    <div className = "footer-content">
                                        <div className = "title">
                                            <h4>{itemTitle}</h4>
                                        </div>
                                        <div className = "content">
                                            <ul className = "lab-ul office-address">
                                                {
                                                    itemList.map((val, i) => (
                                                        <li key = {i}>
                                                            <a href = "#">{val.text}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "footer-item our-address">
                                <div className = "footer-inner">
                                    <div className = "footer-content">
                                        <div className = "title">
                                            <h4>{quickTitle}</h4>
                                        </div>
                                        <div className = "content">
                                            <ul className = "lab-ul office-address">
                                                {
                                                    quickList.map((val, i) => (
                                                        <li key = {i}>
                                                            <a href = "#">{val.text}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "footer-item our-address">
                                <div className = "footer-inner">
                                    <div className = "footer-content">
                                        <div className = "title">
                                            <h4>{tweetTitle}</h4>
                                        </div>
                                        <div className = "content">
                                            <ul className = "lab-ul office-address">
                                                {
                                                    tweetList.map((val, i) => (
                                                        <li key = {i}>
                                                            <i className = {val.iconName}></i>
                                                            {val.description}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer bottom */}
            <div className = "footer-bottom">
                <div className = "container">
                    <div className = "section-wrapper">
                        <p>&copy; 2025 <Link to = "/">ShopCart</Link> Desarrollado por <a href = "https://github.com/carlozzsilva10" target = "_blank" rel = "noopener noreferrer" className = "fw-bold">carlozzsilva10</a>. Todos los derechos reservados</p>
                        <div className = "footer-bottom-list">
                            {
                                footerBottomList.map((val, i) => (
                                    <Link key = {i} to = {val.link}>
                                        {val.text}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;