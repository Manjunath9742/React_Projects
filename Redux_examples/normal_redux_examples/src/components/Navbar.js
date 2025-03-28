import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-8 flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              MyLogo
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="/"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
            <a
              href="/cart"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              <FontAwesomeIcon icon={faCartShopping} /> {/* Use the imported icon */}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;