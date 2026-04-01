import React from 'react';
import digitoolsImg from '../../assets/DigiTools.png'
import { FaBars, FaCartArrowDown } from 'react-icons/fa';
const Navbar = ({ selected }) => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center p-5  w-10/12 mx-auto '>
            <div className='flex items-center gap-1'>

                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn m-1"><FaBars /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>

                <img src={digitoolsImg} alt="" />
            </div>
            <div>
                <ul className=' gap-4 hidden md:block md:flex'>
                    <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className='flex flex-col-reverse md:flex-row items-center gap-2'>
                <div className='relative  p-5 flex flex-col items-center justify-center'>
                    <div className='absolute'>
                        <FaCartArrowDown />
                    </div>
                    <p className={`${selected.length !== 0 ? "absolute  flex items-center justify-center bottom-5 right-1 w-4 h-4 bg-red-600 p-1 rounded-full text-[12px] text-white" : "hidden"}  `} >{selected.length}</p>

                </div>
                <div className='flex justify-center items-center flex-col md:flex-row space-x-3 gap-2 md:gap-0 mt-3 md:mt-0'>
                    <a className='btn rounded-full hover:opacity-90 ' href="">Login</a>
                    <button className='btn text-white font-light  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full hover:opacity-90'>Get started</button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;