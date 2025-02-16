import React, { useContext } from 'react'
import { CityContext } from '../context/CityContext';

const SelectCity = ({selectCityBox}) => {
    const {selectedCity, setSelectedCity} = useContext(CityContext);

    const dubai = () => {
      setSelectedCity("dubai");
        sessionStorage.setItem("city", "dubai")
        selectCityBox(false)
    }
    const abuDhabi = () => {
      setSelectedCity("abu-dhabi");
        sessionStorage.setItem("city", "abu-dhabi")
        selectCityBox(false)
    }
    
  return (
    <div className='flex items-center justify-center h-screen absolute top-0 left-0 right-0 z-50' style={{background:"rgba(0,0,0,0.8)"}}>
      <div className='bg-white h-72 w-72 flex items-center justify-center flex-col gap-5 rounded-sm'>
        <h1 className='font-roboto'>Please select your Emirate</h1>
        <button className='bg-[tomato] hover:bg-orange-500 hover:scale-110 transition-all duration-300 ease-linear text-white px-5 py-2 rounded-md font-semibold font-poppins' onClick={dubai}>Dubai</button>
        <p className='font-semibold font-bigShoulder'>OR</p>
        <button className='bg-[tomato] hover:bg-orange-500 hover:scale-110 transition-all duration-300 ease-linear text-white px-5 py-2 rounded-md font-semibold font-poppins' onClick={abuDhabi}>Abu Dhabi</button>
      </div>
    </div>
  )
}

export default SelectCity
