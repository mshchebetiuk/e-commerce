'use client';

export type SortOption = 
    | 'default'
    | 'price-asc'
    | 'price-desc'
    | 'rating'
    | 'title';

interface SortSelectProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

export function SortSelect({
    value, 
    onChange,
}: SortSelectProps) {
    return (
        <select 
            value={value}
            onChange={(e) => onChange(e.target.value as SortOption)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition-colors focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low {'>'} High</option>
            <option value="price-desc">Price: High {'>'} Low</option>
            <option value="rating">Rating</option>
            <option value="title">Name (A-Z)</option>
        </select>
    );
}