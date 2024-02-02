import React from 'react';
import axios from 'axios';
import './App.css';
import { deletePizza } from '../../pizzaApi/pizza.api';

function App() {
  const handleClickDelete = (id) => {
    console.log('DELETE PIZZA', id);
    deletePizza(id)
      .then((response) => {
        refreshPizza();
      })
      .catch((err) => {
        console.log('ERROR DELETING PIZZA', err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
