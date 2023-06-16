import React from 'react';
import '../style/discount.css'


const Discount = () => {
  return (
    <div className='container pd-y'>
      <div className='discount'>
        <div className='discont-desc'>
          <div className='top'>
            <i className='icon fa fa-quote-left fa-lg'></i>
            <h2 className='discount-title'>Penelope Astrid</h2>
            <span className='discount-subtitle'>(Marketing)</span>
          </div>
          <p className='discount-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque delectus modi eum? 
            Culpa alias nulla iure, assumenda earum eligendi vero ipsam, distinctio porro rem voluptas itaque laborum, expedita suscipit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet saepe dolore eum quae perspiciatis! Provident ratione distinctio minima optio perferendis fugit aut earum harum possimus expedita, sapiente eius sequi hic.
          </p>
          <div className='bolletes'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='discount-item'>
          <div className='discount-item-info'>
            <h3>30% Discount</h3>
            <h2>Disiging Interior</h2>
          </div>
        </div>
        <div className='discount-item'>
          <div className='discount-item-info'>
            <h3>30% Discount</h3>
            <h2>Disiging Interior</h2>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Discount;
