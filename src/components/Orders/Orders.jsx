import * as React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import refreshOrders from '../App/App';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Orders() {
  const orders = useSelector((state) => state.orders);

  // updates Order list on initial page load of Admin section.
  refreshOrders();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Time Order Placed</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Cost</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, id) => (
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row">
                {order.customer_name}
              </StyledTableCell>
              <StyledTableCell>{order.time}</StyledTableCell>
              <StyledTableCell>{order.type}</StyledTableCell>
              <StyledTableCell>{order.total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
