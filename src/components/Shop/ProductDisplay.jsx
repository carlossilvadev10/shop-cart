import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDisplay = ({ item }) => {
    const {id, name, description, seller, price, ratingsCount, img} = item;
    const [prequantity, setQuantity] = useState(item.quantity > 0 ? item.quantity : 1);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Seleccionar talla");
    const [color, setColor] = useState("Seleccionar color");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleDecrease = () => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1);
        }
    }

    const handleIncrease = () => {
        setQuantity(prequantity + 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (size === "Seleccionar talla" || color === "Seleccionar color") {
            Swal.fire({
                icon: "warning",
                title: "Campos obligatorios",
                text: "Por favor seleccione una talla y un color antes de continuar.",
                confirmButtonText: "Entendido",
            });
            return;
        }

        if (prequantity < 1 || isNaN(prequantity)) {
            Swal.fire({
                icon: "error",
                title: "Cantidad inválida",
                text: "La cantidad debe ser al menos 1.",
                confirmButtonText: "Entendido",
            });
            return;
        }

        const product = {
            id: id,
            name: name,
            description: description,
            seller: seller,
            price: price,
            img: img,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        }
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }

        Swal.fire({
            icon: "success",
            title: "¡Producto agregado!",
            text: "El producto ha sido añadido al carrito.",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
        }).then(() => {
            localStorage.setItem("cart", JSON.stringify(existingCart));
            setQuantity(1);
            setSize("Seleccionar talla");
            setColor("Seleccionar color");
            setCoupon("");
            window.location.reload(); // Se recarga después del mensaje
        });
    }

    return (
        <div>
            <div className = "">
                <h4>
                    {name}
                </h4>
                <p className = "rating">
                    <i className = "icofont-star"></i>
                    <i className = "icofont-star"></i>
                    <i className = "icofont-star"></i>
                    <i className = "icofont-star"></i>
                    <i className = "icofont-star me-1"></i>
                    <span>{ratingsCount} Reseñas</span>
                </p>
                <h4>
                    S/. {price}
                </h4>
                <h6>
                    {seller}
                </h6>
                <p style = {{ textAlign: "justify" }}>{description}</p>
            </div>
            <div className = "">
                <form action = "" onSubmit = {handleSubmit}>
                    <div className = "select-product size">
                        <select name = "size" id = "size" value = {size} onChange = {handleSizeChange}>
                            <option value = "" selected hidden>Seleccionar talla</option>
                            <option value = "S">S</option>
                            <option value = "M">M</option>
                            <option value = "L">L</option>
                            <option value = "XL">XL</option>
                            <option value = "XXL">XXL</option>
                        </select>
                        <i className = "icofont-rounded-down"></i>
                    </div>
                    <div className = "select-product color">
                        <select name = "color" id = "color" value = {color} onChange = {handleColorChange}>
                            <option value = "" selected hidden>Seleccionar color</option>
                            <option value = "Negro">Negro</option>
                            <option value = "Rojo">Rojo</option>
                            <option value = "Azul">Azul</option>
                            <option value = "Blanco">Blanco</option>
                            <option value = "Verde">Verde</option>
                        </select>
                        <i className = "icofont-rounded-down"></i>
                    </div>
                    <div className = "cart-plus-minus">
                        <div className = "dec qtybutton" onClick = {handleDecrease}>
                            -
                        </div>
                        <input type = "text" name = "prequantity" id = "prequantity" value = {prequantity} className = "cart-plus-minus-box" onChange = {(e) => setQuantity(parseInt(e.target.value, 10))} />
                        <div className = "inc qtybutton" onClick = {handleIncrease}>
                            +
                        </div>
                    </div>
                    <div className = "discount-code mb-2">
                        <input type = "text" name = "discountCode" id = "discountCode" placeholder = "Ingrese su cupón" onChange = {(e) => setCoupon(e.target.value)} />
                    </div>
                    <button type = "submit" className = "lab-btn">
                        <span>Agregar al carrito</span>
                    </button>
                    <Link to = "/cart-page" className = "lab-btn bg-primary">
                        <span>Ver bolsa</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay;