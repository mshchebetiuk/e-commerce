import { getProduct } from '@/services/api';
import { FavoriteButton } from '@/components/product/FavoriteButton';
import { AddToCartButton } from '@/components/product/AddToCartButton';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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

    if (!product) notFound();

    return (
        <main className="mx-auto max-w-7xl px-4 py-12">
            <div className="grid gap-10 md:grid-cols-2">
                <div className="relative aspect-square w-full">
                    <Image 
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className='rounded-xl object-cover'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        priority
                    />
                </div>

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

                    <AddToCartButton product={product} />

                    <div className="mt-4">
                        <FavoriteButton product={product} />
                    </div>
                </div>
            </div>
        </main>
    )
}