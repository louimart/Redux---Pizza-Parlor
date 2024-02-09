import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { postOrder } from '../orderApi/order.api';

function CustomerInfo() {
  const history = useHistory();
  const [nameValue, setNameValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [zipValue, setZipValue] = useState('');
  const [radioValue, setRadioValue] = useState('');

  const handleSubmitCustomerInfo = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
      name: nameValue,
      street: streetValue,
      city: cityValue,
      zip: zipValue,
      radio: radioValue,
    });
    history.push("/checkout")
  };

  return (
    <div>
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
        <div>
          <input
            label="pickup"
            type="radio"
            id="pickup"
            value="pickup"
            checked={radioValue === 'pickup'}
            onChange={(event) => {
              setRadioValue(event.target.value);
            }}
          />
          <label for="pickup">Pickup</label>
          <br />

          <input
            label="delivery"
            type="radio"
            id="delivery"
            value="delivery"
            checked={radioValue === 'delivery'}
            onChange={(event) => {
              setRadioValue(event.target.value);
            }}
          />
          <label for="pickup">Delivery</label>
          <br />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default CustomerInfo;
