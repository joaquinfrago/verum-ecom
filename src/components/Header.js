import React from 'react';

const Header = ({ title }) => {
  return (
    <div style={{ borderBottom: '1px solid #e6e4e4', padding: '1rem 2rem' }}>
      <div
        style={{
          fontSize: '1.25rem',
          fontWeight: 500,
          color: 'rgba(0,0,0,0.8)',
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default Header;
