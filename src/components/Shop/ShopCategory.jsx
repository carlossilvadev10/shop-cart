import React from "react";
import Data from "../../products.json";

const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectedCategory, setSelectedCategory }) => {
    return (
        <>
            <div className = "widget-header">
                <h5 className = "ms-2">
                    Todas las categorías
                </h5>
            </div>
            <div className = "">
                <button className = {`m-2 ${selectedCategory === "all" ? "bg-warning" : ""}`} onClick = {() => { setSelectedCategory("all"); setProducts(Data); }}>
                    Todos
                </button>
                {
                    menuItems.map((val, id) => {
                        return (
                            <button key = {id} className = {`m-2 ${selectedCategory === val ? "bg-warning" : ""}`} onClick = {() => filterItem(val)}>
                                {val}
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShopCategory;