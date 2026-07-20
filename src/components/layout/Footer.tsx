import Link from 'next/link';
import { FolderGit2, UserRoundArrowLeft, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white text-gray-900 transition-colors dark:border-gray-700 dark:bg-slate-900 dark:text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className='text-center sm:text-left'>
                    <h2 className="text-2xl font-bold">
                        🛍 E-Commerce Store
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-300">
                        A modern e-commerce application built with Next.js,
                        TypeScript and Tailwind CSS.
                    </p>
                </div>

                <div className='text-center sm:text-left'>
                    <h3 className="mb-4 text-lg font-semibold">
                        Navigation
                    </h3>

                    <nav className="flex flex-col gap-3 text-gray-600 dark:text-slate-300">
                        <Link href='/' className='transition-colors hover:text-blue-600 dark:hover:text-white'>Home</Link>
                        <Link href='/products' className='transition-colors hover:text-blue-600 dark:hover:text-white'>Products</Link>
                        <Link href='/favorites' className='transition-colors hover:text-blue-600 dark:hover:text-white'>Favorites</Link>
                        <Link href='/cart' className='transition-colors hover:text-blue-600 dark:hover:text-white'>Cart</Link>
                    </nav>
                </div>

                <div className='text-center sm:text-left'>
                    <h3 className="mb-4 text-lg font-semibold">
                        Contact
                    </h3>

                    <div className="flex flex-col items-center gap-3 sm:items-start">
                        <a 
                            href="https://github.com/mshchebetiuk" 
                            target='_blank'
                            rel='noopener noreferrer'
                            className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
                        >
                            <FolderGit2 size={18} />
                            GitHub
                        </a>
                        
                        <a 
                            href="https://www.linkedin.com/in/maksym-shchebetiuk-bb53102a0/" 
                            target='_blank'
                            rel='noopener noreferrer'
                            className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
                        >
                            <UserRoundArrowLeft size={18} />
                            LinkedIn
                        </a>

                        <a 
                            href="mailto:its.mshchebetiuk@gmail.com" 
                            className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
                        >
                            <Mail size={18} />
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}