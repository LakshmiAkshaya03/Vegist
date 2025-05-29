import React, { useState } from 'react';
import './Inventory.css';
import { Table, Button, Form } from 'react-bootstrap';
import { FaBoxOpen, FaExclamationTriangle, FaLock, FaCheck, FaFileExport, FaFileImport, FaPlus } from 'react-icons/fa';

export const rawInventoryData = [
  {
    product: "Luxury Lipstick - Crimson",
    sku: "MKP-LPS-LUX",
    hsn: "33041000",
    price: 899,
    mrp: 999,
    stock: 0,
    min: 10,
    status: "Out of Stock",
    reserved: 0,
    available: 0
  },
  {
    product: "Nourishing Shampoo",
    sku: "HRC-SHP-NRS",
    hsn: "33051010",
    price: 449,
    mrp: 1499,
    stock: 3,
    min: 20,
    status: "Critical Stock",
    reserved: 2,
    available: 1
  },
  {
    product: "Hydrating Face Cream",
    sku: "SKN-CRM-HYD",
    hsn: "33049990",
    price: 899,
    mrp: 999,
    stock: 8,
    min: 15,
    status: "Low Stock",
    reserved: 3,
    available: 5
  },
  {
    product: "Designer Sunglasses",
    sku: "ACC-SNG-DSG",
    hsn: "90041000",
    price: 1999,
    mrp: 2499,
    stock: 18,
    min: 10,
    status: "In Stock",
    reserved: 1,
    available: 17
  },    
  {
    product: "Signature Perfume",
    sku: "FRG-PRF-SIG",
    hsn: "33030020",
    price: 2599,
    mrp: 2999,
    stock: 31,
    min: 15,
    status: "In Stock",
    reserved: 4,
    available: 27
  },
  {
    product: "Radiance Serum",
    sku: "SKN-SRM-RAD",
    hsn: "33049910",
    price: 1299,
    mrp: 1499,
    stock: 42,
    min: 20,
    status: "In Stock",
    reserved: 5,
    available: 37
  },
  {
    product: "Brightening Face Mask",
    sku: "SKN-MSK-BRT",
    hsn: "33049990",
    price: 249,
    mrp: 299,
    stock: 42,
    min: 20,
    status: "In Stock",
    reserved: 0,
    available: 42
  },
  {
    product: "Silk Scarf - Summer Collection",
    sku: "ACC-SCF-SLK",
    hsn: "62141020",
    price: 1499,
    mrp: 1699,
    stock: 65,
    min: 20,
    status: "In Stock",
    reserved: 2,
    available: 63
  }
];

const Inventory: React.FC = () => {
  const [inventoryData, setInventoryData] = useState(rawInventoryData);
  const [searchTerm, setSearchTerm] = useState('');

  const totalProducts = inventoryData.length;
  const lowStockItems = inventoryData.filter(i => i.status !== 'In Stock').length;
  const reservedStock = inventoryData.reduce((a, b) => a + b.reserved, 0);
  const availableStock = inventoryData.reduce((a, b) => a + b.available, 0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    const sorted = [...inventoryData].sort((a, b) =>
      order === 'asc' ? a.stock - b.stock : b.stock - a.stock
    );
    setInventoryData(sorted);
  };

  const filteredData = inventoryData.filter(item =>
    item.product.toLowerCase().includes(searchTerm) ||
    item.sku.toLowerCase().includes(searchTerm) ||
    item.hsn.includes(searchTerm)
  );

  return (
    <div className="inventory-wrapper ms-3 p-4">
      <div className="mb-4">
        <div className="page-header mb-4">
          <h2 className="fw-bold">Inventory Management</h2>
          <p className="text-muted">Manage your beauty and fashion product inventory</p>
        </div>

        <div className="d-flex flex-wrap gap-2 mt-2">
          <Button variant="outline-secondary" size="sm">
            <FaFileExport className="me-1" /> Export
          </Button>
          <Button variant="outline-secondary" size="sm">
            <FaFileImport className="me-1" /> Import
          </Button>
          <Button variant="primary" size="sm">
            <FaPlus className="me-1" /> Add Product
          </Button>
        </div>
      </div>

      <div className="d-flex gap-3 mb-4 flex-wrap">
        <div className="card total flex-fill p-3">
          <FaBoxOpen className="mb-2 text-primary" size={24} />
          <span>{totalProducts}</span>
          <div className="text-muted">Total Products</div>
        </div>
        <div className="card low flex-fill p-3">
          <FaExclamationTriangle className="mb-2 text-danger" size={24} />
          <span>{lowStockItems}</span>
          <div className="text-muted">Low Stock Items</div>
        </div>
        <div className="card reserved flex-fill p-3">
          <FaLock className="mb-2 text-warning" size={24} />
          <span>{reservedStock}</span>
          <div className="text-muted">Reserved Stock</div>
        </div>
        <div className="card available flex-fill p-3">
          <FaCheck className="mb-2 text-success" size={24} />
          <span>{availableStock}</span>
          <div className="text-muted">Available Stock</div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <Form.Control
          placeholder="Search by product name, SKU, or HSN code..."
          className="w-100 w-md-50 mb-2 mb-md-0"
          onChange={handleSearch}
        />
        <Form.Select className="w-auto mt-2" onChange={handleSort}>
          <option value="asc">Stock: Low to High</option>
          <option value="desc">Stock: High to Low</option>
        </Form.Select>
      </div>

      <Table responsive className="bg-white rounded shadow-sm">
        <thead className="table-light">
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>SKU</th>
            <th>HSN</th>
            <th>Price</th>
            <th>Stock Level</th>
            <th>Status</th>
            <th>Reserved</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{getCategory(item.product)}</td>
              <td>{item.sku}</td>
              <td>{item.hsn}</td>
              <td>
                ₹{item.price}
                <br />
                <small className="text-muted">MRP: ₹{item.mrp}</small>
              </td>
              <td>
                {item.stock}
                <br />
                <small className="text-muted">Min: {item.min}</small>
              </td>
              <td>
              <span className={`badge bg-${getBadgeColor(item.status)}`}>{item.status}</span>
              </td>
              <td>{item.reserved}</td>
              <td>{item.available}</td>
              <td>
                <span className="me-2 text-primary" role="button">✏️</span>
                <span className="me-2 text-secondary" role="button">👁️</span>
                <span className="text-danger" role="button">🗑️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

function getCategory(product: string): string {
  if (product.includes("Lipstick")) return "Makeup";
  if (product.includes("Shampoo")) return "Haircare";
  if (product.includes("Cream") || product.includes("Serum") || product.includes("Mask")) return "Skincare";
  if (product.includes("Perfume")) return "Fragrance";
  if (product.includes("Sunglasses") || product.includes("Scarf")) return "Accessories";
  return "Others";
}

function getBadgeColor(status: string): string {
  switch (status) {
    case 'Out of Stock': return 'danger';
    case 'Critical Stock': return 'dark';
    case 'Low Stock': return 'warning';
    case 'In Stock': return 'success';
    default: return 'secondary';
  }
}

export default Inventory;
