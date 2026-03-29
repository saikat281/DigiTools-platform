import React from 'react';
import digitoolsImg from '../../assets/DigiTools.png'
import { FaCartArrowDown } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-5  w-10/12 mx-auto'>
            <div>
                <img src={digitoolsImg} alt="" />
            </div>
            <div>
                <ul className='flex gap-4'>
                    <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className='flex items-center gap-2'>
                <FaCartArrowDown />
                <a href="">Login</a>
                <button className='btn '>Get started</button>
            </div>
        </div>
    );
};

export default Navbar;