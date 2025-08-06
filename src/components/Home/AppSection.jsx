import React from "react";
import { Link } from "react-router-dom";
import App01 from "../../assets/images/app/01.jpg";
import App02 from "../../assets/images/app/02.jpg";

const btnText = "Regístrate gratis";
const title = (
    <h2 className = "text-capitalize title mt-4">
        Compra donde y cuando quieras
    </h2>
);
const description = "Compra desde cualquier dispositivo con nuestra app y accede a lo que necesitas, cuando lo necesites. Descárgala, instálala y comienza a disfrutar una experiencia de compra sin límites.";

const AppSection = () => {
    return (
        <div className = "app-section padding-tb">
            <div className = "container">
                <div className = "section-header text-center">
                    <Link to = "/sign-up" className = "lab-btn mb-4">
                        {btnText}
                    </Link>
                    {title}
                    <p>{description}</p>
                </div>
                <div className = "section-wrapper">
                    <ul className = "lab-ul">
                        <li>
                            <a href = "#"><img src = {App01} alt = "app-01" /></a>
                        </li>
                        <li>
                            <a href = "#"><img src = {App02} alt = "app-02" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppSection;