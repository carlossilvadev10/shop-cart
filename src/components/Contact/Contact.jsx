import React from "react";
import PageHeader from "../Shared/PageHeader";
import GoogleMap from "../Shared/GoogleMap";
import Icon01 from "../../assets/images/icon/01.png";
import Icon02 from "../../assets/images/icon/02.png";
import Icon03 from "../../assets/images/icon/03.png";
import Icon04 from "../../assets/images/icon/04.png";

const subTitle = "Ponte en contacto con nosotros";
const title = "¡Siempre estamos encantados de saber de ti!";
const contSubTitle = "Contáctanos";
const contTitle = "Completa el formulario para conocerte mejor.";
const btnText = "Enviar mensaje";

const contactList = [
    {
        imgUrl: Icon01,
        imgAlt: "ícono de contacto",
        title: "Dirección de oficina",
        description: "Av. Las Delicias 456, Huacho",
    },
    {
        imgUrl: Icon02,
        imgAlt: "ícono de contacto",
        title: "Número de teléfono",
        description: "+51 987 654 321",
    },
    {
        imgUrl: Icon03,
        imgAlt: "ícono de contacto",
        title: "Enviar correo",
        description: "admin@shopcart.com",
    },
    {
        imgUrl: Icon04,
        imgAlt: "ícono de contacto",
        title: "Nuestro sitio web",
        description: "www.shopcart.com",
    },
];

const Contact = () => {
    return (
        <div>
            <PageHeader title = "Contáctanos" currentPage = "Contacto" />
            <div className = "map-address-section padding-tb section-bg">
                <div className = "container">
                    <div className = "section-header text-center">
                        <span className = "subtitle">
                            {subTitle}
                        </span>
                        <h2 className = "title">
                            {title}
                        </h2>
                    </div>
                    <div className = "section-wrapper">
                        <div className = "row flex-row-reverse">
                            <div className = "col-lg-5 col-xl-4 col-12">
                                <div className = "contact-wrapper">
                                    {
                                        contactList.map((item, i) => (
                                            <div key = {i} className = "contact-item">
                                                <div className = "contact-thumb">
                                                    <img src = {item.imgUrl} alt = {item.imgAlt} />
                                                </div>
                                                <div className = "contact-content">
                                                    <h6 className = "title">
                                                        {item.title}
                                                    </h6>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className = "col-lg-7 col-xl-8 col-12">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "contact-section padding-tb">
                <div className = "container">
                    <div className = "section-header text-center">
                        <span className = "subtitle">
                            {contSubTitle}
                        </span>
                        <h2 className = "title">
                            {contTitle}
                        </h2>
                    </div>
                    <div className = "section-wrapper">
                        <form action = "" className = "contact-form">
                            <div className = "form-group">
                                <input type = "text" name = "name" id = "name" placeholder = "Nombre*" required />
                            </div>
                            <div className = "form-group">
                                <input type = "email" name = "email" id = "email" placeholder = "Correo electrónico*" required />
                            </div>
                            <div className = "form-group">
                                <input type = "tel" name = "cellphone" id = "cellphone" placeholder = "Celular*" pattern = "[0-9]{9}" maxlength = "9" inputmode = "numeric" required />
                            </div>
                            <div className = "form-group">
                                <input type = "text" name = "subject" id = "subject" placeholder = "Asunto*" required />
                            </div>
                            <div className = "form-group w-100">
                                <textarea name = "message" id = "message" rows = {8} placeholder = "Mensaje*" required />
                            </div>
                            <div className = "form-group w-100 text-center">
                                <button className = "lab-btn">
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;