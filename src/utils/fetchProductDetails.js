// utils/fetchProductDetails.js
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../Components/constants/Api';

export const fetchProductDetails = async (productId, setProduct, setLoading) => {
  setLoading(true);
  try {
    const response = await axios.get(`${API_URL}/${productId}`, {
      params: {
        organization_id: import.meta.env.VITE_ORGANIZATION_ID,
        Appid: import.meta.env.VITE_APP_ID,
        Apikey: import.meta.env.VITE_API_KEY,
      },
    });
    const data = response.data;
    setProduct(data);
  } catch (error) {
    console.error('Error fetching product details:', error);
    toast.error('Failed to fetch product details.');
  } finally {
    setLoading(false);
  }
};
