import React from "react";
import './Checkout.css'

function Checkout() {
  return (
    <div>
      Checkout
      <h1>Prime Pizza</h1>
      <br />
      <p>Step 3: Checkout</p>
      <p>
        Name here <br />
        Address here <br /> {/*breaks can be removed later*/}
        City and State
      </p>
      <p>For Delivery</p>
      <table className="orderTable">
        <tr>
          <th>Name</th>
          <th>Cost</th>
        </tr>
        <tbody>
          <tr>
            <td>Pizza here</td>
            <td>$$$$</td>
          </tr>
        </tbody>
      </table>
      <p>Total: </p>
      <button>Checkout</button>
    </div>
  );
}

export default Checkout;
