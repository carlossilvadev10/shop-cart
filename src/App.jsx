import React from "react";
import { Outlet } from "react-router-dom";
import NavItems from "./components/Shared/NavItems";
import "./App.css";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <>
      <NavItems />
      <div className = "min-vw-100">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App;