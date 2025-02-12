import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
// import personalImg from "../assets/personal.jpg";
// import giftsImg from "../assets/gifts.jpg";
// import flowerImg from "../assets/flowers.jpg";
// import furnitureImg from "../assets/furniture.jpg";
// import groceryImg from "../assets/grocery.jpg";
// import fastfoodImg from "../assets/fastfood.jpg";
// import courierImg from "../assets/courier.jpg";
// import medicineImg from "../assets/medicine.jpg";

const Services = ({sendMsg}) => {
  return (
    <div className='pt-20 lg:pt-24 relative flex flex-col items-center home'>
        <h1 className="font-roboto text-4xl underline underline-offset-4 mb-2 bg-gray-200 w-fit mx-auto px-5 py-2 rounded-md">Services We Offer.</h1>
        <p className='font-poppins text-center px-2 text-sm py-2'>"Your convenience, our priority. Explore the errands we handle for you."</p>

        <div className='flex gap-3 lg:gap-5 my-2 lg:my-10 flex-wrap place-content-center'>
          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/96b4433cf75ebe2d7acb8f4668f3101b/detailed" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Package Delivery</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Fast and secure courier services tailored to your needs.</p>
            <button className='bg-[tomato] hover:bg-[#f15539ce] w-[35%] rounded-sm text-sm font-poppins absolute bottom-2 right-2 text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/ae0885fe2712cb63750b61546ef32c61/detailed" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Personal Shopping</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Want us to purchase for you? Let us buy and deliver it to you.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/45f151a1039735d5e0d41ec483d5407c/detailed" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Gifts Delivery</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Send gifts to your friends and family with our professional service.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/f9262eb7c12933d8b31b699ef92a770c/detailed" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Grocery Shopping</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Running late? We'll handle your grocery shopping for you and deliver at your doorstep.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/de16483d45f731addb546142df220de6/detailed" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Furniture Delivery Service</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>For your purchased furniture hire us to deliver at your doorstep.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/5bdc45bce4a0c59c8a2f33df8cc9bdaf/detailed" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Prescription Pickup</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Ensuring your medications arrive safely.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 h-48 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/dca3f7abc6f52b134fac2c52991ae3c8/detailed" alt="" />
            <h1 className='font-roboto font-bold text-lg'>Flowers Delivery Service</h1>
            <p className='text-wrap w-72 font-poppins text-sm'>Wish your loved once with our pick and deliver service.</p>
            <button className='bg-[tomato] w-[35%] rounded-sm text-sm font-poppins bottom-2 right-2 absolute text-white py-2' onClick={() => sendMsg()} >Book Runner</button>
          </div>

          <div className='border-[tomato] border p-3 rounded-md flex flex-col w-fit gap-1 relative h-[340px] cursor-pointer'>
            <img className='w-72 place-self-center hover:scale-105 hover:rounded-md transition-all duration-300 ease-linear' src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/77b90d0d67d5768609c8f22324f12273/detailed" alt="" />
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