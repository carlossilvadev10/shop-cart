import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../assets/images/clients/avatar.jpg"

const title = (
    <h2 className = "title">
        Más de 60 000 clientes en todo el mundo
    </h2>
);
const description = "Compra productos desde cualquier dispositivo con nuestra app y disfruta de tu tiempo libre. Descárgala, instálala y empieza a comprar";
const clientsList = [
    {
        imgUrl: {Avatar},
        imgAlt: "education thumb rajibraj91 rajibraj",
        text: "Únete a nosotros",
    },
    {
        imgUrl: {Avatar},
        imgAlt: "education thumb rajibraj91 rajibraj",
        text: "Únete a nosotros",
    },
    {
        imgUrl: {Avatar},
        imgAlt: "education thumb rajibraj91 rajibraj",
        text: "Únete a nosotros",
    },
    {
        imgUrl: {Avatar},
        imgAlt: "education thumb rajibraj91 rajibraj",
        text: "Únete a nosotros",
    },
    {
        imgUrl: {Avatar},
        imgAlt: "education thumb rajibraj91 rajibraj",
        text: "Únete a nosotros",
    },
    {
        imgUrl: {Avatar},
        imgAlt: "education thumb rajibraj91 rajibraj",
        text: "Únete a nosotros",
    },
    {
        imgUrl: {Avatar},
        imgAlt: "education thumb rajibraj91 rajibraj",
        text: "Únete a nosotros",
    },
]

const LocationSpread = () => {
    return (
        <section className = "clients-section style-2 padding-tb">
            <div className = "container">
                <div className = "section-header text-center">
                    {title}
                    <p>{description}</p>
                </div>
                {/* Main content */}
                <div className = "section-wrapper">
                    <div className = "clients">
                        {
                            clientsList.map((val, i) => (
                                <div key = {i} className = "client-list">
                                    <Link to = "/sign-up" className = "client-content">
                                        <span>{val.text}</span>
                                    </Link>
                                    <div className = "client-thumb">
                                        <img src = {`${val.imgUrl}`} alt = {`${val.imgAlt}`} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationSpread;