import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
import personalImg from "../assets/personal.jpg";
import giftsImg from "../assets/gifts.jpg";
import flowerImg from "../assets/flowers.jpg";
import furnitureImg from "../assets/furniture.jpg";
import groceryImg from "../assets/grocery.jpg";
import fastfoodImg from "../assets/fastfood.jpg";
import courierImg from "../assets/courier.jpg";
import medicineImg from "../assets/medicine.jpg";

const Services = ({sendMsg}) => {
  return (
    <div className='pt-20 lg:pt-24 relative flex flex-col items-center'>
        <h1 className="font-roboto text-4xl underline underline-offset-4 mb-2 bg-gray-200 w-fit mx-auto px-5 py-2 rounded-md">Services We Offer.</h1>
        <p className='font-poppins text-center px-2 text-sm py-2'>"Your convenience, our priority. Explore the errands we handle for you."</p>

        <div className='flex gap-3 lg:gap-5 my-2 lg:my-10 flex-wrap place-content-center'>
          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src={courierImg} alt="" />
            <h1 className='font-roboto font-bold text-lg'>Package Delivery</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Fast and secure courier services tailored to your needs.</p>
            <button className='bg-[tomato] hover:bg-[#f15539ce] w-[35%] rounded-sm text-sm font-poppins place-self-end text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src={personalImg} alt="" />
            <h1 className='font-roboto font-bold text-lg'>Personal Shopping</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Want us to purchase for you? Let us buy and deliver it to you.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins place-self-end text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src={giftsImg} alt="" />
            <h1 className='font-roboto font-bold text-lg'>Gifts Delivery</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Send gifts to your friends and family with our professional service.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins place-self-end text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src={groceryImg} alt="" />
            <h1 className='font-roboto font-bold text-lg'>Grocery Shopping</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Running late? We'll handle your grocery shopping for you and deliver at your doorstep.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins place-self-end text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src={furnitureImg} alt="" />
            <h1 className='font-roboto font-bold text-lg'>Furniture Delivery Service</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>For your purchased furniture hire us to deliver at your doorstep.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins place-self-end text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src={medicineImg} alt="" />
            <h1 className='font-roboto font-bold text-lg'>Prescription Pickup</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Ensuring your medications arrive safely.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins place-self-end text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1'>
            <img className='w-72 h-48 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src={flowerImg} alt="" />
            <h1 className='font-roboto font-bold text-lg'>Flowers Delivery Service</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Wish your loved once with our pick and deliver service.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins place-self-end text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src={fastfoodImg} alt="" />
            <h1 className='font-roboto font-bold text-lg'>Food Delivery</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Tired from your work load? Order your meal and let us deliver.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins place-self-end text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

        </div>


        <div onClick={() => sendMsg()} className="fixed bottom-8 right-6 bg-white rounded-md text-5xl lg:text-7xl cursor-pointer text-green-500">
            <FaWhatsappSquare />
        </div>
    </div>
  )
}

export default Services