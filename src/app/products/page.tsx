import { getProducts } from '@/services/api';
import { ProductGrid } from '@/components/product/ProductGrid';

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <main className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="mb-8 text-4xl font-bold">
                Products
            </h1>

            <ProductGrid products={products} />
        </main>
    );
}