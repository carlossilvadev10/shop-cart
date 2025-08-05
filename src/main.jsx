import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider.jsx";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import SingleBlog from "./components/Blog/SingleBlog.jsx";
import Shop from "./components/Shop/Shop.jsx";
import SingleProduct from "./components/Shop/SingleProduct.jsx";
import CartPage from "./components/Shop/CartPage.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import "./index.css";
import "swiper/css";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart-page",
        element: <PrivateRoute><CartPage /></PrivateRoute>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router = {router} />
    </AuthProvider>
  </StrictMode>,
)