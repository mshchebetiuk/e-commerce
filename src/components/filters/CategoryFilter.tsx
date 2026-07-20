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
    return (
        <div className="mb-6 flex flex-wrap gap-2">
            <button
                onClick={() => onChange('')}
                className={`cursor-pointer rounded-lg px-4 py-2 transition-colors ${
                    selectedCategory === ''
                        ? 'bg-gray-900 text-white dark:bg-blue-600'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                }`}
            >
                All
            </button>

            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onChange(category)}
                    className={`cursor-pointer rounded-lg px-4 py-2 transition-colors capitalize ${
                        selectedCategory === category 
                            ? 'bg-gray-900 text-white dark:bg-blue-600'
                            : 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}