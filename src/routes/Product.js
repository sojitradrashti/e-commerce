import React from 'react';


const Product = () => {
    return (
       <>
       
        <div>
            <h1 className='text-4xl m-5 text-center font-bold underline'>Men</h1>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5'>
            <div className='ml-5 shadow-xl '>
                <img src="/assets/i2.png" className='h-[320px] ml-7'/>
                <h4 className='text-center mt-2 '>Woolean Coat</h4>
                <p className='text-center mt-2 font-bold'>$235</p>
            </div>

            <div className='ml-5 shadow-xl'>
                <img src="/assets/i6.png" className='h-[320px] ml-7'/>
                <h4 className='text-center mt-2'>Indo Western</h4>
                <p className='text-center mt-2 font-bold'>$300</p>
            </div>

            <div className='mr-5 shadow-xl'>
                <img src="/assets/i4.png" className='h-[320px] ml-7'/>
                <h4 className='text-center mt-2'>Jacket</h4>
                <p className='text-center mt-2 font-bold'>$23</p>
            </div>
        </div>
       
       </>
    );
}

export default Product;
