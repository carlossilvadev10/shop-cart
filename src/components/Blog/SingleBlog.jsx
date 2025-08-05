import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../Shared/PageHeader.jsx";
import blogList from "../../utils/blogdata.js";
import PopularPost from "../Shop/PopularPost.jsx";
import Tags from "../Shop/Tags.jsx";

const socialList = [
    {
        link: "#",
        iconName: "icofont-facebook",
        className: "facebook",
    },
    {
        link: "#",
        iconName: "icofont-twitter",
        className: "twitter",
    },
    {
        link: "#",
        iconName: "icofont-linkedin",
        className: "linkedin",
    },
    {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    },
    {
        link: "#",
        iconName: "icofont-pinterest",
        className: "pinterest",
    },
];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const {id} = useParams();
    const result = blog.filter((item) => item.id === parseInt(id));
    const currentIndex = blog.findIndex(item => item.id === parseInt(id));
    const prevBlog = currentIndex > 0 ? blog[currentIndex - 1] : null;
    const nextBlog = currentIndex < blog.length - 1 ? blog[currentIndex + 1] : null;

    return (
        <div>
            <PageHeader title = "Detalle del blog" currentPage = {<><Link to = "/blog">Blog</Link>&nbsp;&nbsp; / &nbsp;&nbsp;Detalle</>} />
            <div className = "blog-section blog-single padding-tb section-bg">
                <div className = "container">
                    <div className = "row justify-content-center">
                        <div className = "col-lg-8 col-12">
                            <article>
                                <div className = "section-wrapper">
                                    <div className = "row row-cols-1 justify-content-center gap-4">
                                        <div className = "col">
                                            <div className = "post-item style-2">
                                                <div className = "post-inner">
                                                    {
                                                        result.map((item, i) => (
                                                            <div key = {i}>
                                                                <div className = "post-thumb">
                                                                    <img src = {item.imgUrl} alt = {item.imgAlt} className = "w-100" />
                                                                </div>
                                                                <div className = "post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className = "meta-post">
                                                                        <ul className = "lab-ul">
                                                                            {
                                                                                item.metaList.map((meta, j) => (
                                                                                    <li key = {j}>
                                                                                        <i className = {meta.iconName}></i>
                                                                                        {meta.text}
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p style = {{ textAlign: "justify" }}>
                                                                        {item.detailedDescription.part1}
                                                                    </p>
                                                                    <blockquote>
                                                                        <p>{item.detailedDescription.blockquote}</p>
                                                                        <cite>
                                                                            <a href = "#">
                                                                                ...
                                                                                {
                                                                                    item.metaList.find(meta => meta.iconName === "icofont-ui-user")?.text
                                                                                }
                                                                            </a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p style = {{ textAlign: "justify" }}>
                                                                        {item.detailedDescription.part2}
                                                                    </p>
                                                                    <img src = "/src/assets/images/blog/single/01.jpg" alt = "blog-single-01" />
                                                                    <p style = {{ textAlign: "justify" }}>
                                                                        {item.detailedDescription.part3}
                                                                    </p>
                                                                    <div className = "video-thumb">
                                                                        <img src = "/src/assets/images/blog/single/02.jpg" alt = "blog-single-02" />
                                                                        <a href = "#" target = "_blank" className = "video-button popup">
                                                                            <i className = "icofont-ui-play"></i>
                                                                        </a>
                                                                    </div>
                                                                    <p style = {{ textAlign: "justify" }}>
                                                                        {item.detailedDescription.part4}
                                                                    </p>
                                                                    <div className = "tags-section">
                                                                        <ul className = "tags lab-ul">
                                                                            <li>
                                                                                <a href = "#">Agencia</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href = "#">Negocios</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href = "#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className = "lab-ul social-icons">
                                                                            {
                                                                                socialList.map((social, k) => (
                                                                                    <li key = {k}>
                                                                                        <a href = {social.link} className = {social.className} style = {{ padding: "0.5rem" }}>
                                                                                            <i className = {social.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "navigations-part">
                                            <div className = "left">
                                                {
                                                    prevBlog ? (
                                                        <Link to = {`/blog/${prevBlog.id}`} className = "prev">
                                                            <i className = "icofont-double-left"></i> Blog anterior
                                                        </Link>
                                                        ) : (
                                                        <span className = "prev disabled">
                                                            <i className = "icofont-double-left"></i> Blog anterior
                                                        </span>
                                                    )
                                                }
                                                {
                                                    prevBlog && <Link to = {`/blog/${prevBlog.id}`} className = "title">
                                                        {prevBlog.title}
                                                    </Link>
                                                }
                                            </div>
                                            <div className = "right">
                                                {
                                                    nextBlog ? (
                                                        <Link to={`/blog/${nextBlog.id}`} className = "prev">
                                                            <i className = "icofont-double-right"></i> Blog siguiente
                                                        </Link>
                                                    ) : (
                                                        <span className = "prev disabled">
                                                            <i className = "icofont-double-right"></i> Blog siguiente
                                                        </span>
                                                    )
                                                }
                                                {
                                                    nextBlog && <Link to = {`/blog/${nextBlog.id}`} className = "title">
                                                        {nextBlog.title}
                                                    </Link>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className = "col-lg-4 col-12">
                            <aside>
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog;