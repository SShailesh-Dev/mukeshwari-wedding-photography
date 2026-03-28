import { motion } from 'motion/react';
import { Mail, MessageSquare, Edit3, Camera, Sparkles } from 'lucide-react';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';

const STEPS = [
  {
    number: '01',
    title: 'The Inquiry',
    icon: Mail,
    description: 'It begins with a spark. Reach out through our portal to share your vision, date, and story. We respond within 24 hours to begin the conversation of a lifetime.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEq6DGDxH9k3Of_YhRNTCN2QYKo_LKRK9X-8COrpuU_FLXiThRCXws0C2S62gpX_nThp_T00103LlRZ-a1uUwFdLtTTZKziKV21Deehl64nybgfkMVtYU1D-_krfEIsoGBKCccTTabjIOPmkRDrxCGocTQCbX2LXAuWjD6pNEmJsJKDY7pM2hxQlXRNT6oxXH9yAEloHdX-RrPbE2tonS6GkwdvV6YHGh6cfQxbBkbBNe2sYLlnkG6uFjAGy5audMbU7wIufuIf4o'
  },
  {
    number: '02',
    title: 'The Consultation',
    icon: MessageSquare,
    description: 'We meet—virtually or in person—to dive deep into your aesthetic. This is where we align our creative frequencies and ensure we are the perfect curators for your legacy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGevNIexoStDo1coLb10p2EUSF07wYTJrRdydlcOALnLS9-BUxY9gdAKCSFEKf7x3RatbLJRL24y8JmKatTq1FuLeWYjPvoJ6gkgAs696CdKEm12OkYYiwnxo1Re58Obwyos3-rk3bph3O4E5vowp_aeflK-7PYlRS8R-9qjRkWXeAyDltTcn3R53pBUVFg8whgZTib-OA8O3U-plJrYvfWrr9KbsoFttWlgPoK-V7yauzAk5gZ4xB471na7b2lufWE4tH24xIrFQ'
  },
  {
    number: '03',
    title: 'The Planning',
    icon: Edit3,
    description: 'From mood boards to timeline curation, we work alongside your planners to ensure every shot is intentional. We map out light, location, and the silent moments in between.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsHCWKdh9xUWBNQwelujLn_-6-yx6MkuEdt1n-NQVypFh3ybQIWbImf-O4u4HruzIp9ahDPQXIAp5q1CozMDa8OER5M7HCspRzPOJOM01r6wLqxYo-0o2yqphToxamiwKrrW1M-67BP68oD6cys-44zgmTkL0s5hDWWQ-3W5LbXOtiGSWABbdytAKnLuc81fDgXBr9aSV85KRLm1gkwjKLYcTSqtW5UlOvNIqaakxKthOkvDvL8xMoEQaJounuiNuhTxu4ZuQ8hrs'
  },
  {
    number: '04',
    title: 'The Shoot',
    icon: Camera,
    description: 'The day arrives. Our team moves like ghosts—unobtrusive but ever-present. We focus on the raw emotions, the stolen glances, and the cinematic stillness of your celebration.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRUGO9Jl2ym_bCPcdupx9umw0fjQVlIov63our3-zlPuUfcplR9XRU56PTzn5K48rfanSPtisAu7TjIn59b86Q4G2UnCUi-ZI6qMvVerzjYkNv7nkaI7uE8OrZnZeSle5LCAwJtdxIoL9XQeNLdmuLcBdbqAafmV_nRuftiAJpHRZ7qwWULlGGUkQZOuJxYUJzUiLRoS8fF9Q7iahphGXsFlPuhEO2Jzhc3vrPNz80O7GGQZPGE3s2mcaBce3ZC92UUPbWVyPcGsw'
  },
  {
    number: '05',
    title: 'The Delivery',
    icon: Sparkles,
    description: 'Your memories are hand-edited with our signature cinematic grade. You receive an online gallery for instant sharing and a bespoke, luxury heirloom album to treasure forever.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbyLqyn4-2uGYIetemP_S11xadK6S7gLDAyIhh8yx9d72sFdZg-I0CUKJMtg4smj6M3AJsyJafL7YwGsbmuje7-OMDgAfJLDZzZs5QGF8SGyWgxyJBf3c6y82-izhCButsP2pdrLFeHM65AQbWxOYgEqAAzhvhhb7-xcMcUFvYYvctdWMVnvZR9MRcazhFcztd0RMcy1YtnhYgfeZBHtKKZ_VXbh7oCY4_haanrZ6210MEBR2atplEfaSgkrJNndawtogLYEle3To'
  }
];

export default function Experience() {
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
            alt="Cinematic wide shot of a wedding ceremony - The Mukheshwari Experience"
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/17607865/pexels-photo-17607865.jpeg?auto=compress&cs=tinysrgb&w=800"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-stone-950/50 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-20">
          <ScrollReveal direction="up" distance={40} duration={0.6}>
            <RevealItem>
              <div className="inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-md mb-8">
                <span className="text-white/80 font-label uppercase tracking-[0.3rem] text-[10px]">The Experience</span>
              </div>
            </RevealItem>
            
            <RevealItem delay={0.1}>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
                The journey to <br /> <i className="font-normal italic">forever</i> starts here.
              </h1>
            </RevealItem>
            
            <RevealItem delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14 font-light">
                We don't just capture images; we curate experiences. Every step is designed with intentionality and cinematic grace.
              </p>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-20 md:mb-40 overflow-hidden">
        <div className="bg-surface-container-low py-20 md:py-40">
          <div className="max-w-7xl mx-auto px-8">
            {STEPS.map((step, index) => (
              <ScrollReveal 
                key={step.number}
                direction={index % 2 === 0 ? 'right' : 'left'}
                distance={50}
                className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:col-span-1 ${index % 2 !== 0 ? 'md:order-2 md:text-center' : ''}`}>
                  <RevealItem>
                    <span className="text-6xl md:text-8xl font-headline text-outline-variant/30 select-none">{step.number}</span>
                  </RevealItem>
                </div>
                <div className={`md:col-span-5 ${index % 2 !== 0 ? 'md:order-3 order-2' : ''}`}>
                  <RevealItem delay={0.1}>
                    <div className="flex items-center gap-4 mb-4">
                      <step.icon className="text-primary w-8 h-8" />
                      <h3 className="text-3xl font-headline">{step.title}</h3>
                    </div>
                  </RevealItem>
                  <RevealItem delay={0.2}>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </RevealItem>
                </div>
                <div className={`md:col-span-6 ${index % 2 === 0 ? 'md:pl-20' : 'md:order-1 order-3'}`}>
                  <RevealItem delay={0.3}>
                    <div className="aspect-video bg-surface-container-highest overflow-hidden group">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        src={step.image}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        alt={`Step ${step.number}: ${step.title} - ${step.description.substring(0, 50)}...`}
                      />
                    </div>
                  </RevealItem>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-20 md:mb-40 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <ScrollReveal direction="right" distance={50}>
              <RevealItem>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline mb-8 leading-tight">Ready to begin your <br /> <span className="italic font-normal">visual legacy?</span></h2>
              </RevealItem>
              <RevealItem delay={0.1}>
                <p className="text-on-surface-variant text-lg mb-12 max-w-md">
                  We take a limited number of commissions each year to ensure every couple receives our full creative focus.
                </p>
              </RevealItem>
              <RevealItem delay={0.2}>
                <div className="space-y-8">
                  <Button 
                    href="https://wa.me/919876543210" 
                    variant="tertiary" 
                    className="flex items-center gap-6 group p-0"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-surface-container-highest text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-label uppercase tracking-widest text-xs text-primary mb-1">Instant Connect</p>
                      <p className="text-lg font-headline">WhatsApp Consultation</p>
                    </div>
                  </Button>
                </div>
              </RevealItem>
            </ScrollReveal>
            <ScrollReveal direction="left" distance={50} delay={0.2} className="bg-white p-12 border-t-0 shadow-[0_20px_80px_rgba(43,43,43,0.05)]">
              <form className="space-y-10">
                <RevealItem delay={0.1}>
                  <div className="relative group">
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-all duration-300 placeholder:text-stone-400" placeholder="Full Name" type="text" />
                  </div>
                </RevealItem>
                <RevealItem delay={0.2}>
                  <div className="relative group">
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-all duration-300 placeholder:text-stone-400" placeholder="Email Address" type="email" />
                  </div>
                </RevealItem>
                <RevealItem delay={0.3}>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="relative group">
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-all duration-300 placeholder:text-stone-400" placeholder="Wedding Date" type="text" />
                    </div>
                    <div className="relative group">
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-all duration-300 placeholder:text-stone-400" placeholder="Location" type="text" />
                    </div>
                  </div>
                </RevealItem>
                <RevealItem delay={0.4}>
                  <div className="relative group">
                    <textarea className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-all duration-300 placeholder:text-stone-400 resize-none" placeholder="Tell us your story..." rows={4}></textarea>
                  </div>
                </RevealItem>
                <RevealItem delay={0.5}>
                  <Button type="submit" variant="gold" className="w-full">
                    Begin Your Journey
                  </Button>
                </RevealItem>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
