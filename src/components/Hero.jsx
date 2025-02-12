import React from "react";
import heroImg from "../assets/hero.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Hero = ({sendMsg}) => {
  return (
    <div className="h-scree mt-3 lg:mt-16">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="">
            <img className="w-72 lg:w-[600px]" src="https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/8996fa0097c9128566921395c418cc08/detailed" alt="" />
          </div>
          <div className="select-none">
            <h1 className="text-4xl text-center font-bigShoulder pointer-events-none uppercase leading-snug lg:text-5xl xl:text-6xl lg:leading-snug lg:font-semibold">Secure, Fast, Reliable <br /> <span className="font-bigShoulder text-[tomato] underline font-bold tracking-wider lg:leading-snug">errands</span>  <br /> Pick and Deliver Service <br /> at Your Doorstep.</h1>
            <h5 className="text-center font-bigShoulder text-2xl lg:text-4xl lg:leading-snug">“Let us handle your errands while you focus on what matters most.”</h5>
          </div>
        </div>
        {/* <WhatsAppButton>Hire</WhatsAppButton> */}
        <button onClick={() => sendMsg()} className="flex mt-3 lg:mt-0 items-center gap-2 font-poppins bg-[tomato] text-white px-5 py-3 cursor-pointer lg:text-xl">Get a Runner <FaArrowRight /></button>
      </div>
      <hr className="w-[90%] mx-auto my-5 divide-black"/>
    </div>
  );
};

export default Hero;