import { BsHandbag } from "react-icons/bs";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo1.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="sticky-top bg-white shadow-sm z-50 w-100">
      {/* Top bar */}
      <div className="topbar bg-dark text-white py-1 px-4 d-flex justify-content-between align-items-center small">
        <span>Currency: 🇪🇺 EUR</span>
        <span className="text-warning">Free shipping orders from all item</span>
      </div>

      {/* Main Header */}
      <div className="border-bottom py-3 bg-light">
        <div className="container-fluid px-5 d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo1} alt="Vegist Logo" height="40" />
          </Link>

          {/* Search */}
          <form className="d-flex w-25">
            <input
              className="form-control rounded-start-pill"
              type="search"
              placeholder="Search product"
            />
            <button
              className="btn btn-dark rounded-end-pill px-3"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-4">
            {/* Account */}
            <div className="d-flex align-items-center gap-1 text-muted">
              <SlUser size={20} />
              <div>
                <small className="text-warning fw-bold">ACCOUNT</small>
                <br />
                <Link to="/login" className="text-decoration-none">
                  <small className="text-dark">Register | Log in</small>
                </Link>

              </div>
            </div>

            {/* Wishlist & Cart */}
            <Link to="/wishlist" className="text-dark position-relative">
              <IoMdHeartEmpty size={22} />
              <span className="badge-cart">0</span>
            </Link>

            <Link to="/cart" className="text-dark position-relative">
              <BsHandbag size={22} />
              <span className="badge-cart">5</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container px-4 px-lg-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-1">
              {["Home", "Shop", "Collection", "Pages", "Blogs", "Feature"].map(
                (item, index) => (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" to={`/${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                )
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/buy-vegist">
                  Buy Vegist <span className="badge bg-danger">HOT</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hotline */}
          <div className="d-flex align-items-center gap-2 text-muted">
            <FaPhoneAlt size={16} />
            <div>
              <small className="fw-bold text-warning">Hotline:</small>{" "}
              <small>0123 456 789</small>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
