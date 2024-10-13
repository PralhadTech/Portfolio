import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="font-bold text-4xl">PralTech</h1>

        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            {/* Hamburger icon with 3 lines */}
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>
        </div>

        {/* Navigation Links (hidden on small screens, visible on medium and above) */}
        <ul className="hidden md:flex space-x-6 items-center">
          <Link to="/">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
          </Link>
          <Link to="/projects">
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          </Link>
          <Link to="/blogs">
            <li className="hover:text-blue-400 cursor-pointer">Blogs</li>
          </Link>
          <Link to="/contact">
            <li>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                Contact Me
              </button>
            </li>
          </Link>
        </ul>
      </nav>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 text-center p-4 bg-gray-800">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Blogs</li>
          <li>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
