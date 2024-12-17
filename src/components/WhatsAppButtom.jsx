import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const WhatsAppButton = () => {
  const phoneNumber = "923048405104";
  const message = encodeURIComponent("Hello, I'm interested in your services!");

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, "_blank");
  };

  return (
    <button onClick={handleWhatsAppClick} className="flex mt-3 lg:mt-0 items-center gap-2 font-poppins bg-[tomato] text-white px-5 py-3 cursor-pointer lg:text-xl">
      Hire a runner <FaArrowRight />
    </button>
  );
};

export default WhatsAppButton;
