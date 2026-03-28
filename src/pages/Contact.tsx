import { motion } from 'motion/react';
import { MessageSquare, MapPin, ArrowRight } from 'lucide-react';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen -mt-32 flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBje36jnQ18msMrN0jPfu4uHKgyiW4o6rHeRcDzHcF3M4JI1p0pMpav-TcXXR0_-iqJwSuoS8ZRgm4G81DYg6LyKlqMC9zGfxQoZU8p7iMbmq-_5yDHEA8jWKU13t74SpRtKYjZRU42ETJk8ClIPmZQ4AM5PDqUt5t9aq_kMTUMYT5k_0yREb95OculF8OlteR-04oZ9o76hiXIwaXi3M1LjR_lxBj2K-WfePJ9sIrEBe2bizAMMi9KDl2nW4FVw6BpWiqip4iB68"
            alt="Cinematic shot of a couple at sunset, representing the eternal stories we capture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </motion.div>

        <div className="relative z-10 px-8 max-w-7xl mx-auto text-center">
          <ScrollReveal direction="up" distance={40} duration={1.2}>
            <div className="space-y-8">
              <RevealItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-white/90 font-label uppercase tracking-[0.2rem] text-[10px]">The Beginning</span>
                </div>
              </RevealItem>
              
              <RevealItem delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-headline text-white tracking-tighter leading-[0.9] mb-8">
                  Let’s craft your <br />
                  <span className="italic font-light text-white/95">eternal story</span>
                </h1>
              </RevealItem>

              <RevealItem delay={0.2}>
                <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-body leading-relaxed">
                  Each frame is a legacy. We take a limited number of commissions each year to ensure every couple receives our full artistic devotion.
                </p>
              </RevealItem>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3rem] font-label rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </motion.div>
      </section>

      <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Form Section */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="left">
            <div className="bg-surface-container-low p-12 relative">
              <div className="absolute -top-4 right-8 bg-primary-container text-white px-6 py-2 text-[10px] font-bold tracking-[0.1rem] uppercase">
                Limited bookings per month
              </div>
              <form action="#" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-primary uppercase tracking-[0.1rem] mb-2">Full Name</label>
                    <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all duration-400 text-on-surface" placeholder="E.g. Ananya Sharma" type="text" />
                  </div>
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-primary uppercase tracking-[0.1rem] mb-2">Email Address</label>
                    <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all duration-400 text-on-surface" placeholder="ananya@example.com" type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-primary uppercase tracking-[0.1rem] mb-2">Inquiry Reason</label>
                    <select className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 px-0 focus:ring-0 appearance-none text-on-surface cursor-pointer">
                      <option>Wedding Celebration</option>
                      <option>Pre-Wedding Editorial</option>
                      <option>Engagement Session</option>
                      <option>Destination Event</option>
                    </select>
                  </div>
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-primary uppercase tracking-[0.1rem] mb-2">Wedding Date</label>
                    <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 px-0 focus:ring-0 text-on-surface" type="date" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-primary uppercase tracking-[0.1rem] mb-2">Venue</label>
                    <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 px-0 focus:ring-0 text-on-surface" placeholder="Palace, City, Country" type="text" />
                  </div>
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-primary uppercase tracking-[0.1rem] mb-2">Budget Range</label>
                    <select className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 px-0 focus:ring-0 appearance-none text-on-surface cursor-pointer">
                      <option>₹2,00,000 - ₹5,00,000</option>
                      <option>₹5,00,000 - ₹10,00,000</option>
                      <option>₹10,00,000+</option>
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-bold text-primary uppercase tracking-[0.1rem] mb-2">Your Story</label>
                  <textarea className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 px-0 focus:ring-0 text-on-surface resize-none" placeholder="Tell us about your vision and what moments matter most to you..." rows={4}></textarea>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                  <Button type="submit" variant="gold" className="w-full sm:w-auto">
                    Submit Inquiry
                  </Button>
                  <span className="text-on-surface-variant text-xs font-label italic">— or —</span>
                  <Button 
                    href="https://wa.me/919876543210" 
                    variant="secondary" 
                    className="w-full sm:w-auto"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Send via WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Info Section */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <ScrollReveal direction="right">
            <div className="space-y-16">
              <div className="space-y-8">
                <RevealItem>
                  <div>
                    <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.2rem] mb-6">Our Sanctuary</h3>
                    <p className="font-headline text-2xl text-on-surface leading-snug">
                      Civil Lines, Prayagraj<br />
                      Uttar Pradesh, 211001
                    </p>
                  </div>
                </RevealItem>
                <RevealItem delay={0.1}>
                  <div>
                    <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.2rem] mb-6">Connect</h3>
                    <div className="space-y-2">
                      <a className="block font-headline text-2xl text-on-surface hover:text-primary transition-colors" href="tel:+919876543210">+91 98765 43210</a>
                      <a className="block font-headline text-2xl text-on-surface hover:text-primary transition-colors" href="mailto:hello@mukheshwari.com">hello@mukheshwari.com</a>
                    </div>
                  </div>
                </RevealItem>
                <RevealItem delay={0.2}>
                  <div>
                    <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.2rem] mb-6">Digital Portfolio</h3>
                    <Button href="#" variant="tertiary" className="p-0">
                      <span className="font-headline text-2xl">Instagram</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-400" />
                    </Button>
                  </div>
                </RevealItem>
              </div>

              {/* Map Placeholder */}
              <RevealItem delay={0.3}>
                <div className="h-[300px] md:h-[400px] w-full bg-surface-container-high relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                    alt="Artistic map view of Prayagraj, where our studio is located"
                    className="w-full h-full object-cover grayscale opacity-50 contrast-125"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtNM1wCNkrEB-fuGyaD8snJeR2AHp_HUzAeh1JiA2cTYXo-cfGYtYfG2PzQ09EknjcS3-CEyVcR0I4nDoAhNwZdbvR6nYII4voWz66LVx-wJv19MBtyYvpB_n5yfudN52OL39mAX2CivNWv2_6VMuRYW888ulJMuNhtw6uyNM5_uvLWwxrqtXWw2c7FpZHmLDw8psrepYmQRGXr3vgv92ONHFvzNhmEBQieTPkE3jH2RNCPeE4ochIzqZY63rW3vjmKzKssxEXVtU"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white p-6 shadow-2xl">
                      <div className="w-12 h-12 border-2 border-primary flex items-center justify-center">
                        <MapPin className="text-primary w-6 h-6 fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm pointer-events-none">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1rem] text-primary mb-1">Studio Appointment</p>
                    <p className="text-xs text-on-surface-variant">Available for private consultations by appointment only.</p>
                  </div>
                </div>
              </RevealItem>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>

      <ScrollReveal>
        <div className="mt-24 md:mt-48 pt-24 md:pt-32 pb-24 md:pb-48 border-t border-outline-variant/30 flex justify-center">
          <div className="max-w-2xl px-8 text-center italic font-headline text-on-surface-variant/60 text-lg md:text-xl leading-relaxed">
            "We don't just capture images; we capture the invisible threads of emotion that bind two souls forever."
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
