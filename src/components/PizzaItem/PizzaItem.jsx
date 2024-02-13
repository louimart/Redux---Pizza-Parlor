import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function PizzaItem({ pizzas }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isInCart = () => {
    if (cart.filter((item) => item.id === pizzas.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const addPizzaToCart = () => {
    // TODO: Dispatch here
    if (isInCart() === false) {
      dispatch({
        type: "SET_CART_ITEM",
        payload: pizzas,
      });
    } else {
      dispatch({
        type: "SET_REMOVE_ITEM",
        payload: { id: pizzas.id },
      });
    }
  };

  return (
    <Grid item xs={6} md={6} lg={6}>
      <Box
        borderRadius={3}
        border={"2px solid grey"}
        sx={{
          padding: "10px",
          margin: "10px",
          boxSizing: "border-box",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <img src={pizzas.image_path} />
          <h3>{pizzas.name}</h3>
          <p>{pizzas.description}</p>
          <p>{pizzas.price}</p>
          <Button
            onClick={addPizzaToCart}
            className="cardButton"
            variant="contained"
            fullWidth
            size="small"
            sx={{
              marginTop: "auto",
            }}
          >
            {isInCart() ? "REMOVE" : "ADD"}
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}

export default PizzaItem;
