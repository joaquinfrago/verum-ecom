import React, { useState } from 'react';

const columnHeaders = [
  'Shopify Order',
  'Order Date',
  'Supplier',
  'Order Status',
  'Tracking Number',
  'Days Waited',
  'Delivery Status',
];

const flags = [
  'Defective Item',
  'Missing',
  'Refund',
  'Reship',
  'Chargeback',
  'Not Found',
  'Returned to Sender',
  'No Tracking Update',
];

const filters = [
  'Orders By Date',
  'Orders By Supplier',
  'Orders By Delivery Status',
  'Orders By Issue',
  'Orders By Status',
  'Archived',
];

const exportOptions = ['Current Page', 'All Orders', 'Selected Orders'];

const tableData = [
  {
    flag: 'Defective Item',
    'Shopify Order': 1010,
    'Order Date': 'Today at 1:12am',
    Supplier: 'CJ',
    'Order Status': 'Awaiting Payment',
  },
  {
    'Shopify Order': 1009,
    'Order Date': 'Yesterday at 3:57 pm',
    Supplier: 'Alex',
    'Order Status': 'Pending',
  },
  {
    flag: 'No Tracking Update',
    'Shopify Order': 1008,
    'Order Date': 'Today at 1:12am',
    Supplier: 'CJ',
    'Order Status': 'Cancelled',
  },
  {
    'Shopify Order': 1007,
    'Order Date': 'Yesterday at 3:57 pm',
    Supplier: 'Alex',
    'Order Status': 'Pending',
  },
  {
    flag: 'Defective Item',
    'Shopify Order': 1006,
    'Order Date': 'Today at 1:12am',
    Supplier: 'AliExpress',
    'Order Status': 'Shipped',
  },
  {
    'Shopify Order': 1005,
    'Order Date': 'Yesterday at 3:57 pm',
    Supplier: 'Alex',
    'Order Status': 'Pending',
  },
  {
    flag: 'No Tracking Update',
    'Shopify Order': 1004,
    'Order Date': 'Today at 1:12am',
    Supplier: 'CJ',
    'Order Status': 'Delivered',
  },
  {
    flag: 'Defective Item',
    'Shopify Order': 1003,
    'Order Date': 'Today at 1:12am',
    Supplier: 'CJ',
    'Order Status': 'For Pickup',
  },
  {
    'Shopify Order': 1002,
    'Order Date': 'Yesterday at 3:57 pm',
    Supplier: 'Alex',
    'Order Status': 'For Pickup',
  },
  {
    flag: 'No Tracking Update',
    'Shopify Order': 1001,
    'Order Date': 'Today at 1:12am',
    Supplier: 'CJ',
    'Order Status': 'Delivered',
  },
];

const OTContent = ({ store }) => {
  const [itemDetails, setItemDetails] = useState();
  const [itemFlag, setItemFlag] = useState();

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <div className="Button" onClick={() => setIsExportModalOpen(true)}>
          <div style={{ padding: '0.3rem 0' }}>Export</div>
        </div>
      </div>
      <div>
        <div className="Button" onClick={() => setIsFilterModalOpen(true)}>
          <div style={{ padding: '0.3rem 0' }}>Filter</div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          padding: '1rem 0',
        }}
      >
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            placeholder="Enter Order Number"
            style={{
              border: '1px solid #585858',
              borderRadius: '9px',
              width: '16rem',
              textAlign: 'center',
              outline: 'none',
            }}
          />
          <div
            className="Button"
            style={{
              backgroundColor: '#f96b13',
              color: 'white',
              margin: '0 0.5rem',
              padding: '0 1rem',
              width: 'auto',
            }}
          >
            <div style={{ padding: '0' }}>Search {store}</div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div
            className="Button"
            style={{
              backgroundColor: '#f96b13',
              color: 'white',
              margin: '0 1rem',
              width: '6rem',
            }}
          >
            <div>Actions</div>
          </div>
          <div
            className="Button"
            style={{
              margin: 0,
              width: '7rem',
            }}
          >
            <div>Sync Orders</div>
          </div>
        </div>
      </div>
      <div className="Table">
        <div className="TableHeader" style={{ display: 'flex' }}>
          {columnHeaders.map((header) => (
            <div className="ColumnHeader">{header}</div>
          ))}
        </div>
        {tableData.map((row) => (
          <div className="TableRow">
            {columnHeaders.map((header) => (
              <div
                className="TableData"
                onClick={() => {
                  header === 'Delivery Status' && setItemDetails(row);
                  header === 'Shopify Order' && setItemFlag(row);
                }}
              >
                {header === 'Shopify Order' && row.flag ? (
                  <div className="flag"></div>
                ) : (
                  ''
                )}
                <span>{row[header] || '-'}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className={`Modal animated-500 ${
          itemDetails ? 'ModalOpen' : 'ModalClose'
        }`}
      >
        <div
          style={{
            border: '1px solid #f96b13',
            width: '90%',
            height: '90%',
            overflow: 'auto',
            backgroundColor: 'white',
            borderRadius: '9px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '2rem' }}>
            Details on Shopify Order{' '}
            {itemDetails && itemDetails['Shopify Order']} goes here
          </div>
          <div className="Button" onClick={() => setItemDetails(null)}>
            Close
          </div>
        </div>
      </div>
      <div
        className={`Modal animated-500 ${
          itemFlag ? 'ModalOpen' : 'ModalClose'
        }`}
      >
        <div
          style={{
            border: '1px solid rgb(79, 184, 233)',
            width: '50%',
            height: '45%',
            overflow: 'auto',
            backgroundColor: 'white',
            borderRadius: '9px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{ padding: '1rem 1.5rem', width: '100%', height: '100%' }}
          >
            <div
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                marginBottom: '1rem',
              }}
            >
              {itemFlag?.flag
                ? `Order is currently flagged as ${itemFlag?.flag}`
                : 'Flag as'}
            </div>
            <div
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                marginBottom: '0.5rem',
              }}
            >
              Please select Aftersale Status
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                paddingBottom: '1rem',
              }}
            >
              {flags.map((flag) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '3rem',
                  }}
                >
                  <input
                    id={flag}
                    type="radio"
                    style={{ marginRight: '0.5rem' }}
                    onClick={(e) => console.log(e.target)}
                  />
                  <label for={flag}>{flag}</label>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 500 }}>Comments</div>
              <textarea
                style={{
                  width: '100%',
                  borderRadius: '9px',
                  border: '1px solid #d8d8d8',
                  marginBottom: '1rem',
                }}
              />
            </div>
            <div>
              <input type="file" id="upload" style={{ display: 'none' }} />
              <label
                for="upload"
                className="Button"
                style={{
                  backgroundColor: 'rgb(79, 184, 233)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                }}
              >
                Upload File
              </label>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <div className="Button" onClick={() => setItemFlag(null)}>
                Close
              </div>
              <div className="Button" onClick={() => setItemFlag(null)}>
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`Modal animated-500 ${
          isFilterModalOpen ? 'ModalOpen' : 'ModalClose'
        }`}
      >
        <div
          style={{
            border: '1px solid #f96b13',
            width: '50%',
            height: '45%',
            overflow: 'auto',
            backgroundColor: 'white',
            borderRadius: '9px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {filters.map((filter) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: '1rem',
              }}
            >
              <input
                id={filter}
                type="radio"
                style={{ marginRight: '0.5rem' }}
                onClick={(e) => console.log(e.target)}
              />
              <label for={filter}>{filter}</label>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',
              padding: '2rem',
              width: '100%',
            }}
          >
            <div className="Button" onClick={() => setIsFilterModalOpen(false)}>
              Close
            </div>
            <div className="Button" onClick={() => setIsFilterModalOpen(false)}>
              Save
            </div>
          </div>
        </div>
      </div>
      <div
        className={`Modal animated-500 ${
          isExportModalOpen ? 'ModalOpen' : 'ModalClose'
        }`}
      >
        <div
          style={{
            border: '1px solid #f96b13',
            width: '50%',
            height: '45%',
            overflow: 'auto',
            backgroundColor: 'white',
            borderRadius: '9px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {exportOptions.map((exportOption) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: '1rem',
              }}
            >
              <input
                id={exportOption}
                type="radio"
                style={{ marginRight: '0.5rem' }}
                onClick={(e) => console.log(e.target)}
              />
              <label for={exportOption}>{exportOption}</label>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',
              padding: '2rem',
              width: '100%',
            }}
          >
            <div className="Button" onClick={() => setIsExportModalOpen(false)}>
              Close
            </div>
            <div className="Button" onClick={() => setIsExportModalOpen(false)}>
              Export as
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTContent;
