import React from 'react';
import SectionHeadar from './SectionHeadar';
import c1 from '../images/c1.jpg'
import '../style/SpecialCategory.css'


const SpecialCategory = () => {
  return (
    <div className='SpecialCategory pd-y'>
      <SectionHeadar sectionHeader={'section-header'} variable={"Special Category"} />
      <div className='container'>
        <div className='category-items'>
          <div className='category-item'>
            <img className='categoryImg' src={c1} alt='Chair image' ></img>
            <h4 className='category-item-subtitle'>Most Popular</h4>
            <h2 className='category-item-title'>Classic Chair Collection</h2>
            <i className='fa fa-angle-right fa-lg'></i>
          </div>
          <div className='category-item'>
            <img className='categoryImg' src={c1} alt='Chair image' ></img>
            <h4 className='category-item-subtitle'>Most Popular</h4>
            <h2 className='category-item-title'>Classic Chair Collection</h2>
            <i className='fa fa-angle-right fa-lg'></i>
          </div>
          <div className='category-item'>
            <img className='categoryImg' src={c1} alt='Chair image' ></img>
            <h4 className='category-item-subtitle'>Most Popular</h4>
            <h2 className='category-item-title'>Classic Chair Collection</h2>
            <i className='fa fa-angle-right fa-lg'></i>
          </div>
          <div className='category-item'>
            <img className='categoryImg' src={c1} alt='Chair image' ></img>
            <h4 className='category-item-subtitle'>Most Popular</h4>
            <h2 className='category-item-title'>Classic Chair Collection</h2>
            <i className='fa fa-angle-right fa-lg'></i>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default SpecialCategory;
