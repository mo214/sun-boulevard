import React from 'react'
import './Slider.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../src/photo-1571116260185-78bf30c0cc95.jpg'
import image2 from '../../src/photo-1551782450-17144efb9c50.jpg'
import image3 from '../../src/photo-1568901346375-23c9450c58cd.jpg'
import image4 from '../../src/photo-1571091718767-18b5b1457add.jpg'


function Slider() {
    return (
        <div className='Image-slider'>
    <AliceCarousel  autoPlayInterval="3000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/>
</AliceCarousel>
        </div>
    )
}

export default Slider