import { 
    getCategories, 
    getProducts, 
    getProductsByCategory
} from '@/services/api';

import { ProductList } from '@/components/product/ProductList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Products',
    description: 'Browse products by category, search and sort products.',
};

interface Props {
    searchParams: Promise<{
        page?: string;
        category?: string;
    }>;
}

export default async function ProductsPage({
    searchParams,
}: Props) {
    const { page, category } = await searchParams;

    const parsedPage = Number(page ?? '1');
    const currentPage =
        Number.isInteger(parsedPage) && parsedPage > 0
            ? parsedPage
            : 1;

    const selectedCategory = category ?? '';

    const limit = 12;
    const skip = (currentPage - 1) * limit;

    const [productsResponse, categories] = await Promise.all([
        selectedCategory
            ? getProductsByCategory(selectedCategory, limit, skip)
            : getProducts(limit, skip),

        getCategories(),
    ]);

    const { products, total } = productsResponse;

    return (
        <main className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="mb-8 text-4xl font-bold transition-colors dark:text-white">
                Products
            </h1>

            <ProductList 
                products={products} 
                categories={categories}
                total={total}
                currentPage={currentPage}
                limit={limit}
                selectedCategory={selectedCategory}
            />
        </main>
    );
}