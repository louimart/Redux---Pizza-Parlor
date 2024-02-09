import axios from 'axios';

export const fetchPizza = () => {
  return axios.get('/api/pizza');
};

export const postOrder = (orderData) => {
    return axios.post('/api/order', orderData);
  };

export const deletePizza = (pizzaId) => {
  return axios.delete(`/api/pizzaOrder/${pizzaId}`);
};
