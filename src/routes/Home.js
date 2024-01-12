import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Plants from "../components/Plants";
import Product from "../components/Product";
import Help from "../components/Help";
import Testimonials from "../components/Testimonials";
import Shop from "../components/Shop";
import Footer from "../components/Footer";

function Home({list,handleClick,addToCart}) {
  return (
    <div>
      <Navbar/>
      <Banner />
      <Product />
      <Plants plants={list} handleClick={handleClick} addToCart={addToCart}/>
      <Help />
      <Testimonials />
      <Shop />
      <Footer />
    </div>
  );
}
export default Home;
