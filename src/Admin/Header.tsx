import React from 'react';
import { FaBell } from 'react-icons/fa';

const HeaderUI: React.FC = () => {
  return (
    <div className="header d-flex justify-content-between align-items-center p-3 border-bottom">
      <h5 className="m-0 ms-3 me-4">Admin Portal</h5>
      
      {/* Search input field */}
      <div className="flex-1 me-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
        />
      </div>

      {/* Right side icons */}
      <div className="d-flex align-items-center">
        <FaBell className="mx-3" />
        <div className="rounded-circle bg-secondary text-white px-3 py-2">GK</div>
      </div>
    </div>
  );
};

export default HeaderUI;