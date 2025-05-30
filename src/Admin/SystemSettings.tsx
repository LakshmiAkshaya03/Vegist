import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {
  FaCog, FaUser, FaBell, FaShieldAlt, FaDatabase, FaGlobe,
  FaPlug, FaUsers, FaRedo, FaQuestionCircle, FaBalanceScale
} from 'react-icons/fa';

const SystemSettings: React.FC = () => {
  return (
    <div
      className="system-settings-container"
      style={{
        padding: '30px',
        overflowY: 'auto',
        minWidth:'1100px',
        marginLeft:'20%', 
        backgroundColor: '#f8f9fa'
      }}
    >
      {/* Settings Tabs */}
      <div className="mt-5">
        <h4 className="fw-semibold ">Settings</h4>
        <div className="d-flex flex-wrap gap-2 mt-4">
          <button className="btn btn-outline-primary active"><FaCog className="me-2" /> General Settings</button>
          <button className="btn btn-outline-secondary"><FaUser className="me-2" /> Profile Settings</button>
          <button className="btn btn-outline-secondary"><FaBell className="me-2" /> Notifications</button>
          <button className="btn btn-outline-secondary"><FaShieldAlt className="me-2" /> Security & Privacy</button>
          <button className="btn btn-outline-secondary"><FaDatabase className="me-2" /> Data Management</button>
          <button className="btn btn-outline-secondary"><FaGlobe className="me-2" /> Language & Region</button>
          <button className="btn btn-outline-secondary"><FaPlug className="me-2" /> Integrations</button>
          <button className="btn btn-outline-secondary"><FaUsers className="me-2" /> Team Management</button>
          <button className="btn btn-outline-secondary"><FaRedo className="me-2" /> Backup & Restore</button>
          <button className="btn btn-outline-secondary"><FaQuestionCircle className="me-2" /> Help & Support</button>
          <button className="btn btn-outline-secondary"><FaBalanceScale className="me-2" /> Legal & Compliance</button>
        </div>
      </div>

      {/* Version Info */}
      <div className="text-muted small mb-4">
        <div>Version 2.4.1</div>
        <div>Last updated: Feb 28, 2024</div>
      </div>

      {/* Settings Card */}
      <div className="card p-4 shadow-sm" style={{ minWidth: '1000px' }}>
        <h5 className="fw-semibold mb-4">General Settings</h5>

        <Form.Group className="mb-4">
          <Form.Label>Site Description</Form.Label>
          <Form.Control as="textarea" rows={2} defaultValue="Admin dashboard for managing the e-commerce platform" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Change Logo</Form.Label>
          <Form.Control type="file" accept="image/png, image/jpeg, image/gif" />
          <Form.Text muted>PNG, JPG, GIF up to 2MB</Form.Text>
        </Form.Group>

        <h6 className="mt-4">Dashboard Preferences</h6>

        <Form.Group className="mb-3">
          <Form.Label>Theme</Form.Label>
          <Form.Select defaultValue="Light">
            <option>Light</option>
            <option>Dark</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Default Dashboard Tab</Form.Label>
          <Form.Select defaultValue="Overview">
            <option>Overview</option>
            <option>Analytics</option>
            <option>Reports</option>
          </Form.Select>
        </Form.Group>

        <Form.Check
          type="checkbox"
          label="Collapse sidebar by default"
          className="mb-2"
        />
        <Form.Check
          type="checkbox"
          label="Show critical alerts on dashboard"
          className="mb-2"
          defaultChecked
        />
        <Form.Check
          type="checkbox"
          label="Enable real-time data updates"
          defaultChecked
        />

        <h6 className="mt-4">Date & Time Settings</h6>

        <Form.Group className="mb-3">
          <Form.Label>Time Zone</Form.Label>
          <Form.Select defaultValue="India (GMT+5:30)">
            <option>India (GMT+5:30)</option>
            <option>UTC</option>
            <option>EST (GMT-5:00)</option>
            <option>PST (GMT-8:00)</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Date Format</Form.Label>
          <Form.Select defaultValue="DD/MM/YYYY">
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </Form.Select>
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Button variant="light">Reset to Defaults</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>

    </div>
  );
};

export default SystemSettings;
