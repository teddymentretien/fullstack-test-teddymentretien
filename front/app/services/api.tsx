import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const createProduct = async (product: any) => {
  const response = await api.post('/products', product);
  return response.data;
};

export const updateProduct = async (id: number, product: any) => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export default api;
