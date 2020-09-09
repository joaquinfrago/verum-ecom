import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';

const menuItems = [
  { label: 'Dashboard' },
  { label: 'Manage Orders' },
  { label: 'Connect Stores' },
  { label: 'Product Center' },
  { label: 'Order Tracking' },
  { label: 'Sales Support' },
  { label: 'Analytics' },
  { label: 'Billing History' },
];

function App() {
  const [page, setPage] = useState({ label: 'Order Tracking' });

  return (
    <div className="App">
      <div className="AppContainer">
        <div className="Sidebar">
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: '1.125rem',
                paddingBottom: '3rem',
                cursor: 'pointer',
              }}
            >
              VERUM ECOM
            </div>
            <div
              style={{
                display: 'flex',
                paddingBottom: '3rem',
              }}
            >
              <div
                className="circle"
                style={{ marginRight: '0.75rem', cursor: 'pointer' }}
              ></div>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}
                >
                  Jon Smith
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'rgba(0,0,0,0.5)',
                    cursor: 'pointer',
                  }}
                >
                  j.smith@gmail.com
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {menuItems.map((item) => (
                <div
                  className={`MenuItem animated-200 ${
                    item.label === page.label && 'activeMenuItem'
                  }`}
                  onClick={() => setPage(item)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: '5rem',
              paddingTop: '2rem',
              borderTop: '1px solid #f4f4f4',
            }}
          >
            <div
              className="MenuItem"
              style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.8)',
                paddingLeft: '1rem',
                padding: '0.675rem',
                borderRadius: '9px',
              }}
            >
              Help Center
            </div>
            <div
              className="MenuItem"
              style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.8)',
                paddingLeft: '1rem',
                padding: '0.675rem',
                borderRadius: '9px',
              }}
            >
              Settings
            </div>
          </div>
        </div>
        <Content page={page} />
      </div>
    </div>
  );
}

export default App;
