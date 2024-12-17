import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import BackgroundAnimation from "./components/BackgroundAnimation";

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
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
