import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function PizzaItem({ pizzas }) {
  const[toggleButton, setToggleButton] = useState(true);
  const dispatch = useDispatch();

  const addPizzaToCart = () => {
    console.log(pizzas);
    // TODO: Dispatch here
    dispatch({
      type: "SET_CART_ITEM",
      payload: pizzas,
    });
    setToggleButton(!toggleButton)
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
            {toggleButton ? "ADD" : "REMOVE"}
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}

export default PizzaItem;
