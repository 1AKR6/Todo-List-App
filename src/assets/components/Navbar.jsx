// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation between pages

// Navbar Component
const Navbar = () => {
  return (
    // Navbar container with background color and padding
    <nav className="bg-gray-900 p-4 shadow-md rounded-md mb-4">
      {/* Centered container for Navbar content */}
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo or App Name section */}
        <div className="text-2xl font-bold text-white">
          MyApp {/* You can change 'MyApp' to your app's name */}
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-6">
          {/* Home link */}
          <li>
            <Link 
              to="/" 
              className="text-gray-300 hover:text-yellow-400 transition duration-300 font-medium"
            >
              Home
            </Link>
          </li>

          {/* About link */}
          <li>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-yellow-400 transition duration-300 font-medium"
            >
              About
            </Link>
          </li>

          {/* TodoApp link */}
          <li>
            <Link 
              to="/todolist" 
              className="text-gray-300 hover:text-yellow-400 transition duration-300 font-medium"
            >
              TodoApp
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; // Export Navbar component for use in App.jsx
