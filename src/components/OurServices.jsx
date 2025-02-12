import React from "react";
// import personalImg from "../assets/personal.jpg";
// import giftsImg from "../assets/gifts.jpg";
// import flowerImg from "../assets/flowers.jpg";
// import furnitureImg from "../assets/furniture.jpg";
// import groceryImg from "../assets/grocery.jpg";
// import fastfoodImg from "../assets/fastfood.jpg";
// import courierImg from "../assets/courier.jpg";
// import medicineImg from "../assets/medicine.jpg";

const OurServices = () => {
  return (
    <div className="pt-20 px-3">

      <div className="">
        <h1 className="font-roboto text-4xl underline underline-offset-8 mb-5 bg-gray-200 w-fit mx-auto px-5 py-2 rounded-md">Service Catalog.</h1>
        <p className="text-center text-wrap my-5 text-sm font-poppins lg:text-xl">Reliable, fast, and affordable delivery solutions tailored for you.</p>
      </div>

      <div className="lg:w-[80%] mx-auto">
        <h3 className="font-bigShoulder text-2xl font-bold underline">What we offer.</h3>
        <div className="overflow-x-scroll w-full flex gap-5 my-2">
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/96b4433cf75ebe2d7acb8f4668f3101b/detailed" alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Package Delivery</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Fast and secure courier services tailored to your needs.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/5bdc45bce4a0c59c8a2f33df8cc9bdaf/detailed" alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Prescription Pickup</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Ensuring your medications arrive safely.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/ae0885fe2712cb63750b61546ef32c61/detailed" alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Personal Shopping</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Want us to purchase for you? Let us buy and deliver it to you.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/de16483d45f731addb546142df220de6/detailed" alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Furniture Delivery Service</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">For your purchased furniture hire us to deliver at your doorstep.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/45f151a1039735d5e0d41ec483d5407c/detailed" alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Gifts Delivery</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Send gifts to your friends and family with our professional service.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/f9262eb7c12933d8b31b699ef92a770c/detailed" alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Grocery Shopping</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Running late? We'll handle your grocery shopping for you and deliver at your doorstep.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/77b90d0d67d5768609c8f22324f12273/detailed" alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Food Delivery</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Tired from your work load? Order your meal and let us deliver.</p>
            </div>
            <div className="min-w-[350px] lg:min-w-[450px] xl:min-w-[550px] flex flex-col gap-1">
                <img className="border h-60 lg:h-72 xl:h-96 p-2 rounded-md hover:scale-95 transition-all duration-500" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/dca3f7abc6f52b134fac2c52991ae3c8/detailed" alt="Personal-Image" />
                <h1 className="font-bold font-poppins lg:text-xl uppercase">Flowers Delivery Service</h1>
                <p className="text-sm mb-3 text-wrap font-roboto">Wish your loved once with our pick and deliver service.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;