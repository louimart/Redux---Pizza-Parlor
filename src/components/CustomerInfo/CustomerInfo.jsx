import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
// import { postOrder } from '../orderApi/order.api';

function CustomerInfo() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [zipValue, setZipValue] = useState("");
  const [radioValue, setRadioValue] = useState("");

  const dispatchCustomerInfo = () => {
    dispatch({
      type: "SET_CUSTOMER_INFO",
      payload: {
        customer_name: nameValue,
        street_address: streetValue,
        city: cityValue,
        zip: parseInt(zipValue),
        type: radioValue,
      },
    });
  };

  const handleSubmitCustomerInfo = (event) => {
    event.preventDefault();
    dispatchCustomerInfo();
    console.log("Values for SUBMIT:", {
      name: nameValue,
      street: streetValue,
      city: cityValue,
      zip: zipValue,
      radio: radioValue,
    });
    history.push("/checkout");
  };

  return (
    <div>
      <h2>Step 2: Customer Information</h2>
      <div>
        <input
          label="pickup"
          type="radio"
          id="pickup"
          value="pickup"
          checked={radioValue === "pickup"}
          onChange={(event) => {
            setRadioValue(event.target.value);
          }}
        />
        <label for="pickup">Pickup</label>
        <input
          label="delivery"
          type="radio"
          id="delivery"
          value="delivery"
          checked={radioValue === "delivery"}
          onChange={(event) => {
            setRadioValue(event.target.value);
          }}
        />
        <label for="delivery">Delivery</label>
        <br />
      </div>
       
      <form onSubmit={handleSubmitCustomerInfo}>
        <TextField label="Name" variant="outlined" fullWidth margin="normal" onChange={(event) => setNameValue(event.target.value)}/>
        <TextField label="Street Address" variant="outlined" fullWidth margin="normal" onChange={(event) => setStreetValue(event.target.value)}/>
        <TextField label="City" variant="outlined" fullWidth margin="normal" onChange={(event) => setCityValue(event.target.value)}/>
        <TextField label="Zip" variant="outlined" fullWidth margin="normal" onChange={(event) => setZipValue(event.target.value)}/>
        <div className="nextButton">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            NEXT
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CustomerInfo;
