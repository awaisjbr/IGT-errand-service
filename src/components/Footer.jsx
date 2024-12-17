import React from 'react';
import logo from "../assets/logoo.png"
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-black flex flex-col items-center'>
      <div className='w-[80%]'>
        <div className='border-y-4'>
            <div className='text-white flex flex-col gap-5 lg:flex-row lg:justify-between my-10'>
            <div className='mt-3'>
                <img className='w-48' src={logo} alt="" />
                <p className='font-poppins text-xs'>Your reliable partner for pickup and delivery errands.</p>
            </div>
            <div>
                <h1 className='font-poppins text-2xl underline underline-offset-4 font-bold'>Quick Links</h1>
                <ul className='mt-3'>
                <NavLink><li className='font-mono'>About Us</li></NavLink>
                <NavLink><li className='font-mono'>Our Services</li></NavLink>
                <NavLink><li className='font-mono'>FAQs</li></NavLink>
                <NavLink><li className='font-mono'>Contact</li></NavLink>
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='font-poppins text-2xl underline underline-offset-4 font-bold mb-2'>Contact Us</h1>
                <p className='font-poppins'>Email: <a href="mailto:irhagt@gmail.com">irhagt@gmail.com</a></p>
                <p className='font-poppins'>Phone: <a href="tel:+971505608213">+971 50 5608213</a></p>
                <p className='font-poppins'>Working Hours: Mon-Sat 9AM - 9PM</p>
            </div>
            <div className='flex flex-col gap-1 mb-5'>
                <h1 className='font-poppins text-2xl underline underline-offset-4 font-bold mb-2'>Socials</h1>
                <div className='flex gap-5 text-3xl'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaLinkedinIn />
                </div>
            </div>
            </div>
        </div>
        <div className='text-white my-3'>
            <p className='font-poppins text-xs text-center'>&copy; 2024 IGT on-demand services. All rights reserved. <NavLink>Terms of Service</NavLink> | <NavLink>Privacy Policy</NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
