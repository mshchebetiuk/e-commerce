'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Product } from '@/types/product';

import { ProductGrid } from './ProductGrid';
import { SearchBar } from '../filters/SearchBar';
import { useDebounce } from '@/hooks/useDebounce';
import { CategoryFilter } from '../filters/CategoryFilter';
import { SortOption, SortSelect } from '../filters/SortSelect';
import { Pagination } from './Pagination';
import { EmptyState } from '@/components/ui/EmptyState';

interface ProductListProps {
    products: Product[];
    categories: string[];
    total: number;
    currentPage: number;
    limit: number;
    selectedCategory: string;
}

export function ProductList({
    products,
    categories,
    total,
    currentPage,
    limit,
    selectedCategory,
}: ProductListProps) {
    const router = useRouter();

    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('default');

    const debouncedSearch = useDebounce(search, 400);

    const filteredProducts = useMemo(() => {
        const filtered = products.filter((product) =>
            product.title 
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase())
        );

        switch (sortBy) {
            case 'price-asc':
                return [...filtered].sort((a, b) => a.price - b.price);

            case 'price-desc':
                return [...filtered].sort((a, b) => b.price - a.price);

            case 'rating':
                return [...filtered].sort((a, b) => b.rating - a.rating);

            case 'title':
                return [...filtered].sort((a, b) =>
                    a.title.localeCompare(b.title)
                );

            default: 
                return filtered;
        }
    }, [
        products, 
        debouncedSearch, 
        sortBy,
    ]);

    const handleCategoryChange = (category: string) => {
        const params = new URLSearchParams();

        if (category) params.set('category', category);
        params.set('page', '1');

        router.push(`/products?${params.toString()}`);
    };

    return (
        <>
            <div className="mb-8 space-y-4">
                <SearchBar 
                    value={search} 
                    onChange={setSearch} 
                />

                <SortSelect 
                    value={sortBy}
                    onChange={setSortBy}
                />
            </div>

            <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onChange={handleCategoryChange}
            />

            {filteredProducts.length === 0 ? (
                <EmptyState 
                    icon="📦"
                    title="No products found"
                    description='Try another category or search query.'
                    actionText='Browse All Products'
                    actionHref='/products'
                />
            ) : (
                <>
                    <ProductGrid products={filteredProducts} />
        
                    <Pagination 
                        currentPage={currentPage}
                        total={total}
                        limit={limit}
                        category={selectedCategory}
                    />
                </>
            )}
        </>
    );
}