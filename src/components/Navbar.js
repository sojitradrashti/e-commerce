import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    { title: "Jewellery & Accesories ", path: "/" },
    { title: "Men", path: "/" },
    { title: "Mobile & Accesories", path: "/" },
    { title: "Bags & Footwear", path: "/" },
    { title: "Home & kitchen", path: "/" },
    { title: "Beauty & Make up", path: "/" },
   
   
  ];
  return (
    <>
     
      <header className="max-w-screen-2xl xL:px:28 px-4 z-10 bg-[#FAF9F8]  absolute top-0 right-0 left-0">
        <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        
          <h1 className="font-bold text-2xl  sm:text-3xl ">SHOPPERS STOP</h1>
          
         
         
          <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <input type="text" placeholder="search" className="w-[150px] text-black  sm:w-[100px] hover:w-[200px] transition-all duration-300 rounded-full border border-grey-300 px-2 py-1 focus:outline-none focus:border-1"/>
          <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />

            <a href="/" className="flex items-center gap-2">
              <FaUser />
              </a>

              <a href="/" className="flex items-center gap-2">
              <RiHeartFill />
            </a>

            <a href="/" className="flex items-center gap-2">
              <FaShoppingCart />
             
            </a>
          </div>
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
            {
            isMenuOpen ?  <FaTimes className="w-5 h-5 text-black"/> :
              <FaBars className="w-5 h-5 text-black" />
            }
            </button>
          </div>
        </nav>
        <hr />
      
        <div className="pt-4">
          <ul className="lg:flex items-center justify-between text-black text-xl  hidden ">
            {navItems.map(({ title, path }) => (
              <li key={title} className="hover:text-green-500">
                <Link to="/">{title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
        <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
            {navItems.map(({ title, path }) => (
              <li key={title} className="hover:text-green-500 my-3 cursor-pointer">
                <Link to="/">{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
