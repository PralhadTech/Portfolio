import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./src/components/Navbar";
import "./index.css";
import Home from "./src/components/Home";
import Footer from "./src/components/Footer";
import Projects from "./src/components//Projects";
import Contact from "./src/components/Contact";
import Blogs from "./src/components/Blogs";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="relative z-10">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
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
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
