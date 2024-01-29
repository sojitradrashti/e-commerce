import React from "react";
import Banner from "../components/Banner";
import Plants from "../components/Plants";
import Product from "../components/Product";
import Help from "../components/Help";
import Testimonials from "../components/Testimonials";
import Shop from "../components/Shop";
import Footer from "../components/Footer";

function Home({item,handleClick}) {
  
  return (
    <div>
      
      <Banner />
      <Product />
      <Plants item={item} handleClick={handleClick} />
      <Help />
      <Testimonials />
      <Shop />
      <Footer />
        
      
    </div>
  );
}
export default Home;
