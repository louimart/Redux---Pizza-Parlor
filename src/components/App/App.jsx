import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { fetchPizza } from '../PizzaAPI/Pizza.api';
import './App.css';
import { deletePizza } from '../../pizzaApi/pizza.api';

import PizzaList from '../PizzaList/PizzaList';

function App() {
  const [pizzaList, setPizzaList] = useState([]);

  const refreshPizza = () => {
  const taskPromise = fetchPizza();
    taskPromise
      .then((response) => {
        console.log('SERVER DATA:', response);
        setPizzaList(response.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
        alert("oh no, there's a problem");
      });
  };

  useEffect(() => {
    refreshPizza();
  }, []);

  const handleClickDelete = (id) => {
    console.log('DELETE PIZZA', id);
    deletePizza(id)
      .then((response) => {
        refreshPizza();
      })
      .catch((err) => {
        console.log('ERROR DELETING PIZZA', err);
      });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
      <PizzaList />
    </div>
  );
}

export default App;
