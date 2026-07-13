import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    total: number;
    limit: number;
}

export function Pagination({
    currentPage,
    total,
    limit,
}: PaginationProps) {
    const pages = Math.ceil(total / limit);

    return (
        <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: pages }, (_, i) => (
                <Link
                    key={i + 1}
                    href={`/products?page=${i + 1}`}
                    className={`rounded-lg px-4 py-2 ${
                        currentPage === i + 1 
                            ? 'bg-gray-900 text-white'
                            : 'border'
                    }`}
                >
                    {i + 1}
                </Link>
            ))}
        </div>
    );
}