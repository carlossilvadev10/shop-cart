import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Instructor01 from "../../assets/images/instructor/01.png";

const subTitle = "¿Por qué elegirnos?";
const title = "Conviértete en Vendedor";
const description = "Vende tus productos desde cualquier dispositivo y llega a miles de clientes. Regístrate, sube tu catálogo y comienza a generar ventas en minutos.";
const btnText = "Empezar ahora";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Vendedores registrados",
  },
  {
    iconName: "icofont-graduate-alt",
    count: "30",
    text: "Cursos certificados",
  },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Recompensas y giftCards",
  },
]

const AboutUs = () => {
  return (
    <div className = "instructor-section style-2 padding-tb section-bg-ash">
      <div className = "container">
        <div className = "section-wrapper">
          <div className = "row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className = "col">
              {
                countList.map((val, i) => (
                  <div key = {i} className = "count-item">
                    <div className = "count-inner">
                      <div className = "count-icon">
                        <i className = {val.iconName} style = {{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px" }}></i>
                      </div>
                      <div className = "count-content">
                        <h2 className = "">
                          <span className = "count"><CountUp end = {val.count} /></span>
                          <span>+</span>
                        </h2>
                        <p>{val.text}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className = "col">
              <div className = "instructor-content">
                <span className = "subtitle">{subTitle}</span>
                <h2 className = "title">
                  {title}
                </h2>
                <p>{description}</p>
                <Link to = "/sign-up" className = "lab-btn">
                  {btnText}
                </Link>
              </div>
            </div>
            <div className = "col">
              <div className = "instructor-thumb">
                <img src = {Instructor01} alt = "instructor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;