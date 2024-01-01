import React from 'react';
import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='bg-primayBG py-12 xl:px-28 px-4 flex '>
            <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
            <div className='md:w-1/2'>
                <img alt="image" src="/assets/image1.jpg"/>
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>NEW ARRIVALS</h1>
                <h1 className='text-7xl font-bold mb-7'>JUST FOR <br/> YOU</h1>
                
                <button className='bg-black text-xl text-white px-6 py-2  font-semibold rounded-sm hover:bg-green-500 flex items-center gap-2'><FaShoppingBag  className='inline-flex'/>Shop Now</button>
            </div>
            
            </div>
        </div>
    );
}

export default Banner;
