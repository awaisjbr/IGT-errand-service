import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";


const Services = ({sendMsg}) => {
  
  return (
    <div className='pt-20 lg:pt-24 relative flex flex-col items-center home'>
        <h1 className="font-roboto text-4xl underline underline-offset-4 mb-2 bg-gray-200 w-fit mx-auto px-5 py-2 rounded-md">Services We Offer.</h1>
        <p className='font-poppins text-center px-2 text-sm py-2'>"Your convenience, our priority. Explore the errands we handle for you."</p>

        <div className='flex gap-3 lg:gap-5 my-2 lg:my-10 flex-wrap place-content-center'>
          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342033/courier_ozdcbg.jpg" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Package Delivery</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Fast and secure courier services tailored to your needs.</p>
            <button className='bg-[tomato] hover:bg-[#f15539ce] w-[35%] rounded-sm text-sm font-poppins absolute bottom-2 right-2 text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342074/personal_slrwih.jpg" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Personal Shopping</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Want us to purchase for you? Let us buy and deliver it to you.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342054/gifts_uyq7oj.jpg" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Gifts Delivery</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Send gifts to your friends and family with our professional service.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342077/grocery_bp1k2d.jpg" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Grocery Shopping</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Running late? We'll handle your grocery shopping for you and deliver at your doorstep.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342074/furniture_wy2cgj.jpg" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Furniture Delivery Service</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>For your purchased furniture hire us to deliver at your doorstep.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342044/medicine_pdvuxv.jpg" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Prescription Pickup</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Ensuring your medications arrive safely.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 h-48 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342042/flowers_jk19kj.jpg" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Flowers Delivery Service</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Wish your loved once with our pick and deliver service.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342096/fastfood_rmduiv.jpg" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Food Delivery</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Tired from your work load? Order your meal and let us deliver.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

        </div>


        <div onClick={() => sendMsg()} className="fixed bottom-8 right-6 bg-white rounded-md text-5xl lg:text-7xl cursor-pointer text-green-500">
            <FaWhatsappSquare />
        </div>
    </div>
  )
}

export default Services