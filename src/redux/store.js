import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const orders = (state = [], action) => {
  if (action.type === 'SET_ORDER_LIST') {
    return action.payload;
  }

  return state;
};

const store = createStore(
  combineReducers({
    orders,
  }),
  applyMiddleware(logger),
);


export default store;
