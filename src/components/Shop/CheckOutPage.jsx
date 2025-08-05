import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./../../assets/css/modal.css";

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleOrderConfirm = () => {
        let isValid = true;
        let warningMessage = "";

        if (activeTab === "visa") {
            const nameOnCard = document.getElementById("nameOnCard").value.trim();
            const cardNumber = document.getElementById("cardNumber").value.trim();
            const expirationDate = document.getElementById("expirationDate").value.trim();
            const cvv = document.getElementById("cvv").value.trim();

            if (!nameOnCard || !cardNumber || !expirationDate || !cvv) {
                isValid = false;
                warningMessage = "Por favor, complete todos los campos para poder pagar con Visa.";
            }
        }

        if (activeTab === "paypal") {
            const email = document.getElementById("email").value.trim();
            const fullName = document.getElementById("fullName").value.trim();
            const extraInfo = document.getElementById("extraInfo").value.trim();

            if (!email || !fullName || !extraInfo) {
                isValid = false;
                warningMessage = "Por favor, complete todos los campos para continuar con PayPal.";
            }
        }

        if (!isValid) {
            Swal.fire({
                icon: "warning",
                title: "Campos incompletos",
                text: warningMessage,
                confirmButtonText: "Revisar",
            });
            return;
        }

        if (activeTab === "visa") {
            Swal.fire({
                icon: "success",
                title: "¡Compra realizada!",
                text: "Gracias por su compra. Su pedido ha sido procesado con éxito.",
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
            }).then(() => {
                localStorage.removeItem("cart");
                navigate(from, { replace: true });
            });
        } else if (activeTab === "paypal") {
            Swal.fire({
                icon: "info",
                title: "Redirigiendo a PayPal...",
                text: "Será redirigido para completar su pago.",
                timer: 2500,
                timerProgressBar: true,
                showConfirmButton: false,
            }).then(() => {
                localStorage.removeItem("cart");
                navigate(from, { replace: true });
            });
        }
    }

    return (
        <div className = "modalCard">
            <Button variant = "primary" className = "py-2" onClick = {handleShow}>
                Proceder al pago
            </Button>
            <Modal show = {show} onHide = {handleClose} className = "modal fade" centered>
                <div className = "modal-dialog">
                    <h5 className = "px-3 mb-3">
                        Seleccione su método de pago
                    </h5>
                    <div className = "modal-content">
                        <div className = "modal-body">
                            <div className = "tabs mt-3">
                                <ul className = "nav nav-tabs" role = "tablist" id = "myTab">
                                    <li className = "nav-item" role = "presentation">
                                        <a href = "#visa" data-toggle = "tab" role = "tab" aria-controls = "visa" aria-selected = {activeTab === "visa"} className = {`nav-link d-flex justify-content-center ${activeTab === "visa" ? "active" : ""}`} id = "visa-tab" onClick = {() => handleTabChange("visa")}>
                                            <img src = "/src/assets/images/modal/visa.png" alt = "visa" width = {80} />
                                        </a>
                                    </li>
                                    <li className = "nav-item" role = "presentation">
                                        <a href = "#paypal" data-toggle = "tab" role = "tab" aria-controls = "paypal" aria-selected = {activeTab === "paypal"} className = {`nav-link d-flex justify-content-center ${activeTab === "paypal" ? "active" : ""}`} id = "paypal-tab" onClick = {() => handleTabChange("paypal")}>
                                            <img src = "/src/assets/images/modal/paypal.png" alt = "visa" width = {90} />
                                        </a>
                                    </li>
                                </ul>
                                <div className = "tab-content" id = "myTabContent">
                                    <div className = {`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`} id = "visa" role = "tabpanel" aria-labelledby = "visa-tab">
                                        <div className = "mt-4 mx-4">
                                            <div className = "text-center">
                                                <h5>Pagar con Visa</h5>
                                            </div>
                                            <div className = "form mt-3">
                                                <div className = "inputbox">
                                                    <input type = "text" name = "nameOnCard" id = "nameOnCard" className = "form-control" required />
                                                    <span>Nombre en la tarjeta</span>
                                                </div>
                                                <div className = "inputbox">
                                                    <input type = "text" name = "cardNumber" id = "cardNumber" inputMode = "numeric" pattern = "\d{16}" maxLength = "16" className = "form-control" required />
                                                    <span>Número en la tarjeta</span>
                                                    <i className = "fa fa-eye"></i>
                                                </div>
                                                <div className = "d-flex flex-row">
                                                    <div className = "inputbox">
                                                        <input type = "text" name = "expirationDate" id = "expirationDate" className = "form-control" required />
                                                        <span>Fecha de vencimiento</span>
                                                    </div>
                                                    <div className = "inputbox">
                                                        <input type = "text" name = "cvv" id = "cvv" inputMode = "numeric" pattern = "\d{3}" maxLength = "3" className = "form-control" required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className = "d-flex justify-content-center pay">
                                                    <button className = "btn btn-primary" onClick = {handleOrderConfirm}>
                                                        Pagar ahora
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = {`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`} id = "paypal" role = "tabpanel" aria-labelledby = "paypal-tab">
                                        <div className = "mt-4 mx-4">
                                            <div className = "text-center">
                                                <h5>Pagar con PayPal</h5>
                                            </div>
                                            <div className = "form mt-3">
                                                <div className = "inputbox">
                                                    <input type = "email" name = "email" id = "email" className = "form-control" required />
                                                    <span>Correo electronico</span>
                                                </div>
                                                <div className = "inputbox">
                                                    <input type = "text" name = "fullName" id = "fullName" className = "form-control" required />
                                                    <span>Nombre completo</span>
                                                </div>
                                                <div className = "inputbox">
                                                    <input type = "text" name = "extraInfo" id = "extraInfo" className = "form-control" required />
                                                    <span>Información extra</span>
                                                </div>
                                                <div className = "d-flex justify-content-center pay">
                                                    <button className = "btn btn-primary" onClick = {handleOrderConfirm}>
                                                        Continuar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className = "mt-3 px-4 p-disclaimer text-j" style = {{ textAlign: "justify" }}>
                                    <em>Cláusula de pago:</em> El pago no implica aceptación de calidad ni conformidad con el contrato.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CheckOutPage;