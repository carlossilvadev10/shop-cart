import React, { useState } from "react";
import Rating from "../Shared/Rating";

const reviewTitle = "Agregar una reseña";
let reviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Miniatura del cliente",
        name: "Gael Jimenez",
        date: "Publicado el 10 de julio de 2025 a las 06:57 am",
        desc: "Este producto superó mis expectativas. La calidad y el diseño son excepcionales, sin duda una excelente inversión para quienes valoran la innovación.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Miniatura del cliente",
        name: "Morgana Castillo",
        date: "Publicado el 17 de julio de 2025 a las 08:43 am",
        desc: "Me encantó la funcionalidad y el acabado. Se nota que hubo atención al detalle. Lo recomiendo completamente para uso diario.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Miniatura del cliente",
        name: "Teófilo Rodriguez",
        date: "Publicado el 26 de julio de 2025 a las 04:26 pm",
        desc: "Buen producto, cumple con lo que promete. El envío fue rápido y llegó en perfectas condiciones. Lo volvería a comprar.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Miniatura del cliente",
        name: "Charlene Deledesma",
        date: "Publicado el 30 de julio de 2025 a las 07:12 am",
        desc: "Estoy muy satisfecha con esta compra. La experiencia fue fluida y el producto se siente premium desde que lo sacas de la caja.",
    },
];

const Review = ({ detailedDescription }) => {
    const [reviewShow, setReviewShow] = useState(true);

    return (
        <>
            <ul className = {`review-nav lab-ul ${reviewShow ? "revActive" : "descActive"}`}>
                <li className = "desc" onClick = {() => setReviewShow(!reviewShow)}>Descripción</li>
                <li className = "rev" onClick = {() => setReviewShow(!reviewShow)}>Reseñas</li>
            </ul>
            <div className = {`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className = "review-showing">
                    <ul className = "content lab-ul">
                        {
                            reviewList.map((review, i) => (
                                <li key = {i}>
                                    <div className = "post-thumb">
                                        <img src = {review.imgUrl} alt = {review.imgAlt} />
                                    </div>
                                    <div className = "post-content">
                                        <div className = "entry-meta">
                                            <div className = "posted-on">
                                                <a href = "#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className = "entry-content"  style = {{ textAlign: "justify" }}>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className = "client-review">
                        <div className = "review-form">
                            <div className = "review-title">
                                <h5>{reviewTitle}</h5>
                            </div>
                            <form action = "" className = "row">
                                <div className = "col-md-4 col-12">
                                    <input type = "text" name = "name" id = "name" placeholder = "Nombre completo*" />
                                </div>
                                <div className = "col-md-4 col-12">
                                    <input type = "email" name = "email" id = "email" placeholder = "Correo electrónico*" />
                                </div>
                                <div className = "col-md-4 col-12">
                                    <div className = "rating">
                                        <span className = "me-2">Tu calificación</span>
                                        <Rating />
                                    </div>
                                </div>
                                <div className = "col-md-12 col-12">
                                    <textarea name = "message" id = "message" rows = {8} placeholder = "Mensaje"></textarea>
                                </div>
                                <div className = "col-12">
                                    <button type = "submit" className = "default-button">
                                        <span>Enviar reseña</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className = "description" style = {{ textAlign: "justify" }}>
                    {detailedDescription}
                </div>
            </div>
        </>
    )
}

export default Review;