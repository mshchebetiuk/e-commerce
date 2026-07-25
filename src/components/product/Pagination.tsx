import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    total: number;
    limit: number;
    category?: string;
}

export function Pagination({
    currentPage,
    total,
    limit,
    category = '',
}: PaginationProps) {
    const totalPages = Math.ceil(total / limit);
    const visiblePages = [];

    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
        visiblePages.push(i);
    }

    const getPageHref = (page: number) => {
        const params = new URLSearchParams();
        params.set('page', String(page));

        if (category) params.set('category', category);
        return `/products?${params.toString()}`;
    };

    return (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <Link
                href={getPageHref(Math.max(1, currentPage - 1))}
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
                    href={getPageHref(page)}
                    className={`rounded-lg px-4 py-2 ${
                        currentPage === page 
                            ? 'bg-gray-900 text-white dark:bg-blue-600'
                            : 'border'
                    }`}
                >
                    {page}
                </Link>
            ))}

            <Link
                href={getPageHref(
                    Math.min(totalPages, currentPage + 1)
                )}
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