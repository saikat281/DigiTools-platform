import React from 'react';
import rect from '../../assets/Rectangle 2.png'
import { IoPlayOutline } from 'react-icons/io5';
import BannerImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div>
            <div className='flex justify-around items-center w-10/12 mx-auto mt-[100px]'>
                <div>
                    <p className='flex gap-3 items-center bg-[#E1E7FF] w-max p-2 rounded-full'>
                        <img src={rect} alt="" />
                        New: AI-Powered Tools Available
                    </p>
                    <h1 className='text-6xl font-bold'>Supercharge Your <br /> Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>

                    <div className='flex gap-2'>
                        <button className='btn rounded-full'>Explore Product</button>
                        <button className='btn flex items-center rounded-full'><IoPlayOutline />Watch Demo</button>
                    </div>
                </div>
                <div>
                    <img src={BannerImg} alt="" />
                </div>
            </div>

            <div className='flex justify-evenly items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-[60px] p-12'>
                <div>
                    <h1 className='text-white text-4xl font-bold'>50K+</h1>
                    <p className='text-white'>Active User</p>
                </div>
                
                <div>
                    <h1 className='text-white text-4xl font-bold'>200+</h1>
                    <p className='text-white'>Premium Tools</p>
                </div>
                
                <div>
                    <h1 className='text-white text-4xl font-bold'>4.9</h1>
                    <p className='text-white'>Rating</p>
                </div>
            </div>
            
        </div>

    );
};

export default Banner;