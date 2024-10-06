import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.webp";

const Navbar = () => {
  return (
    <nav className="relative z-10 container m-auto mt-4 flex bg-gray-900 dark:bg-white justify-between items-center p-2 text-white dark:text-gray-900 rounded-full border border-gray-800 dark:border-gray-200 shadow-xl transition duration-300 ease-in-out">
      <h1 className="font-bold text-white dark:text-gray-900 text-xl ml-2  p-2">
        Pralhad Tech
      </h1>
      <ul className="flex space-x-8 text-lg">
        <li className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline underline-offset-4 cursor-pointer">
          Home
        </li>
        <li className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline underline-offset-4 cursor-pointer">
          Projects
        </li>
        <li className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline underline-offset-4 cursor-pointer">
          Blogs
        </li>
        <li className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline underline-offset-4 cursor-pointer">
          Contact
        </li>
      </ul>

      <button className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-indigo-100 transition duration-300 ease-in-out">
        Contact me
      </button>
    </nav>
  );
};

export default Navbar;
