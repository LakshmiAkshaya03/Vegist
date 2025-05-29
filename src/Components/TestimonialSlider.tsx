
import React from "react";
import Slider from "react-slick";
import "./TestimonialSlider.css";

interface Testimonial {
  name: string;
  title: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane deo",
    title: "Friendly support",
    text: "I love your store! there is the largest selection of products of the exceptional quality and the lowest prices like in no other store.",
  },
  {
    name: "Jessica joy",
    title: "Friendly support",
    text: "I love your store! there is the largest selection of products of the exceptional quality and the lowest prices like in no other store.",
  },
  {
    name: "Williamson",
    title: "Friendly support",
    text: "I love your store! there is the largest selection of products of the exceptional quality and the lowest prices like in no other store.",
  },
];
const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev" onClick={onClick}>
        &lt;
      </div>
    );
  };
  
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next" onClick={onClick}>
        &gt;
      </div>
    );
  };

const TestimonialSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
        ],
      };
      
 
  
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Our customer say</h2>
      <Slider {...settings}>
        {testimonials.map((item, idx) => (
          <div key={idx} className="p-3">
            <div className="bg-white p-4 shadow rounded text-center">
              <div className="rounded-circle bg-warning d-inline-flex align-items-center justify-content-center mb-3 quote-icon">
                <span className="text-white fs-4">❝</span>
              </div>
              <h5 className="fw-bold mb-2">{item.title}</h5>
              <p className="text-muted small">{item.text}</p>
              <div className="fw-bold mt-3">{item.name}</div>
              <div className="text-warning">★★★★★</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
