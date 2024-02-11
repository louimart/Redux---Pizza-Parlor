import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const orders = (state = [], action) => {
  if (action.type === 'SET_ORDER_LIST') {
    return action.payload
  }

  return state;
};

const pizzas = (state = [], action) => {
  if (action.type === 'SET_PIZZA_LIST') {
    return action.payload;
  }

  return state;
};

const cart = (state = [], action) => {
  // TODO: Save Products added to the cart
  switch (action.type) {
    case "SET_CART_ITEM":
      return [...state, action.payload];
    case "CLEAR_CART":
      return (state = []);
    default:
      return state;
  }
};


const store = createStore(
  combineReducers({
    orders,
    pizzas,
    cart
  }),
  applyMiddleware(logger),
);


export default store;
