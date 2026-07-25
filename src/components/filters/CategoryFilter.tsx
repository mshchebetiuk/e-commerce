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
    const getButtonClass = (isActive: boolean) => 
        `shrink-0 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            isActive
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
        }`;

    const formatCategory = (category: string) => 
        category 
            .replaceAll('-', '')
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
                aria-passed={selectedCategory === ''}
            >
                All
            </button>

            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    onClick={() => onChange(category)}
                    className={getButtonClass(
                        selectedCategory === category
                    )}
                    aria-pressed={selectedCategory === category}
                >
                    {formatCategory(category)}
                </button>
            ))}
        </div>
    )
}