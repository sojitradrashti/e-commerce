import React from 'react'
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Banner from '../components/Banner';
import Plants from '../components/Plants';
import Product from '../components/Product';
import Help from '../components/Help';
import Testimonials from '../components/Testimonials';
import Shop from '../components/Shop';
import Footer from '../components/Footer';




function Home() {
  return (
    <div>
      <Cart />
      <Navbar />
      <Banner/>
      <Product/>
      <Plants/>
     <Help/>
     <Testimonials/>
     <Shop/>
     <Footer/>
     
    </div>
  )
}
export default Home