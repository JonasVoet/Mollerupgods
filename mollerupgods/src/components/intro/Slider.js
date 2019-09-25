import React from 'react';
import { Slide } from 'react-slideshow-image';
import slide1 from '../../assets/img/slide1.png';
import slide2 from '../../assets/img/slide2.png';
import slide3 from '../../assets/img/slide3.png';
import './slider.scss';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div className="image-container">
            <img src={slide1} alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div className="image-container">
            <img src={slide2} alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div className="image-container">
            <img src={slide3} alt="" />
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow;
