import React, { useState } from "react";
import productData from "../../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../Shared/SelectedCategory";

const title = (
    <h2 className = "text-capitalize">
        Encuentra lo que buscas entre <span>miles</span> de opciones
    </h2>
);
const description = "Tenemos la mayor colección de productos del mercado, seleccionados para ti";

const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);

    // Search funtionality
    const handleSearch = e => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        // Filtering products based on search
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProducts(filtered);
    };

    return (
        <section className = "banner-section style-4">
            <div className = "container">
                <div className = "banner-content">
                    {title}
                    <form action = "">
                        <SelectedCategory select = {"all"} />
                        <input type = "text" name = "search" id = "search" placeholder = "Busca tu producto" value = {searchInput} onChange = {handleSearch} />
                        <button type = "submit">
                            <i className = "icofont-search"></i>
                        </button>
                    </form>
                    <p>
                        {description}
                    </p>
                    <ul className = "lab-ul">
                        {
                            searchInput && filteredProducts.map((product, i) => <li>
                                <Link to = {`/shop/${product.id}`}>{product.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner;