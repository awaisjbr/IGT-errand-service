import React from "react";
import heroImg from "../assets/hero.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Hero = ({sendMsg}) => {
  return (
    <div className="h-screen mt-3 lg:mt-16">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="">
            <img className="w-72 lg:w-[600px]" src={heroImg} alt="" />
          </div>
          <div className="">
            <h1 className="text-4xl text-center font-bigShoulder uppercase leading-snug lg:text-5xl xl:text-6xl lg:leading-snug lg:font-semibold">Secure, Fast, Reliable <br /> <span className="font-bigShoulder text-[tomato] underline font-bold tracking-wider">errands</span>  <br /> Pick and Deliver Service <br /> at Your Doorstep.</h1>
            <h5 className="text-center font-bigShoulder text-2xl lg:text-4xl">Professional Errand Runners for All Your Needs :</h5>
          </div>
        </div>
        {/* <WhatsAppButton>Hire</WhatsAppButton> */}
        <button onClick={() => sendMsg()} className="flex mt-3 lg:mt-0 items-center gap-2 font-poppins bg-[tomato] text-white px-5 py-3 cursor-pointer lg:text-xl">Hire a runner <FaArrowRight /></button>
      </div>
      <hr className="w-[90%] mx-auto my-5 divide-black"/>
    </div>
  );
};

export default Hero;
