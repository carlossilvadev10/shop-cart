import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";

const title = "Crear una cuenta";
const socialTitle = "Regístrate con tus redes sociales";
const btnText = "Registrarse";
const socialList = [
    {
        iconName: "icofont-google-plus",
        siteLink: "#",
        className: "google",
    },
    {
        iconName: "icofont-facebook",
        siteLink: "#",
        className: "facebook",
    },
    {
        iconName: "icofont-twitter",
        siteLink: "#",
        className: "twitter",
    },
    {
        iconName: "icofont-linkedin",
        siteLink: "#",
        className: "linkedin",
    },
    {
        iconName: "icofont-instagram",
        siteLink: "#",
        className: "instagram",
    },
    {
        iconName: "icofont-pinterest",
        siteLink: "#",
        className: "pinterest",
    },
]

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const {signUpWithGmail, createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Correo y/o contraseña incorrectos. Por favor, intenta nuevamente.");
        });
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setErrorMessage("Las contraseñas no coinciden. Por favor, asegúrate de que ambas contraseñas sean iguales.");
            return;
        } else {
            createUser(email, password).then((userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    icon: "success",
                    title: "¡Registro exitoso!",
                    text: "Tu cuenta ha sido creada correctamente.",
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
                navigate(from, { replace: true });
            }).catch((error) => {
                console.log(error.message);
                const error1 = error.message;
                Swal.fire({
                    icon: "error",
                    title: "¡Ups!",
                    text: error1,
                    confirmButtonText: "Entendido",
                });
            });
        }
    }

    return (
        <div className = "login-section padding-tb section-bg">
            <div className = "container">
                <div className = "account-wrapper">
                    <h3 className = "title">
                        {title}
                    </h3>
                    <form action = "" className = "account-form" onSubmit = {handleSignUp}>
                        <div className = "form-group">
                            <input type = "text" name = "name" id = "name"  placeholder = "Nombre completo" required />
                        </div>
                        <div className = "form-group">
                            <input type = "email" name = "email" id = "email"  placeholder = "Correo electrónico" required />
                        </div>
                        <div className = "form-group">
                            <input type = "password" name = "password" id = "password"  placeholder = "Contraseña" required />
                        </div>
                        <div className = "form-group">
                            <input type = "password" name = "confirmPassword" id = "confirmPassword"  placeholder = "Confirmar contraseña" required />
                        </div>
                        <div className = "">
                            {
                                errorMessage && (
                                    <div className = "error-message text-danger mb-1">
                                        {errorMessage}
                                    </div>
                                )
                            }
                        </div>
                        <div className = "form-group">
                            <button type = "submit" className = "d-block lab-btn">
                                <span>{btnText}</span>
                            </button>
                        </div>
                    </form>
                    <div className = "account-bottom">
                        <span className = "d-block cate pt-10¿">
                            ¿Ya tienes una cuenta en ShopCart? <Link to = "/login" className = "ms-1">Inicia sesión.</Link>
                        </span>
                        <span className = "or">o</span>
                        <h5 className = "subtitle">
                            {socialTitle}
                        </h5>
                        <ul className = "lab-ul social-icons justify-content-center">
                            {
                                socialList.map((item, i) => (
                                    <li key = {i}>
                                        <a href = {item.siteLink} className = {item.className} style = {{ padding: "0.8rem" }} onClick = {item.className === "google" ? handleRegister : undefined}>
                                            <i className = {`${item.iconName}`}></i>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;