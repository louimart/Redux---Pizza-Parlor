import React from 'react';

function CustomerInfo() {
  return (
    <div>
      <header>
        <h1>Prime Pizza</h1>
      </header>

      <h2>Step 2: Customer Information</h2>

      {/* <form onSubmit={handleSubmitGrocery}> */}
      <form>
        <label>
          <input
            placeholder="Name"
            // onChange={handleChangeOfName}
            // value={nameValue}
          />
        </label>
        <label>
          <input
            placeholder="Street Address"
            // onChange={handleChangeOfQuantity}
            // value={quantityValue}
          />
        </label>
        <label>
          <input
            placeholder="City"
            // onChange={handleChangeOfUnit}
            // value={unitValue}
          />
        </label>
        <label>
          <input
            placeholder="Zip"
            // onChange={handleChangeZip}
            // value={unitValue}
          />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default CustomerInfo;
