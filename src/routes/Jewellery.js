import React from 'react';
import { Link } from 'react-router-dom';
import { FaRupeeSign } from "react-icons/fa";

const Jewellery = () => {
    return (
        <div className="px-2 sm:px-8">
             <h3 className='text-3xl text-center font-bold underline m-5'>Jewellery & Accesories</h3>
            <div className='max-w-[1200px] mx-auto md:grid grid-cols-3 gap-5'>
                <div className='shadow-2xl my-4 hover:scale-105 duration-500'>
                    <div>
                <img src="assets/j3.jpg" alt="image" />
                    <h4 className='text-xl ml-2'>Gold Neckless</h4>
                    <h4 className='items-center flex font-bold'><FaRupeeSign className=' m-2 items-center'/>129289</h4>
                    <div className='pb-4 ml-2'>
                    <button className='text-white bg-black p-3 hover:bg-green-500'>Buy Now</button>
                    </div>
                </div>
                </div>
                <div className='shadow-2xl my-4 hover:scale-105 duration-500'>
                <img src="assets/j6.jpg" alt="image" />
                    <h4 className='text-xl ml-2'>Earings</h4>
                    <h4 className='items-center flex font-bold'><FaRupeeSign className=' m-2 items-center'/>40706</h4>
                    <div className='pb-4 ml-2'>
                    <button className='text-white bg-black p-3 hover:bg-green-500'>Buy Now</button>
                    </div>
                </div>
                <div className='shadow-2xl my-4 hover:scale-105 duration-500'>
                <img src="assets/j1.jpg" alt="image" />
                    <h4 className='text-xl ml-2'>Bangles</h4>
                    <h4 className='items-center flex font-bold'><FaRupeeSign className=' m-2 items-center'/>240949</h4>
                    <div className='pb-4 ml-2'>
                    <button className='text-white bg-black p-3 hover:bg-green-500'>Buy Now</button>
                    </div>
                </div>
                <div className='shadow-2xl my-4 hover:scale-105 duration-500'>
                <img src="assets/j4.jpg" alt="image" />
                    <h4 className='text-xl ml-2'>Ring</h4>
                    <h4 className='items-center flex font-bold'><FaRupeeSign className=' m-2 items-center'/>30999</h4>
                    <div className='pb-4 ml-2'>
                    <button className='text-white bg-black p-3 hover:bg-green-500'>Buy Now</button>
                    </div>
                </div>
                <div className='shadow-2xl my-4 hover:scale-105 duration-500'>
                <img src="assets/j2.jpg" alt="image" />
                    <h4  className='text-xl ml-2'>Diamond Neckless</h4>
                    <h4 className='items-center flex font-bold'><FaRupeeSign className=' m-2 items-center'/>695756</h4>
                    <div className='pb-4 ml-2'>
                    <button className='text-white bg-black p-3 hover:bg-green-500'>Buy Now</button>
                    </div>
                </div>
                <div className='shadow-2xl my-4 hover:scale-105 duration-500'>
                <img src="assets/j5.jpg" alt="image" />
                    <h4  className='text-xl ml-2'>Bracelet</h4>
                    <h4 className='items-center flex font-bold'><FaRupeeSign className=' m-2 items-center'/>79756</h4>
                    <div className='pb-4 ml-2'>
                    <button className='text-white bg-black p-3 hover:bg-green-500'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default Jewellery;

