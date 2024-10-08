import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-start">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-bold">Pralhad Tech</h2>
          <p className="text-gray-400 text-center md:text-left max-w-xs">
            Innovating the future, one step at a time. Let's build something
            great together.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-indigo-400 transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-indigo-400 transition duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="hover:text-indigo-400 transition duration-300 ease-in-out"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold">Follow Me</h3>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.56a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.869 9.869 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482A13.948 13.948 0 011.675 3.15a4.916 4.916 0 001.523 6.563 4.904 4.904 0 01-2.228-.616v.062a4.919 4.919 0 003.946 4.827 4.937 4.937 0 01-2.224.084 4.919 4.919 0 004.596 3.417 9.86 9.86 0 01-6.102 2.105A9.902 9.902 0 010 21.54a13.9 13.9 0 007.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.015-.637A10.012 10.012 0 0024 4.56z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.09 20.452H3.548V9.18H7.09v11.272zM5.32 7.622c-1.132 0-2.051-.925-2.051-2.058 0-1.134.919-2.06 2.051-2.06 1.134 0 2.052.926 2.052 2.06 0 1.133-.918 2.058-2.052 2.058zm15.131 12.83h-3.544v-5.592c0-1.33-.025-3.04-1.855-3.04-1.857 0-2.142 1.45-2.142 2.944v5.688H9.365V9.18h3.405v1.534h.048c.474-.9 1.632-1.848 3.36-1.848 3.595 0 4.259 2.365 4.259 5.445v6.14z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12a12.008 12.008 0 008.207 11.387c.6.111.793-.26.793-.577v-2.037c-3.338.727-4.042-1.616-4.042-1.616-.546-1.387-1.333-1.757-1.333-1.757-1.091-.746.084-.73.084-.73 1.207.084 1.842 1.24 1.842 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.606-2.665-.307-5.467-1.337-5.467-5.944 0-1.313.468-2.386 1.238-3.229-.124-.306-.536-1.541.118-3.212 0 0 1.008-.323 3.303 1.23a11.49 11.49 0 013.007-.405c1.02.005 2.047.138 3.006.405 2.296-1.553 3.303-1.23 3.303-1.23.655 1.671.243 2.906.12 3.212.77.843 1.237 1.916 1.237 3.229 0 4.617-2.805 5.633-5.476 5.933.432.372.818 1.103.818 2.222v3.293c0 .32.19.694.798.576A12.008 12.008 0 0024 12C24 5.373 18.627 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-4">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} Pralhad Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
