import axios from 'axios';
import url from './Url';

export default {
  fetchAll: async page => {
    try {
      const response = await axios.get(`${url}/airlines?page=${page}`);
      return response.data;
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  },
  create: async payload => {
    const response = await axios.post(`${url}/airline`, payload);
    return response;
  },

  show: async id => {
    try {
      const response = await axios.get(`${url}/airline/${id}`);
      return response.data;
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  },
  update: async (payload, id) => {
    try {
      const response = await axios.put(`${url}/airline/${id}`, payload);
      return response;
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  },
  delete: async id => {
    try {
      const response = await axios.delete(`${url}/airline/${id}`);
      return response;
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  },
};
