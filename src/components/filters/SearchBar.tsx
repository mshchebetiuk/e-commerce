'use client';

import { FormEvent, useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
    initialValue?: string;
    onSearch: (value: string) => void;
}

export function SearchBar({
    initialValue = '',
    onSearch,
}: SearchBarProps) {
    const [value, setValue] = useState(initialValue);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(value.trim());
    };
    
    return (
        <form 
            onSubmit={handleSubmit}
            className='flex w-full flex-col gap-3 sm:flex-row'
        >
            <div className="relative flex-1">
                <Search 
                    size={20}
                    className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                />

                <input 
                    type="search" 
                    value={value}    
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Search products...'
                    className='h-12 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white'
                />
            </div>

            <button 
                type="submit"
                className='h-12 cursor-pointer rounded-xl bg-blue-600 px-6 font-semibold text-white transition-colors hover:bg-blue-700'    
            >
                Search
            </button>
        </form>
    );
}