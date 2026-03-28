import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Camera, Palette, Sparkles, Quote, MapPin, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';
import { useBooking } from '../context/BookingContext';

export default function Home() {
  const { openBookingModal } = useBooking();
  return (
    <div className="pt-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            alt="Cinematic wedding moment"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9-Jjmvq9nM1o0vF12bnAu9hePr1SUPSM4aT5JPMzayhkdH38N6diDHH7b5bz6Cyf81DaaCU9MIGNEFH-IoxlYc5y5sanEFbvXir887HZniaNDR7MdKijy8mBV9JyeCk-l704dVg1keQHkVm7_dCr1jtX9zqmc4sRIqR_Tvnots7kiF7GeejQm4aceg43F5AFDiuVQCnAcWXBu_l3tNZf7dU0R33ph0HOU0UCVak9teeWEiRN7vpbktkzlKu2uRHWR8GlITUpVJ56Y"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-20">
          <ScrollReveal direction="up" distance={40} duration={0.6}>
            <RevealItem>
              <div className="flex flex-col items-center gap-6 mb-10">
                <div className="inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-md">
                  <span className="text-white/80 font-label uppercase tracking-[0.3rem] text-[10px]">Established in Prayagraj</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span className="text-[9px] font-label uppercase tracking-widest text-amber-200">Available for Destination Weddings Worldwide</span>
                </div>
              </div>
            </RevealItem>
            
            <RevealItem delay={0.1}>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
                Cinematic <i className="font-normal italic">Wedding</i> <br /> Storytelling.
              </h1>
            </RevealItem>
            
            <RevealItem delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14 font-light">
                Documenting the soulful, the intentional, and the raw, unscripted joy of your union. Based in Prayagraj, traveling wherever love leads.
              </p>
            </RevealItem>
            
            <RevealItem delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  onClick={openBookingModal} 
                  size="lg"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Book Now
                </Button>
                
                <Button 
                  to="/portfolio" 
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                >
                  View Portfolio
                </Button>
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Featured In */}
      <section className="py-24 md:py-32 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-[10px] font-label uppercase tracking-[0.3rem] text-stone-400 mb-12">As Featured In</p>
          <ScrollReveal direction="none" duration={0.8}>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-16 md:gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
              <RevealItem delay={0.1}><span className="font-headline text-3xl tracking-tighter border-b-2 border-stone-900 pb-1">VOGUE</span></RevealItem>
              <RevealItem delay={0.2}><span className="font-headline text-3xl tracking-tighter italic">BRIDES</span></RevealItem>
              <RevealItem delay={0.3}><span className="font-headline text-3xl tracking-tighter uppercase font-bold">Knots & Vows</span></RevealItem>
              <RevealItem delay={0.4}><span className="font-headline text-3xl tracking-tighter font-light">BAZAAR</span></RevealItem>
              <RevealItem delay={0.5}><span className="font-headline text-3xl tracking-tighter underline decoration-1 underline-offset-8">WEDMEGOOD</span></RevealItem>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-20 md:py-32 px-8 max-w-[1440px] mx-auto">
        <ScrollReveal direction="up" className="mb-20 text-center">
          <RevealItem>
            <h2 className="font-headline text-4xl text-on-surface mb-4">The Gallery of Souls</h2>
          </RevealItem>
          <RevealItem delay={0.2}>
            <div className="h-px w-20 bg-primary mx-auto"></div>
          </RevealItem>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <ScrollReveal direction="up" distance={50} delay={0.2} className="space-y-8 mt-12">
            <RevealItem>
              <div className="relative group overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  alt="Traditional Indian wedding ceremony couple portrait"
                  className="w-full"
                  src="https://images.pexels.com/photos/7669984/pexels-photo-7669984.jpeg?auto=compress&cs=tinysrgb&w=800"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white font-headline text-lg italic translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Ananya & Kabir</span>
                </div>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="relative group overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  alt="Cinematic wedding couple walking in a palace"
                  className="w-full"
                  src="https://images.pexels.com/photos/8621982/pexels-photo-8621982.jpeg?auto=compress&cs=tinysrgb&w=800"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white font-headline text-lg italic translate-y-4 group-hover:translate-y-0 transition-transform duration-500">The Palace Walk</span>
                </div>
              </div>
            </RevealItem>
          </ScrollReveal>
          
          <ScrollReveal direction="up" distance={50} delay={0.4} className="space-y-8">
            <RevealItem>
              <div className="relative group overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  alt="Emotional moment during wedding vows"
                  className="w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbayu1u36VPTQyvfG2EX84X2vrOjX3HHyjM1JYSrjJGVSW4vFGWUpCi7ukx5mPRCcK7GB2YgM_pAQiXao-92Ge21685MpTW3jTAeseu9_WBtX3WGudoNkwPhimA8yQDUqxgcNaNgH_PxFlBdyxl3lbNNSru4834GLBKClc1ztNcXs6R1n0KfpMGOXEeSo_w2rSn8kJshjhrQcRq57xk-FQ07FYkki_k-MH2aaDqcSe7y7GInqXUQik9ZrPQ_K3XEIGwSTytbVArxA"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white font-headline text-lg italic translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Silent Promises</span>
                </div>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="relative group overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  alt="Candid wedding photography moment"
                  className="w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKJ__tUII7kR7rks1XGD_EihW_G9t8qdadj1xywt2DGdKO0f8eOo7yEkwyo1jlTeClXkobsHeiCmPOjs7tkGowCPFbXpTqm1OyUAWQZyGKuIatcPFgn0mAWzXDs7jnDSN1iwooqL59PBMJZ6kgWmkPiki8YdL_f2ZkbQcSvJFQIGMwEO-JQ0ibSVR_o7PiJbaMVPjF0_kBMoFHnhcuTJJMNzZ_Pt2yLYS-bXFYGs02HYSWTezGq0Kt6Ew87iuFLHnKIKQFrRp0jEc"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </RevealItem>
          </ScrollReveal>
          
          <ScrollReveal direction="up" distance={50} delay={0.6} className="space-y-8 mt-24">
            <RevealItem>
              <div className="relative group overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  alt="Artistic wedding portrait"
                  className="w-full"
                  src="https://images.pexels.com/photos/19998657/pexels-photo-19998657.jpeg"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </RevealItem>
            <RevealItem>
              <div className="relative group overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  alt="Editorial wedding photography gallery"
                  className="w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpnNik5YXwOyCdQGkVWslLZnI2jKDyTZLhGTIutxlo0CO1dr92Fv0_GqLPPO0Y0qQ5Twfh2wL4HVzxnlZr9LEyFJALYciTEGK-yCmUNvQJyHM1lKxNAEEsfIzYXRnxK3Z_XGBWryr2vgaL2FnNY-ScgCqns2vgoquDbr1yyZ2z6hS_HeXlsNF0GsdNNR30nT3R5itrgpq5YjgOePPlNt5DDsWW45qIwEybClH0BcfG7oBqjFcIGDcn_71wsSGpZpDKOpUh2KCWwk8"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>
        
        <ScrollReveal direction="up" delay={0.8} className="text-center mt-20">
          <RevealItem>
            <Button to="/portfolio">
              View All Real Weddings
            </Button>
          </RevealItem>
        </ScrollReveal>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <ScrollReveal direction="right">
            <RevealItem>
              <h2 className="font-headline text-4xl sm:text-5xl text-on-surface mb-12 leading-tight">Authenticity over <br />Perfection.</h2>
            </RevealItem>
            <div className="space-y-12">
              <RevealItem className="flex gap-6">
                <Sparkles className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h4 className="font-headline text-xl mb-2">Emotion-driven Storytelling</h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">We don't just photograph people; we document connections. Our lens seeks the tear before it falls and the laughter before it rings out.</p>
                </div>
              </RevealItem>
              <RevealItem className="flex gap-6">
                <MapPin className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h4 className="font-headline text-xl mb-2">Prayagraj Expertise</h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">Deeply rooted in the heritage of the Sangam city, we know the light, the hidden corners, and the cultural soul of Prayagraj weddings.</p>
                </div>
              </RevealItem>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 -z-10"></div>
              <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              alt="Mukheshwari wedding photography process and equipment"
              className="w-full shadow-2xl"
              src="https://images.pexels.com/photos/3584932/pexels-photo-3584932.jpeg?auto=compress&cs=tinysrgb&w=800"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Meet the Artist */}
      <section className="py-20 md:py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/20 -z-10"></div>
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
                alt="Mukheshwari - Lead Photographer"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-8">
                <p className="font-headline text-2xl italic">"I don't capture poses. I capture the poetry between them."</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="space-y-8">
            <RevealItem>
              <span className="text-primary font-label uppercase tracking-[0.3rem] text-[10px]">The Artist</span>
              <h2 className="font-headline text-4xl sm:text-5xl text-on-surface mt-4 mb-8">Meet Mukheshwari</h2>
            </RevealItem>
            <RevealItem delay={0.2}>
              <p className="text-on-surface-variant font-light leading-relaxed text-lg">
                Based in the historic heart of Prayagraj, I have spent the last decade documenting the most intimate unions across India. My approach is rooted in the belief that a wedding is not a performance, but a sacred legacy.
              </p>
            </RevealItem>
            <RevealItem delay={0.3}>
              <p className="text-on-surface-variant font-light leading-relaxed">
                I seek the quiet heartbeat before the 'I Do', the tear your father hides, and the raw, unscripted joy that defines your union. My work is for the soulful, the intentional, and those who value authenticity over perfection.
              </p>
            </RevealItem>
            <RevealItem delay={0.4} className="pt-8">
              <Button to="/about" variant="tertiary">
                Read the Full Story
              </Button>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Signature Work */}
      <section className="h-[819px] relative flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          alt="Cinematic wide shot of a wedding celebration"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/30218192/pexels-photo-30218192.jpeg?auto=compress&cs=tinysrgb&w=800"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-stone-900/40"></div>
        <ScrollReveal direction="up" className="relative z-10 text-center px-8">
          <RevealItem>
            <span className="text-white font-label uppercase tracking-[0.4rem] text-sm mb-6 block">Featured Work</span>
          </RevealItem>
          <RevealItem delay={0.2}>
            <h2 className="text-white font-headline text-6xl md:text-8xl mb-8">The Eternal Ganga Vows</h2>
          </RevealItem>
          <RevealItem delay={0.4}>
            <Button to="/portfolio" className="bg-white text-stone-900 hover:bg-primary hover:text-white">
              Explore the Story
            </Button>
          </RevealItem>
        </ScrollReveal>
      </section>

      <section id="investment" className="py-24 md:py-32 px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-24">
          <RevealItem>
            <h2 className="font-headline text-4xl sm:text-5xl text-on-surface mb-4">Investment</h2>
          </RevealItem>
          <RevealItem delay={0.2}>
            <p className="text-on-surface-variant italic">Preserving memories that grow more valuable with time.</p>
          </RevealItem>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Essential */}
          <ScrollReveal direction="up" delay={0.2} className="p-12 bg-surface border border-outline-variant/30 flex flex-col hover:border-primary/50 transition-colors duration-500">
            <RevealItem>
              <h3 className="font-headline text-2xl mb-2">The Heritage</h3>
              <div className="text-primary font-label text-sm uppercase tracking-widest mb-8">Essential Coverage</div>
              <div className="text-4xl font-headline mb-8">₹1,25,000</div>
            </RevealItem>
            <RevealItem delay={0.2} className="flex-grow">
              <ul className="space-y-4 mb-12 text-on-surface-variant font-light">
                <li>1 Day Coverage</li>
                <li>2 Lead Photographers</li>
                <li>300+ Digital High-Res Images</li>
                <li>Signature Edit Style</li>
                <li>Online Gallery (6 Months)</li>
              </ul>
            </RevealItem>
            <RevealItem delay={0.3}>
              <Button 
                onClick={openBookingModal} 
                variant="secondary"
                className="w-full"
              >
                Book Now
              </Button>
            </RevealItem>
          </ScrollReveal>
          {/* Signature */}
          <ScrollReveal direction="up" delay={0.4} className="p-12 bg-stone-900 text-white flex flex-col relative scale-105 shadow-2xl z-10 border-t-4 border-primary">
            <div className="absolute top-0 left-0 right-0 bg-primary py-2 text-center">
              <span className="text-white font-label text-[10px] uppercase tracking-[0.3rem]">Most Popular</span>
            </div>
            <RevealItem>
              <h3 className="font-headline text-2xl mb-2 text-primary">The Cinematic</h3>
              <div className="text-primary font-label text-sm uppercase tracking-widest mb-8">Full Storytelling</div>
              <div className="text-4xl font-headline mb-8">₹2,75,000</div>
            </RevealItem>
            <RevealItem delay={0.2} className="flex-grow">
              <ul className="space-y-4 mb-12 text-stone-400 font-light">
                <li>2 Day Coverage</li>
                <li>4 Person Creative Team</li>
                <li>Cinematic Highlight Film</li>
                <li>Heirloom Photo Album (12x12)</li>
                <li>Pre-Wedding Session</li>
              </ul>
            </RevealItem>
            <RevealItem delay={0.3}>
              <Button 
                onClick={openBookingModal} 
                variant="gold"
                className="w-full"
              >
                Book Now
              </Button>
            </RevealItem>
          </ScrollReveal>
          {/* Luxury */}
          <ScrollReveal direction="up" delay={0.6} className="p-12 bg-surface border border-outline-variant/30 flex flex-col hover:border-primary/50 transition-colors duration-500">
            <RevealItem>
              <h3 className="font-headline text-2xl mb-2">The Imperial</h3>
              <div className="text-primary font-label text-sm uppercase tracking-widest mb-8">Unrestricted Luxury</div>
              <div className="text-4xl font-headline mb-8">₹4,50,000</div>
            </RevealItem>
            <RevealItem delay={0.2} className="flex-grow">
              <ul className="space-y-4 mb-12 text-on-surface-variant font-light">
                <li>3+ Day Full Event Coverage</li>
                <li>Elite Master Team</li>
                <li>Long-form Documentary Film</li>
                <li>2 Companion Mini Albums</li>
                <li>Same-Day Edit Teaser</li>
              </ul>
            </RevealItem>
            <RevealItem delay={0.3}>
              <Button 
                onClick={openBookingModal} 
                variant="secondary"
                className="w-full"
              >
                Book Now
              </Button>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Snapshot */}
      <section className="py-20 md:py-32 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up" className="text-center mb-20">
            <RevealItem>
              <h2 className="font-headline text-4xl text-on-surface">The Creative Journey</h2>
            </RevealItem>
          </ScrollReveal>
          <ScrollReveal direction="up" className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <RevealItem className="text-center">
              <div className="text-5xl font-headline text-primary/20 mb-6 italic">01.</div>
              <h4 className="font-headline text-lg mb-4">Inquiry</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">We begin with a conversation about your vision, values, and the logistics of your big day.</p>
            </RevealItem>
            <RevealItem delay={0.1} className="text-center">
              <div className="text-5xl font-headline text-primary/20 mb-6 italic">02.</div>
              <h4 className="font-headline text-lg mb-4">Discovery</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">A pre-wedding session to build comfort and define the editorial aesthetic for your shoot.</p>
            </RevealItem>
            <RevealItem delay={0.2} className="text-center">
              <div className="text-5xl font-headline text-primary/20 mb-6 italic">03.</div>
              <h4 className="font-headline text-lg mb-4">The Celebration</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Unobtrusive, cinematic coverage focusing on raw emotion and effortless elegance.</p>
            </RevealItem>
            <RevealItem delay={0.3} className="text-center">
              <div className="text-5xl font-headline text-primary/20 mb-6 italic">04.</div>
              <h4 className="font-headline text-lg mb-4">The Reveal</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Curation of your gallery and delivery of your handcrafted heirloom albums.</p>
            </RevealItem>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5} className="text-center mt-16">
            <RevealItem>
              <Button to="/experience" variant="tertiary">
                Learn More About the Experience
              </Button>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-label uppercase tracking-[0.3rem] text-[10px]">Kind Words</span>
          <h2 className="font-headline text-4xl sm:text-5xl text-on-surface mt-4">The Legacy of Love</h2>
        </div>
        <ScrollReveal direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <RevealItem className="space-y-6 p-8 bg-stone-50 border border-stone-100 relative">
            <Quote className="text-primary/20 w-12 h-12 absolute -top-4 -left-4" />
            <p className="text-lg italic text-on-surface leading-relaxed relative z-10">"Mukheshwari didn't just take photos; she captured the very essence of our love. Every time we look at our album, we are transported back to that magical day in Udaipur."</p>
            <div className="pt-6 border-t border-stone-200">
              <p className="font-label uppercase tracking-widest text-[11px] font-bold">Ananya & Rahul</p>
              <p className="text-[9px] font-label uppercase tracking-widest text-stone-400 mt-1 italic">Udaipur Destination Wedding</p>
            </div>
          </RevealItem>
          <RevealItem delay={0.1} className="space-y-6 p-8 bg-stone-50 border border-stone-100 relative">
            <Quote className="text-primary/20 w-12 h-12 absolute -top-4 -left-4" />
            <p className="text-lg italic text-on-surface leading-relaxed relative z-10">"Her eye for detail is unmatched. She found beauty in the quietest moments that we didn't even realize were happening. Truly a master of her craft."</p>
            <div className="pt-6 border-t border-stone-200">
              <p className="font-label uppercase tracking-widest text-[11px] font-bold">Ishani & Vikram</p>
              <p className="text-[9px] font-label uppercase tracking-widest text-stone-400 mt-1 italic">Prayagraj Heritage Wedding</p>
            </div>
          </RevealItem>
          <RevealItem delay={0.2} className="space-y-6 p-8 bg-stone-50 border border-stone-100 relative">
            <Quote className="text-primary/20 w-12 h-12 absolute -top-4 -left-4" />
            <p className="text-lg italic text-on-surface leading-relaxed relative z-10">"Professional, calm, and incredibly talented. She made us feel so comfortable in front of the camera, and the results are beyond our wildest dreams."</p>
            <div className="pt-6 border-t border-stone-200">
              <p className="font-label uppercase tracking-widest text-[11px] font-bold">Meera & Arjun</p>
              <p className="text-[9px] font-label uppercase tracking-widest text-stone-400 mt-1 italic">Mumbai Seaside Celebration</p>
            </div>
          </RevealItem>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.5} className="text-center mt-16">
          <RevealItem>
            <Button to="/testimonials" variant="tertiary">
              Read More Stories
            </Button>
          </RevealItem>
        </ScrollReveal>
      </section>

      {/* CTA Block */}
      <section className="py-20 md:py-32 bg-surface-container-highest overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <ScrollReveal direction="up">
            <RevealItem>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl mb-12 text-on-surface">Let's Tell Your Story.</h2>
            </RevealItem>
            <RevealItem delay={0.1}>
              <p className="text-xl text-on-surface-variant mb-16 max-w-2xl mx-auto leading-relaxed">
                Our 2026 calendar is 80% booked. Reach out today to secure your date and begin crafting your visual legacy.
              </p>
            </RevealItem>
            <RevealItem delay={0.2}>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <Button onClick={openBookingModal} variant="gold" size="lg">
                  <Mail className="w-5 h-5" />
                  Book Now
                </Button>
                <Button 
                  href="https://wa.me/910000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  className="bg-[#25D366] border-none text-white hover:bg-[#25D366]/90"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  WhatsApp Us
                </Button>
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
