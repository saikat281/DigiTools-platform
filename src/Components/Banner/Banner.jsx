import React from 'react';
import rect from '../../assets/Rectangle 2.png'
import { IoPlayOutline } from 'react-icons/io5';
import BannerImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div >
            <div className='flex flex-col-reverse gap-8 md:flex-row justify-around items-center w-10/12 mx-auto mt-[100px]'>
                <div className='space-y-10'>
                    <p className='flex gap-3 justify-center items-center bg-[#E1E7FF] w-max p-2 rounded-full '>
                        <img src={rect} alt="" />
                        <span className='font-bold text-[#9514FA]'>New: AI-Powered Tools Available</span>
                    </p>
                    <div className='space-y-4'>
                        <h1 className='text-6xl font-bold'>Supercharge Your <br /> Digital Workflow</h1>
                        <p className='text-gray-600'>Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>

                    </div>

                    <div className='flex gap-2'>
                        <button className='btn text-white font-light bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>Explore Product</button>
                        <button className='btn flex items-center rounded-full'><IoPlayOutline />Watch Demo</button>
                    </div>
                </div>
                <div>
                    <img src={BannerImg} alt="" />
                </div>
            </div>

            <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-[60px] px-[120px] py-[80px]'>
                <div className='flex flex-col gap-6 md:flex-row justify-evenly items-center'>
                    <div>
                        <h1 className='text-white text-5xl font-bold'>50K+</h1>
                        <p className='text-white'>Active User</p>
                    </div>

                    <div>
                        <h1 className='text-white text-5xl font-bold'>200+</h1>
                        <p className='text-white'>Premium Tools</p>
                    </div>

                    <div>
                        <h1 className='text-white text-5xl font-bold'>4.9</h1>
                        <p className='text-white'>Rating</p>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Banner;