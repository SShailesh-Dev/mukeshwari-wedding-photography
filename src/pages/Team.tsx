import { motion } from 'motion/react';
import { Camera, Film, Sparkles, Heart, Palette, Users } from 'lucide-react';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const TEAM_MEMBERS = [
  {
    name: 'Aarav Mukheshwari',
    role: 'Lead Photographer & Founder',
    bio: 'A visionary artist dedicated to capturing the soul of every ceremony. With over 15 years of experience, Aarav blends fine art with documentary storytelling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAsosRgg67WvLHvOmzjWbMTO3M1HHfkQUz74jlV3n_gl7TpLKH9H2UCVOvbZsb9rA-Bp2lrtmL3yXLlU-3S3WjWPcTUeQ1Dftp7eH1tYjSVrECWyodM9HRQ0gppEa2F514bC8JxlQeEONRah63ytDpmzYKDX4FzNs6RHaGgs-VQHfK68CSP2eI2969CXI6H734lNmSe0uasDvjfA6haUDCT5CD-spfer4Z5eMdLrKXskmYHXMIc0R4wrluA7_w-M8XINQYqfjG4bc',
    icon: <Camera className="w-5 h-5" />
  },
  {
    name: 'Meera Sharma',
    role: 'Creative Director',
    bio: 'Bringing editorial polish and narrative flow to every curated gallery. Meera ensures that every frame aligns with the couple\'s unique aesthetic vision.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZvB8jkWSYfAD3ro1vYJIXgrCzcOqV-99Ait67ECojbOVX6URLlZyDvtPTYBDj_WRXCNhq0dqR8hMGrqH09I25UHkGrdhOeG923bBAKGFjjg7NvWZYg_DoAzITfWzO0Hzkwc7bh5kVGEfYoc-8uTIAtsfnUrQu9hOH3YCJ6tCXydj4VX5LHu24ADUjzVEKeU76EyiyiOtMsVjUcrmXy2afD6w8devVgl0pXGTjU5q8xEVyfAXNZvwbY32ivLGWLmYKjbaZSMEH6GU',
    icon: <Palette className="w-5 h-5" />
  },
  {
    name: 'Kabir Varma',
    role: 'Lead Cinematographer',
    bio: 'Specializing in the cinematic stillness and motion of wedding films. Kabir\'s work is characterized by its poetic rhythm and emotional depth.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO_BntY0FQEqPC9m9Xt45LEiP9UVwG4QOLoyibzvtCtFNm4ItG91kyg7yhrQM5cVSg1j_LUthlzn0MpqmMloHT4xuKTtRVJLi7N0YaWv6UjVthJ3ZecrDIg6Fa60Pu0Z98wsmIQljMIwaNah0pyR7QYMcmMdLbhpGStOP-7s62zMnn7hBD2YSBXnCa7LpPO6Y5NXILLdXh4vldpO7J1WUmrwkx4SK4oHRKFmI9SCoh7Etu1mcB8G1_kwPbHhxF_V0RRiwkQa_rezk',
    icon: <Film className="w-5 h-5" />
  },
  {
    name: 'Sanya Iyer',
    role: 'Lead Editor',
    bio: 'The silent architect of our visual legacy. Sanya meticulously crafts the color grading and pacing that defines the Mukheshwari signature look.',
    image: 'https://picsum.photos/seed/team4/800/1000',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    name: 'Rohan Gupta',
    role: 'Client Experience Manager',
    bio: 'Ensuring that every interaction with our studio is as seamless and elegant as our imagery. Rohan is your guide from the first inquiry to the final delivery.',
    image: 'https://picsum.photos/seed/team5/800/1000',
    icon: <Heart className="w-5 h-5" />
  },
  {
    name: 'Ananya Das',
    role: 'Second Photographer',
    bio: 'Capturing the candid, in-between moments that others might miss. Ananya brings a fresh, contemporary perspective to our traditional roots.',
    image: 'https://picsum.photos/seed/team6/800/1000',
    icon: <Camera className="w-5 h-5" />
  }
];

export default function Team() {
  const { openBookingModal } = useBooking();
  return (
    <div className="pt-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-32 overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            alt="The Mukheshwari creative team collaborating in their studio space"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-20">
          <ScrollReveal direction="up" distance={40} duration={1.2}>
            <RevealItem>
              <div className="inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-md mb-8">
                <span className="text-white/80 font-label uppercase tracking-[0.3rem] text-[10px]">THE ARTISANS</span>
              </div>
            </RevealItem>
            
            <RevealItem delay={0.1}>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
                The Hands Behind <br /> <i className="font-normal italic text-amber-500">The Lens</i>.
              </h1>
            </RevealItem>
            
            <RevealItem delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                A collective of visionaries, storytellers, and technical masters dedicated to preserving your most precious moments.
              </p>
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

      {/* Team Grid */}
      <section className="py-32 mb-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {TEAM_MEMBERS.map((member, index) => (
              <ScrollReveal 
                key={member.name} 
                direction="up" 
                delay={index * 0.1} 
                className="group"
              >
                <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-8">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={member.image}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {member.icon}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-headline text-3xl text-stone-900">{member.name}</h3>
                  <p className="text-amber-700 font-label uppercase tracking-widest text-xs font-bold">{member.role}</p>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-stone-900 py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <h2 className="font-headline text-4xl md:text-6xl mb-12 leading-tight">
                Our collaborative <br /> <i className="font-light italic text-amber-500">synergy</i>.
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl mb-2">Unified Vision</h4>
                    <p className="text-white/60 text-sm leading-relaxed">We work as a single organism, ensuring that photography and cinematography blend seamlessly into one cohesive narrative.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl mb-2">Artistic Integrity</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Every member of our team is a specialist in their craft, bringing a level of expertise that common studios simply cannot match.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="aspect-square relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team members collaborating on a project, showcasing our unified vision" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-white/10 m-8"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-8 text-center bg-white overflow-hidden">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto">
          <RevealItem>
            <h2 className="font-headline text-5xl md:text-6xl text-stone-900 mb-12">Ready to meet us in person?</h2>
          </RevealItem>
          <RevealItem delay={0.1}>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Button onClick={openBookingModal} size="lg">
                Book a Consultation
              </Button>
            </div>
          </RevealItem>
        </ScrollReveal>
      </section>
    </div>
  );
}
