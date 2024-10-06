import React from "react";
// import { GitHub, LinkedIn, Twitter } from "@mui/icons-material"; // Importing Material UI icons
// import ProfileImage from "../assets/your-profile-image.jpg"; // Replace with your image path
import { GitHub } from "@mui";
const Home = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Four Lines Column */}
        <div className="col-span-1 flex flex-col justify-center">
          <p>Line 1: Passionate about web development.</p>
          <p>Line 2: Always learning new technologies.</p>
          <p>Line 3: Focused on frontend development.</p>
          <p>Line 4: Ready to collaborate on exciting projects!</p>
        </div>

        {/* Introduction Column */}
        <div className="col-span-1 flex flex-col justify-center p-4 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Frontend Developer</h2>
          <p>
            Hi! I'm a frontend developer with a passion for creating dynamic and
            responsive web applications. I enjoy bringing ideas to life and
            improving user experiences through code.
          </p>
        </div>

        {/* Image Column */}
        <div className="col-span-1 flex justify-center items-center">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-indigo-600 shadow-lg"
          />
        </div>

        {/* Social Profiles Column */}
        <div className="col-span-1 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2">Connect with me</h2>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="hover:text-indigo-500 transition duration-200" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="hover:text-indigo-500 transition duration-200" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="hover:text-indigo-500 transition duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
