import type { Product } from '@/types/product';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/products/${product.id}`}>
            <article className="rounded-xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative mb-4 h-48 w-full">
                    <Image 
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        priority={product.id <= 4}
                        className='rounded-lg object-cover'
                        sizes='(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            25vw'
                    />
                </div>

                <h2 className="line-clamp-1 text-lg font-semibold">
                    {product.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">
                        ${product.price}
                    </span>

                    <span className="text-yellow-600">
                        ⭐️ {product.rating}
                    </span>
                </div>
            </article>
        </Link>
    )
}