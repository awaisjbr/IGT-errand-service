import React, { lazy, Suspense, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Success from "./components/Success";
import Loading from "./components/Loading";
import {CityContext} from "./context/CityContext"
import SelectCity from "./components/SelectCity";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));

const App = () => {
  const {selectedCity, setSelectedCity} = useContext(CityContext);
  const [cityBox, selectCityBox] = useState(true)
  
  const phoneNumber = selectedCity === 'abu-dhabi' ? "971581212786" : "971505608213";
  const message = encodeURIComponent("Hey there! I'am intersted in your on-demand pick & deliver service!");

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, "_blank");
  };

  return (
    <>
        {cityBox ? (selectedCity ? null : <SelectCity selectCityBox={selectCityBox}/>) : null}
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home sendMsg={handleWhatsAppClick}/>} />
            <Route path="/about" element={<About sendMsg={handleWhatsAppClick}/>} />
            <Route path="/service" element={<Services sendMsg={handleWhatsAppClick} />} />
            <Route path="/contact" element={<Contact sendMsg={handleWhatsAppClick} />} />
            <Route path="/terms-and-conditions" element={<Terms sendMsg={handleWhatsAppClick} />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Suspense>
        <Footer />
    </>
  );
};

export default App;
