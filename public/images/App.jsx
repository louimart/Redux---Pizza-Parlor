import { useEffect, useState } from "react";
import React from "react";
import { fetchPizza } from "../../pizzaApi/pizza.api";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import { deletePizza } from "../../pizzaApi/pizza.api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import PizzaList from "../PizzaList/PizzaList";
import Checkout from "../Checkout/Checkout";
import Orders from "../Orders/Orders";
import Nav from "../Nav/Nav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const [pizzaList, setPizzaList] = useState([]);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const refreshPizza = () => {
    const taskPromise = fetchPizza();
    taskPromise
      .then((response) => {
        console.log("SERVER DATA:", response);
        setPizzaList(response.data);
      })
      .catch((err) => {
        console.error("ERROR:", err);
        alert("oh no, there's a problem");
      });
  };

  useEffect(() => {
    refreshPizza();
  }, []);

  const refreshOrders = () => {
    axios
      .get("/api/order")
      .then((response) => {
        // send data to data to redux
        dispatch({ type: "SET_ORDER_LIST", payload: response.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  useEffect(() => {
    refreshOrders();
  }, []);

  const refreshPizzas = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        // send data to data to redux
        dispatch({ type: "SET_PIZZA_LIST", payload: response.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  useEffect(() => {
    refreshPizzas();
  }, []);

  const handleClickDelete = (id) => {
    console.log("DELETE PIZZA", id);
    deletePizza(id)
      .then((response) => {
        refreshPizza();
      })
      .catch((err) => {
        console.log("ERROR DELETING PIZZA", err);
      });
  };

  function calculateCartTotal(cart) {
    let total = 0;
    for (let item of cart) {
      let num = Number(item.price);
      total += num;
    }
    return total;
  }

  let myCart = Number.parseFloat(calculateCartTotal(cart).toFixed(2));

  console.log(myCart);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
          <h4 className="cartIcon">
            <ShoppingCartIcon />
            <span className="total">
              TOTAL: $ {myCart}
              <Nav />
            </span>
          </h4>
        </header>
        <Route exact path="/">
          <PizzaList
            pizzaList={pizzaList}
            refreshPizzaCallBack={refreshPizza}
          />
        </Route>
        <Route exact path="/customerinfo">
          <CustomerInfo />
        </Route>
        <Route exact path="/checkout">
          <Checkout myCart={myCart} />
        </Route>
        <Route exact path="/admin">
          <Orders refreshOrders={refreshOrders} />
        </Route>
      <footer className="footer">
        <p><Link to="/admin">Admin</Link></p>
      </footer>
      </Router>
    </div>
  );
}

export default App;
