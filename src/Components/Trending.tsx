// src/components/Trending.tsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../assets/Product';
import './Trending.css';

const Trending: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth / 4;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div id="trendingCarouselContainer">
      <h2>Trending Products</h2>

      <div className="carousel-btn prev" onClick={() => scroll('left')}>
        <span>&lt;</span>
      </div>
      <div className="carousel-btn next" onClick={() => scroll('right')}>
        <span>&gt;</span>
      </div>

      <div className="carousel-wrapper" ref={carouselRef}>
        {products.map((product) => (
          <div
            key={product.id}
            className="carousel-item-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="card">
              <img
                src={product.imgUrl}
                className="card-img-top"
                alt={product.productName}
              />
              <div className="card-body">
                <h5 className="card-title fs-5">{product.productName}</h5>
                <p className="card-text fw-bold text-success">{product.price}</p>
                <div className="text-warning">
                  {'★'.repeat(4)}
                  <span className="text-muted">★</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
