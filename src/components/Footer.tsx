import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍔</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BurgerShop</h3>
                <p className="text-sm text-gray-300">Premium Burgers</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Crafting the finest burgers with premium ingredients and unmatched flavor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">123 Burger Street, Food City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-BURGER</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">info@burgershop.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">Mon - Thu: 11AM - 10PM</div>
                  <div className="text-gray-300">Fri - Sat: 11AM - 11PM</div>
                  <div className="text-gray-300">Sunday: 12PM - 9PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 BurgerShop. All rights reserved Hazrat Ali.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;