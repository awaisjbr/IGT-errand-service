import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";


const Home = ({sendMsg}) => {
  return (
    <div className="pt-8 lg:pt-0">
      <Hero sendMsg={sendMsg}/>
      <HowItWorks />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Home;
