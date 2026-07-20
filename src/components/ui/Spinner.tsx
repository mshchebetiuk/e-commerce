type SpinnerProps = {
    size?: 'sm' | 'md' | 'lg';
};

const sizes = {
    sm: 'h-6 w-6 border-2',
    md: 'h-10 w-10 border-4',
    lg: 'h-16 w-16 border-4',
}

export function Spinner({ size = 'md' }: SpinnerProps) {
    return (
        <div 
            className={`${sizes[size]} animate-spin rounded-full border-blue-600 border-t-transparent`}
            aria-label="Loading"
            role="status"
        />
    )
}