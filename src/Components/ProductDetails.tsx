// src/components/ProductDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../assets/Product';
import aboutBanner from '../assets/images/about-image.jpg';
import './ProductDetails.css';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center mt-5">Product not found.</div>;
  }

  return (
    <>
      {/* Banner */}
      <div className="product-banner">
        <img src={aboutBanner} alt="Banner" className="banner-img" />
        <div className="banner-text">
          <h1>Fresh vegetable</h1>
          <p>Home | Fresh vegetable</p>
        </div>
      </div>


      {/* Product Row */}
      <div className="container my-5">
        <div className="row align-items-start">

          {/* Left: Product Image */}
          <div className="col-md-4">
            <img src={product.imgUrl} className="img-fluid rounded shadow" alt={product.productName} />
          </div>

          {/* Middle: Description */}
          <div className="col-md-4">
            <h2>{product.productName}</h2>
            <div className="text-warning fs-4 mb-2">
              {'★'.repeat(4)}<span className="text-muted">★</span>
            </div>
            <p className="text-success fw-bold fs-5">{product.price}</p>
            <p className="text-muted small">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aut minus, repudiandae quas nisi aliquam voluptatibus id corporis, sit numquam beatae maiores ad error eligendi officia at corrupti repellat doloribus?
              Iusto earum repudiandae, voluptas mollitia eos temporibus doloremque architecto assumenda placeat voluptatem obcaecati corporis delectus. Ea rerum ipsum eius et aspernatur velit soluta vero, ex quis tempore beatae quos autem!
              Maxime quae!
            </p>

            <div className="quantity-control mb-3">
              <span>Quantity: </span>
              <button className="btn btn-outline-secondary btn-sm mx-1">-</button>
              <input type="number" value={1} readOnly className="form-control d-inline-block text-center" style={{ width: '50px' }} />
              <button className="btn btn-outline-secondary btn-sm mx-1">+</button>
            </div>

            <button className="custom-btn me-2 rounded-4 bg-warning text-black ">🛒 Add to Cart</button>
            <button className="custom-btn rounded-4 bg-warning text-black">Buy Now</button>
          </div>

          {/* Right: Info Cards */}
          <div className="col-md-3">
            <div className="info-card shadow-sm mb-3 p-3">
              <h6 className=' delivery fw-bold' >🚚 DELIVERY INFO</h6>
              <p className="text-muted small">Lorem ipsum dolor sit amet consectetur  nisi, culpa ipsam, amet consequatur.</p>
            </div>
            <div className="info-card shadow-sm mb-3 p-3">
              <h6 className=' return fw-bold'>↩️ 30 DAYS RETURN</h6>
              <p className="text-muted small">Lorem ipsum dolor sit amet consectetur  nisi, culpa ipsam, amet consequatur.</p>
            </div>
            <div className="info-card shadow-sm mb-3 p-3">
              <h6 className=' warrenty fw-bold'>🛡️ 10 YEAR WARRANTY</h6>
              <p className="text-muted small">Lorem ipsum dolor sit amet consectetur  nisi, culpa ipsam, amet consequatur..</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetails;
