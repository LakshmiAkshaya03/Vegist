import React from "react";
import Slider from "react-slick";
import { Star } from "react-feather";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { products } from "../assets/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurProducts.css";

const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) =>
  React.createElement(
    "div",
    {
      onClick,
      style: {
        position: "absolute",
        top: "40%",
        right: "-25px",
        zIndex: 1,
        cursor: "pointer",
        fontSize: "24px",
        color: "#000",
      },
    },
    React.createElement(FaArrowRight)
  );

const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) =>
  React.createElement(
    "div",
    {
      onClick,
      style: {
        position: "absolute",
        top: "40%",
        left: "-25px",
        zIndex: 1,
        cursor: "pointer",
        fontSize: "24px",
        color: "#000",
      },
    },
    React.createElement(FaArrowLeft)
  );

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      React.createElement(Star, {
        key: i,
        fill: i < rating ? "gold" : "none",
        stroke: "gold",
        strokeWidth: 2,
        style: { marginRight: "2px" },
      })
    );
  }
  return stars;
};

const OurProducts: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // 4 columns
        slidesToScroll: 1,
        rows: 2, // ✅ This means total 2 rows
        autoplay: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              rows: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 2,
            },
          },
        ],
      };
      
  return React.createElement(
    "div",
    { className: "container-fluid mt-5 mb-5" },
    React.createElement("h2", { className: "text-center mt-3" }, "Trending Products"),

    React.createElement(
      "div",
      {
        className: "d-flex justify-content-center gap-4 mt-3",
        style: { fontSize: "20px" },
      },
      ["SPECIAL PRODUCTS", "NEW PRODUCTS", "BESTSELLER"].map((text) =>
        React.createElement(
          "button",
          { className: "btn btn-outline rounded-pill bhover", key: text },
          text
        )
      )
    ),

    React.createElement(
      "div",
      {
        className: "mt-4",
        style: {
            maxWidth: "1200px",
            margin: "auto",
            position: "relative",
            paddingBottom: "40px",
          }
          
      },
      React.createElement(
        Slider,
        settings,
        products.map((product) =>
          React.createElement(
            "div",
            { key: product.id, style: { padding: "0 10px", boxSizing: "border-box" } },
            React.createElement(
              "div",
              {
                className: "product-card",
                style: {
                    width: "100%", 
                    maxWidth: "260px",
                    margin: "auto",
                    textAlign: "center",
                  }
                  
              },
              React.createElement(
                Link,
                { to: `/product/${product.id}` },
                React.createElement("img", {
                  src: product.imgUrl,
                  alt: product.productName,
                  style: {
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  },
                })
              ),
              React.createElement("p", { className: "mt-2" }, product.productName),
              React.createElement(
                "button",
                { className: "btn btn-warning btn-sm rounded-pill mb-1" },
                `${product.discount}% Off`
              ),
              React.createElement("div", { className: "stars-container" }, renderStars(product.rating)),
              React.createElement("h5", null, product.price)
            )
          )
        )
      )
    )
  );
};

export default OurProducts;
