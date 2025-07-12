import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const menuItems = {
        "Home": "/home",
        "Services": "/services",
        // "Get a Quote": "/inquiryform",
        "About Us": "/aboutus",
        "Get in Touch": "/contact"
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const currentPath = location.pathname;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 shadow-lg'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/home">
                        <img src="Logo.png" className="h-20 mt-3 w-auto object-contain filter invert" alt="KR Heat Treatment Logo" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {Object.entries(menuItems).map(([label, path]) => {
                            const isActive = currentPath === path || (currentPath === '/' && path === '/home');
                            return (
                                <Link
                                    key={label}
                                    to={path}
                                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${isActive
                                        ? 'text-white bg-gray-700/50 shadow-sm'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                                        }`}
                                >
                                    {label}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                                    )}
                                    {/* Prevent overlay from blocking clicks */}
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-600/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-all duration-300"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="relative flex flex-col items-center justify-center w-7 h-7">
                                <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1.5'}`} />
                                <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0' : 'mt-1.5'}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Mobile menu */}
            <div className={`lg:hidden fixed top-20 inset-x-0 z-50 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-lg">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {Object.entries(menuItems).map(([label, path], index) => {
                            const isActive = currentPath === path || (currentPath === '/' && path === '/home');
                            return (
                                <Link
                                    key={label}
                                    to={path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`relative block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 transform group ${isActive
                                        ? 'text-white bg-gray-700/50 shadow-sm translate-x-2'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700/30 hover:translate-x-2'
                                        }`}
                                    style={{
                                        transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                                    }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-white animate-pulse' : 'bg-gray-500'}`} />
                                        <span>{label}</span>
                                        {isActive && (
                                            <div className="ml-auto">
                                                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                                            </div>
                                        )}
                                    </div>
                                    {/* Fix: prevent hover layer from blocking clicks */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
