import axios from 'axios';

export const fetchPizza = () => {
  return axios.get('/api/pizza');
};
