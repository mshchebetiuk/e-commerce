'use client';

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onChange: (category: string) => void;
}

export function CategoryFilter({
    categories,
    selectedCategory,
    onChange,
}: CategoryFilterProps) {
    const getButtonClass = (isActive: boolean, isDisabled = false) => 
        `shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            isDisabled
                ? 'cursor-not-allowed bg-gray-100 text-gray-400 opacity-50 dark:bg-gray-900 dark:text-gray-600'
                : isActive
                    ? 'cursor-pointer bg-blue-600 text-white hover:bg-blue-700'
                    : 'cursor-pointer bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
        }`;

    const formatCategory = (category: string) => 
        category 
            .replaceAll('-', ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());

    return (
        <div
            className="mb-6 flex gap-2 overflow-x-auto pb-2"
            aria-label="Product categories"
        >
            <button
                type="button"
                onClick={() => onChange('')}
                className={getButtonClass(selectedCategory === '')}
                aria-pressed={selectedCategory === ''}
            >
                All
            </button>

            {categories.map((category) => {
                const isActive = selectedCategory === category;

                return (
                    <button
                        key={category}
                        type="button"
                        onClick={() => onChange(category)}
                        className={getButtonClass(isActive)}
                        aria-pressed={isActive}
                    >
                        {formatCategory(category)}
                    </button>
                );
            })}
        </div>
    );
}