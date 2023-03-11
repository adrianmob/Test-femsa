import axios from 'axios';
import {Product} from '../interfaces/productInerface';

const BASE_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1';

const getProducts = () => {
  return axios.get<Product[]>(`${BASE_URL}/products`);
};

export {getProducts, BASE_URL};
