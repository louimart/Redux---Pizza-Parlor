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
        <input
          placeholder="Name"
          onChange={(event) => setNameValue(event.target.value)}
        />
        <br />
        <input
          placeholder="Street Address"
          onChange={(event) => setStreetValue(event.target.value)}
        />
        <br />
        <input
          placeholder="City"
          onChange={(event) => setCityValue(event.target.value)}
        />
        <br />
        <input
          placeholder="Zip"
          onChange={(event) => setZipValue(event.target.value)}
        />
        <br />
        <input type="radio" id="pickup" name="pickup" value="pickup" checked />
        <label for="pickup">Pickup</label>
        <br />

        <input
          type="radio"
          id="delivery"
          name="delivery"
          value="delivery"
          unchecked
        />

        <label for="delivery">Delivery</label>
        <br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default CustomerInfo;
