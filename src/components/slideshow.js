import React from 'react';
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import '../style/slideShow.css'


const Slideshow = () => {
  return (
    <div className='container pd-y'>
      <div className='slide'>
        <img className='slideImg' src={slide1} alt='slide image' />  
      </div> 
      
    </div>
  );
}

export default Slideshow;
