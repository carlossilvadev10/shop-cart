import React from "react";

const subtitle = "¡Aparta esta fecha especial!";
const title = (
    <h2 className = "title text-capitalize">
        Taller exclusivo y gratuito, <b>domina <span>técnicas avanzadas</span></b> de ventas
    </h2>
);
const description = "¡Cupos limitados por tiempo breve! No dejes pasar esta oportunidad";

const Register = () => {
    return (
        <section className = "register-section padding-tb pb-0">
            <div className = "container">
                <div className = "row g-4 row-cols-1 row-cols-lg-2 align-items-center">
                    <div className = "col">
                        <div className = "section-header">
                            <span className = "subtitle">{subtitle}</span>
                            {title}
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className = "col">
                        <div className = "section-wrapper">
                            <h4>
                                Únete a nuestro equipo
                            </h4>
                            <form action = "" className = "register-form">
                                <input type = "text" name = "fullName" id = "fullName" placeholder = "Nombre completo" className = "reg-input" />
                                <input type = "email" name = "email" id = "email" placeholder = "Correo electrónico" className = "reg-input" />
                                <input type = "tel" name = "cellphone" id = "cellphone" placeholder = "Celular" className = "reg-input" />
                                <button type = "submit" className = "lab-btn">
                                    Registrarse ahora
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;