import { motion } from 'motion/react';
import { Check, Clock, Camera, Film, Book, Video } from 'lucide-react';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';
import { useBooking } from '../context/BookingContext';

const PACKAGES = [
  {
    name: 'The Heritage',
    description: 'Essential coverage for intimate celebrations and civil ceremonies.',
    price: '₹1,25,000',
    features: [
      '1 Day Coverage',
      '2 Lead Photographers',
      '300+ Digital High-Res Images',
      'Signature Edit Style',
      'Online Gallery (6 Months)'
    ],
    popular: false
  },
  {
    name: 'The Cinematic',
    description: 'The definitive storytelling experience for traditional weddings.',
    price: '₹2,75,000',
    features: [
      '2 Day Coverage',
      '4 Person Creative Team',
      'Cinematic Highlight Film',
      'Heirloom Photo Album (12x12)',
      'Pre-Wedding Session'
    ],
    popular: true
  },
  {
    name: 'The Imperial',
    description: 'Unrestricted editorial luxury for multi-day grand events.',
    price: '₹4,50,000',
    features: [
      '3+ Day Full Event Coverage',
      'Elite Master Team',
      'Long-form Documentary Film',
      '2 Companion Mini Albums',
      'Same-Day Edit Teaser'
    ],
    popular: false
  }
];

const ADDONS = [
  {
    title: 'Pre-Wedding Shoot',
    description: 'A cinematic session at a location of your choice.',
    price: 'From ₹25,000',
    icon: Camera
  },
  {
    title: 'Cinematic Film',
    description: 'A high-end storytelling film with professional sound design.',
    price: 'From ₹60,000',
    icon: Film
  },
  {
    title: 'Coffee Table Album',
    description: 'Luxury flush-mount albums curated by our designers.',
    price: 'From ₹15,000',
    icon: Book
  },
  {
    title: 'Live Streaming',
    description: 'Multi-cam HD streaming for your distant relatives.',
    price: 'From ₹20,000',
    icon: Video
  }
];

export default function Pricing() {
  const { openBookingModal } = useBooking();
  return (
    <div className="pt-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-32 overflow-hidden mb-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            alt="Wedding photography pricing and investment guide"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=1920"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-950/50 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-20">
          <ScrollReveal direction="up" distance={40} duration={0.6}>
            <RevealItem>
              <div className="inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-md mb-8">
                <span className="text-white/80 font-label uppercase tracking-[0.3rem] text-[10px]">Investment</span>
              </div>
            </RevealItem>
            
            <RevealItem delay={0.1}>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
                Capturing the <i className="font-normal italic">Stillness</i> <br /> of Eternal Love.
              </h1>
            </RevealItem>
            
            <RevealItem delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                Our approach is intentional, cinematic, and deeply personal. We curate memories that stand the test of time.
              </p>
            </RevealItem>

            <RevealItem delay={0.3}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="inline-flex items-center space-x-4 py-3 px-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-full">
                  <Clock className="text-amber-500 w-4 h-4" />
                  <p className="text-xs font-label uppercase tracking-widest text-white/70">Limited to 2 bookings per month</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-label uppercase tracking-widest text-amber-200">Only 4 dates remaining for 2026</span>
                </div>
              </motion.div>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-8 pb-16 md:pb-24 max-w-7xl mx-auto overflow-hidden">
        <ScrollReveal direction="up" distance={50} delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/30">
          {PACKAGES.map((pkg, index) => (
            <RevealItem
              key={pkg.name}
              className={`flex flex-col p-12 relative transition-all duration-500 ${pkg.popular ? 'bg-stone-900 text-white scale-105 z-10 shadow-2xl border-t-4 border-primary' : 'bg-surface-container-lowest border-r border-outline-variant/30'}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary py-2 text-center">
                  <span className="text-white font-label text-[10px] uppercase tracking-[0.3rem]">Most Popular</span>
                </div>
              )}
              <div className={`mb-12 ${pkg.popular ? 'mt-4' : ''}`}>
                <h3 className={`font-headline text-2xl mb-2 ${pkg.popular ? 'text-primary' : ''}`}>{pkg.name}</h3>
                <p className={`text-sm mb-6 ${pkg.popular ? 'text-stone-400' : 'text-on-surface-variant'}`}>{pkg.description}</p>
                <div className="flex items-baseline">
                  <span className={`font-headline text-3xl ${pkg.popular ? 'text-white' : 'text-on-surface'}`}>{pkg.price}</span>
                </div>
              </div>
              <ul className={`space-y-6 mb-16 flex-grow ${pkg.popular ? 'text-stone-400' : 'text-on-surface-variant'}`}>
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="text-primary w-4 h-4 mt-1 shrink-0" />
                    <span className={`text-sm leading-relaxed ${feature.includes('4K') ? 'font-bold' : ''} ${feature.includes('Complimentary') ? 'italic' : ''}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={openBookingModal} 
                variant={pkg.popular ? 'gold' : 'secondary'}
                className="w-full"
              >
                Book Now
              </Button>
            </RevealItem>
          ))}
        </ScrollReveal>
      </section>

      {/* Add-ons Section */}
      <section className="bg-surface-container-low py-16 md:py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="mb-16">
            <h2 className="font-headline text-4xl mb-4">A La Carte Add-ons</h2>
            <p className="text-on-surface-variant">Enhance your chosen package with our specialized services.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADDONS.map((addon, index) => (
              <ScrollReveal 
                key={addon.title} 
                direction="up" 
                delay={index * 0.1}
                className="bg-surface p-8 border-b border-primary/20 group hover:shadow-xl transition-all duration-500"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <addon.icon className="text-primary w-6 h-6 mb-6" />
                </motion.div>
                <h4 className="font-headline text-lg mb-2">{addon.title}</h4>
                <p className="text-sm text-on-surface-variant mb-4">{addon.description}</p>
                <span className="text-primary font-medium">{addon.price}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-8 max-w-7xl mx-auto text-center overflow-hidden">
        <ScrollReveal direction="up">
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl mb-8 leading-tight">Every story is <span className="italic">unique</span>.<br />Let's tell yours.</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
            Available for weddings across India and worldwide. We specialize in destination weddings and multi-cultural celebrations.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Button onClick={openBookingModal} variant="gold" size="lg">
              Book Now
            </Button>
            <Button to="/portfolio" variant="tertiary">
              View Portfolio
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
