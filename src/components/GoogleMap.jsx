import React, { useContext } from 'react'
import { CityContext } from '../context/CityContext';

const GoogleMap = () => {
  const {selectedCity} = useContext(CityContext);
  
  return <div> <iframe src={selectedCity === "abu-dhabi" ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79632.88980235001!2d54.40514746988053!3d24.41373521487062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1735033278631!5m2!1sen!2s" : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115562.20243897242!2d55.27040334423832!3d25.158710275530257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1739455435294!5m2!1sen!2sus"} width="450" height="430" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> </div>
}

export default GoogleMap
