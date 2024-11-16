import axios from 'axios';
import { Product } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/products');
  return response.data;
};

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await api.post<Product>('/products', product);
  return response.data;
};

export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
  const response = await api.put<Product>(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`);
};