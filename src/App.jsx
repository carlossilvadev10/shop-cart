import React from "react";
import { Outlet } from "react-router-dom";
import NavItems from "./components/Shared/NavItems";
import Footer from "./components/Shared/Footer";
import ScrollToTop from "./components/Shared/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <NavItems />
      <div className = "min-vw-100">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App;