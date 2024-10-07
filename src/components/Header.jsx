import React, { useContext, useState } from "react";
import { CiSearch , CiHeart} from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaTimes ,FaBars } from "react-icons/fa";
import logo from "../assets/furniro.webp";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AvatarDrop from "./Avatardrop";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../context/CartContext";
import { Badge } from 'antd'

const Header = () => {
  const { user, setuser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
const {cartItems} = useContext(CartContext)
console.log(cartItems);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.error("Log Out Successfully", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-white p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <button onClick={toggleMenu} className="text-gray-600 md:hidden mr-4">
              {isOpen ? <FaTimes size={20} className="text-black" /> : <FaBars size={20} className="text-black" />}
            </button>
            <img src={logo} alt="Logo" className="w-8 h-8" />
            
            <span className="text-gray-800 font-extrabold text-2xl">Furniro</span>
          </div>
        </Link>

        {/* Centered Navigation */}
        <div className="hidden md:flex justify-center ml-20 space-x-8 flex-grow">
          <Link to="/" className="text-gray-800 hover:text-[#c28c2b]">Home</Link>
          <Link to="/shop" className="text-gray-800 hover:text-[#c28c2b]">Shop</Link>
          <Link to="/about" className="text-gray-800 hover:text-[#c28c2b]">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-[#c28c2b]">Contact</Link>
        </div>

        <div className="flex items-center mr-4 space-x-4">
          <button className="text-black hover:text-gray-600">
            <CiSearch   size={20} />
          </button>
          <button className="text-black hover:text-gray-600">
          <CiHeart  size={20} />
          </button>
          <div className="text-2xl cursor-pointer">
      <Link to={'/cart'}><Badge count={cartItems.length}>  <BsCart2 style={{  fontSize: '20' }} /></Badge></Link>
      
      </div>
        </div>

        <div className="flex space-x-4 ml-4">
          {user?.isLogin ? (
            <AvatarDrop
              onclick={handleLogOut}
              img={user?.userInfo?.photourl}
              name={user?.userInfo?.name}
              email={user?.userInfo?.email}
            />
          ) : (
            <Link
              to="/signin"
              className="w-32 p-2 ml-6 h-10 bg-[#c28c2b] text-white border border-[#c28c2b] transition duration-300  flex items-center justify-center rounded-md"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white p-4 space-y-2">
          <Link to="/" className="block text-gray-800">Home</Link>
          <Link to="/shop" className="block text-gray-800">Shop</Link>
          <Link to="/about" className="block text-gray-800">About</Link>
          <Link to="/contact" className="block text-gray-800">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
