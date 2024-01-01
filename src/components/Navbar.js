import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Toys & Entainment", path: "/" },
    { title: "Wedding & party", path: "/" },
  ];
  return (
    <>
     {/* <a href="/" className=" bg-white W-[100px]">
            <img alt="logo-fashion" src="/assets/logo.png" />
          </a> */}
      <header className="max-w-screen-2xl xL:px:28 px-4 absolute top-0 right-0 left-0">
        <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
          <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />
          <h1 className="font-bold text-2xl mx-auto ">SHOPPERS STOP</h1>
         
          <div className="text-lg text-black sm:flex items-center gap-4 hidden">
            <a href="/" className="flex items-center gap-2">
              <FaUser />
              Account
            </a>
            <a href="/" className="flex items-center gap-2">
              <FaShoppingBag />
              Shopping
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
        <div className="pt-4 ">
          <ul className="lg:flex items-center justify-between text-black hidden ">
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
