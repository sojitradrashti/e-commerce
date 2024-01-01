import React from 'react';
import { Link } from 'react-router-dom';

const Jewellery = () => {
    return (
        <div className='mt-8'>
           <h3 className='text-3xl text-center font-bold'>Jewellery</h3>
        <div className='lg:flex mt-4 px-4 py-6 md:1/2 flex-row sm:flex-col justify-between gap-3 '>
            <Link to="/"><img src="assets/j2.jpg" alt="image"/></Link>
            <Link to="/"><img src="assets/j6.jpg" alt="image"/></Link>
            <Link to="/"><img src="assets/j1.jpg" alt="image"/></Link>  
        </div>
        </div>
       
    
    
    );
}

export default Jewellery;

