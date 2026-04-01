import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-[100px]'>
            <div className='w-10/12 mx-auto flex flex-col justify-center items-center py-[80px] px-[150px] space-y-4'>
                <h1 className='text-white text-center text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p className='text-gray-200 text-center font-light text-[14px]'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

                <div className='space-x-2 gap-3 grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-0'>
                    <button className='btn rounded-full w-[150px]'>Explore Products</button>
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-light text-white rounded-full w-[150px]'>View Pricing</button>
                </div>
                <p className='text-gray-200 text-center font-light text-[14px]'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;