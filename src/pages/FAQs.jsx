import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const FAQs = ({sendMsg}) => {
  return (
    <div className="pt-20 w-[90%] mx-auto relative">
      <h1 className="text-center font-bigShoulder text-5xl tracking-widest font-semibold">FAQ's</h1>
      <div className="lg:w-[60%] mt-5 mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
             1- What kind of services can I order on IGT online
              delivery platform?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
              Discover the ease of our online delivery platform in Dubai and
              Abu Dhabi, which offers a diverse choice of services. We
              have you covered for everything from groceries to electronic
              devices, fashion to excellent meals. Simply explore our
              user-friendly website, choose the things you want, and leave the
              rest to us. Have you forgotten something important at home or
              other places? We can even bring your documents, tiffins, and keys
              to you. Take advantage of the convenience of doorstep delivery and
              pick-up services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
              2- What are the payment options for this platforms?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
              To make your shopping experience as easy as possible, we accept a
              variety of payment methods for our online delivery services.
              Choose from a variety of popular digital wallets, including
              Apple Pay and Samsung Pay. In addition, for
              your convenience, we also accept cash on delivery (COD).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
             3-  What if I have a problem with my order?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
              We are here to help if you have any queries or problems with your
              order. Contact us by phone, whatsapp or email, and include important
              information such as your order number and a description of the
              problem. We appreciate your feedback and vow to address and
              resolve any issues as soon as possible.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
              4- How do I place an order?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
              You may easily place your order using our website on your mobile, tablet or laptop/PC,
              and we have diffrent options on our website to place your order including whatsapp link, emil, contact form, or through phone number.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
              5- What kind of items can I send through a delivery Services?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
             Our pick and deliver service in Dubai and Abu-Dhabi offers convenience and reliability for a wide 
             range of services, from personal belongings to grocery and even meals. Furniture, flowers, gifts, prescriptions, and much more.
             For detail visit our services section.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
              6- What are the delivery and pickup charges?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
              Our service charges depending on the size
              and distance of the delivery. Please see our customer service or
              price policy for more information on pricing and any additional
              costs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
              7- How can I track my order?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
              Once your order has been verified and placed we will provide a real time update through whatsapp and share live
              location feature. You can track its location, projected arrival time, and
              vital alerts using the live tracking tool. Stay updated and find
              out when your package will arrive at its destination.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
             8-  What if I need to change or cancel my order?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
              Contact our dedicated customer service team via email or WhatsApp
              for a seamless and hassle-free process. Our friendly staff will
              assist you promptly with any changes or cancellations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
             9-  How long does it take to receive my order?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
              Our staff in Dubai and Abu-Dhabi commited to deliver on time however
              taking into account the distance between pickup and
              delivery times may vary based on factors such
              as order volume, traffic, and specific instructions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="font-poppins lg:text-lg font-semibold">
              10- What other things I can do from the platform?
            </AccordionTrigger>
            <AccordionContent className="font-[calibri] text-justify lg:text-[17px]">
              Our team will buy the products from the
              authorized stores and ensure prompt delivery to your specified
              address. With our simple application, you may enjoy a hassle-free
              online delivery experience from the comfort of your own home.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
      <div onClick={() => sendMsg()} className="fixed bottom-8 right-6 bg-white rounded-md text-5xl lg:text-7xl cursor-pointer text-green-500">
              <FaWhatsappSquare />
            </div>
    </div>
  );
};

export default FAQs;
