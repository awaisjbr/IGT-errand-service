import React, { lazy, useContext, useState } from "react";
// import Hero from "../components/Hero";
// import HowItWorks from "../components/HowItWorks";
// import OurServices from "../components/OurServices";
import Footer from "../components/Footer";
import { FaSquareWhatsapp } from "react-icons/fa6";
import ClientReviews from "../components/ClientReviews";
import { Helmet } from "react-helmet-async";
import SelectCity from "../components/SelectCity";
import { CityContext } from "../context/CityContext";

const Hero = lazy(() => import("../components/Hero"));
const HowItWorks = lazy(() => import("../components/HowItWorks"));
const OurServices = lazy(() => import("../components/OurServices"));

const Home = ({ sendMsg }) => {
    const {selectedCity, setSelectedCity} = useContext(CityContext);
    const [cityBox, selectCityBox] = useState(true)
  
  return (
    <div className="pt-8 lg:pt-0 relative home">
      {/* SEO Meta tags */}
      <Helmet>
        {/* Title Tag */}
        <title>UAE's Best Online Pick and Deliver Service - IGT</title>
        {/* Meta Description */}
        <meta name="Description" content="IGT offers fast and reliable delivery and errand services in Dubai & Abu Dhabi. Book, buy, and get anything delivered quickly with our professional team. Simplify your life with IGT! " />
        {/* Meta Keywords */}
        <meta name="keywords" content="delivery service Dubai, delivery service Abu Dhabi, instant delivery service, quick delivery, abu dhabi delivery services, errand services Dubai, errand services Abu Dhabi, fast delivery Dubai, Dubai delivery company, pickup and delivery service Dubai, furniture delivery Dubai, personal shopper Dubai, pickup service Dubai, Ikea delivery Dubai" />
      </Helmet>


      {/* Home Page Components */}
      {cityBox ? (selectedCity ? null : <SelectCity selectCityBox={selectCityBox}/>) : null}
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
