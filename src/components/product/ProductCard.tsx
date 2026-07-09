import type { Product } from '@/types/product';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-lg">
            <img 
                src={product.thumbnail} 
                alt={product.title} 
                className='mb-4 h-48 w-full rounded-lg object-cover'
            />

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
    )
}