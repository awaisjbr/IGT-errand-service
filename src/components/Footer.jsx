import React from 'react';
import logo from "../assets/logoo.png"
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-black flex flex-col items-center'>
      <div className='w-[80%] lg:w-[95%]'>
        <div className='border-b-4'>
            <div className='text-white flex flex-col gap-5 lg:flex-row lg:justify-between my-3 lg:my-10'>
            <div className='mt-3'>
                <img className='w-48' src={logo} alt="" />
                <p className='font-poppins text-xs'>Your reliable partner for pickup and delivery errands.</p>
            </div>
            <div>
                <h1 className='font-poppins text-2xl underline underline-offset-4 font-bold'>Quick Links</h1>
                <ul className='mt-5'>
                  <NavLink><li className='font-mono'>About Us</li></NavLink>
                  <NavLink><li className='font-mono'>Privacy Policy</li></NavLink>
                  <NavLink to={"/terms-and-conditions"}><li className='font-mono'>Terms of Service</li></NavLink>
                  <NavLink><li className='font-mono'>FAQs</li></NavLink>
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='font-poppins text-2xl underline underline-offset-4 font-bold mb-5'>Contact Us</h1>
                <p className='font-poppins'>Email: <a href="mailto:irhagt@gmail.com">irhagt@gmail.com</a></p>
                <p className='font-poppins'>Phone: <a href="tel:+971581212786">+971 58 1212 786</a></p>
                <p className='font-poppins'>Working Hours: Mon-Sat 9AM - 9PM</p>
            </div>
            <div className='flex flex-col gap-1 mb-5'>
                <h1 className='font-poppins text-2xl underline underline-offset-4 font-bold mb-5'>Socials</h1>
                <div className='flex gap-5 text-3xl'>
                    <FaInstagram className='cursor-pointer'/>
                    <FaFacebook className='cursor-pointer' />
                    <FaLinkedinIn className='cursor-pointer' />
                </div>
            </div>
            </div>
        </div>
        <div className='text-white my-3'>
            <p className='font-poppins text-xs text-center lg:text-md'>&copy; 2025 IGT on-demand services. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer