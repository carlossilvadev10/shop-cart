import React from "react";
import PageHeader from "../Shared/PageHeader";

const subTitle = "Sobre nuestra marca";
const title = "Servicios de calidad y Mejores experiencias";
const description = "Brindamos acceso distintivo a los usuarios mientras promovemos procesos transparentes que incentivan funcionalidades eficientes, en lugar de arquitecturas extensas, comunicando servicios optimizados y multiplataforma.";
const year = "30+";
const experience = "Años de experiencia";

const aboutList = [
    {
        imgUrl: "/src/assets/images/about/icon/01.jpg",
        imgAlt: "ícono acerca de rajibraj91 rajibraj",
        title: "Instructores calificados",
        description: "Aprende de expertos con experiencia real en la industria que te guiarán paso a paso en tu crecimiento profesional.",
    },
    {
        imgUrl: "/src/assets/images/about/icon/02.jpg",
        imgAlt: "ícono acerca de rajibraj91 rajibraj",
        title: "Obtén certificación",
        description: "Valida tus conocimientos con certificados reconocidos que impulsarán tu perfil en el mercado laboral.",
    },
    {
        imgUrl: "/src/assets/images/about/icon/03.jpg",
        imgAlt: "ícono acerca de rajibraj91 rajibraj",
        title: "Clases en línea",
        description: "Accede a tus cursos desde cualquier lugar y a cualquier hora, adaptándolos a tu ritmo y estilo de vida.",
    }
];

const About = () => {
    return (
        <div>
            <PageHeader title = "Sobre nuestra marca" currentPage = "Sobre Nosotros" />
            <div className = "about-section style-3 padding-tb section-bg">
                <div className = "container">
                    <div className = "row justify-content-center align-items-center row-cols-1 row-cols-xl-2">
                        <div className = "col">
                            <div className = "about-left">
                                <div className = "about-thumb">
                                    <img src = "/src/assets/images/about/01.jpg" alt = "about-01" />
                                </div>
                                <div className = "abs-thumb">
                                    <img src = "/src/assets/images/about/02.jpg" alt = "about-02" />
                                </div>
                                <div className = "about-left-content">
                                    <h3>{year}</h3>
                                    <p>{experience}</p>
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "about-right">
                                <div className = "section-header">
                                    <span className = "subtitle">
                                        {subTitle}
                                    </span>
                                    <h2 className = "title">
                                        {title}
                                    </h2>
                                    <p style = {{ textAlign: "justify" }}>{description}</p>
                                </div>
                                <div className = "section-wrapper">
                                    <ul className = "lab-ul">
                                        {
                                            aboutList.map((item, i) => (
                                                <li key = {i}>
                                                    <div className = "sr-left">
                                                        <img src = {item.imgUrl} alt = {item.imgAlt} />
                                                    </div>
                                                    <div className = "sr-right">
                                                        <h5>{item.title}</h5>
                                                        <p style = {{ textAlign: "justify" }}>{item.description}</p>
                                                    </div>
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
    )
}

export default About;