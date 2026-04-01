import React from 'react';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white p-10'>
            <div className='w-10/12 mx-auto pt-[60px]'>
                <footer className="footer sm:footer-horizontal flex flex-col md:flex-row md:justify-between items-center ">
                    <aside className='flex flex-col justify-center md:justify-normal items-center md:items-start '>
                        <h1 className='text-4xl font-bold'>DigiTools</h1>
                        <p className='text-gray-400 font-light text-[14px] text-center md:text-start'>
                            Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Features</a>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Pricing</a>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Templates</a>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">About us</a>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Blog</a>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Careers</a>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Documentation</a>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Help Center</a>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Community</a>
                        <a className="link link-hover text-gray-400 font-light text-[14px]">Contact</a>
                    </nav>
                    <div>
                        <h6 className="footer-title">Social links</h6>
                        <div className='flex items-center gap-2'>
                            <div className='w-8 h-8 p-2 text-[30px] bg-black rounded-full flex justify-center items-center cursor-pointer'>
                                <FaSquareInstagram />
                            </div>
                            <div className='w-8 h-8 p-2 text-[30px] bg-black rounded-full flex justify-center items-center cursor-pointer'>
                                <FaFacebook />
                            </div>
                            <div className='w-8 h-8 p-2 text-[30px] bg-black rounded-full flex justify-center items-center cursor-pointer'>
                                <FaSquareXTwitter />
                            </div>
                        </div>
                    </div>
                </footer>
                <div className='mt-[70px]'>
                    <hr className='opacity-10' />
                    <div className='flex justify-between items-center mt-[40px]'>
                        <p className='text-gray-400 font-light text-[14px]'>&copy; 2026 Digitools. All rights reserved.</p>
                        <div className='flex items-center gap-2'>
                            <p className='text-gray-400 font-light text-[14px]'>Privacy policy</p>
                            <p className='text-gray-400 font-light text-[14px]'>Terms of Service</p>
                            <p className='text-gray-400 font-light text-[14px]'>cookies</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Footer;