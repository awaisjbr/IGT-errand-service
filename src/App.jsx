import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Footer from "./components/Footer";
import Success from "./components/Success";

const App = () => {
  const location = useLocation();
  const phoneNumber = "971581212786";
  const message = encodeURIComponent("Hey there! I'am intersted in your on-demand pick & deliver service!");

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, "_blank");
  };

  return (
    <>
    <AnimatePresence key={location.pathname} location={location}>
      <Navbar />
      <BackgroundAnimation />
      <Routes>
        <Route path="/" element={<Home sendMsg={handleWhatsAppClick}/>} />
        <Route path="/about" element={<About sendMsg={handleWhatsAppClick}/>} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact sendMsg={handleWhatsAppClick} />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
      </AnimatePresence>
    </>
  );
};

export default App;
