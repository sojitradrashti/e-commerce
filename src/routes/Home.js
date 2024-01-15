import React from "react";
import Banner from "../components/Banner";
import Plants from "../components/Plants";
import Product from "../components/Product";
import Help from "../components/Help";
import Testimonials from "../components/Testimonials";
import Shop from "../components/Shop";
import Footer from "../components/Footer";

function Home({cart, setCart}) {
  
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((Product) => {
      if (item.id === Product.id) isPresent = true;
    });
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <div>
      
      <Banner />
      <Product />
      <Plants handleClick={handleClick} />
      <Help />
      <Testimonials />
      <Shop />
      <Footer />
    </div>
  );
}
export default Home;
