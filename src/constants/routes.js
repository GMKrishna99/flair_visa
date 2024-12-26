import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../../src/MainLayout";
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
