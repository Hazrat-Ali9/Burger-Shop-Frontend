import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Sun, Moon, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
// Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { isDark, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Cart', href: '/cart' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const totalItems = getTotalItems();

  return (
    <header className="bg-white dark:bg-dark-800 shadow-lg relative z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🍔</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">BurgerShop</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Premium Burgers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400 pb-1'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Search className="h-6 w-6" />
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>

            <Link
              to="/cart"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-cart-bounce">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-800 border-t dark:border-dark-700 shadow-lg animate-slide-up">
          <nav className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;