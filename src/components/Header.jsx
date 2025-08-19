import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SearchIcon, HeartIcon, ShoppingBagIcon, MenuIcon, XIcon } from './icons';
import { GradientText } from './ui/GradientText';

export const Header = () => {
  const { cartCount, setIsCartOpen, isMobileMenuOpen, setIsMobileMenuOpen, setCurrentPage } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-card border-b border-gray-700' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')} 
            className="text-xl sm:text-2xl font-bold py-2 px-1"
            aria-label="Go to home page"
          >
            <GradientText>LUXE</GradientText>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-yellow-400 transition-colors py-2 px-3">Home</button>
            <button onClick={() => setCurrentPage('shop')} className="hover:text-yellow-400 transition-colors py-2 px-3">Shop</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-yellow-400 transition-colors py-2 px-3">About</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-yellow-400 transition-colors py-2 px-3">Contact</button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            <button 
              className="p-2 hover:text-yellow-400 transition-colors touch-manipulation"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              className="p-2 hover:text-yellow-400 transition-colors touch-manipulation"
              aria-label="Wishlist"
            >
              <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-yellow-400 transition-colors relative touch-manipulation"
              aria-label="Shopping cart"
            >
              <ShoppingBagIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 touch-manipulation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 border-t border-gray-700">
          <nav className="px-4 py-4 space-y-2">
            <button 
              onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} 
              className="block w-full text-left py-3 px-4 hover:text-yellow-400 transition-colors touch-manipulation text-lg"
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentPage('shop'); setIsMobileMenuOpen(false); }} 
              className="block w-full text-left py-3 px-4 hover:text-yellow-400 transition-colors touch-manipulation text-lg"
            >
              Shop
            </button>
            <button 
              onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }} 
              className="block w-full text-left py-3 px-4 hover:text-yellow-400 transition-colors touch-manipulation text-lg"
            >
              About
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }} 
              className="block w-full text-left py-3 px-4 hover:text-yellow-400 transition-colors touch-manipulation text-lg"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
