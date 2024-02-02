import axios from 'axios';

export const deletePizza = (pizzaId) => {
  return axios.delete(`/api/pizzaOrder/${pizzaId}`);
};
