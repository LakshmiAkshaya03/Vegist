import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MdDashboard, MdInventory, MdGroup, MdBarChart, 
  MdStorage, MdStore, MdPermMedia, MdPriceCheck, MdShoppingCart,
  MdPeopleAlt, MdCampaign, MdSubscriptions, MdSearch, MdAccountBalance,
  MdAssessment, MdSystemUpdateAlt
} from 'react-icons/md';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-white border-end vh-100 p-3" style={{ width: '300px' }}>
      <h4 className="text-center fw-bold mb-4">AUSTERE <small className="fw-normal">Beauty</small></h4>
      <ul className="nav flex-column">

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/dashboard">
            <MdDashboard className="me-2" /> Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/inventory">
            <MdInventory className="me-2" /> Inventory
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/customers">
            <MdGroup className="me-2" /> Customer Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/analytics">
            <MdBarChart className="me-2" /> Analytics
          </NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/master-data">
            <MdStorage className="me-2" /> Master Data Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/sellers">
            <MdStore className="me-2" /> Seller Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/digital-assets">
            <MdPermMedia className="me-2" /> Digital Asset Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/pricing">
            <MdPriceCheck className="me-2" /> Pricing Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/orders">
            <MdShoppingCart className="me-2" /> Order Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/vendors">
            <MdPeopleAlt className="me-2" /> Vendor Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/marketing">
            <MdCampaign className="me-2" /> Marketing
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/subscriptions">
            <MdSubscriptions className="me-2" /> Subscription Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/search">
            <MdSearch className="me-2" /> Search & Recommendations
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/finance">
            <MdAccountBalance className="me-2" /> Financial Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/reports">
            <MdAssessment className="me-2" /> Analytics & Reports
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/settings">
            <MdSystemUpdateAlt className="me-2" /> System & Settings
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;