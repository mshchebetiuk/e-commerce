import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    total: number;
    limit: number;
    category?: string;
    search?: string;
}

type PaginationItem = number | 'ellipsis-start' | 'ellipsis-end';

export function Pagination({
    currentPage,
    total,
    limit,
    category = '',
    search = '',
}: PaginationProps) {
    const totalPages = Math.ceil(total / limit);
    
    if (totalPages <= 1) return null;

    const getPageHref = (page: number) => {
        const params = new URLSearchParams();
        params.set('page', String(page));

        if (category) params.set('category', category);
        if (search) params.set('search', search);

        return `/products?${params.toString()}`;
    };

    const getVisiblePages = (): PaginationItem[] => {
        if (totalPages <= 7) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1,
            );
        }

        if (currentPage <= 4) {
            return [
                1, 
                2,
                3,
                4,
                5,
                'ellipsis-end',
                totalPages,
            ];
        }

        if (currentPage >= totalPages - 3) {
            return [
                1,
                'ellipsis-start',
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1, 
                totalPages,
            ];
        }

        return [
            1, 
            'ellipsis-start',
            currentPage - 1,
            currentPage,
            currentPage + 1, 
            'ellipsis-end',
            totalPages,
        ]
    }

    const visiblePages = getVisiblePages();
    const linkClass = 
        'flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800';

    return (
        <nav
            className='mt-10 flex flex-wrap items-center justify-center gap-2'
            aria-label="Pagination"
        >
            <Link
                href={getPageHref(Math.max(1, currentPage - 1))}
                aria-label='Previous page'
                className={`${linkClass} ${
                    currentPage === 1
                        ? 'pointer-events-none opacity-50'
                        : ''
                }`}
            >
                {'<'}
            </Link>

            {visiblePages.map((item) => {
                if (item === 'ellipsis-start' || item === 'ellipsis-end') {
                    return (
                        <span
                            key={item}
                            className='flex h-10 min-w-8 items-center justify-center'
                            aria-hidden='true'
                        >
                            ...
                        </span>
                    );
                }

                return (
                    <Link
                        key={item}
                        href={getPageHref(item)}
                        aria-current={
                            currentPage === item 
                                ? 'page'
                                : undefined
                        }
                        className={`${linkClass} ${
                            currentPage === item 
                                ? 'border-gray-900 bg-gray-900 text-white hover:bg-gray-800 dark:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
                                : ''
                        }`}
                    >
                        {item}
                    </Link>
                );
            })}

            <Link
                href={getPageHref(Math.min(totalPages, currentPage + 1))}
                aria-label='Next page'
                className={`${linkClass} ${
                    currentPage === totalPages
                        ? 'pointer-events-none opacity-50'
                        : ''
                }`}
            >
                {'>'}
            </Link>
        </nav>
    );
}