import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import Preloader from './Preloader';
import BookingModal from './BookingModal';
import Header from './Header';
import Footer from './Footer';
import { useBooking } from '../context/BookingContext';
import { NavLink, FooterSection, SocialLink } from '../types/navigation';
import { Instagram, Facebook } from 'lucide-react';

const NAV_LINKS: NavLink[] = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Experience', href: '/experience' },
  { name: 'Investment', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/blog' },
];

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Facebook', href: '#', icon: Facebook },
];

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Quick Navigation',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Journal', href: '/blog' },
      { name: 'Film Portfolio', href: '/portfolio' },
      { name: 'About', href: '/about' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Our Team', href: '/team' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { isBookingOpen, openBookingModal, closeBookingModal } = useBooking();
  const lenisRef = React.useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <Preloader />
      
      <Header 
        logo={{ text: 'MUKHESHWARI', href: '/' }}
        navLinks={NAV_LINKS}
        cta={{ 
          text: 'Book Now', 
          onClick: openBookingModal
        }}
        socialLinks={[
          { name: 'Instagram', href: '#' },
          { name: 'Journal', href: '/blog' }
        ]}
      />

      <BookingModal isOpen={isBookingOpen} onClose={closeBookingModal} />

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.main
          key={location.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer 
        logo={{ text: 'MUKHESHWARI', href: '/' }}
        description="Editorial wedding photography for the discerning couple. Based in Prayagraj, available for global commissions."
        sections={FOOTER_SECTIONS}
        socials={SOCIAL_LINKS}
        copyright="© 2024 Mukheshwari Wedding Photography. Crafted for Eternal Stories."
      />
    </div>
  );
}


