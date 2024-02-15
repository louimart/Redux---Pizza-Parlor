import React from "react";
import { useSelector } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function PizzaList( {myCart}) {
  const pizzas = useSelector((state) => state.pizzas);

  const history = useHistory();

  return (
    <>
    <h2>Step 1: Select Your Pizzas</h2>
      <Grid container spacing={2} alignItems="stretch">
        {pizzas.map((pizzas, id) => {
          return <PizzaItem key={id} pizzas={pizzas}/>;
        })}
      <br />
      </Grid>
      <div className="nextButton" >
      <Button onClick={() => {history.push ('/customerinfo')}} variant="contained" size="large">
      NEXT
    </Button>
    </div>
    </>
  );
}

export default PizzaList;
