import { getCategories, getProducts } from '@/services/api';
import { ProductList } from '@/components/product/ProductList';

export default async function ProductsPage() {
    const products = await getProducts();
    const categories = await getCategories();

    return (
        <main className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="mb-8 text-4xl font-bold">
                Products
            </h1>

            <ProductList 
                products={products} 
                categories={categories}
            />
        </main>
    );
}