'use client';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({
    value, 
    onChange,
}: SearchBarProps) {
    return (
        <input 
            type="text" 
            placeholder="Search products..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
        />
    );
}