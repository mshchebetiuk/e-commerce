import { getProduct } from '@/services/api';

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { id } = await params;
    const product = await getProduct(Number(id));

    return (
        <main className="mx-auto max-w-7xl px-4 py-12">
            <div className="grid gap-10 md:grid-cols-2">
                <img 
                    src={product.thumbnail} 
                    alt={product.title}
                    className='w-full rounded-xl'
                />

                <div>
                    <h1 className="mb-4 text-4xl font-bold">
                        {product.title}
                    </h1>

                    <p className="mb-6 text-gray-600">
                        {product.description}
                    </p>

                    <p className="mb-3 text-lg">
                        ⭐️ {product.rating}
                    </p>

                    <p className="mb-3 text-lg">
                        Category: {product.category}
                    </p>

                    <p className="mb-8 text-4xl font-bold text-green-600">
                        ${product.price}
                    </p>

                    <button className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
    )
}