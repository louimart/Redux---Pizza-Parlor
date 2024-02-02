import axios from 'axios';

export const postOrder = (orderData) => {
    return axios.post('/api/order', orderData);
  };