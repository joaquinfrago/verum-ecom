import React from 'react';
import Header from './Header';
import OrderTracking from './OrderTracking';

const Content = ({ page }) => {
  const renderBody = (key) => {
    switch (key) {
      case 'Order Tracking':
        return <OrderTracking />;

      default:
        return <div></div>;
    }
  };

  return (
    <div className="Content">
      <Header title={page.label} />
      {renderBody(page.label)}
    </div>
  );
};

export default Content;
