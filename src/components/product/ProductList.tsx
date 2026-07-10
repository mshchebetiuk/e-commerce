'use client';

import { useMemo, useState } from 'react';
import { Product } from '@/types/product';
import { ProductGrid } from './ProductGrid';
import { SearchBar } from '../filters/SearchBar';
import { useDebounce } from '@/hooks/useDebounce';
import { CategoryFilter } from '../filters/CategoryFilter';
import { SortOption, SortSelect } from '../filters/SortSelect';

interface ProductListProps {
    products: Product[];
    categories: string[];
}

export function ProductList({
    products,
    categories,
}: ProductListProps) {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('default');

    const debouncedSearch = useDebounce(search, 400);

    const filteredProducts = useMemo(() => {
        const filtered = products.filter((product) => {
            const matchesSearch = product
                .title
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase());

            const matchesCategory = 
                selectedCategory === '' || 
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

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
        selectedCategory, 
        sortBy
    ]);

    return (
        <>
            <div className="mb-8">
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
                onChange={setSelectedCategory}
            />
            <ProductGrid products={filteredProducts} />
        </>
    );
}