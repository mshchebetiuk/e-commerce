'use client';

import { useMemo, useState } from 'react';
import { Product } from '@/types/product';
import { ProductGrid } from './ProductGrid';
import { SearchBar } from '../filters/SearchBar';
import { useDebounce } from '@/hooks/useDebounce';

interface ProductListProps {
    products: Product[];
}

export function ProductList({
    products,
}: ProductListProps) {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 400);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => 
            product
                .title
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase())
        );
    }, [products, debouncedSearch]);

    return (
        <>
            <div className="mb-8">
                <SearchBar 
                    value={search} 
                    onChange={setSearch} 
                />
            </div>

            <ProductGrid products={filteredProducts} />
        </>
    );
}