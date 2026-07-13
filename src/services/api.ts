import axios from 'axios';
import type { Product } from '@/types/product';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
});

interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export async function getProducts(
    limit = 12, 
    skip = 0,
): Promise<ProductsResponse> {
    const { data } = await api.get<ProductsResponse>(
        `/products?limit=${limit}&skip=${skip}`
    );
    return data
}

export async function getCategories(): Promise<string[]> {
    const { data } = await api.get<string[]>('/products/category-list');
    return data;
}

export async function getProduct(id: number): Promise<Product | null> {
    try {
        const { data } = await api.get<Product>(`/products/${id}`);
        return data;     
    } catch {
        return null;
    }
}