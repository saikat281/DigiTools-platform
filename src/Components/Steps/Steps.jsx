import React from 'react';
import profileImg from '../../assets/user.png'
import productImg from '../../assets/package.png'
import rocketImg from '../../assets/rocket.png'
const Steps = () => {
    return (
        <div className='bg-gray-100 mt-[150px] mx-auto'>

            <div className='w-10/12 mx-auto pt-[100px]'>
                <div className='text-center pb-[60px] space-y-3'>
                    <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
                    <p className='text-[14px] text-gray-600'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div id='steps' className='grid grid-cols-3  justify-items-center'>
                    <div className=' w-[380px]  p-4 pb-[70px] rounded-lg space-y-6 shadow-lg'>
                        <div className='flex justify-end'>
                            <h2 className='w-7 h-7 p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex justify-center items-center text-white text-[11px]'>01</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-2'>
                            <img className='w-17 h-17 p-3 bg-[#e5e2ff] rounded-full flex justify-center items-center ' src={profileImg} alt="" />
                            <h1 className='text-2xl font-semibold'>Create Account</h1>
                            <p className='text-gray-700 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>

                    </div>
                    <div className=' w-[380px]  p-4 pb-[70px] rounded-lg space-y-6 shadow-lg'>
                        <div className='flex justify-end'>
                            <h2 className='w-7 h-7 p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex justify-center items-center text-white text-[11px]'>02</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-2'>
                            <img className='w-17 h-17 p-3 bg-[#e5e2ff] rounded-full flex justify-center items-center ' src={productImg} alt="" />
                            <h1 className='text-2xl font-semibold'>Choose Products</h1>
                            <p className='text-gray-700 text-center'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>

                    </div>
                    <div className=' w-[380px]  p-4 pb-[70px] rounded-lg space-y-6 shadow-lg'>
                        <div className='flex justify-end'>
                            <h2 className='w-7 h-7 p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex justify-center items-center text-white text-[11px]'>03</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-2'>
                            <img className='w-17 h-17 p-3 bg-[#e5e2ff] rounded-full flex justify-center items-center ' src={rocketImg} alt="" />
                            <h1 className='text-2xl font-semibold'>Start Creating</h1>
                            <p className='text-gray-700 text-center'>Download and start using your premium tools immediately.</p>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default Steps;