import "./Category.css";
import type { MouseEventHandler } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cards } from "../assets/Product"; 

const NextArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLDivElement> }) => (
  <div className="slick-next slick-arrow custom-arrow" onClick={onClick}>
    <span>&gt;</span> 
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLDivElement> }) => (
  <div className="slick-prev slick-arrow custom-arrow" onClick={onClick}>
    <span>&lt;</span> 
  </div>
);



const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "ease-in-out",
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="container category-wrapper bg-body-secondary">
      <h2 className="category-title">Shop by Category</h2>
      <div className="slider-container ">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="circle-slide">
              <div className="circle-card">
                <img
                  src={card.image}
                  alt={card.name}
                  className="card-img"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;