import React from 'react';
import { Card, Row, Col, Button, Table, Badge } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const VendorManagement: React.FC = () => {
  const chartData = {
    labels: [
      '2024-03-01',
      '2024-03-02',
      '2024-03-03',
      '2024-03-04',
      '2024-03-05',
      '2024-03-06',
      '2024-03-07',
    ],
    datasets: [
      {
        label: 'Applications',
        backgroundColor: '#8676FF',
        data: [30, 32, 35, 30, 40, 45, 42],
      },
      {
        label: 'Approved',
        backgroundColor: '#64E291',
        data: [20, 22, 28, 21, 25, 30, 27],
      },
    ],
  };

  return (
    <div className="p-4 " style={{width:'1100px',marginLeft:"270px",marginTop:'50px'}}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className='fw-bold'>Vendors</h4>
        <div>
          <Button variant="outline-secondary" className="me-2">Export</Button>
          <Button variant="primary">Filter</Button>
        </div>
      </div>

      <Row className="mb-4">
        <Col md={3}>
          <Card className="p-3 text-center">
            <div>Total Sellers</div>
            <h4>378 <span className="text-success">↑ 3.5%</span></h4>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <div>New Applications</div>
            <h4>27 <span className="text-success">↑ 5.2%</span></h4>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <div>Active Sellers</div>
            <h4>342 <span className="text-success">↑ 2.8%</span></h4>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <div>Seller Revenue</div>
            <h4>₹26,25,000 <span className="text-success">↑ 8.7%</span></h4>
          </Card>
        </Col>
      </Row>

      <Card className="p-3 mb-4">
        <h6>Seller Onboarding</h6>
        <Bar data={chartData} />
        <div className="mt-2 d-flex justify-content-start gap-4">
          <span><span className="me-1" style={{ backgroundColor: '#8676FF', padding: '5px', borderRadius: '4px' }} /> Applications</span>
          <span><span className="me-1" style={{ backgroundColor: '#64E291', padding: '5px', borderRadius: '4px' }} /> Approved</span>
        </div>
      </Card>

      <Card className="p-3 mb-4">
        <div className="d-flex justify-content-between">
          <h6>Top Performing Sellers</h6>
          <Button variant="outline-primary" size="sm">View All</Button>
        </div>
        <Table hover responsive>
          <thead>
            <tr>
              <th>Seller</th>
              <th>Category</th>
              <th>Revenue</th>
              <th>Orders</th>
              <th>Return Rate</th>
              <th>Rating</th>
              <th>Commission</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['ElectroHub', 'Electronics', '₹8,25,000', 1650, '3.5%', '4.7', '₹1,42,500'],
              ['Fashion Fiesta', 'Fashion', '₹6,80,000', 2250, '5.0%', '4.3', '₹1,02,000'],
              ['Home Decor Plus', 'Home & Kitchen', '₹5,20,000', 1150, '4.0%', '4.5', '₹62,400'],
              ['BeautyWell', 'Beauty', '₹3,80,000', 1420, '4.0%', '4.6', '₹68,400'],
              ['ReadMore', 'Books', '₹2,20,000', 1850, '2.0%', '4.8', '₹22,000'],
            ].map((row, idx) => (
              <tr key={idx}>
                <td><b>{row[0]}</b></td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]} ⭐</td>
                <td>{row[6]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card className="p-3">
        <div className="d-flex justify-content-between">
          <h6>Recent Seller Applications</h6>
          <Button variant="outline-primary" size="sm">View All</Button>
        </div>
        <Table hover responsive>
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Category</th>
              <th>Owner</th>
              <th>Submitted</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['TechGadgets', 'Electronics', 'Rahul Verma', '2 days ago', 'Pending'],
              ['Fashion Hub', 'Fashion', 'Neha Singh', '1 day ago', 'Pending'],
              ['HomeStyle', 'Home & Kitchen', 'Vikram Mehta', '3 days ago', 'Under Review'],
              ['BeautyWorld', 'Beauty', 'Priya Sharma', '2 days ago', 'Pending'],
              ['BookCorner', 'Books', 'Amit Kumar', '4 days ago', 'Under Review']
            ].map(([name, category, owner, submitted, status], idx) => (
              <tr key={idx}>
                <td>{name}</td>
                <td>{category}</td>
                <td>{owner}</td>
                <td>{submitted}</td>
                <td>
                  <Badge bg={status === 'Under Review' ? 'info' : 'warning'} style={{width:'130px',height:'25px',fontSize:'12px'}}>{status}</Badge>
                </td>
                <td>
                  <span className="text-primary me-2 fs-6">Review</span>
                  <span className="text-success me-2 fs-6">Approve</span>
                  <span className="text-danger me-2 fs-6">Reject</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default VendorManagement;
