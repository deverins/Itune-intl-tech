// src/api.js
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../Components/constants/Api';

export const fetchProducts = async (setProducts, setLoading) => {
  const URL = `${API_URL}`;
  try {
    const { data } = await axios.get(`/api/${URL}`);
    console.log('data response', data);
    setProducts(data.items);
  } catch (error) {
    console.error('Error fetching products:', error);
    toast.error('Failed to fetch products.');
  } finally {
    setLoading(false);
  }
};
