'use client';

import { useMemo, useState } from 'react';
import { Product } from '@/types/product';
import { ProductGrid } from './ProductGrid';
import { SearchBar } from '../filters/SearchBar';
import { useDebounce } from '@/hooks/useDebounce';
import { CategoryFilter } from '../filters/CategoryFilter';

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
    const debouncedSearch = useDebounce(search, 400);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product
                .title
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase());

            const matchesCategory = 
                selectedCategory === '' || 
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;
    });
    }, [products, debouncedSearch, selectedCategory]);

    return (
        <>
            <div className="mb-8">
                <SearchBar 
                    value={search} 
                    onChange={setSearch} 
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