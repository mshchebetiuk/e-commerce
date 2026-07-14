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
    const totalPages = Math.ceil(total / limit);
    const visiblePages = [];

    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
        visiblePages.push(i);
    }

    return (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <Link
                href={`/products?page=${Math.max(1, currentPage - 1)}`}
                className={`rounded-lg border px-4 py-2 ${
                    currentPage === 1
                        ? 'pointer-events-none opacity-50'
                        : ''
                }`}
            >
                {'<'}
            </Link>

            {visiblePages.map((page) => (
                <Link 
                    key={page}
                    href={`/products?page=${page}`}
                    className={`rounded-lg px-4 py-2 ${
                        currentPage === page 
                            ? 'bg-gray-900 text-white'
                            : 'border'
                    }`}
                >
                    {page}
                </Link>
            ))}

            <Link
                href={`/products?page=${Math.min(
                    totalPages,
                    currentPage + 1
                )}`}
                className={`rounded-lg border px-4 py-2 ${
                    currentPage === totalPages 
                        ? 'pointer-events-none opacity-50'
                        : ''
                }`}
            >
                {'>'}
            </Link>
        </div>
    );
}