import Link from 'next/link';
import Image from 'next/image';

import type { Product } from '@/types/product';
import { AddToCartButton } from './AddToCartButton';
import { FavoriteIconButton } from './FavoriteIconButton';
import { Button } from '../ui/Button';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

    return (
        <Link href={`/products/${product.id}`}>
            <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                <div className="relative h-56 overflow-hidden">
                    <Image 
                        src={product.thumbnail}
                        alt={product.title}
                        fill 
                        priority={product.id <= 4}
                        className='object-cover transition-transform duration-300 group-hover:scale-105'
                        sizes='(max-width:768px)100vw,
                            (max-width:1200px)50vw,
                            25vw'
                    />

                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <FavoriteIconButton product={product} />
                        <AddToCartButton product={product} />
                    </div>

                    <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                        -{Math.round(product.discountPercentage)}%
                    </span>

                    <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow dark:bg-gray-800 dark:text-white">
                        ⭐️ {product.rating}
                    </span>
                </div>

                <div className="space-y-3 p-5">
                    <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                        {product.category}
                    </span>

                    <h2 className="line-clamp-1 text-lg font-bold dark:text-white">
                        {product.title}
                    </h2>

                    <div className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                        {product.description}
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">
                            ${discountedPrice}
                        </span>

                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            ${product.price}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                product.stock > 10 
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-yellow-100 text-yellow-700'
                            }`}
                        >
                            {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
                        </span>

                        <Button 
                            className="px-4 py-2 text-sm"
                        >
                            View
                        </Button>
                    </div>
                </div>
            </article>
        </Link>
    )
}