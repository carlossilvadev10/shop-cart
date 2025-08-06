import React from "react";
import { Link } from "react-router-dom";
import Category01 from "../../assets/images/category/01.jpg";
import Category02 from "../../assets/images/category/02.jpg";
import Category03 from "../../assets/images/category/03.jpg";
import Category04 from "../../assets/images/category/04.jpg";
import Category05 from "../../assets/images/category/05.jpg";
import Category06 from "../../assets/images/category/06.jpg";

const subTitle = "Explora productos para todos los gustos";
const title = (
    <h2>
        Todo lo que necesitas, en un solo lugar
    </h2>
);
const btnText = "Empezar ahora";

const categoryList = [
    {
        imgUrl: Category01,
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "icofont-brand-windows",
        title: "Cámaras DSLR",
    },
    {
        imgUrl: Category02,
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "icofont-brand-windows",
        title: "Zapatos / Zapatillas",
    },
    {
        imgUrl: Category03,
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "icofont-brand-windows",
        title: "Fotografía",
    },
    {
        imgUrl: Category04,
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "icofont-brand-windows",
        title: "Ropa formal",
    },
    {
        imgUrl: Category05,
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "icofont-brand-windows",
        title: "Bolsos coloridos",
    },
    {
        imgUrl: Category06,
        imgAlt: "category rajibraj91 rajibraj",
        iconName: "icofont-brand-windows",
        title: "Decoración para el hogar",
    },
]

const HomeCategory = () => {
    return (
        <div className = "category-section style-4 padding-tb">
            <div className = "container">
                {/* Section header */}
                <div className = "section-header text-center">
                    <span className = "subtitle">{subTitle}</span>
                    {title}
                </div>
                {/* Section card */}
                <div className = "section-wrapper">
                    <div className = "row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3">
                        {
                            categoryList.map((val, i) => (
                                <div key = {i}>
                                    <Link to = "/shop" className = "category-item">
                                        <div className = "category-inner">
                                            {/* Image thumbnail */}
                                            <div className = "category-thumb">
                                                <img src = {`${val.imgUrl}`} alt = {`${val.imgAlt}`} />
                                            </div>
                                            {/* Content */}
                                            <div className = "category-content">
                                                <div className = "cate-icon">
                                                    <i className = {`${val.iconName}`}></i>
                                                </div>
                                                <h6>{val.title}</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className = "text-center mt-5">
                        <Link to = "/shop" className = "lab-btn">
                            <span>{btnText}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCategory;