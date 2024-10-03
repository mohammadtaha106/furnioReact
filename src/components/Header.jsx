import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; 
import logo from "../assets/furniro.webp"
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
      <Link to='/'>
        <div className="flex items-center space-x-2">
          <button onClick={toggleMenu} className="text-gray-600 md:hidden mr-4">
            {isOpen ? <FaTimes size={20} className="text-black" /> : <FaBars size={20} className="text-black" />}
          </button>
           <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-gray-800 font-extrabold text-2xl">Furniro</span>
        </div>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to='/' className="text-gray-800">
            Home
          </Link>
          <Link to="/shop" className="text-gray-800">
            Shop
          </Link>
          <a href="#about" className="text-gray-800">
            About
          </a>
          <a href="#contact" className="text-gray-800">
            Contact
          </a>
        </div>

  
        <div className="flex items-center space-x-4">
          <button className="text-black hover:text-gray-600">
            <FaSearch size={20} className="text-black" />
          </button>
          <button className="text-black hover:text-gray-600">
            <FaHeart size={20} className="text-black" />
          </button>
          <button className="text-black hover:text-gray-600">
            <FaShoppingCart size={20} className="text-black" />
          </button>
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-white p-4 space-y-2">
          <a href="#home" className="block text-gray-800 ">
            Home
          </a>
          <a href="#shop" className="block text-gray-800 ">
            Shop
          </a>
          <a href="#about" className="block text-gray-800 ">
            About
          </a>
          <a href="#contact" className="block text-gray-800 ">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
