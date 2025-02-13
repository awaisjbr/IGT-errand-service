import React from "react";
// import hireImg from "../assets/hire.jpg";
// import paymentImg from "../assets/payment.jpg";
// import deliverImg from "../assets/deliver.jpg";
// import findImg from "../assets/find.jpg";

const HowItWorks = () => {
  return (
    <div className="lg:pt-24 px-2 select-none">
      <div className="text-center">
        <h1 className="font-roboto text-4xl underline underline-offset-4 mb-5 bg-gray-200 w-fit mx-auto px-5 py-2 rounded-md">How It Works.</h1>
        <p className="text-sm text-wrap px-2 mb-5 font-poppins">Want to ease your life with errand runners? <br /><span className="text-[tomato] font-poppins text-lg font-bold">IGT on-Demand </span>is here to help.</p>
      </div>

      <div className="px-1 lg:mt-10 xl:mt-20">
        <div className="flex flex-wrap gap-5 place-content-center">
          <div className="border p-3 w-80 rounded-md flex flex-col gap-3">
            <img className="h-52 w-full hover:scale-105 transition-all duration-500 cursor-pointer" src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342073/find_ckatuv.jpg" alt="findImg" />
            {/* <p>[]</p> */}
            <h2 className="font-roboto text-lg font-semibold">1 - Find & Book</h2>
            <p className="text-sm font-poppins">Find and book your required product within your comport zone. </p>
          </div>
          <div className="border p-3 w-80 rounded-md flex flex-col gap-3">
            <img className="h-52 w-full hover:scale-105 transition-all duration-500 cursor-pointer" src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342066/payment_bpeshm.jpg" alt="findImg" />
            {/* <p>[]</p> */}
            <h2 className="font-roboto text-lg font-semibold">2 - Buy it.</h2>
            <p className="text-sm font-poppins">Make a payment for your booking or let us pay and we wil add it. </p>
          </div>
          <div className="border p-3 w-80 rounded-md flex flex-col gap-3">
            <img className="h-52 w-full hover:scale-105 transition-all duration-500 cursor-pointer" src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342034/hire_b5qtva.jpg" alt="findImg" />
            {/* <p>[]</p> */}
            <h2 className="font-roboto text-lg font-semibold">3 - Hire our service.</h2>
            <p className="text-sm font-poppins">Book your runner and provide us details and we will handle it with care.</p>
          </div>
          <div className="border p-3 w-80 rounded-md flex flex-col gap-3">
            <img className="h-52 w-full hover:scale-105 transition-all duration-500 cursor-pointer" src="https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342051/deliver_kbpcoz.jpg" alt="findImg" />
            {/* <p>[]</p> */}
            <h2 className="font-roboto text-lg font-semibold">4 - We will deliver it.</h2>
            <p className="text-sm font-poppins">Find your items delivered safely at your doorstep. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;