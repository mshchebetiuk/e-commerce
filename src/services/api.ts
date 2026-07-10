import axios from 'axios';
import type { Product } from '@/types/product';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
});

interface ProductsResponse {
    products: Product[];
}

export async function getProducts(): Promise<Product[]> {
    const { data } = await api.get<ProductsResponse>('/products');
    return data.products;
}

export async function getCategories(): Promise<string[]> {
    const { data } = await api.get<string[]>('/products/category-list');
    return data;
}