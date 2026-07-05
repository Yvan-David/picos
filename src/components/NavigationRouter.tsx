"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export default function NavigationRouter() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] flex items-center justify-center">
                  <span className="text-white font-['Playfair_Display']">P</span>
                </div>
                <div>
                  <h1 className="font-['Playfair_Display'] text-[#b76e79] tracking-tight">Picos Interiors</h1>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link href={item.path} key={item.path}
                className={`relative group transition-colors ${
                  location === item.path
                    ? 'text-[#b76e79]'
                    : 'text-gray-700 hover:text-[#b76e79]'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#b76e79] transition-all duration-300 ${
                    location === item.path
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
            <Link href="/booking">
              <Button className="bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-full px-6">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#b76e79]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link href={item.path} key={item.path}
                className={`block w-full text-left py-2 transition-colors ${
                  location === item.path
                    ? 'text-[#b76e79]'
                    : 'text-gray-700 hover:text-[#b76e79]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/booking"
              className="block w-full text-left py-2 text-[#b76e79] hover:text-[#a65d6a]"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
