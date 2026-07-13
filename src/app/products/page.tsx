import { getCategories, getProducts } from '@/services/api';
import { ProductList } from '@/components/product/ProductList';

interface Props {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function ProductsPage({
    searchParams,
}: Props) {
    const { page } = await searchParams;

    const currentPage = Number(page ?? '1');
    const limit = 12;
    const skip = (currentPage - 1) * limit;

    const [{ products, total }, categories] = await Promise.all([
        getProducts(limit, skip),
        getCategories(),
    ]);

    return (
        <main className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="mb-8 text-4xl font-bold">
                Products
            </h1>

            <ProductList 
                products={products} 
                categories={categories}
                total={total}
                currentPage={currentPage}
                limit={limit}
            />
        </main>
    );
}