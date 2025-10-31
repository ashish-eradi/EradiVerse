import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-6 py-4">
                <nav className="flex items-center justify-between">
                    <Link className="flex items-center space-x-2" to="/">
                        <img alt="Eradiverse Logo" className="h-8 w-auto" src="/assets/ev logo.png" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">EradiVerse</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                            to="/about">About</Link>
                        <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                            to="/services">Services</Link>
                        <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                            to="/our-capabilities">Our Capabilites</Link>
                        <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                            to="/contact">Contact</Link>
                    </div>
                    <button
                        className="md:hidden text-gray-900 dark:text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // 👈 Toggle state on click
                    >
                        {isMenuOpen ? (
                            // Close X Icon
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute w-full opacity-90`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                    <Link className="block w-full py-2 text-center text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link className="block w-full py-2 text-center text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link className="block w-full py-2 text-center text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        to="/our-capabilities" onClick={() => setIsMenuOpen(false)}>Our Capabilites</Link>
                    <Link className="block w-full py-2 text-center text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
