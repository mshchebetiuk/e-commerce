'use client';

import { ArrowUpDown } from 'lucide-react';

export type SortOption = 
    | 'default'
    | 'price-asc'
    | 'price-desc'
    | 'rating-asc'
    | 'rating-desc'
    | 'title-asc'
    | 'title-desc';

interface SortSelectProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

export function SortSelect({
    value, 
    onChange,
}: SortSelectProps) {
    return (
        <div className="relative w-full sm:w-64">
            <ArrowUpDown 
                size={18}
                className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
            />

            <select 
                value={value}
                onChange={(e) => onChange(e.target.value as SortOption)}
                className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-gray-300 bg-white pl-11 pr-10 outline-none transition-colors focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            >
                <option value="default">Sort: Default</option>
                <option value="price-asc">Price: Low {'>'} High</option>
                <option value="price-desc">Price: High {'>'} Low</option>

                <option value="rating-desc">Rating: High {'>'} Low</option>
                <option value="rating-asc">Rating: Low {'>'} High</option>

                <option value="title-asc">Name: A {'>'} Z</option>
                <option value="title-desc">Name: Z {'>'} A</option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs">
                ▼
            </span>
        </div>
    );
}