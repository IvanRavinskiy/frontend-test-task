import axios from 'axios';

export const historyAPI = {
  events() {
    const response = axios.post('http://localhost:5010/events');
    return response.then(res => res.data.items);
  },
  resources(resource: string, id: string) {
    const response = axios.post('http://localhost:5010/resources', {
      ids: [`${resource}/${id}`],
    });
    return response.then(res => {
      return res.data.items;
    });
  },
};
