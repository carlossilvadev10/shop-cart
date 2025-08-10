import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const title = "Iniciar sesión";
const socialTitle = "Continua con tus redes sociales";
const btnText = "Ingresar";
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

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const {signUpWithGmail, login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Correo y/o contraseña incorrectos. Por favor, intenta nuevamente.");
        });
    }

    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Correo y/o contraseña incorrectos. Por favor, intenta nuevamente.");
        });
    }

    return (
        <div>
            <div className = "login-section padding-tb section-bg">
                <div className = "container">
                    <div className = "account-wrapper">
                        <h3 className = "title">
                            {title}
                        </h3>
                        <form action = "" className = "account-form" onSubmit = {handleLogin}>
                            <div className = "form-group">
                                <input type = "email" name = "email" id = "email"  placeholder = "Correo electrónico" required />
                            </div>
                            <div className = "form-group">
                                <input type = "password" name = "password" id = "password"  placeholder = "Contraseña" required />
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
                                <div className = "d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className = "checkgroup">
                                        <input type = "checkbox" name = "remember" id = "remember" />
                                        <label htmlFor = "remember">Recordar</label>
                                    </div>
                                    <Link to = "/forgetpass">
                                        ¿Has olvidado la contraseña?
                                    </Link>
                                </div>
                            </div>
                            <div className = "form-group">
                                <button type = "submit" className = "d-block lab-btn">
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>
                        <div className = "account-bottom">
                            <span className = "d-block cate pt-10">
                                ¿Eres nuevo en ShopCart? <Link to = "/sign-up" className = "ms-1">Crea una cuenta.</Link>
                            </span>
                            <span className = "or">o</span>
                            <h5 className = "subtitle">
                                {socialTitle}
                            </h5>
                            <ul className = "lab-ul social-icons justify-content-center">
                                {
                                    socialList.map((item, i) => (
                                        <li key = {i}>
                                            <a href = {item.siteLink} className = {item.className} onClick = {item.className === "google" ? handleRegister : undefined}>
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
        </div>
    )
}

export default Login;