import React from 'react';
import './ImageSlider.css';
import img1 from '../assets/images/l1.png';
import img2 from '../assets/images/l2.png';
import img3 from '../assets/images/l3.png';
import img4 from '../assets/images/l4.png';
import img5 from '../assets/images/l5.png';
import img6 from '../assets/images/l6.png';
import img7 from '../assets/images/l7.png';
import img8 from '../assets/images/l8.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ImageSlider: React.FC = () => {
  return (
    <div className="container my-5 overflow-hidden">
      <div className="slider-wrapper">
        <div className="slider-track">
          {images.map((img, index) => (
            <div className="slider-item" key={index}>
              <img src={img} alt={`Slide ${index}`} className="img-fluid rounded shadow-sm" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
