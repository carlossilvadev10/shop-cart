import React from "react";
import Rating from "../Shared/Rating";
import { Link } from "react-router-dom";

const ProductCard = ({ gridList, products }) => {
    return (
        <div className = {`shop-product-wrap row justify-content-center ${gridList ? "grid" : "list"}`}>
            {
                products.map((product, i) => (
                    <div key = {i} className = "col-lg-4 col-md-6 col-12">
                        <div className = "product-item">
                            {/* Product images */}
                            <div className = "product-thumb">
                                <div className = "pro-thumb">
                                    <img src = {product.img} alt = "" />
                                </div>
                                {/* product action links */}
                                <div className = "product-action-link">
                                    <Link to = {`/shop/${product.id}`}>
                                        <i className = "icofont-eye"></i>
                                    </Link>
                                    <a href = "#">
                                        <i className = "icofont-heart"></i>
                                    </a>
                                    <Link to = "/cart-page">
                                        <i className = "icofont-cart-alt"></i>
                                    </Link>
                                </div>
                            </div>
                            {/* Product content */}
                            <div className = "product-content">
                                <h5>
                                    <Link to = {`/shop/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </h5>
                                <p className = "product-rating">
                                    <Rating />
                                </p>
                                <h6>S/. {product.price}</h6>
                            </div>
                        </div>
                        {/* List style */}
                        <div className = "product-list-item">
                            {/* Product images */}
                            <div className = "product-thumb">
                                <div className = "pro-thumb">
                                    <img src = {product.img} alt = "" />
                                </div>
                                {/* product action links */}
                                <div className = "product-action-link">
                                    <Link to = {`/shop/${product.id}`}>
                                        <i className = "icofont-eye"></i>
                                    </Link>
                                    <a href = "#">
                                        <i className = "icofont-heart"></i>
                                    </a>
                                    <Link to = "/cart-page">
                                        <i className = "icofont-cart-alt"></i>
                                    </Link>
                                </div>
                            </div>
                            {/* Product content */}
                            <div className = "product-content">
                                <h5>
                                    <Link to = {`/shop/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </h5>
                                <p className = "product-rating">
                                    <Rating />
                                </p>
                                <h6>S/. {product.price}</h6>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCard;