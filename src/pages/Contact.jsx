import React, { lazy, Suspense, useContext, useState } from 'react';
import { FaMapSigns } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { TailSpin } from "react-loader-spinner";
import Loading from '../components/Loading';
import { CityContext } from '../context/CityContext';

const GoogleMap = lazy(() => import("../components/GoogleMap"));

const Contact = ({sendMsg}) => {
  const {selectedCity} = useContext(CityContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: '',
  });
  const navigate = useNavigate(); // For navigation to custom success page

  // On Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formURL = 'https://api.web3forms.com/submit';
    const data = {access_key: 'aff1f6e5-2f39-4cec-bc0a-0c95d3c3afb8', // Replace with your API key
      ...formData,};

    try {
      const response = await fetch(formURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate('/success'); // Navigate to custom success page
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (err) {
      alert(err.message);
    } finally{
      setLoading(false);
    }
  };

  
  return (
    <div className='flex flex-col items-center pt-20 lg:pt-24 home'>
      <div className='my-2 text-center'>
        <h1 className='font-bigShoulder font-extrabold text-3xl tracking-wider'>Get in Touch</h1>
        <p className='font-poppins '>We’re here to assist you.</p>
      </div>

      <div className='flex flex-col md:flex-row gap-3 lg:gap-5 w-full lg:w-[90%] mt-10'>
        
        <div className='flex-1 hidden md:block'>
          <Suspense fallback={<Loading />}>
            <GoogleMap />
          </Suspense>
        </div>

        <div className='hidden lg:block flex-1 home'>
          <div className='flex flex-col gap-5 items-center justify-between text-sm'>
            <div className='flex items-center justify-center gap-2 flex-col bg-slate-200 w-full md:w-[80%] py-4 text-[rgb(108,78,232)]'>
              <div className='h-10 w-10 bg-slate-500 flex items-center justify-center rounded-full'>
              <FaMapSigns className='text-yellow-400'/>
              </div>
              <p className='font-bigShoulder font-bold tracking-wider'>ADDRESS</p>
              <p className='font-poppins text-center'>P.O Box 0000 , {selectedCity === "abu-dhabi" ? "Abu Dhabi" : "Dubai"}, UAE.</p>
            </div>
            <div className='flex items-center justify-center gap-2 flex-col bg-slate-200 w-full md:w-[80%] text-[rgb(108,78,232)] py-2'>
              <div className='h-10 w-10 bg-slate-500 flex items-center justify-center rounded-full'>
              <FaPhoneAlt className='text-yellow-400'/>
              </div>
              <p className='font-bigShoulder font-bold tracking-wider'>CONTACT NUMBER</p>
              <p className='flex items-center gap-3'><span className='text-green-600'><FaWhatsappSquare size={25} onClick={() => sendMsg()} className='cursor-pointer'/></span><a className='font-poppins underline underline-offset-4 font-bold' href={selectedCity === "abu-dhabi" ? "tel:+971581212786" : "tel:+971505608213"}>{selectedCity === "abu-dhabi" ? "+971 58 1212 786" : "+971 50 560 8213"}</a></p>
            </div>
            <div className='flex items-center justify-center gap-2 flex-col bg-slate-200 w-full md:w-[80%] text-[rgb(108,78,232)] py-2'>
              <div className='h-10 w-10 bg-slate-500 flex items-center justify-center rounded-full'>
              <IoIosSend className='text-yellow-400'/>
              </div>
              <p className='font-bigShoulder font-bold tracking-wider'>EMAIL</p>
              <p className='underline underline-offset-8'><a className='font-poppins font-bold' href="mailto:irhagt@gmail.com">irhagt@gmail.com</a></p>
            </div>
          </div>
        </div> 
        

        <div className='w-[95%] md:max-w-96 mx-auto bg-gray-400 items-center mt-1 mb-10 flex-1 text-sm'>
          <p className='text-center text-xl font-bold underline underline-offset-8 my-5  font-poppins'>Send Message</p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 my-2 items-center'>
            {/* <input type="text" className='hidden' name="access_key"  value={"aff1f6e5-2f39-4cec-bc0a-0c95d3c3afb8"} onChange={() => ""}/> */}
            <input className='border font-poppins h-10 w-[80%] p-2 outline-none text-slate-500' type="text" name='name' onChange={handleChange} placeholder='Your Name' autoComplete='off'/>
            <input className='border font-poppins h-10 w-[80%] p-2 outline-none text-slate-500' type="email" name='email' onChange={handleChange} placeholder='Your Email' autoComplete='off'/>
            <input className='border font-poppins h-10 w-[80%] p-2 outline-none text-slate-500' type="text" name="subject" onChange={handleChange} placeholder='Subject...' autoComplete='off'/>
            <textarea className='w-[80%] font-poppins p-2 outline-none text-slate-500' rows={5} name="message" placeholder='Contact Number & Message' onChange={handleChange} autoComplete='off'/>
            <button className='bg-[rgb(108,78,232)] text-white p-2 rounded-md font-poppins' type='submit'>Send Message</button>
          </form>
        </div>

        <div className='flex-1 place-self-center md:hidden'>
         <div> <iframe src={selectedCity === "abu-dhabi" ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79632.88980235001!2d54.40514746988053!3d24.41373521487062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1735033278631!5m2!1sen!2s" : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115562.20243897242!2d55.27040334423832!3d25.158710275530257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1739455435294!5m2!1sen!2sus"} width="350" height="350" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> </div>
        </div>
      </div>

      <div onClick={() => sendMsg()} className="fixed bottom-8 right-6 bg-white rounded-md text-5xl lg:text-7xl cursor-pointer text-green-500">
        <FaWhatsappSquare />
      </div>

      {loading && (
        <div className='h-screen w-full flex items-center justify-center absolute top-0 left-0' style={{background:"rgba(0,0,0,0.7)", zIndex:"1"}}>
          <TailSpin
            visible={true}
            height="180"
            width="180"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </div>
  )
}

export default Contact







