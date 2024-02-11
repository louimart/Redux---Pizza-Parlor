import React from "react";
import { useSelector } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function PizzaList() {
  const pizzas = useSelector((state) => state.pizzas);

  const history = useHistory();

  return (
    <>
      <Grid container spacing={2} alignItems="stretch">
        {pizzas.map((pizzas, id) => {
          return <PizzaItem key={id} pizzas={pizzas} />;
        })}
      <br />
      </Grid>
      <Button onClick={() => {history.push ('/customerinfo')}} className="nextButton" variant="contained" size="large">
      NEXT
    </Button>
    </>
  );
}

export default PizzaList;
