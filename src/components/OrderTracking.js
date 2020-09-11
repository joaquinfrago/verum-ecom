import React from 'react';
import { Tabs } from 'antd';

import OTContent from './OTContent';

const { TabPane } = Tabs;

const stores = ['Alienmood', 'Kismet Collections', 'Zanny Bag'];

const TabHead = ({ title }) => (
  <span style={{ fontSize: '1rem', fontWeight: 500, padding: '0 1rem' }}>
    {title}
  </span>
);

const OrderTracking = () => {
  return (
    <div
      style={{
        position: 'relative',
        margin: '1rem 2rem',
        padding: '0.5rem 1rem',
        backgroundColor: 'white',
        borderRadius: '9px',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Tabs
        defaultActiveKey="1"
        tabBarGutter={32}
        style={{ height: '100%', overflow: 'hidden' }}
      >
        {stores.map((store, index) => (
          <TabPane
            tab={<TabHead title={store} />}
            key={index}
            style={{ height: '100%', overflow: 'hidden' }}
          >
            <OTContent store={store} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default OrderTracking;
