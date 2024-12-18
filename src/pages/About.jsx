import React from "react";
import hire from "../assets/hire.jpg";
import img2 from "../assets/banner2.jpg";
import { FaWhatsappSquare } from "react-icons/fa";

const About = ({sendMsg}) => {
  return (
    <div className="lg:h-screen pt-20 lg:pt-24 overflow-hidden">
      <div className="flex flex-col">
        <h1 className="font-roboto text-4xl underline underline-offset-4 mb-5 bg-gray-200 w-fit mx-auto px-5 py-2 rounded-md">About Us.</h1>
        <p className="font-bigShoulder font-semibold text-xl lg:text-3xl text-center">"Simplifying Your Life, One Errand at a Time."</p>
        <div className="flex flex-col gap-5 lg:flex-row lg:mx-28 lg:gap-10">
          <div className="flex-1">
            <img className="w-60 md:w-72 place-self-center" src={img2} alt="" />
            <p className="text-sm lg:text-md font-poppins text-justify px-10 text-gray-800 pb-5">
              <span className="text-xl font-bigShoulder font-bold text-black">IGT On-Demand</span>, we believe your time is precious.
              That’s why we’re here to handle life’s errands, so
              you can focus on what truly matters. <br /> 
              <br />
              Whether it’s grocery shopping, picking up prescriptions, or managing daily to-dos, our
              dedicated team is ready to lend a hand. Our mission is to provide stress-free solutions tailored to your
              needs. <br />We aim to be your go-to partner for all errands.
              Experience the convenience of having a trusted assistant on just a 
               <span className="text-xs font-poppins font-bold text-black"> call or <FaWhatsappSquare className="inline text-green-500 text-xl cursor-pointer"/> WhatsApp click.</span> <br />Let us take care of the details so you can
              reclaim your time and enjoy peace of mind.
            </p>
          </div>

          <div className="flex-1 h-56 hidden lg:block place-content-center">
            <img className="h-36 mx-auto mt-5" src={hire} alt="" />
            <p className="font-poppins mt-2 text-justify text-sm">At <span className="text-xl font-bigShoulder font-bold text-black">IGT On-Demand</span>, we understand how busy life can get. That’s why we’ve made it our mission to handle your errands with care, efficiency, and professionalism. From grocery runs to parcel pickups, we’re here to make your day easier.</p>
            <h3 className="font-bigShoulder text-2xl font-bold my-3">Why Choose Us?</h3>
            <ul className="ml-16">
              <li className="list-disc font-poppins text-md"><span className="font-bigShoulder font-bold text-lg">Save Time:</span> Focus on what matters most while we handle the rest.</li>
              <li className="list-disc font-poppins text-md"><span className="font-bigShoulder font-bold text-lg">Trusted Team:</span> Experienced and reliable errand experts.</li>
              <li className="list-disc font-poppins text-md"><span className="font-bigShoulder font-bold text-lg">Convenient Services:</span> Tailored to meet your unique needs.</li>
              <li className="list-disc font-poppins text-md"><span className="font-bigShoulder font-bold text-lg">Peace of Mind:</span> Know that your tasks are in safe hands.</li>
            </ul>
            <h3 className="font-bigShoulder text-2xl font-bold mt-5">Our Promise</h3>
            <p className="font-poppins mt-2 text-justify text-sm">We promise to treat every errand as if it were our own, ensuring prompt, professional, and friendly service every time. Your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
      <div onClick={() => sendMsg()} className="fixed bottom-8 right-6 bg-white rounded-md text-5xl lg:text-7xl cursor-pointer text-green-500">
        <FaWhatsappSquare />
      </div>
    </div>
  );
};

export default About;
