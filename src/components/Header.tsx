import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NavLink } from '../types/navigation';
import Button from './ui/Button';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HeaderProps {
  logo: {
    text: string;
    href: string;
  };
  navLinks: NavLink[];
  cta: {
    text: string;
    to?: string;
    onClick?: () => void;
  };
  socialLinks?: {
    name: string;
    href: string;
  }[];
}

export default function Header({ logo, navLinks, cta }: HeaderProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled || isMenuOpen 
            ? "bg-white py-3 border-b border-stone-100 shadow-sm" 
            : "bg-transparent py-6"
        )}
      >
        <nav className="flex justify-between items-center px-6 md:px-12 w-full max-w-[1920px] mx-auto">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden flex flex-col gap-1.5 p-2",
                isScrolled || isMenuOpen ? "text-stone-900" : "text-white"
              )}
              aria-label="Menu"
            >
              <span className={cn("w-6 h-0.5 transition-all", isMenuOpen ? "rotate-45 translate-y-2" : "", isScrolled || isMenuOpen ? "bg-stone-900" : "bg-white")} />
              <span className={cn("w-6 h-0.5 transition-all", isMenuOpen ? "opacity-0" : "", isScrolled || isMenuOpen ? "bg-stone-900" : "bg-white")} />
              <span className={cn("w-6 h-0.5 transition-all", isMenuOpen ? "-rotate-45 -translate-y-2" : "", isScrolled || isMenuOpen ? "bg-stone-900" : "bg-white")} />
            </button>

            <Link 
              to={logo.href} 
              className={cn(
                "text-xl md:text-2xl font-headline tracking-tight transition-colors",
                isScrolled || isMenuOpen ? "text-stone-900" : "text-white"
              )}
            >
              {logo.text}
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative font-label uppercase tracking-wide text-[14px] font-medium transition-colors group",
                  location.pathname === link.href
                    ? "text-amber-700"
                    : isScrolled || isMenuOpen ? "text-stone-600 hover:text-stone-900" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-px bg-amber-700 transition-all",
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button 
              {...(cta.to ? { to: cta.to } : { onClick: cta.onClick })}
              className={cn(
                "px-7 py-3 text-[12px]",
                isScrolled || isMenuOpen 
                  ? "bg-stone-900 text-white hover:bg-stone-800" 
                  : "bg-white text-stone-900 hover:bg-stone-50"
              )}
            >
              {cta.text}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col"
          >
            {/* Spacer for the fixed header height */}
            <div className="h-16 sm:h-20" />
            
            <div className="flex-1 flex flex-col px-8 pb-8 overflow-hidden">
              {/* Navigation Links */}
              <div className="pt-6 pb-8">
                <p className="text-[10px] font-label uppercase tracking-[0.3rem] text-stone-400 mb-6">Navigation</p>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className={cn(
                          "text-3xl font-headline tracking-tight transition-colors block",
                          location.pathname === link.href ? "text-amber-700" : "text-stone-900"
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full pt-8 border-t border-stone-100"
                >
                  <Button 
                    {...(cta.to ? { to: cta.to } : { 
                      onClick: () => {
                        setIsMenuOpen(false);
                        cta.onClick?.();
                      }
                    })}
                    className="w-full bg-stone-900 text-white py-4 text-[12px] flex items-center justify-center gap-3"
                  >
                    {cta.text}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



