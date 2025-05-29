import React from 'react';
import './Footer.css';
import {
  FaTruck, FaRupeeSign, FaUndo, FaHeadset, FaMapMarkerAlt,
  FaPhone, FaQuestionCircle, FaFacebookF, FaTwitter,
  FaPinterestP, FaInstagram, FaYoutube, FaWhatsapp
} from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from "../assets/images/logo1.png";
import payment from "../assets/images/payment.png";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <Container className="footer-container">

        {/* Features Row */}
        <Row className="footer-features text-center mb-4">
          <Col md={3}>
            <FaTruck size={30} className="footer-icon" />
            <h6 className="fw-bold mt-2">Free delivery</h6>
          </Col>
          <Col md={3}>
            <FaRupeeSign size={30} className="footer-icon" />
            <h6 className="fw-bold mt-2">Cash on delivery</h6>
          </Col>
          <Col md={3}>
            <FaUndo size={30} className="footer-icon" />
            <h6 className="fw-bold mt-2">30 Days returns</h6>
          </Col>
          <Col md={3}>
            <FaHeadset size={30} className="footer-icon" />
            <h6 className="fw-bold mt-2">Online support</h6>
          </Col>
        </Row>

        {/* Logo & Contact Info */}
        <Row className="footer-contact mb-4 ms-5 align-items-start">
          <Col md={3} className="text-md-start text-center mb-3 mb-md-0">
            <img src={logo1} alt="Vegist" className="footer-logo" />
          </Col>
          <Col md={3} className="footer-contact-col">
            <p className="footer-heading">Address</p>
            <p><FaMapMarkerAlt className="me-2" />401 Broadway, 24th Floor</p>
            <p>Near ant mall cross road</p>
          </Col>
          <Col md={3} className="footer-contact-col">
            <p className="footer-heading">Contact</p>
            <p><FaPhone className="me-2" />1-800-222-000</p>
            <p>Email: demo@demo.com</p>
          </Col>
          <Col md={3} className="footer-contact-col">
            <p className="footer-heading"><FaQuestionCircle className="me-2" />Help</p>
            <p className="text-muted small mb-0">Lorem ipsum is simply dummy the printing</p>
          </Col>
        </Row>

        {/* Navigation Links */}
        <Row className="footer-nav mb-4 ms-5">
          <Col md={3}>
            <h6 className="footer-heading">Top categories</h6>
            <ul className="footer-list">
              <li>Fruits</li>
              <li>Fast foods</li>
              <li>Vegetable</li>
              <li>Salads</li>
              <li>Bestseller</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-list">
              <li>About vegist</li>
              <li>Faq’s</li>
              <li>Contact us</li>
              <li>News</li>
              <li>Sitemap</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="footer-heading">Privacy & terms</h6>
            <ul className="footer-list">
              <li>Payment policy</li>
              <li>Privacy policy</li>
              <li>Return policy</li>
              <li>Shipping policy</li>
              <li>Terms & conditions</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="footer-heading">My account</h6>
            <ul className="footer-list">
              <li>My account</li>
              <li>My cart</li>
              <li>Order history</li>
              <li>My wishlist</li>
              <li>My address</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Full-Width Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-white small ">Copyright© 2024 spacingtech</div>
          <div className="footer-social-icons my-2 my-md-0">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaInstagram />
            <FaWhatsapp />
            <FaYoutube />
          </div>
          <div className="footer-payment-icons">
            <img src={payment} alt="Payment Methods" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
