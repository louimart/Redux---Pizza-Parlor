import * as React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function Checkout() {
  const orders = useSelector((state) => state.orders);

  return (
    <>
    <div className="customerInfo">
      <h2>Step 3: Checkout</h2>
      {orders.map((item) => ( 
        <div key={item.id}>
          {item.customer_name} <br />
          {item.street_address} <br />
          {item.city} <br />
          {item.type}
        </div>
      ))}
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Cost</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {orders.map((items) => (
              <StyledTableRow key={items.id}>
                <StyledTableCell component="th" scope="row">
                  {items.customer_name}
                </StyledTableCell>
                <StyledTableCell>{items.total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>Total:</p>
      <button>CHECKOUT</button>
    </>
  );
}

export default Checkout;
