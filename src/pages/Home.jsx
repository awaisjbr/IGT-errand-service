import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";
import { FaSquareWhatsapp } from "react-icons/fa6";
import ClientReviews from "../components/ClientReviews";

const Home = ({ sendMsg }) => {
  return (
    <div className="pt-8 lg:pt-0 relative">
      <Hero sendMsg={sendMsg} />
      <HowItWorks />
      <OurServices />
      <ClientReviews />
      {/* <Footer /> */}
      <div onClick={() => sendMsg()} className="fixed bottom-8 right-6 bg-white rounded-md text-5xl lg:text-7xl cursor-pointer text-green-500">
        <FaSquareWhatsapp />
      </div>
    </div>
  );
};

export default Home;
