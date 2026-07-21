import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; 
    variant?: ButtonVariant;
    fullWidth?: boolean;
}

const variants = {
    primary:
        'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer',
    secondary: 
        'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 cursor-pointer',
    danger: 
        'bg-red-600 text-white hover:bg-red-700 cursor-pointer',
};

export function Button({
    children, 
    variant = 'primary', 
    fullWidth = false, 
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                'cursor-pointer rounded-xl px-4 py-2 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50',
                variants[variant],
                fullWidth && 'w-full',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}