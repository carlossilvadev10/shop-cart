import React, { useEffect, useState } from "react";
import PageHeader from "../Shared/PageHeader";
import { Link } from "react-router-dom";
import CheckOutPage from "./CheckOutPage";
import deleteImgUrl from "../../assets/images/shop/delete.png";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storeCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storeCartItems);
    }, []);

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems]);
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    }

    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems]);
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const handleRemove = (item) => {
        const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCart);
        updateLocalStorage(updatedCart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const cartSubTotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);

    const cartTotal = cartSubTotal;

    return (
        <div>
            <PageHeader title = "Bolsa de compras" currentPage = "Mi bolsa" />
            <div className = "shop-cart padding-tb">
                <div className = "container">
                    <div className = "section-wrapper">
                        <div className = "cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className = "cat-product">Producto</th>
                                        <th className = "cat-pricet">Precio</th>
                                        <th className = "cat-quantity">Cantidad</th>
                                        <th className = "cat-toprice">Total</th>
                                        <th className = "cat-edit">Editar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, index) => (
                                            <tr key = {index}>
                                                <td className = "product-item cat-product">
                                                    <div className = "p-thumb">
                                                        <Link to = {`/shop/${item.id}`}>
                                                            <img src = {item.img} alt = "" />
                                                        </Link>
                                                    </div>
                                                    <div className = "p-content">
                                                        <Link to = {`/shop/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td className = "cat-price">S/. {item.price.toFixed(2)}</td>
                                                <td className = "cat-quantity">
                                                    <div className = "cart-plus-minus">
                                                        <div className = "dec qtybutton" onClick = {() => handleDecrease(item)}>
                                                            -
                                                        </div>
                                                        <input type = "text" name = "prequantity" id = "prequantity" value = {item.quantity} className = "cart-plus-minus-box" />
                                                        <div className = "inc qtybutton" onClick = {() => handleIncrease(item)}>
                                                            +
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className = "cat-toprice">S/. {calculateTotalPrice(item).toFixed(2)}</td>
                                                <td className = "cat-edit">
                                                    <a href = "#" onClick = {() => handleRemove(item)}>
                                                        <img src = {deleteImgUrl} alt = "" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    {
                                        cartItems.length === 0 && (
                                            <tr>
                                                <td colSpan = "5" className = "empty-cart text-center ">Tu bolsa está vacía</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className = "cart-bottom">
                            <div className = "cart-checkout-box">
                                <form action = "" className = "coupon">
                                    <input type = "text" name = "coupon" id = "coupon" className = "cart-page-input-text" placeholder = "Ingrese su cupón" />
                                    <input type = "submit" value = "Aplicar cupón" />
                                </form>
                                <form action = "" className = "cart-checkout">
                                    <input type = "submit" value = "Actualizar bolsa" />
                                    <div className = "">
                                        <CheckOutPage />
                                    </div>
                                </form>
                            </div>
                            <div className = "shiping-box">
                                <div className = "row g-3">
                                    <div className = "col-md-6 col-12">
                                        <div className = "calculate-shipping">
                                            <h3>Calcular costo de envío</h3>
                                            <div className = "outline-select">
                                                <select>
                                                    <option value = "" selected hidden>Seleccionar lugar</option>
                                                    <option value = "Lima">Lima</option>
                                                    <option value = "Arequipa">Arequipa</option>
                                                    <option value = "Piura">Piura</option>
                                                    <option value = "Trujillo">Trujillo</option>
                                                    <option value = "Huaraz">Huaraz</option>
                                                    <option value = "Iquitos">Iquitos</option>
                                                </select>
                                                <span className = "select-icon">
                                                    <i className = "icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <div className = "outline-select shipping-select">
                                                <select>
                                                    <option value = "" selected hidden>Seleccionar lugar</option>
                                                    <option value = "Lima">Huacho</option>
                                                    <option value = "Arequipa">Chancay</option>
                                                    <option value = "Piura">Chiclayo</option>
                                                    <option value = "Trujillo">Ica</option>
                                                    <option value = "Huaraz">Tarma</option>
                                                    <option value = "Iquitos">Yurimaguas</option>
                                                </select>
                                                <span className = "select-icon">
                                                    <i className = "icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input type = "text" name = "postalCode" id = "postalCode" placeholder = "Código postal" className = "cart-page-input-text" />
                                            <button type = "submit">
                                                Actualizar dirección
                                            </button>
                                        </div>
                                    </div>
                                    <div className = "col-md-6 col-12">
                                        <div className = "cart-overview ms-2">
                                            <h3>Total de la bolsa</h3>
                                            <ul className = "lab-ul">
                                                <li>
                                                    <span className = "pull-left">Subtotal</span>
                                                    <p className = "pull-right">S/. {cartSubTotal.toFixed(2)}</p>
                                                </li>
                                                <li>
                                                    <span className = "pull-left">Envío y almacenamiento</span>
                                                    <p className = "pull-right">Envío gratis</p>
                                                </li>
                                                <li>
                                                    <span className = "pull-left">Total</span>
                                                    <p className = "pull-right">S/. {cartTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;