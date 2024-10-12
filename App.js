import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./src/components/Navbar";
import "./index.css";
import Home from "./src/components/Home";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";

const App = () => {
  return (
    <div className="relative z-10">
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
