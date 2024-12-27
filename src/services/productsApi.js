// src/services/productsApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});

export const productsApi = {
  getProducts: async (filters = {}) => {
    const response = await api.get('/products', { params: filters });
    return response.data.data;
  }
};