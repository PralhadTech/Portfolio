import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:flex md:items-center md:justify-between">
      {/* Left Section */}
      <div className="left text-white md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold">FRONT-END WEB DEVELOPER</h1>
        <h2 className="text-3xl font-semibold">Pralhad Talmale</h2>
        <p className="text-lg leading-relaxed">
          I am a passionate front-end developer with a keen eye for design and a
          strong background in web development. I am always eager to learn and
          contribute to the ever-evolving field of technology.
        </p>
      </div>

      {/* Right Section */}
      <div className="right mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="your-hero-image-path.jpg"
          alt="hero section"
          className="rounded-lg shadow-lg w-3/4 md:w-full"
        />
      </div>

      {/* Social Icons */}
      <div className="social-icons mt-8 flex flex-col justify-center text-center space-x-6 md:space-x-8 text-2xl">
        <a href="#" className="text-blue-500 hover:text-blue-600">
          <Facebook fontSize="inherit" />
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-600">
          <Instagram fontSize="inherit" />
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-500">
          <Twitter fontSize="inherit" />
        </a>
        <a href="#" className="text-blue-700 hover:text-blue-800">
          <LinkedIn fontSize="inherit" />
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-900">
          <GitHub fontSize="inherit" />
        </a>
      </div>
    </div>
  );
};

export default Home;
