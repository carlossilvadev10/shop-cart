import React, { useState } from "react";
import PageHeader from "../Shared/PageHeader";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import Data from "../../products.json";

const showResults = "Mostrando 01 - 12 de 76 resultados";

const Shop = () => {
    const [gridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // function to change the current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    // filter product based on category
    const [selectedCategory, setSelectedCategory] = useState("all");
    const menuItems = [...new Set(Data.map((val) => val.category))];
    const filterItem = (currentCategory) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === currentCategory;
        })
        setSelectedCategory(currentCategory);
        setProducts(newItem);
    }

    return (
        <div>
            <PageHeader title = "Nuestra tienda" currentPage = "Tienda" />
            {/* Shop page */}
            <div className = "shop-page padding-tb">
                <div className = "container">
                    <div className = "row justify-content-center">
                        <div className = "col-lg-8 col-12">
                            <article>
                                {/* Layout & title */}
                                <div className = "shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResults}</p>
                                    <div className = {`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                                        <a href = "#" className = "grid" onClick = {() => setGridList(!gridList)}>
                                            <i className = "icofont-ghost"></i>
                                        </a>
                                        <a href = "#" className = "list" onClick = {() => setGridList(!gridList)}>
                                            <i className = "icofont-listine-dots"></i>
                                        </a>
                                    </div>
                                </div>
                                {/* Product cards */}
                                <div className = "">
                                    <ProductCard gridList = {gridList} products = {currentProducts} />
                                </div>
                                <Pagination productsPerPage = {productsPerPage} totalProducts = {products.length} paginate = {paginate} activePage = {currentPage} />
                            </article>
                        </div>
                        <div className = "col-lg-4 col-12">
                            <aside>
                                <Search gridList = {gridList} products = {products} />
                                <ShopCategory filterItem = {filterItem} setItem = {setProducts} menuItems = {menuItems} setProducts = {setProducts} selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} />
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

export default Shop;