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
            <div className="grid gap-12 lg:grid-cols-2">
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-lg">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill 
                        priority
                        className='object-cover transition duration-300 hover:scale-105'
                        sizes='(max-width:768px)100vw,50vw'
                    />
                </div>

                <div className="flex flex-col">
                    <span className="mb-4 inline-flex w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold capitalize text-blue-700">
                        {product.category}
                    </span>

                    <h1 className="text-5xl font-bold tracking-tight">
                        {product.title}
                    </h1>

                    <div className="mt-6 flex items-center gap-4">
                        <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
                            ⭐️ {product.rating}
                        </span>

                        <span
                            className={`rounded-full px-4 py-2 font-semibold ${
                                product.stock > 10 
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-orange-100 text-orange-700'
                            }`}
                        >
                            {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
                        </span>
                    </div>

                    <div className="mt-8 flex items-end gap-4">
                        <span className="text-5xl font-bold text-blue-60">
                            ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                        </span>

                        <span className="pb-2 text-2xl text-gray-400 line-through">
                            ${product.price}
                        </span>
                    </div>

                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        {product.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <AddToCartButton product={product} />
                        <FavoriteButton product={product} />
                    </div>
                </div>
            </div>
        </main>
    )
}