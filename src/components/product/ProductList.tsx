'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Product } from '@/types/product';

import { ProductGrid } from './ProductGrid';
import { SearchBar } from '../filters/SearchBar';
// import { useDebounce } from '@/hooks/useDebounce';
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
    searchQuery: string;
}

export function ProductList({
    products,
    categories,
    total,
    currentPage,
    limit,
    selectedCategory,
    searchQuery,
}: ProductListProps) {
    const router = useRouter();
    const [sortBy, setSortBy] = useState<SortOption>('default');

    const handleSearch = (query: string) => {
        const params = new URLSearchParams();

        if (query) params.set('search', query);
        if (selectedCategory) params.set('category', selectedCategory);

        params.set('page', '1');
        router.push(`/products?${params.toString()}`);
    }

    const sortedProducts = useMemo(() => {
        switch (sortBy) {
            case 'price-asc':
                return [...products].sort((a, b) => a.price - b.price);

            case 'price-desc':
                return [...products].sort((a, b) => b.price - a.price);

            case 'rating':
                return [...products].sort((a, b) => b.rating - a.rating);

            case 'title':
                return [...products].sort((a, b) =>
                    a.title.localeCompare(b.title)
                );

            default: 
                return products;
        }
    }, [
        products,
        sortBy,
    ]);

    const handleCategoryChange = (category: string) => {
        const params = new URLSearchParams();

        if (category) params.set('category', category);
        if (searchQuery) params.set('search', searchQuery);

        params.set('page', '1');

        router.push(`/products?${params.toString()}`);
    };

    return (
        <>
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
                <div className="flex-1">
                    <SearchBar 
                        initialValue={searchQuery} 
                        onSearch={handleSearch} 
                    />
                </div>

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

            {sortedProducts.length === 0 ? (
                <EmptyState 
                    icon="📦"
                    title="No products found"
                    description='Try another category or search query.'
                    actionText='Browse All Products'
                    actionHref='/products'
                />
            ) : (
                <>
                    <ProductGrid products={sortedProducts} />
        
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