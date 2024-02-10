import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function PizzaItem({ pizzas, id }) {
  const dispatch = useDispatch();
  const pizzaItem = useSelector((state) => state.orders);

  return (
    <Grid item xs={6} md={6} lg={6}>
      <Box
        borderRadius={3}
        border={"2px solid grey"}
        sx={{
          margin: "20px",
          padding: "10px",
          height: "90%",
        }}
      >
        <img src={pizzas.image_path} />
        <h3>{pizzas.name}</h3>
        <p>{pizzas.description}</p>
        <p>{pizzas.price}</p>
        <Button
          className="cardButton"
          variant="contained"
          fullWidth
          size="small"
        >
          ADD
        </Button>
      </Box>
    </Grid>
  );
}

export default PizzaItem;
