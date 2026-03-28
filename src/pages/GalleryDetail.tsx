import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, Download, Heart } from 'lucide-react';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';

const GALLERIES: Record<string, { title: string; location: string; date: string; images: string[] }> = {
  'royal-union': {
    title: 'The Royal Union',
    location: 'Udaipur, Rajasthan',
    date: 'November 2025',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABGadUZW4-UtJIlk3bk7d4bD5X2LtFsxGuFRM4AHXsjRE7zsSiP1x5VNpZUfurlfmVyvdcfzpnAzK1AffXmXb-2FHPaI_-pJYqvZ9bqB4IomJVt5EJuDbzUgR7FESEycakE8ZYYhP7cUwT1z6et9ECTdeITS-Y53s9KXZb76sadYiKcjLYysBdBX156FNnqkOzhzaE9blJ_YML61q3cKMwI8ipqYjjqOK_gELjlw1J8ICYuzcZW9xhw8K0_AmL1_wDwvMQxsAQQ4s',
      'https://images.pexels.com/photos/7669984/pexels-photo-7669984.jpeg',
      'https://images.pexels.com/photos/8621982/pexels-photo-8621982.jpeg',
      'https://images.pexels.com/photos/19998657/pexels-photo-19998657.jpeg',
      'https://images.pexels.com/photos/30218192/pexels-photo-30218192.jpeg',
      'https://images.pexels.com/photos/3584932/pexels-photo-3584932.jpeg',
      'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
      'https://images.pexels.com/photos/30218192/pexels-photo-30218192.jpeg',
    ]
  },
  'legacy-gold': {
    title: 'Legacy of Gold',
    location: 'Mumbai, Maharashtra',
    date: 'January 2026',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcZtJcly7j0jZjG3_83VCLLX5BsaMLfLOzOb7DZyxsMk_Qxk2JcobYXS6XI-cYTCIOGOjvbYbo_UYlsDy5WmkAMBCfyIIUI879E-xOMOebzhhumS9hmsoel0Z2cVMVlGk5VYILNiiP8ldU1E5xMMr0hN_cQEvYzbXdjtu-HzcOmz0IQbMRhQCf0RtYcQXrFrY8XB43ETm0QpOjBmGDvxrYCnMhp3ScCCyDSgt_kmnRErQIujACwSyuQs2FshSImpZdYRpBsmEmJjg',
      'https://images.pexels.com/photos/7669984/pexels-photo-7669984.jpeg',
      'https://images.pexels.com/photos/8621982/pexels-photo-8621982.jpeg',
      'https://images.pexels.com/photos/19998657/pexels-photo-19998657.jpeg',
    ]
  }
};

export default function GalleryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const gallery = slug ? GALLERIES[slug] : null;

  if (!gallery) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-8">
        <h1 className="text-4xl font-headline mb-8">Gallery Not Found</h1>
        <Link to="/portfolio" className="text-primary font-label uppercase tracking-widest text-sm border-b border-primary/30 pb-1">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollReveal direction="up" className="mb-16">
          <RevealItem>
            <Link to="/portfolio" className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-label uppercase tracking-widest">Back to Portfolio</span>
            </Link>
          </RevealItem>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <RevealItem delay={0.1}>
                <span className="text-primary font-label uppercase tracking-[0.3rem] text-[10px] mb-4 block">{gallery.location}</span>
              </RevealItem>
              <RevealItem delay={0.2}>
                <h1 className="text-4xl md:text-7xl font-headline text-on-surface tracking-tight">{gallery.title}</h1>
              </RevealItem>
            </div>
            <RevealItem delay={0.3}>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-[10px] font-label uppercase tracking-widest">Share</span>
                </button>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="text-[10px] font-label uppercase tracking-widest">Download All</span>
                </button>
              </div>
            </RevealItem>
          </div>
        </ScrollReveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {gallery.images.map((image, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.05}>
              <RevealItem>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative group overflow-hidden bg-surface-container"
                >
                  <img 
                    src={image} 
                    alt={`${gallery.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Heart className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              </RevealItem>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" className="mt-32 text-center border-t border-outline-variant/30 pt-24">
          <RevealItem>
            <h2 className="text-3xl font-headline mb-8">Inspired by this story?</h2>
          </RevealItem>
          <RevealItem delay={0.1}>
            <p className="text-on-surface-variant mb-12 max-w-xl mx-auto leading-relaxed">Let's craft a visual legacy for your union that feels just as intentional and soulful.</p>
          </RevealItem>
          <RevealItem delay={0.2}>
            <Button to="/booking" size="lg">
              Book Now
            </Button>
          </RevealItem>
        </ScrollReveal>
      </div>
    </div>
  );
}
