import { motion } from 'motion/react';
import { Quote, Sparkles } from 'lucide-react';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';
import { useBooking } from '../context/BookingContext';

export default function Testimonials() {
  const { openBookingModal } = useBooking();
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
            alt="Testimonials Hero"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpc9oqwK8-SqKQdfB3EGrHx4AvwT8erJwgl5XGEfEU19GTA_041zitetBDEw1HGRSMuHVlMfN5HleT9Qzajmo1XmDFmV71YLWmX0dB46Y626edRpRJ2P2TkqviLe_EwtHoL4Jov_S1IURExACKefQ6f_1Ae9Uk6M48N4uFtO9jYoxIceW06YMZpih2ADlVCamJAxWiVUPR776P2cGVL3BdA9RWzTl85J2Axkhcuabg5qwD_N5gUB-1K4bm4go5-BZ-EnGmPCFGCug"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-950/50 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-20">
          <ScrollReveal direction="up" distance={40} duration={1.2}>
            <RevealItem>
              <div className="inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-md mb-8">
                <span className="text-white/80 font-label uppercase tracking-[0.3rem] text-[10px]">Testimonials</span>
              </div>
            </RevealItem>
            
            <RevealItem delay={0.1}>
              <h1 className="font-headline text-5xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
                Stories of <i className="font-normal italic">Atmosphere</i> <br /> and <i className="font-normal italic">Emotion</i>.
              </h1>
            </RevealItem>
            
            <RevealItem delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                Our lens does not just capture moments; it preserves the quiet whispers, the shared glances, and the cinematic stillness of your union.
              </p>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry Testimonial Grid */}
      <section className="px-8 max-w-[1400px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {/* Testimonial 1 */}
          <ScrollReveal>
            <div className="break-inside-avoid bg-surface-container-low p-0 group">
              <div className="relative overflow-hidden aspect-[3/4]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  alt="Couple in sunset field"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY_aIDM-BqEiGACFO6ZU_AgE5C-dbOLKaVgDpNAYMn3vwCMgWfZt0oHRxLnPkTHhM5aRKurmzWmfsDiiMkLFuFFi9owA1qJ8En5bZyFwpwJ9W9xHP4l4dZBP4uUIw5IEtg45nY-4ctw9oLJ0SErxbQBlWqIFZQs1iEd0vzOWMnzyNI8wHAwJTBT5lpqRUnA_LXm6T60ofeqGCurmtgVBTSfLnK1Ga1sgYJ4hohzEyXXqMPXtiCupQHo3wUuRUSuIuK6sHHJ5LFmjA"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-xs uppercase tracking-widest opacity-80 mb-2 block">Varanasi Heritage Wedding</span>
                  <h3 className="text-2xl font-headline italic">Aditi & Rahul</h3>
                </div>
              </div>
              <div className="p-10">
                <p className="text-on-surface-variant italic mb-8 leading-relaxed font-headline text-lg">
                  "The way they captured the morning light hitting the ghats during our pheras... it wasn't just photography, it felt like a silent movie of our own making."
                </p>
                <Button 
                  to="#"
                  variant="tertiary"
                  className="text-primary text-xs uppercase tracking-widest font-bold border-b border-primary/20 pb-1 inline-flex items-center hover:border-primary transition-all p-0"
                >
                  See Their Wedding Portfolio
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial 2 */}
          <ScrollReveal delay={0.1}>
            <div className="break-inside-avoid bg-surface-container-highest p-12">
              <Quote className="text-primary w-10 h-10 mb-6" />
              <p className="text-on-surface-variant mb-8 leading-relaxed text-lg">
                Mukheshwari’s team has an incredible ability to disappear into the background while capturing the most intimate details. We didn't even notice them during the ceremony, yet looking at the photos, it’s as if they were standing right beside us in every emotional moment.
              </p>
              <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-8">
                <div>
                  <p className="font-headline text-on-surface">Priya & Vikram</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">New Delhi, 2023</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial 3 */}
          <ScrollReveal delay={0.2}>
            <div className="break-inside-avoid bg-surface-container-low p-0 group">
              <div className="p-10 bg-white">
                <h3 className="text-3xl font-headline mb-4">The Quiet Midnight</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  After the chaos of the baraat, there was a moment of silence in the courtyard. That single black and white shot of us just breathing—it's the most precious thing we own.
                </p>
                <p className="text-sm font-headline italic">— Meera + Rohan</p>
              </div>
              <div className="relative overflow-hidden aspect-square">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  alt="Intimate wedding detail"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvWGCmRfAbyd82Gsc6bRWms8-NzczxLAjaAK-WWAEHbEL4OheRIDMdE0LPsSb-oflB9QKZY-qbYO3xhhLSYYFaiAMiB6ZMtuXsZUdqmjTFhoesSndSojjSpozSLl4W_JzduJCYj9Wgzr4WsblbknpUEVRQLxwNx-7z2I4-iOKmrT8fSAAmSGWQuOunAYobJt35ajUvFaOGD8MDqlqWrYZrPyYejQwB_heX_r7rzPKFZMo3tPDyfSI7UsmhvrhcuzhYlXlJjrAIzhQ"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial 4 */}
          <ScrollReveal>
            <div className="break-inside-avoid bg-surface-container p-12 lg:mt-12">
              <div className="max-w-xs ml-auto">
                <p className="text-3xl font-headline leading-tight italic text-primary mb-8">
                  "Artistry that understands the weight of a tradition."
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Choosing a photographer for a multi-day Indian wedding is daunting. Mukheshwari didn't just 'take photos'; they curated an experience that felt like luxury editorial.
                </p>
                <div className="text-right">
                  <p className="font-headline text-on-surface">Sanya & Kabir</p>
                  <Button 
                    to="#"
                    variant="tertiary"
                    className="text-xs text-primary uppercase tracking-widest font-bold hover:underline inline-block p-0"
                  >
                    View Gallery
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial 5 */}
          <ScrollReveal delay={0.1}>
            <div className="break-inside-avoid bg-surface-container-low p-0 group relative">
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  alt="Wedding portrait"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj8bq8eNyMsk5lmON2W7R1zFc7zTu4xNTnTtFi8jEtiN9-vtgQsLp720eHnF5zUyV9oDYp_9NuODVM1ARGzQLYnDMLfyDec9UuUSrEVDEkSdwNGB9SyKVUkf0_V_bs6YywjaJR5hORVtY_Z6423yeKFmrwQhKmwDPbXvV83LPp3tbf4ZfxxGaLgK7gwLZmzCF-5SymM4rtC33050LnC19uEGaNZqHQN9DTUXPoQIxdd7whiEIQu5fyLiL7xRSXzUcNIe0acWo845I"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm m-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-on-surface-variant font-headline italic mb-2">"Beyond every expectation we had for our destination wedding in Udaipur."</p>
                <p className="text-xs uppercase tracking-widest text-primary font-bold">Ananya & Arjun</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial 6 */}
          <ScrollReveal delay={0.2}>
            <div className="break-inside-avoid bg-on-surface text-surface p-12">
              <h4 className="text-xs uppercase tracking-[0.2rem] mb-6 text-primary">The Day in Detail</h4>
              <p className="text-xl font-headline leading-relaxed mb-8 opacity-90">
                "The rain started just as we reached the altar. We were devastated, but Mukheshwari told us to keep going. The shots they captured in the rain—with the reflections and the moody sky—turned out to be the highlight of our album."
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-headline italic">Ishaan & Tara</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Mumbai Monsoon Wedding</p>
                </div>
                <Sparkles className="text-primary w-6 h-6 fill-current" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="mt-32 px-8 max-w-5xl mx-auto text-center">
          <div className="bg-surface-container-low py-24 px-12 border-outline-variant/10 border-[1px]">
            <RevealItem>
              <h2 className="text-4xl font-headline text-on-surface mb-6">Begin Your Own Chapter</h2>
            </RevealItem>
            <RevealItem delay={0.1}>
              <p className="text-on-surface-variant max-w-2xl mx-auto mb-12">
                Every love story deserves a curator. Let us transform your moments into a timeless editorial masterpiece that lives forever.
              </p>
            </RevealItem>
            <RevealItem delay={0.2}>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Button onClick={openBookingModal} size="lg">
                  Book Now
                </Button>
                <Button to="/portfolio" variant="secondary" size="lg">
                  View More Stories
                </Button>
              </div>
            </RevealItem>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
