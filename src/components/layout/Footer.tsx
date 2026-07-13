import Link from 'next/link';
import { FolderGit2, UserRoundArrowLeft, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-slate-900 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
                <div>
                    <h2 className="text-2xl font-bold">
                        🛍 E-Commerce Store
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                        A modern e-commerce application built with Next.js,
                        TypeScript and Tailwind CSS.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold">
                        Navigation
                    </h3>

                    <nav className="flex flex-col gap-3 text-slate-30">
                        <Link href='/'>Home</Link>
                        <Link href='/products'>Products</Link>
                        <Link href='/favorites'>Favorites</Link>
                        <Link href='/cart'>Cart</Link>
                    </nav>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold">
                        Contact
                    </h3>

                    <div className="flex flex-col gap-3">
                        <a 
                            href="https://github.com/mshchebetiuk" 
                            target='_blank'
                            className="flex items-center gap-2 text-slate-300 hover:text-white"
                        >
                            <FolderGit2 size={18} />
                            GitHub
                        </a>
                        
                        <a 
                            href="https://www.linkedin.com/in/maksym-shchebetiuk-bb53102a0/" 
                            target='_blank'
                            className="flex items-center gap-2 text-slate-300 hover:text-white"
                        >
                            <UserRoundArrowLeft size={18} />
                            LinkedIn
                        </a>

                        <a 
                            href="mailto:its.mshchebetiuk@gmail.com" 
                            className="flex items-center gap-2 text-slate-300 hover:text-white"
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