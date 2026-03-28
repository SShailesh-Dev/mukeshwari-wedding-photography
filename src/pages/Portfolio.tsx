import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';

const CATEGORIES = ['All Stories', 'Real Weddings', 'Pre-Wedding', 'Cinematic Films', 'Destination'] as const;
type Category = typeof CATEGORIES[number];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'The Royal Union',
    location: 'Udaipur, Rajasthan',
    category: 'Destination',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABGadUZW4-UtJIlk3bk7d4bD5X2LtFsxGuFRM4AHXsjRE7zsSiP1x5VNpZUfurlfmVyvdcfzpnAzK1AffXmXb-2FHPaI_-pJYqvZ9bqB4IomJVt5EJuDbzUgR7FESEycakE8ZYYhP7cUwT1z6et9ECTdeITS-Y53s9KXZb76sadYiKcjLYysBdBX156FNnqkOzhzaE9blJ_YML61q3cKMwI8ipqYjjqOK_gELjlw1J8ICYuzcZW9xhw8K0_AmL1_wDwvMQxsAQQ4s',
    featured: true,
    galleryUrl: '/portfolio/royal-union'
  },
  {
    id: 2,
    title: 'Legacy of Gold',
    location: 'Mumbai, Maharashtra',
    category: 'Real Weddings',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcZtJcly7j0jZjG3_83VCLLX5BsaMLfLOzOb7DZyxsMk_Qxk2JcobYXS6XI-cYTCIOGOjvbYbo_UYlsDy5WmkAMBCfyIIUI879E-xOMOebzhhumS9hmsoel0Z2cVMVlGk5VYILNiiP8ldU1E5xMMr0hN_cQEvYzbXdjtu-HzcOmz0IQbMRhQCf0RtYcQXrFrY8XB43ETm0QpOjBmGDvxrYCnMhp3ScCCyDSgt_kmnRErQIujACwSyuQs2FshSImpZdYRpBsmEmJjg',
    featured: true,
    galleryUrl: '/portfolio/legacy-gold'
  },
  {
    id: 3,
    title: 'Stone & Soul',
    location: 'Hampi, Karnataka',
    category: 'Destination',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW8nhfkkQu4jFgt8qjiVxcte5CUSyHCK-_N-eptCO97eGrptirRosbwhj8vHTUd642sHeOoeR917w3vhCyOLYmq2-5rIuaFzp5hUF1kRMJ2Buju9lLHwYjpq1mSMYBvpX5vjY3_wZ9kQ2Wg9wugqzW5Fe2Nc5Ypd23TXtukZRJ8i1x8p7rJU0DMG0niUxEwpY9sm0cz5CIFwAbQmF9c39wFclZ_dZLb-6IAzQkJAG3AtaWaDn6izNi9YZmrY4Yk1nhZI5EhKDYDkU',
    featured: true,
    galleryUrl: '/portfolio/stone-soul'
  },
  {
    id: 4,
    title: 'Artistry in Ink',
    location: 'Lucknow, UP',
    category: 'Pre-Wedding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_8lhslAiWqDOg1SSn7zHAx8gcwvE2F9YOnl_RiI93P1yBWwuIhxJHP9zbLulUPNe-XTf4RUHcDR2wMjTPuAlRy9CITD9ubbfODkySHTsl9wG4JOeEXmhWIBDmkoPSawYOh5dC3JxuHz9gzXNIkim56055NlwZEOZUGnCEJSh1wKeiLbqBxmWFZGz8kpKlM0qnwg3A0iiRKwbOdJJWEFlHtIHBSxJdyD3JTs-lueFGCPFb-R5a1xV7EjX688sDDqfGSGuL8D26qCc',
    featured: false,
    galleryUrl: '/portfolio/artistry-ink'
  },
  {
    id: 5,
    title: 'Desert Whispers',
    location: 'Jaisalmer, Rajasthan',
    category: 'Destination',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDft45OLTnTYuPiQbELTX0LIOQiNFIPaVyxz_qwRQ8Asmga1Mr-Dph9ykp8hzFENIibKgWEYWstmznIPEEXY41wiFWygA3gH-9fOwP8YTzUjxJGkFgh3e5ydieIa-D_eWkxNWk6Mds-2KE8vEGuVeijU6H0SNx0cR3q_aX3scWArU66f82Irpdeau5MdNj4T0XRJO5_gDlGhISvqbnHIEWXswq6Yj9A-R88r5DLfcy80k8bhls4YAwnyLDQUhPPKg4wDv_uGBBkwKk',
    featured: true,
    galleryUrl: '/portfolio/desert-whispers'
  },
  {
    id: 6,
    title: 'Urban Romance',
    location: 'Bangalore, Karnataka',
    category: 'Pre-Wedding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD90rEPYaQOwDjKpL1EM-sQXLdD4qk95yFrDVJh5IL7CpXTYQKHROPp_3qf5cusYf_hrFjXjMtAeAdTp0wxOw0mfd_3fG8L_rVvhnePrA41KNnjcb7iWbVlONpHngL7bk4E80oUe_dtMX1omqvYBga7MRCIu_VrX77HPLSgya2GZU4CGCNWrBsceyMWGlYN7fZQ4COaALO2n93bV8evXSmVhr50sbYoeWdIOkISkuW6He2YNnf7hMKpKf-1kEJgGm1-lLvhY6UVhmY',
    featured: true,
    galleryUrl: '/portfolio/urban-romance'
  },
  {
    id: 7,
    title: 'The Sacred Sangam',
    location: 'Prayagraj, UP',
    category: 'Real Weddings',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9-Jjmvq9nM1o0vF12bnAu9hePr1SUPSM4aT5JPMzayhkdH38N6diDHH7b5bz6Cyf81DaaCU9MIGNEFH-IoxlYc5y5sanEFbvXir887HZniaNDR7MdKijy8mBV9JyeCk-l704dVg1keQHkVm7_dCr1jtX9zqmc4sRIqR_Tvnots7kiF7GeejQm4aceg43F5AFDiuVQCnAcWXBu_l3tNZf7dU0R33ph0HOU0UCVak9teeWEiRN7vpbktkzlKu2uRHWR8GlITUpVJ56Y',
    featured: true,
    galleryUrl: '/portfolio/sacred-sangam'
  },
  {
    id: 8,
    title: 'Eternal Vows',
    location: 'Goa, India',
    category: 'Cinematic Films',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-PrmRWJyLkdtBqhmGoaC0PH6833WF8MKxnqn1PSWy0lseJIFJlbk6rOt-VWH92D9kORuOZCVGXgLFYVPlFOF-YuUer5_xhtdU8-z6c713BK0Or2PRuDzDs2w3usUBCWrgqtHUM6eqpUWySl9tY-1N6VG_xp_dVYsumytPB2FLUg9RlhserzcmoNzbVw5IiT1N0QL27tBJCFEn-yokgh2B-dF6FW7SrtZjD8sVx4c8oSOu1ow6-J__qUYHAbGG-irFHDbTRmt1bUU',
    featured: false,
    galleryUrl: '/portfolio/eternal-vows'
  },
  {
    id: 9,
    title: 'Himalayan Love',
    location: 'Manali, HP',
    category: 'Destination',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDStY4NqE3rj38pf7bFonvBtdmUM2nL9igaXvE9RhT0dHZpcvGhdHEX4F6mbWhMiuCyzZgqT1gyElf13Z-Y1ZQ6w83TPBepkW8-8Jfxjh0XlsYK9BbSvWPlCEHcekT1krpaIKvP4B3Qs2rn5PgBjtPQKNg9wFVBiC7h_830JkVT7B_GqCi8DkU6lfFRY86Q5drT_POyFR9V91uzs_pWsezYUYER5wcTRAB7Wau1XNOirwapvRMjJIoAdfkxnSQz1o8sHHTkTEUTQDU',
    featured: false,
    galleryUrl: '/portfolio/himalayan-love'
  },
  {
    id: 10,
    title: 'Vintage Soul',
    location: 'Kolkata, WB',
    category: 'Real Weddings',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfTiwfKJNGqZGG2IEvFuz_7T6G_vipQ2Pst1Ysg1Z9aizk_9eepAgnO6KhXVlEBbPfb9rrIj791nwInURyJc8I3L5qsk8ER26tIW5hJLetn03lYvlnmZZBxMhzOfkv6TwaOuGX6FQft1iSki6T3yv0AqDmBQb_zgoLFLARPWzaIbgxYjb5XXFC429vyBv7C_c4frgRAdIlbCKVs7TABgFfYsErsZrcq0HlfiCkK8KCqb2ufuwLEzbflovq7c3Mg2VjP6GywYAXfBQ',
    featured: true,
    galleryUrl: '/portfolio/vintage-soul'
  },
  {
    id: 11,
    title: 'Modern Minimalist',
    location: 'Delhi, India',
    category: 'Pre-Wedding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7MO9DL8ihumAuHJXcOeU9K3WHogKcrxqY1pfujVYXRBb3O53KQtLI4P36URhlMOmdEDPSpSIKbfRc-ODFO3eeog4gsLImvzGUzpdK4m4BOAbUGRSqaIriGmBNANpqIDs9_RM787A9nGtoQb_vQuxOXaD4gk8JnD47U0WhlY6aPypbe2kDxUy9mC-fEAHDsBEdw27il6io198dnN4y2D6Flnc7yWGSSOX42EJJJp0yWQKcCNmr9J0EiOB1UrVWBKMifk1NN7K3zyo',
    featured: false,
    galleryUrl: '/portfolio/modern-minimalist'
  },
  {
    id: 12,
    title: 'The Grand Ballroom',
    location: 'Jaipur, Rajasthan',
    category: 'Cinematic Films',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDStY4NqE3rj38pf7bFonvBtdmUM2nL9igaXvE9RhT0dHZpcvGhdHEX4F6mbWhMiuCyzZgqT1gyElf13Z-Y1ZQ6w83TPBepkW8-8Jfxjh0XlsYK9BbSvWPlCEHcekT1krpaIKvP4B3Qs2rn5PgBjtPQKNg9wFVBiC7h_830JkVT7B_GqCi8DkU6lfFRY86Q5drT_POyFR9V91uzs_pWsezYUYER5wcTRAB7Wau1XNOirwapvRMjJIoAdfkxnSQz1o8sHHTkTEUTQDU',
    featured: false,
    galleryUrl: '/portfolio/grand-ballroom'
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('All Stories');

  const filteredItems = activeFilter === 'All Stories' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-32 overflow-hidden mb-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            alt="Mukheshwari wedding photography portfolio hero - Capturing stillness"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABGadUZW4-UtJIlk3bk7d4bD5X2LtFsxGuFRM4AHXsjRE7zsSiP1x5VNpZUfurlfmVyvdcfzpnAzK1AffXmXb-2FHPaI_-pJYqvZ9bqB4IomJVt5EJuDbzUgR7FESEycakE8ZYYhP7cUwT1z6et9ECTdeITS-Y53s9KXZb76sadYiKcjLYysBdBX156FNnqkOzhzaE9blJ_YML61q3cKMwI8ipqYjjqOK_gELjlw1J8ICYuzcZW9xhw8K0_AmL1_wDwvMQxsAQQ4s"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-950/50 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-20">
          <ScrollReveal direction="up" distance={40} duration={0.6}>
            <RevealItem>
              <div className="inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-md mb-8">
                <span className="text-white/80 font-label uppercase tracking-[0.3rem] text-[10px]">Our Visual Legacy</span>
              </div>
            </RevealItem>
            
            <RevealItem delay={0.1}>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
                Capturing the <i className="font-normal italic">Stillness</i> <br /> within the Celebration.
              </h1>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="px-8 max-w-7xl mx-auto mb-16 overflow-hidden">
        <ScrollReveal direction="up" delay={0.2}>
          <RevealItem>
            <div className="flex flex-wrap gap-8 border-b border-outline-variant/30 pb-6">
              {CATEGORIES.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-sm font-label uppercase tracking-widest pb-6 -mb-[25px] transition-all duration-300 relative ${
                    activeFilter === cat 
                      ? 'text-primary font-bold' 
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {cat}
                  {activeFilter === cat && (
                    <motion.div 
                      layoutId="activeFilter"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </RevealItem>
        </ScrollReveal>
      </section>

      {/* Portfolio Grid */}
      <section className="px-8 max-w-[1800px] mx-auto mb-24 overflow-hidden min-h-[600px]">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <Link 
                key={item.id} 
                to={item.galleryUrl || "#"}
                className={`group relative aspect-[3/4] overflow-hidden cursor-pointer ${
                  index % 4 === 1 || index % 4 === 3 ? 'lg:mt-12' : ''
                }`}
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="w-full h-full"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                    src={item.image}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    alt={`${item.title} - ${item.category} in ${item.location}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-white/70 text-xs font-label uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.location}</span>
                    <h3 className="text-white text-xl font-headline translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
                    <div className="flex items-center justify-between mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <span className="text-primary text-[10px] font-label uppercase tracking-widest">{item.category}</span>
                      <span className="text-white/50 text-[8px] font-label uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full">View Gallery</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Featured Stories */}
      <section className="bg-surface-container-low py-24 overflow-hidden">
        <div className="px-8 max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <RevealItem>
                <span className="text-primary font-label uppercase tracking-[0.2rem] text-xs mb-4 block">The Narrative Collection</span>
              </RevealItem>
              <RevealItem delay={0.1}>
                <h2 className="text-4xl font-headline text-on-surface">Featured Wedding Stories</h2>
              </RevealItem>
              <RevealItem delay={0.2}>
                <p className="mt-6 text-on-surface-variant leading-relaxed">Beyond the shutter clicks, we document the quiet glances, the nervous exhales, and the unscripted joy that defines your union.</p>
              </RevealItem>
            </div>
            <RevealItem delay={0.3}>
              <Button 
                onClick={() => setActiveFilter('Real Weddings')}
                variant="tertiary"
              >
                View All Stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </RevealItem>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {PORTFOLIO_ITEMS.filter(item => item.featured).slice(0, 2).map((story, index) => (
              <ScrollReveal key={story.id} direction={index === 0 ? "right" : "left"} className="flex flex-col">
                <RevealItem>
                  <div className="aspect-video overflow-hidden mb-8">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover"
                      src={story.image}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      alt={`Featured wedding story: ${story.title}`}
                    />
                  </div>
                </RevealItem>
                <RevealItem delay={0.1}>
                  <h3 className="text-2xl font-headline mb-4">{story.title}: A Cinematic Journey</h3>
                </RevealItem>
                <RevealItem delay={0.2}>
                  <p className="text-on-surface-variant leading-relaxed mb-6">A masterclass in elegance and emotional resonance. We captured the movement of silks against the wind and the silence of the shared glances.</p>
                </RevealItem>
                <RevealItem delay={0.3}>
                  <Button to={story.galleryUrl || "#"} variant="tertiary">
                    View Full Gallery
                  </Button>
                </RevealItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-8 max-w-4xl mx-auto text-center overflow-hidden">
        <ScrollReveal direction="up">
          <RevealItem>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-headline text-on-surface mb-8 tracking-tight">Your story deserves a frame as timeless as the memory.</h2>
          </RevealItem>
          <RevealItem delay={0.1}>
            <p className="text-xl text-on-surface-variant mb-12 font-light">Available for limited commissions worldwide for 2024-2025.</p>
          </RevealItem>
          <RevealItem delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button to="/booking" size="lg">
                Book Now
              </Button>
              <Button to="/#investment" variant="secondary" size="lg">
                View Investment
              </Button>
            </div>
          </RevealItem>
        </ScrollReveal>
      </section>
    </div>
  );
}
