import axios from 'axios';

export const createAPI = async () => {
  const response = await axios.post('http://localhost:5010/events');

  return await response.data;
};
