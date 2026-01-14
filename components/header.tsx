'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'For Partners', href: '/partners' },
  { name: 'Trade With Us', href: '/trade' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window?.scrollY > 20);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Leaf className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute -inset-1 bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-primary tracking-tight">
                Nordic Tropics
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                From Africa to Nordic
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation?.map((item) => {
              const isActive = pathname === item?.href;
              return (
                <Link
                  key={item?.name}
                  href={item?.href ?? '/'}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item?.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-3 space-y-1">
                {navigation?.map((item) => {
                  const isActive = pathname === item?.href;
                  return (
                    <Link
                      key={item?.name}
                      href={item?.href ?? '/'}
                      className={`block px-4 py-2 text-base font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item?.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
