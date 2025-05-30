import { Routes, Route } from 'react-router-dom';
import Slider from '../Components/Slider';
import Trending from '../Components/Trending';
import Category from '../Components/Category';
import ProductDetails from '../Components/ProductDetails';
import DealBanner from '../Components/DealBanner';
import OurProducts from '../Components/OurProducts';
import SignIn from '../Components/SignIn'; 
import TestimonialSlider from '../Components/TestimonialSlider';
import RecentNews from '../Components/RecentNews';
import ImageSlider from '../Components/ImageSlider';
import Footer from '../Components/Footer';
import Inventory from '../Admin/Inventory';
import VendorManagement from '../Admin/VendorManagement';
import Sidebar from '../Admin/Sidebar';
import Header from '../Admin/Header';
import SystemSettings from '../Admin/SystemSettings';


const Routing = () => {
  return (
    <>
      {/* <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Category />
              <Trending />
              <DealBanner />
              <OurProducts />
              <TestimonialSlider />
              <RecentNews />
              <ImageSlider />
              <Footer />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<SignIn />} />
      </Routes> */}

      {/* Admin Section */}
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 ms-2">
          <Header />
          <div className="w-100">
            <Routes>
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/vendors" element={<VendorManagement />} />
              <Route path="/settings" element={<SystemSettings />} />

              {/* Add more admin routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};


export default Routing;
