import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Shared/Rating";

const title = (
    <h2 className = "text-capitalize title">
        Descubre nuestros productos
    </h2>
);
const productData = [
    {
        imgUrl: "src/assets/images/categoryTab/01.jpg",
        category: "Zapatillas",
        title: "Nike Premier X",
        author: "assets/images/course/author/01.jpg",
        brand: "Nike",
        price: "$199.00",
        id: 1,
    },
    {
        imgUrl: "src/assets/images/categoryTab/02.jpg",
        category: "Bolsos",
        title: "Aesthetic Bags",
        author: "assets/images/course/author/02.jpg",
        brand: "D&J Bags",
        price: "$149.00",
        id: 2,
    },
    {
        imgUrl: "src/assets/images/categoryTab/03.jpg",
        category: "Celulares",
        title: "iPhone 12",
        author: "src/assets/images/categoryTab/brand/apple.png",
        brand: "Apple",
        price: "$399.00",
        id: 3,
    },
    {
        imgUrl: "src/assets/images/categoryTab/04.jpg",
        category: "Bolsos",
        title: "Hiking Bag 15 Nh100",
        author: "assets/images/course/author/04.jpg",
        brand: "Gucci",
        price: "$299.00",
        id: 4,
    },
    {
        imgUrl: "src/assets/images/categoryTab/05.jpg",
        category: "Zapatillas",
        title: "Outdoor Sports Shoes",
        author: "assets/images/course/author/05.jpg",
        brand: "Nike",
        price: "$199.00",
        id: 5,
    },
    {
        imgUrl: "src/assets/images/categoryTab/06.jpg",
        category: "Belleza",
        title: "COSRX Luminique Mist",
        author: "assets/images/course/author/06.jpg",
        brand: "Zara",
        price: "$99.00",
        id: 6,
    },
    {
        imgUrl: "src/assets/images/categoryTab/07.jpg",
        category: "Bolsos",
        title: "Classic Look Chanel Bag",
        author: "assets/images/course/author/01.jpg",
        brand: "Gucci",
        price: "$149.00",
        id: 7,
    },
    {
        imgUrl: "src/assets/images/categoryTab/08.jpg",
        category: "Zapatillas",
        title: "BoldSup Sneakers",
        author: "assets/images/course/author/02.jpg",
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
                <img src = "/src/assets/images/shape-img/icon/01.png" alt = "shape-img-icon-1" />
            </div>
            <div className = "course-shape two">
                <img src = "/src/assets/images/shape-img/icon/02.png" alt = "shape-img-icon-2" />
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