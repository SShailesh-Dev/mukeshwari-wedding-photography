import { motion } from 'motion/react';
import { ArrowRight, Send } from 'lucide-react';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Button from '../components/ui/Button';

const POSTS = [
  {
    category: 'Wedding Planning',
    title: 'The Architecture of a Morning: Bridal Preparations',
    description: 'How to curate your space for the most emotive documentary morning portraits.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDStY4NqE3rj38pf7bFonvBtdmUM2nL9igaXvE9RhT0dHZpcvGhdHEX4F6mbWhMiuCyzZgqT1gyElf13Z-Y1ZQ6w83TPBepkW8-8Jfxjh0XlsYK9BbSvWPlCEHcekT1krpaIKvP4B3Qs2rn5PgBjtPQKNg9wFVBiC7h_830JkVT7B_GqCi8DkU6lfFRY86Q5drT_POyFR9V91uzs_pWsezYUYER5wcTRAB7Wau1XNOirwapvRMjJIoAdfkxnSQz1o8sHHTkTEUTQDU'
  },
  {
    category: 'Prayagraj Venues',
    title: 'Sunset Serenity: The Best Riverside Venues in Prayagraj',
    description: 'Exploring locations that offer the most dramatic golden hour light for ceremonies.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBje36jnQ18msMrN0jPfu4uHKgyiW4o6rHeRcDzHcF3M4JI1p0pMpav-TcXXR0_-iqJwSuoS8ZRgm4G81DYg6LyKlqMC9zGfxQoZU8p7iMbmq-_5yDHEA8jWKU13t74SpRtKYjZRU42ETJk8ClIPmZQ4AM5PDqUt5t9aq_kMTUMYT5k_0yREb95OculF8OlteR-04oZ9o76hiXIwaXi3M1LjR_lxBj2K-WfePJ9sIrEBe2bizAMMi9KDl2nW4FVw6BpWiqip4iB68'
  },
  {
    category: 'Photo Tips',
    title: 'The Art of the Unposed: How to Relax on Camera',
    description: 'Bridging the gap between a portrait session and authentic shared connection.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtZPSYHVVbqCkNu6ULBsQa2jD5vV9zgcfQgRXQwTkd3ZIYXxJqoGqJvr7QDJbxabAHQoLAsXJkNVs7d0oth8MHS3zSuCdnUX5DXDGhFDAU23qvuRbbVlX3519tkZLnYOZ3IT1_VR4FLQLWSZSVjiaQBSjl65jqIQkww8Ne5Jjy6AWTdfsf7zk-UEofpIc0TUPhEEvquKEne5anxfte7tLbUzUw82ULUWoZROY7WcH5lwAb-wQCrlPRSzsT4zW_xj0PP39q7uqsyUM'
  },
  {
    category: 'Love Stories',
    title: 'Modern Tradition: Ananya & Rohan’s Civil Union',
    description: 'A minimalist celebration focusing on intimate details and clean aesthetics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdTOSTNK7RKdpSkEyXLgx5HNQ8SMTzt8wR4TgFXgGM-axkOpC1d_ZNEsQawu6bROHJ1FjeH01cQWMjwzjJCKdKQ7gxh97HdR3hUvNhTwdOPYswvOrLJdZAUL6fgrnPe8bQ7I7mAc0v2bmzlnM0ivKmJ3wfsU2tsF7M2GDRuyvZvsubIw9a4nh__S5ti36iuS4gaqjxr0ddAIJhp_cmJVacOEKANmq8TX8wxS4SFqVPdHChnUqbhskZ25WDZT2GkgDQRY-aGNmr3zA'
  },
  {
    category: 'Photo Tips',
    title: 'Why Lighting Matters More Than the Backdrops',
    description: 'Technical insights into the physics of light and emotional resonance in film.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCunMTPL3ydTJdbL1LUM321622cdnnzFieQkDxXnqlncCzOibF9K9EEDdOfnHDihV_I_vWvq2lKJ9a-xzkJU6O2wQqbMjSNePvC7UwSejTJrrMNByQZe2dppeuP-53IGD7ZOMqUvx4Bf5pS27SQS8G_605fKNqIn9caIze6kMEIuQ_81BLnWxLEYAPufnf1P-tjNAOkcnzTtWVkp7SyUAB122DySCku2YRLV3QOMYYwYuvJIUgJNBGJGCv3iI5IIk4P69QWy8Ubo5U'
  },
  {
    category: 'Wedding Planning',
    title: 'Curating the Guest Experience: Beyond the Food',
    description: 'Designing the flow of your day to maximize social intimacy and Joy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0q4XeRbZicqPbvx-C_0pYBvBXBAzDiHQU83XTo8bkoXJvwO9wZKOJldSTkEnz33loMLc-03xt3pUgXiZZy-wh2Ni_YlLjM4LFctDZEIwJhf5JsRETBClCzCfq1xIriBehQcwMnMsLn3EjGZqz3SiS9ZjMy4jka72tTanQo9CA8lJ_35tS3DOjzgsRb4K9mgvMe0G8N9baT0_HwIZpC9PRZ6GRzBno2cYKsJgOLhCMFzwKfrKAd8_YZUQOzaxt4v2cQCDtS0EAIYQ'
  }
];

export default function Blog() {
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
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1920"
            alt="Elegant wedding rings on a soft background, symbolizing the start of a new story"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </motion.div>

        <div className="relative z-10 px-8 max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <div className="space-y-8">
              <RevealItem>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-white/90 font-label uppercase tracking-[0.2rem] text-[10px]">The Editorial Journal</span>
                </div>
              </RevealItem>
              
              <RevealItem delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-headline text-white tracking-tighter leading-[0.9] mb-8">
                  Stories of <br />
                  <span className="italic font-light text-white/95">Stillness & Light</span>
                </h1>
              </RevealItem>

              <RevealItem delay={0.2}>
                <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-body leading-relaxed">
                  Capturing the sacred moments and artistic intricacies of weddings across Prayagraj and beyond.
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

      {/* Category Filter */}
      <ScrollReveal delay={0.3}>
        <section className="px-8 max-w-7xl mx-auto mb-16 mt-24">
          <div className="flex flex-wrap justify-center gap-8 border-b border-outline-variant/30 pb-8">
            <button className="text-primary font-medium tracking-wide border-b-2 border-primary pb-2">All Journals</button>
            <button className="text-on-surface-variant hover:text-primary transition-colors tracking-wide">Wedding Planning</button>
            <button className="text-on-surface-variant hover:text-primary transition-colors tracking-wide">Photo Tips</button>
            <button className="text-on-surface-variant hover:text-primary transition-colors tracking-wide">Prayagraj Venues</button>
            <button className="text-on-surface-variant hover:text-primary transition-colors tracking-wide">Love Stories</button>
          </div>
        </section>
      </ScrollReveal>

      <section className="px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 pb-32">
        {/* Blog Grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8">
            {POSTS.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 0.1}>
                <article className="group">
                  <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      src={post.image}
                      alt={`Editorial photography for ${post.title}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-surface-dim opacity-10 mix-blend-multiply"></div>
                  </div>
                  <span className="text-primary font-label uppercase tracking-[0.15rem] text-[10px] mb-3 block">{post.category}</span>
                  <h3 className="text-xl font-headline mb-4 group-hover:text-primary transition-colors duration-400 leading-snug">{post.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{post.description}</p>
                  <Button 
                    to="#"
                    variant="tertiary"
                    className="text-primary text-xs uppercase tracking-widest font-semibold border-b border-primary/20 hover:border-primary transition-all pb-1 inline-block p-0"
                  >
                    Read Journal
                  </Button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-16">
          {/* About the Artist */}
          <ScrollReveal direction="right">
            <div className="bg-surface-container-low p-8">
              <h4 className="font-headline text-2xl mb-6">The Artist</h4>
              <div className="mb-6 aspect-square bg-surface-container-highest overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="w-full h-full object-cover filter contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfTiwfKJNGqZGG2IEvFuz_7T6G_vipQ2Pst1Ysg1Z9aizk_9eepAgnO6KhXVlEBbPfb9rrIj791nwInURyJc8I3L5qsk8ER26tIW5hJLetn03lYvlnmZZBxMhzOfkv6TwaOuGX6FQft1iSki6T3yv0AqDmBQb_zgoLFLARPWzaIbgxYjb5XXFC429vyBv7C_c4frgRAdIlbCKVs7TABgFfYsErsZrcq0HlfiCkK8KCqb2ufuwLEzbflovq7c3Mg2VjP6GywYAXfBQ"
                  alt="Portrait of the lead photographer, Mukheshwari"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 italic">"I believe in the power of a still image to speak louder than a thousand frames of video. My work is about finding the soul in the silence."</p>
              <Button 
                to="#"
                variant="tertiary"
                className="text-primary font-label text-xs uppercase tracking-widest flex items-center gap-2 group p-0"
              >
                Full Biography
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Most Popular */}
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <h4 className="font-headline text-2xl mb-8">Most Popular</h4>
              <ul className="space-y-8">
                <li className="flex flex-col gap-2">
                  <span className="text-[10px] font-label uppercase text-primary tracking-[0.1rem]">01 Journal Entry</span>
                  <a className="font-headline text-lg hover:text-primary transition-colors" href="#">10 Hidden Gems for Photography in Civil Lines</a>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-[10px] font-label uppercase text-primary tracking-[0.1rem]">02 Technical Tips</span>
                  <a className="font-headline text-lg hover:text-primary transition-colors" href="#">Choosing the Right Film Stock for Weddings</a>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-[10px] font-label uppercase text-primary tracking-[0.1rem]">03 Experience</span>
                  <a className="font-headline text-lg hover:text-primary transition-colors" href="#">The First Look: A Private Sanctuary of Emotion</a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Lead Magnets */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-8 pt-8">
              {/* Subscribe */}
              <div className="border-l-4 border-primary pl-6 py-4 bg-surface-container-lowest shadow-sm">
                <h5 className="font-headline text-lg mb-2">Subscribe for Inspiration</h5>
                <p className="text-xs text-on-surface-variant mb-4">A monthly letter on light, life, and love.</p>
                <div className="flex">
                  <input className="w-full border-0 border-b border-outline-variant bg-transparent text-sm focus:ring-0 focus:border-primary px-0 pb-2" placeholder="Email Address" type="email" />
                  <button className="ml-2 text-primary"><Send className="w-4 h-4" /></button>
                </div>
              </div>
              {/* Free Guide */}
              <div className="p-8 bg-primary text-white">
                <h5 className="font-headline text-xl mb-4">Planning Your Story?</h5>
                <p className="text-xs opacity-90 leading-relaxed mb-6 font-light">Download our curated guide to 2024 wedding trends in Northern India.</p>
                <Button 
                  variant="secondary"
                  className="w-full border border-white/30 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-400 bg-transparent text-white"
                >
                  Get a Free Guide
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </aside>
      </section>
    </div>
  );
}
