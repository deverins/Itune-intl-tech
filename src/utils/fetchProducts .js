import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../Components/constants/Api';

export const fetchProducts = async (setProducts, setLoading, currentPage = 1) => {
  setLoading(true);
  try {
    const response = await axios.get(API_URL, {
      params: {
        organization_id: import.meta.env.VITE_ORGANIZATION_ID,
        reverse_sort: false,
        page: currentPage,
        size: 10,
        Appid: import.meta.env.VITE_APP_ID,
        Apikey: import.meta.env.VITE_API_KEY,
      },
    });
    const data = response.data.items;
    setProducts(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    toast.error('Failed to fetch products.');
  } finally {
    setLoading(false);
  }
};
