import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const fetchProducts = async (): Promise<AxiosResponse<IProduct[]>> => {
  return api.get('/products');
};

export const fetchProductDetail = async (productId: string | undefined): Promise<AxiosResponse<IProduct>> => {
  return api.get(`/products/${productId}`);
};
