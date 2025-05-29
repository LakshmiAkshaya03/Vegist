import "./Slider.css"
import banner2 from "../assets/images/banner-2.jpg";
import banner1 from "../assets/images/banner-1.jpg";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";

const Slider = () => {
  return (
    <div className="slider-wrapper">
      {/* Full-width carousel */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide custom-carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100 slider-image" alt="first1" />
            <div className="carousel-caption text-start d-none d-md-block mb-5">
              <h5>Summer vage sale</h5>
              <h1>Fresh fruits</h1>
              <h1>& vegetable</h1>
              <button className="text-bg-warning p-3 rounded-5 text-white pt-2 pb-2">Shop now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100 slider-image" alt="second2" />
            <div className="carousel-caption text-end d-none d-md-block mb-5">
              <h5>Organic indian masalal</h5>
              <h1>Prod of indian.</h1>
              <h1>100% pacaging</h1>
              <button className="text-bg-warning p-3 rounded-5 text-white pt-2 pb-2">Shop now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100 slider-image" alt="third3" />
            <div className="carousel-caption d-none d-md-block mb-5">
              <h5>Top selling!</h5>
              <h1>Fresh for your health.</h1>
              <button className="text-bg-warning p-3 rounded-5 text-white pt-2 pb-2">Shop now</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Banners in container-fluid (not full screen) */}
      <div className="container mt-4">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="image-banner">
              <img src={banner1} className="banner-img" alt="banner1" />
              <div className="overlay">
                <h5 className="fw-bold text-dark">Fresh fruits, vegetable on our product</h5>
                <button className="btn btn-warning text-dark rounded-5 fw-bold">Shop now</button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="image-banner">
              <img src={banner2} className="banner-img" alt="banner2" />
              <div className="overlay">
                <h5 className="fw-bold text-dark">Vegetable eggplant 100% fresh fruit</h5>
                <button className="btn btn-warning text-dark rounded-5 fw-bold">Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
