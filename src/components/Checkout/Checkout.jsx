import * as React from "react";
import { postOrder } from "../../pizzaApi/pizza.api";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

////TESTING CUSTOMER INFO

function Checkout({ myCartTotal, refreshPizzas }) {
  const cart = useSelector((state) => state.cart);
  const customer = useSelector((state) => state.customer);
  const customer_name = useSelector((store) => store.customer.customer_name);
  const street_address = useSelector((store) => store.customer.street_address);
  const city = useSelector((store) => store.customer.city);
  const zip = useSelector((store) => store.customer.zip);
  const type = useSelector((store) => store.customer.type);
  // console.log('customer_name', customer_name);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    postOrder({
      customer_name,
      street_address,
      city,
      zip,
      type,
      total: myCartTotal,
      pizzas: cart,
    })
      .then((response) => {
        refreshPizzas;
        dispatch({
          type: "SET_CUSTOMER_INFO",
          payload: {
            customer_name: "" ,
            street_address: "" ,
            city: "" ,
            zip: "" ,
            type: "" ,
            total: myCartTotal,
          },
        });
        dispatch({
          type: "SET_EMPTY_CART",
          payload: []
        });
        history.push("/");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  return (
    <>
      <div className="customerInfo">
        <h2>Step 3: Checkout</h2>
        {/* {customer.map((item) => ( */}
        <div>
          {customer.customer_name} <br />
          {customer.street_address} <br />
          {customer.city} <br />
          {customer.zip} <br />
          {customer.type}
        </div>
        {/* ))} */}
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Cost</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((items) => (
              <StyledTableRow key={items.id}>
                <StyledTableCell component="th" scope="row">
                  {items.name}
                </StyledTableCell>
                <StyledTableCell>{items.price}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p className="nextButton">
        Total: ${myCartTotal} <br />
        <Button variant="contained" size="large" onClick={handleSubmit}>
          CHECKOUT
        </Button>
      </p>
    </>
  );
}

export default Checkout;
