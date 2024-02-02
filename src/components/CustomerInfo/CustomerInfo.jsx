import React from 'react';
import { useState } from 'react';
// import { postOrder } from '../orderApi/order.api';

function CustomerInfo() {
  const [nameValue, setNameValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [zipValue, setZipValue] = useState('');

  const handleSubmitCustomerInfo = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
      Name: nameValue,
      street: streetValue,
      city: cityValue,
      zip: zipValue,
    });
  };

  return (
    <div>
      <header>
        <h1>Prime Pizza</h1>
      </header>

      <h2>Step 2: Customer Information</h2>

      <form onSubmit={handleSubmitCustomerInfo}>
        <label>
          <input
            placeholder="Name"
            onChange={(event) => setNameValue(event.target.value)}
          />
        </label>{' '}
        <br />
        <label>
          <input
            placeholder="Street Address"
            onChange={(event) => setStreetValue(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            placeholder="City"
            onChange={(event) => setCityValue(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Zip"
            onChange={(event) => setZipValue(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default CustomerInfo;
