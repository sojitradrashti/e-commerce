import React from 'react'
import Banner from './Banner';

import Plants from './Plants';
import Product from './Product';
import Help from './Help';
import Testimonials from './Testimonials';
import Shop from './Shop';
import Footer from './Footer';
import Navbar from '../components/Navbar';



function Home() {
  return (
    <div>
      <Navbar/>
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