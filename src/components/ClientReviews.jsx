import React, { useEffect, useState } from 'react';
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";
// import logoo from "https://res-console.cloudinary.com/dpnjcu9gc/media_explorer_thumbnails/bc7bd19cc2e6cdbd245e434875a463f6/detailed";
import { FaStar } from 'react-icons/fa6';

const data = [
    {img:"https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342041/logoo_f8dvsl.png", name: "IGT On-demand Service", text: "Great Service great team, I highly recomended the service to acquire"},
    {img:"https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342041/logoo_f8dvsl.png", name: "Review 1", text: "Great Service great team, I highly recomended the service to acquire"},
    {img:"https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342041/logoo_f8dvsl.png", name: "Review 2", text: "Great Service great team, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ut. I highly recomended the service to acquire"},
    {img:"https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342041/logoo_f8dvsl.png", name: "Review 3", text: "Great Service great team, Lorem ipsum dolor sit amet consectetur. Cupiditate, ut. I highly recomended the service to acquire"},
    {img:"https://res.cloudinary.com/dpnjcu9gc/image/upload/v1739342041/logoo_f8dvsl.png", name: "Review 4", text: "Great Service great team, Lorem ipsum dolor sit amet consectetur. Cupiditate, ut. I highly recomended the service to acquire"},
]

const ClientReviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1);
        },10000);

        return () => clearInterval(slideInterval);
    },[])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

  return (
    <div className='h-[70vh] lg:h-[90vh] flex flex-col lg:pt-20 items-center relative overflow-hidden'>
        <h1 className='font-bigShoulder font-bold text-4xl'>Testimonial</h1>
        <div className='mt-10 max-w-[600px] w-[90%] overflow-hidden shadow-md'>
            <div className='py-1 carousel'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={`flex flex-col items-center gap-2 ${currentSlide === index ? "" : "hidden"}`}>
                            <img className='w-24 h-24 rounded-full' src={item.img} alt="" />
                            <p className='font-poppins font-semibold'>{item.name}</p>
                            <div className='flex gap-1 text-[green] mb-7' key={index}><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <div className='text-center text-wrap lg:w-[70%] font-poppins text-sm text-slate-500'>{item.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='flex items-center gap-2 mt-10 absolute bottom-2 md:bottom-16 lg:bottom-20'>
            {data.map((_,index) => {
                return (
                    <div onClick={() => goToSlide(index)} key={index} className={`h-2 w-2 rounded-full cursor-pointer ${currentSlide === index ? "bg-red-400" : "bg-slate-400"}`}></div>
                )
            })}
        </div>
    </div>
  )
}

export default ClientReviews
