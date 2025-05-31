import React from 'react';
import './Digital.css';
import { Button, Nav } from 'react-bootstrap';

const Digital: React.FC = () => {
  const assets = [
    {
      title: 'Modern Women Dress',
      date: '2025-02-20',
      type: 'Image',
      imgAlt: 'Modern Women Dress'
    },
    {
      title: 'Casual Shirt Video',
      date: '2025-02-21',
      type: 'Video',
      imgAlt: 'Casual Shirt Video'
    },
    {
      title: 'Catalog PDF',
      date: '2025-02-22',
      type: 'Document',
      imgAlt: 'Catalog PDF'
    },
    {
      title: "Men's Formal Shoes",
      date: '2025-02-23',
      type: 'Image',
      imgAlt: "Men's Formal Shoes"
    },
    {
      title: 'Lifestyle Promo',
      date: '2025-02-24',
      type: 'Video',
      imgAlt: 'Lifestyle Promo'
    },
  ];

  return (
    <div className="digital-assets container-fluid">
      {/* Top Bar */}
      <div className="top-bar d-flex justify-content-between align-items-center mb-3 pt-3
      ">
        <input
          type="text"
          placeholder="Search for anything..."
          className="form-control search-box"
        />
        <div className="d-flex gap-2">
          <Button variant="primary">Create</Button>
          <Button variant="outline-primary">Upload</Button>
        </div>
      </div>

      {/* Tabs */}
      <Nav variant="tabs" defaultActiveKey="dashboard" className="custom-tabs mb-4">
        <Nav.Item><Nav.Link eventKey="dashboard" className='fw-bold fs-6'>Dashboard</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="asset-library" className='fw-bold fs-6'>Asset Library</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="collections" className='fw-bold fs-6'>Collections</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="upload-import" className='fw-bold fs-6'>Upload & Import</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="reports" className='fw-bold fs-6'>Reports & Analytics</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="settings" className='fw-bold fs-6'>Settings</Nav.Link></Nav.Item>
      </Nav>


        {/* === KEY METRICS SECTION === */}
      <div className="key-metrics">
        <div className="metric-card">
          <div className="metric-title">Total Assets</div>
          <div className="metric-value">3,250</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Recently Uploaded</div>
          <div className="metric-value">450</div>
          <a href="/" className="view-link">View all uploads</a>
        </div>
        <div className="metric-card storage-card">
          <div className="metric-title">Storage</div>
          <div className="storage-visual">
            <svg className="circular-chart" viewBox="0 0 36 36">
              <path className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle"
                    strokeDasharray="60, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831" />
              <text x="18" y="20.35" className="percentage">60%</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <h5 className="fw-bold mb-3">Recent Uploads</h5>

      {/* Asset Cards */}
      <div className="card-grid">
        {assets.map((asset, index) => (
          <div className="asset-card" key={index}>
            <div className="image-placeholder">
              <img src="#" alt={asset.imgAlt} />
            </div>
            <div className="card-body">
              <div className="title">{asset.title}</div>
              <div className="meta">Updated: {asset.date}</div>
              <div className="meta">Type: {asset.type}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digital;
