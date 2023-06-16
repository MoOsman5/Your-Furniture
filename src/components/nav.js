import React from 'react';
import '../style/nav.css'
import '../style/all.min.css'
import '../style/all.css'
import YourFurntiureLogo from '../images/logo.png'


const Nav = () => {
  return (
    <div className='container'>

      <div className='logo'>
        <img className='logoImg' src={YourFurntiureLogo} alt='logo' />  
      </div> 


      <nav className="nav">
        <ul>
          <li className='dropdown'><a className='link-item ' href='#'>Furntiure</a>
            <div className='dropdown-menu'>
              <ul className='dropdown-list'>
                <li ><a className='first' href='#'>Table</a></li>
                <li><a href='#'>Stdy Table</a></li>
                <li><a href='#'>Coffee Table</a></li>
                <li><a href='#'>Stools</a></li>
                <li><a href='#'>Writing Desk</a></li>
              </ul>
              <ul className='dropdown-list'>
                <li><a className='first' href='#'>Dining</a></li>
                <li><a href='#'>Dining Cahirs</a></li>
                <li><a href='#'>Bar Stools</a></li>
                <li><a href='#'>Benches</a></li>
                <li><a href='#'>Dining Table</a></li>
              </ul>
              <ul className='dropdown-list'>
                <li><a className='first' href='#'>Sofa</a></li>
                <li><a href='#'>Armchairs</a></li>
                <li><a href='#'>Day Beds</a></li>
                <li><a href='#'>Poufs</a></li>
                <li><a href='#'>Lounge Chairs</a></li>
              </ul>
            </div>
          </li>
          <li><a className='link-item ' href='#'>Armories</a></li>
          <li><a className='link-item ' href='#'>Study Table</a></li>
          <li><a className='link-item ' href='#'>Plastic Chair</a></li>
          <li><a className='link-item ' href='#'>Wardrobes</a></li>
          <li><a className='link-item ' href='#'>More</a></li>
        </ul>
      </nav>

      <div className='user'>
        <ul >
          <li><i className="fa fa-user fa-xl" style={{color: "#917760"}}></i></li>
          <li><i className="fa fa-search fa-xl" style={{color: "#917760"}}></i></li>
          <li><i className="fa fa-bag-shopping fa-xl" style={{color: "#917760"}}></i>Your Bag</li>
        </ul>
      </div>

    </div>
  );
}

export default Nav;
