import React from "react";
import personalImg from "../assets/personal.jpg";
import giftsImg from "../assets/gifts.jpg";
import flowerImg from "../assets/flowers.jpg";
import furnitureImg from "../assets/furniture.jpg";
import groceryImg from "../assets/grocery.jpg";
import fastfoodImg from "../assets/fastfood.jpg";
import courierImg from "../assets/courier.jpg";
import medicineImg from "../assets/medicine.jpg";

const OurServices = () => {
  return (
    <div className="h-screen pt-20 px-3">

      <div className="">
        <h1 className="font-roboto text-4xl underline underline-offset-8 mb-5 bg-gray-200 w-fit mx-auto px-5 py-2 rounded-md">Service Catalog.</h1>
        <p className="text-center text-wrap my-5 text-sm font-poppins lg:text-xl">Reliable, fast, and affordable delivery solutions tailored for you.</p>
      </div>

      <div className="lg:w-[80%] mx-auto">
        <h3 className="font-bigShoulder text-2xl font-bold underline">What we offer.</h3>
        <div className="overflow-x-scroll w-full flex gap-5 my-2">
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src={courierImg} alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Package Delivery</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Fast and secure courier services tailored to your needs.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src={medicineImg} alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Prescription Pickup</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Ensuring your medications arrive safely.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src={personalImg} alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Personal Shopping</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Want us to purchase for you? Let us buy and deliver it to you.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src={furnitureImg} alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Furniture Delivery Service</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">For your purchased furniture hire us to deliver at your doorstep.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src={giftsImg} alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Gifts Delivery</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Send gifts to your friends and family with our professional service.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src={groceryImg} alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Grocery Shopping</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Running late? We'll handle your grocery shopping for you and deliver at your doorstep.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src={fastfoodImg} alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Food Delivery</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Tired from your work load? Order your meal and let us deliver.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src={flowerImg} alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Flowers Delivery Service</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Wish your loved once with our pick and deliver service.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;