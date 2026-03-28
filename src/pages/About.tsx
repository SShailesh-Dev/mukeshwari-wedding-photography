import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';

export default function About() {
  return (
    <div className="pt-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-32 overflow-hidden mb-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            alt="Cinematic wide shot of a wedding ceremony, capturing the scale and emotion of the day"
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/5967013/pexels-photo-5967013.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-950/50 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-20">
          <ScrollReveal direction="up" distance={40} duration={1.2}>
            <RevealItem>
              <div className="inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-md mb-8">
                <span className="text-white/80 font-label uppercase tracking-[0.3rem] text-[10px]">The Storytellers</span>
              </div>
            </RevealItem>
            
            <RevealItem delay={0.1}>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
                Crafting <i className="font-normal italic">Visual</i> <br /> Poetry Since 2015.
              </h1>
            </RevealItem>
            
            <RevealItem delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                We believe that the most profound beauty lives in the quiet, unscripted moments between the grand celebrations.
              </p>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <ScrollReveal direction="right" distance={50} className="w-full md:w-1/2">
            <div className="aspect-[4/5] bg-surface-container-highest relative overflow-hidden group rounded-2xl shadow-2xl">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                alt="Founders of Mukheshwari Photography, Aarav and Meera, in their studio"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-xuD6MWby9n6w6mmzRCDdsLs0eDYGB3-uVOZ9u18oZpg-jT1QjAM3PhFKtzTV5UII-2Un7rh3ySNoQ6Uyd5dVMkcqunJk-G9sBWGQSv_nC5me7RuDsuh05nAc0qjGS0kFlepOcvQ3ETAmyWUydwiggU8Afe9zht6JAURJXuaJBUrntjSPCjXigDEq9-XIYM7_35TUXSNVP2vwb_L9cITtp5drmHF2AZ7h6JimrhCfOKFoJMdyThHRyzPmavtPZLPpz8SJpDiJXT4"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" distance={50} delay={0.2} className="w-full md:w-1/2">
            <RevealItem>
              <div className="inline-block px-4 py-1 border border-primary/20 rounded-full mb-6">
                <span className="text-primary font-label text-[10px] uppercase tracking-[0.3rem]">Our Story</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight text-on-surface">Driven by <span className="italic">soul</span>, inspired by <span className="italic">light</span>.</h2>
            </RevealItem>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <RevealItem delay={0.1}>
                <p>
                  What began in the timeless landscapes of Prayagraj as a personal pursuit of art has evolved into a premier destination for editorial wedding storytelling. Mukheshwari was founded on the principle that your wedding isn't just an event—it's a living, breathing narrative.
                </p>
              </RevealItem>
              <RevealItem delay={0.2}>
                <p>
                  Our founders, drawing from backgrounds in fine art and photojournalism, sought to bring a "Digital Curator" approach to the industry. Moving away from the saturated, loud trends of modern wedding media, we focused on the museum-like quality of a single, perfect frame.
                </p>
              </RevealItem>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 md:py-32 mb-20 md:mb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <ScrollReveal direction="right" distance={50} className="md:col-start-2 md:col-span-5 self-center">
              <RevealItem>
                <h2 className="font-headline text-4xl mb-12 text-on-surface">Our Philosophy</h2>
              </RevealItem>
              <div className="space-y-8">
                <RevealItem delay={0.1}>
                  <div className="border-l-2 border-primary/20 pl-8 py-2">
                    <h3 className="font-headline text-xl text-primary mb-2">Intentional Stillness</h3>
                    <p className="text-on-surface-variant">We embrace the space between the movements, capturing the breath taken before the "I do."</p>
                  </div>
                </RevealItem>
                <RevealItem delay={0.2}>
                  <div className="border-l-2 border-primary/20 pl-8 py-2">
                    <h3 className="font-headline text-xl text-primary mb-2">Unscripted Emotion</h3>
                    <p className="text-on-surface-variant">True beauty doesn't require a pose. We document the genuine laughter and the silent, tearful glances.</p>
                  </div>
                </RevealItem>
                <RevealItem delay={0.3}>
                  <div className="border-l-2 border-primary/20 pl-8 py-2">
                    <h3 className="font-headline text-xl text-primary mb-2">The Editorial Eye</h3>
                    <p className="text-on-surface-variant">Every image is curated with the intentionality of a high-end fashion editorial, ensuring timelessness.</p>
                  </div>
                </RevealItem>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" distance={50} delay={0.3} className="md:col-start-8 md:col-span-5 relative">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden translate-y-12 group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  alt="A candid wedding moment captured with an editorial eye"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ_JemO-XAoJ-hyTOjzb_2Wlt9BdCnlrnuVKCybRJQ1FFiDS073LszLZaxgyLDqpSspEKwnnnbm5GS1SqYJ1VCJpXkYHZo7FdJhN8elzVXJCdDV112l9VldCj4cHuVVobkshdBwcA7DQKU-XJDVtuWdR6lRdfogTRwfQHuaO-W1NqPninypFhpCBdKAH69kA0J1wVjSapb-oXn-x2Ie_bKuQk0LACHbsk2tW6WcWgOm1CdDgtCjpRBM-MqZrOcBnqgHNCF8E3m980"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -top-12 -left-12 hidden md:block aspect-square w-48 bg-surface-container-highest/50 backdrop-blur-xl p-8 border border-outline-variant/20"
              >
                <Sparkles className="text-primary w-10 h-10 mb-4" />
                <p className="text-xs uppercase tracking-widest font-label text-primary">Est. 2012</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="bg-surface-container-low py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up" className="text-center mb-24">
            <RevealItem>
              <span className="text-primary font-label uppercase tracking-[0.1rem] text-xs block mb-4">MUKHESHWARI STUDIO</span>
            </RevealItem>
            <RevealItem delay={0.1}>
              <h2 className="font-headline text-5xl text-on-surface">The Creative Team</h2>
            </RevealItem>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <ScrollReveal direction="up" delay={0.1} className="group">
              <RevealItem>
                <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden mb-8">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                    alt="Aarav Mukheshwari, Lead Photographer and Founder"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAsosRgg67WvLHvOmzjWbMTO3M1HHfkQUz74jlV3n_gl7TpLKH9H2UCVOvbZsb9rA-Bp2lrtmL3yXLlU-3S3WjWPcTUeQ1Dftp7eH1tYjSVrECWyodM9HRQ0gppEa2F514bC8JxlQeEONRah63ytDpmzYKDX4FzNs6RHaGgs-VQHfK68CSP2eI2969CXI6H734lNmSe0uasDvjfA6haUDCT5CD-spfer4Z5eMdLrKXskmYHXMIc0R4wrluA7_w-M8XINQYqfjG4bc"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-headline text-2xl text-on-surface mb-1">Aarav Mukheshwari</h4>
                <p className="text-primary font-label uppercase tracking-widest text-xs mb-4">Lead Photographer & Founder</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">A visionary artist dedicated to capturing the soul of every ceremony.</p>
              </RevealItem>
            </ScrollReveal>
            {/* Team Member 2 */}
            <ScrollReveal direction="up" delay={0.2} className="group md:mt-12">
              <RevealItem>
                <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden mb-8">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                    alt="Meera Sharma, Creative Director"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZvB8jkWSYfAD3ro1vYJIXgrCzcOqV-99Ait67ECojbOVX6URLlZyDvtPTYBDj_WRXCNhq0dqR8hMGrqH09I25UHkGrdhOeG923bBAKGFjjg7NvWZYg_DoAzITfWzO0Hzkwc7bh5kVGEfYoc-8uTIAtsfnUrQu9hOH3YCJ6tCXydj4VX5LHu24ADUjzVEKeU76EyiyiOtMsVjUcrmXy2afD6w8devVgl0pXGTjU5q8xEVyfAXNZvwbY32ivLGWLmYKjbaZSMEH6GU"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-headline text-2xl text-on-surface mb-1">Meera Sharma</h4>
                <p className="text-primary font-label uppercase tracking-widest text-xs mb-4">Creative Director</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">Bringing editorial polish and narrative flow to every curated gallery.</p>
              </RevealItem>
            </ScrollReveal>
            {/* Team Member 3 */}
            <ScrollReveal direction="up" delay={0.3} className="group">
              <RevealItem>
                <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden mb-8">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                    alt="Kabir Varma, Lead Cinematographer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO_BntY0FQEqPC9m9Xt45LEiP9UVwG4QOLoyibzvtCtFNm4ItG91kyg7yhrQM5cVSg1j_LUthlzn0MpqmMloHT4xuKTtRVJLi7N0YaWv6UjVthJ3ZecrDIg6Fa60Pu0Z98wsmIQljMIwaNah0pyR7QYMcmMdLbhpGStOP-7s62zMnn7hBD2YSBXnCa7LpPO6Y5NXILLdXh4vldpO7J1WUmrwkx4SK4oHRKFmI9SCoh7Etu1mcB8G1_kwPbHhxF_V0RRiwkQa_rezk"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-headline text-2xl text-on-surface mb-1">Kabir Varma</h4>
                <p className="text-primary font-label uppercase tracking-widest text-xs mb-4">Lead Cinematographer</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">Specializing in the cinematic stillness and motion of wedding films.</p>
              </RevealItem>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-8 max-w-7xl mx-auto text-center overflow-hidden">
        <ScrollReveal direction="up">
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl mb-8 leading-tight text-on-surface">Ready to tell your <span className="italic">story</span>?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
            We take on a limited number of weddings each year to ensure every couple receives our full creative energy and attention.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Button to="/booking" variant="gold" size="lg">
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
