import React from 'react';

const Card = () => {
    return (
        <div className='grid grid-cols-4 container mx-auto gap-5 mt-10 mb-10'>

           <div className=" p-8  bg-white rounded-2xl">
            <h2 className='font-semibold text-2xl text-center text-[#244D3F]'>10</h2>
            <p className='text-[#64748B] text-xl text-center'>Total Friends</p>
           </div>

           <div className=" p-8  bg-white rounded-2xl">
            <h2 className='font-semibold text-2xl text-center text-[#244D3F]'>3</h2>
            <p className='text-[#64748B] text-xl text-center'>On Track</p>
           </div>

           <div className=" p-8  bg-white rounded-2xl">
            <h2 className='font-semibold text-2xl text-center text-[#244D3F]'>6</h2>
            <p className='text-[#64748B] text-xl text-center'>Need Attention</p>
           </div>

           <div className=" p-8  bg-white rounded-2xl">
            <h2 className='font-semibold text-2xl text-center text-[#244D3F]'>12</h2>
            <p className='text-[#64748B] text-xl text-center'>Interactions This Month</p>
           </div>
           
        </div>
    );
};

export default Card;