import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Shared/Rating";
import Prod01 from "../../assets/images/categoryTab/01.jpg";
import Prod02 from "../../assets/images/categoryTab/02.jpg";
import Prod03 from "../../assets/images/categoryTab/03.jpg";
import Prod04 from "../../assets/images/categoryTab/04.jpg";
import Prod05 from "../../assets/images/categoryTab/05.jpg";
import Prod06 from "../../assets/images/categoryTab/06.jpg";
import Prod07 from "../../assets/images/categoryTab/07.jpg";
import Prod08 from "../../assets/images/categoryTab/08.jpg";
import BrandApple from "../../assets/images/categoryTab/brand/apple.png";
import Author01 from "../../assets/images/course/author/01.jpg";
import Author02 from "../../assets/images/course/author/02.jpg";
import Author04 from "../../assets/images/course/author/04.jpg";
import Author05 from "../../assets/images/course/author/05.jpg";
import Author06 from "../../assets/images/course/author/06.jpg";
import Shape01 from "../../assets/images/shape-img/icon/01.png";
import Shape02 from "../../assets/images/shape-img/icon/02.png";

const title = (
    <h2 className = "text-capitalize title">
        Descubre nuestros productos
    </h2>
);

const productData = [
    {
        imgUrl: Prod01,
        category: "Zapatillas",
        title: "Nike Premier X",
        author: Author01,
        brand: "Nike",
        price: "$199.00",
        id: 1,
    },
    {
        imgUrl: Prod02,
        category: "Bolsos",
        title: "Aesthetic Bags",
        author: Author02,
        brand: "D&J Bags",
        price: "$149.00",
        id: 2,
    },
    {
        imgUrl: Prod03,
        category: "Celulares",
        title: "iPhone 12",
        author: BrandApple,
        brand: "Apple",
        price: "$399.00",
        id: 3,
    },
    {
        imgUrl: Prod04,
        category: "Bolsos",
        title: "Hiking Bag 15 Nh100",
        author: Author04,
        brand: "Gucci",
        price: "$299.00",
        id: 4,
    },
    {
        imgUrl: Prod05,
        category: "Zapatillas",
        title: "Outdoor Sports Shoes",
        author: Author05,
        brand: "Nike",
        price: "$199.00",
        id: 5,
    },
    {
        imgUrl: Prod06,
        category: "Belleza",
        title: "COSRX Luminique Mist",
        author: Author06,
        brand: "Zara",
        price: "$99.00",
        id: 6,
    },
    {
        imgUrl: Prod07,
        category: "Bolsos",
        title: "Classic Look Chanel Bag",
        author: Author01,
        brand: "Gucci",
        price: "$149.00",
        id: 7,
    },
    {
        imgUrl: Prod08,
        category: "Zapatillas",
        title: "BoldSup Sneakers",
        author: Author02,
        brand: "Bata",
        price: "$199.00",
        id: 8,
    },
]

const CategoryShowCase = () => {
    const [items, setItems] = useState(productData);

    // category-based filtering
    const filterItem = (categoryItem) => {
        const updateItems = productData.filter((currentElement) => {
            return currentElement.category === categoryItem;
        });
        setItems(updateItems);
    }

    return (
        <div className = "course-section style-3 padding-tb">
            {/* Shapes */}
            <div className = "course-shape one">
                <img src = {Shape01} alt = "shape-img-icon-1" />
            </div>
            <div className = "course-shape two">
                <img src = {Shape02} alt = "shape-img-icon-2" />
            </div>
            {/* Main section */}
            <div className = "container">
                {/* Section header */}
                <div className = "section-header">
                    {title}
                    <div className = "course-filter-group">
                        <ul className = "lab-ul">
                            <li onClick = {() => setItems(productData)}>Todo</li>
                            <li onClick = {() => filterItem("Zapatillas")}>Zapatillas</li>
                            <li onClick = {() => filterItem("Bolsos")}>Bolsos</li>
                            <li onClick = {() => filterItem("Celulares")}>Celulares</li>
                            <li onClick = {() => filterItem("Belleza")}>Belleza</li>
                        </ul>
                    </div>
                </div>
                {/* Section body */}
                <div className = "section-wrapper">
                    <div className = "row g-4 justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 course-filter-group">
                        {
                            items.map((product) => (
                                <div key = {product.id} className = "col">
                                    <div className = "course-item style-4">
                                        <div className = "course-inner">
                                            <div className = "course-thumb">
                                                <img src = {product.imgUrl} alt = "" />
                                                <div className = "course-category">
                                                    <div className = "course-cate">
                                                        <a href = "#">{product.category}</a>
                                                    </div>
                                                    <div className = "course-review">
                                                        <Rating />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Content */}
                                            <div className = "course-content">
                                                <Link to = {`/shop/${product.id}`}>
                                                    <h6>{product.title}</h6>
                                                </Link>
                                                <div className = "course-footer">
                                                    <div className = "course-author">
                                                        <Link to = "/" className = "ca-name">{product.brand}</Link>
                                                    </div>
                                                    <div className = "course-price">
                                                        {product.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryShowCase;