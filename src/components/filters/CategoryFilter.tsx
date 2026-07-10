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
                className={`rounded-lg px-4 py-2 transition ${
                    selectedCategory === ''
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                }`}
            >
                All
            </button>

            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onChange(category)}
                    className={`rounded-lg px-4 py-2 capitalize transition ${
                        selectedCategory === category 
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}