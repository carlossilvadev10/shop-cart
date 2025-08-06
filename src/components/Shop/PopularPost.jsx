import React from "react";
import { Link } from "react-router-dom";
import Blog09 from "../../assets/images/blog/09.jpg";
import Blog10 from "../../assets/images/blog/10.jpg";
import Blog11 from "../../assets/images/blog/11.jpg";
import Blog12 from "../../assets/images/blog/12.jpg";

const title = "Publicaciones del momento";
const postList = [
    {
        id: 1,
        imgUrl: {Blog10},
        imgAlt: "Chica leyendo",
        title: "Consejos de lectura para relajarte",
        date: "20 de julio de 2025"
    },
    {
        id: 2,
        imgUrl: {Blog11},
        imgAlt: "Joven con laptop",
        title: "Cómo comprar en línea de forma segura",
        date: "26 de julio de 2025"
    },
    {
        id: 3,
        imgUrl: {Blog12},
        imgAlt: "Dos chicas viendo una laptop",
        title: "Tendencias en compras online 2022",
        date: "30 de julio de 2025"
    },
    {
        id: 4,
        imgUrl: {Blog09},
        imgAlt: "Chica escribiendo en laptop",
        title: "Tips para organizar tu lista de compras",
        date: "05 de agosto de 2025"
    }
];

const PopularPost = () => {
    return (
        <div className = "widget widget-post">
            <div className = "widget-header">
                <h5 className = "title">
                    {title}
                </h5>
            </div>
            <ul className = "widget-wrapper">
                {
                    postList.map((post, i) => (
                        <li key = {i} className = "d-flex flex-wrap justify-content-between">
                            <div className = "post-thumb">
                                <Link to = {`/blog/${post.id}`}>
                                    <img src = {post.imgUrl} alt = {post.imgAlt} />
                                </Link>
                            </div>
                            <div className = "post-content">
                                <Link to = {`/blog/${post.id}`}>
                                    <h5>
                                        {post.title}
                                    </h5>
                                    <p>{post.date}</p>
                                </Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PopularPost;