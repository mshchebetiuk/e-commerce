'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className='rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800'
            aria-label='Toggle theme'
        >
            {resolvedTheme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </button>
    )
}