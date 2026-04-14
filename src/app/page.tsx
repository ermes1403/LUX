"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Phone, ArrowUpRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const INSTAGRAM_URL = "https://www.instagram.com/lux.lounge.bar";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Lux+Lounge+Bar+Lungomare+Cristoforo+Colombo+52+56+Pizzo";

const reviews = [
  { name: "Cosima Colonna", text: "Sicuramente è il bar meglio gestito dove io sia mai stata... prodotti sempre freschi, di ottima qualità, educazione e professionalità ai massimi livelli.", rating: 5 },
  { name: "Sara Balestrini", text: "Locale veramente molto carino, nella Marina di Pizzo. Panorama mozzafiato, tramonti sul mare da restare senza fiato. Un'esperienza imperdibile.", rating: 5 },
  { name: "Ron", text: "Ottimo posto, servizio impeccabile, cibo di qualità e una vista sul tramonto che non ha eguali. Consigliatissimo per chi cerca l'eccellenza.", rating: 5 },
  { name: "Giuseppe La Russa", text: "Locale dinamico, gestito da ragazzi giovani, gentili e capaci. Ottimi cocktail e taglieri davvero abbondanti e di qualità superiore.", rating: 5 }
];

const RevealText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("overflow-hidden py-1", className)}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroBgScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const imageContainerClass = "relative overflow-hidden border border-white/10 transition-all duration-700 hover:border-neon hover:shadow-[0_0_30px_rgba(255,20,147,0.3)] group";

  return (
    <main ref={containerRef} className="relative bg-background min-h-screen">
      <div className="noise-overlay" />
      <Navbar />
      <CookieBanner />

      {/* HERO SECTION */}
      <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroBgScale }} className="absolute inset-0 z-0">
          <img
            src="/screenshot-hero.png"
            alt="Lux Lounge Bar Waterfront"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </motion.div>
        
        <motion.div 
          style={{ opacity: heroTextOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center"
        >
          <div className="flex flex-col items-center gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "1.5em" }}
              animate={{ opacity: 0.5, letterSpacing: "0.5em" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <SectionLabel className="mb-0 text-white/50">/ Marina di Pizzo Calabro</SectionLabel>
            </motion.div>
            
            <h1 className="text-[clamp(2.5rem,15vw,10rem)] leading-[0.8] font-black tracking-tighter text-white uppercase italic">
              <RevealText>LUX</RevealText>
              <RevealText className="text-neon mt-[-0.1em] neon-text-glow">LOUNGE BAR</RevealText>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-2xl mx-auto text-sm md:text-lg text-white font-light tracking-[0.25em] uppercase leading-relaxed"
            >
              L&apos;eccellenza della mixology <br className="hidden md:block" /> a pochi passi dalle onde del mare.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-4"
            >
              <a 
                href="https://www.leggimenu.it/menu/menulux" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "min-w-[240px] h-16 rounded-none neon-gradient text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_rgba(255,20,147,0.4)]")}
              >
                Esplora il Menu <ArrowUpRight className="ml-2 size-4" />
              </a>
              <a 
                href="tel:3273192481"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-w-[240px] h-16 rounded-none border-white/10 font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all duration-500")}
              >
                Chiama Ora
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <motion.div 
            animate={{ height: [0, 64, 0], y: [0, 32, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] bg-gradient-to-b from-white to-transparent"
          />
        </div>
      </section>

      {/* IL LOCALE */}
      <section id="locale" className="py-32 md:py-64 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="editorial-grid items-center">
            <div className="md:col-span-6 space-y-12">
              <SectionLabel className="text-neon/50">L&apos;Identità</SectionLabel>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase italic">
                <RevealText>PIÙ VICINO</RevealText>
                <RevealText className="text-neon neon-text-glow">AL MARE.</RevealText>
              </h2>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 text-muted-foreground text-lg md:text-2xl font-light leading-relaxed max-w-xl"
              >
                <p>
                  Situato nel cuore della Marina di Pizzo, Lux Lounge Bar è il punto d&apos;incontro tra design moderno e il suono delle onde.
                </p>
                <p className="text-white/80">
                  Un rifugio esclusivo fronte mare dove ogni cocktail racconta una story di ricerca e passione.
                </p>
                <div className="pt-8">
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-xs font-black tracking-[0.4em] uppercase text-white hover:text-neon transition-colors">
                    <span className="h-[1px] w-12 bg-neon group-hover:w-20 transition-all duration-500" />
                    Scopri la Posizione
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-6 relative mt-16 md:mt-0">
              <motion.div 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={cn(imageContainerClass, "aspect-[3/4] md:aspect-square")}
              >
                <img
                  src="/screenshot-7.png"
                  alt="Interni Lux Lounge"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -left-10 md:-left-20 p-8 md:p-16 bg-neon text-white font-black text-2xl md:text-5xl italic tracking-tighter uppercase leading-none shadow-[0_0_50px_rgba(255,20,147,0.5)]"
              >
                EST. 2024 <br /> WATERFRONT
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8">
            {[
              { v: "100+", l: "Signature Cocktails" },
              { v: "5.0", l: "Google Rating" },
              { v: "12+", l: "Premium Reserves" },
              { v: "0m", l: "Distance From Sea" }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                <span className="text-5xl md:text-7xl font-black text-neon italic tracking-tighter neon-text-glow">{s.v}</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">{s.l}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COCKTAILS */}
      <section id="cocktails" className="py-32 md:py-64 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:mb-48">
            <SectionLabel className="text-neon/50">Liquid Passion</SectionLabel>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-12">
              <h2 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
                <RevealText>ALCHIMIA</RevealText>
                <RevealText className="text-white/10">LIQUIDA.</RevealText>
              </h2>
              <p className="max-w-sm text-muted-foreground text-lg md:text-xl font-light leading-relaxed border-l-2 border-neon pl-8">
                Ogni drink è una creazione unica, miscelata con cura dai nostri mixologist per regalarvi momenti indimenticabili.
              </p>
            </div>
          </div>

          <div className="editorial-grid">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={cn(imageContainerClass, "md:col-span-8")}
            >
              <img
                src="/screenshot-3.png"
                alt="Lux Signature Drink"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            <div className="md:col-span-4 flex flex-col justify-center space-y-16 md:pl-16">
              {[
                { t: "Ingredienti Freschi", d: "Soli agrumi locali e botaniche costiere di stagione raccolte a mano." },
                { t: "Atmosfera Lounge", d: "Selezioni musicali deep-house e ambient curate dai migliori DJ locali." },
                { t: "Gusto Iconico", d: "Il nostro Mojito è diventato leggenda nella Marina per il suo equilibrio perfetto." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-neon font-black tracking-[0.4em] text-[10px] uppercase italic neon-text-glow">{item.t}</h4>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white/[0.01] py-32 md:py-64 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <SectionLabel className="text-neon/50">Experiences</SectionLabel>
            <h2 className="text-6xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none uppercase mt-12">FEEDBACK.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {reviews.map((r, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-12 md:p-20 border border-white/10 bg-background relative group hover:border-neon hover:shadow-[0_0_30px_rgba(255,20,147,0.1)] transition-all duration-700"
              >
                <Quote className="absolute top-12 right-12 size-16 text-white/[0.02] group-hover:text-neon/5 transition-all duration-700" />
                <div className="flex gap-2 mb-8">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="size-4 fill-neon text-neon" />)}
                </div>
                <p className="text-xl md:text-3xl text-white/90 font-light italic leading-relaxed mb-12">&quot;{r.text}&quot;</p>
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-black">{r.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU CALLOUT */}
      <section id="menu" className="py-48 md:py-80 relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.01, 0.03, 0.01] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[40vw] font-black italic uppercase tracking-tighter">MENU</span>
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <SectionLabel className="mb-16 text-neon/50">Digital Taste</SectionLabel>
          <h2 className="text-6xl md:text-[10vw] font-black text-white tracking-tighter mb-24 italic uppercase leading-none">
            SCOPRI IL <br /> <span className="text-neon not-italic neon-text-glow">NOSTRO MENÙ!</span>
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a 
              href="https://www.leggimenu.it/menu/menulux" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-24 px-20 text-xs tracking-[0.5em] uppercase neon-gradient text-white font-black shadow-[0_0_50px_rgba(255,20,147,0.4)]")}
            >
              APRI IL MENU <ArrowUpRight className="ml-4 size-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 md:py-64 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
            <div>
              <SectionLabel className="text-neon/50">Moments</SectionLabel>
              <h2 className="text-6xl md:text-[9rem] font-black text-white italic tracking-tighter leading-none uppercase mt-12">GALLERY.</h2>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.5em] text-neon font-black hover:text-white transition-colors pb-4 border-b border-neon">
              @lux.lounge.bar
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="md:col-span-2 space-y-4 md:space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                className={cn(imageContainerClass, "aspect-[4/5]")}
              >
                <img src="/screenshot-1.png" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                className={cn(imageContainerClass, "aspect-video")}
              >
                <img src="/screenshot-6.png" alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </motion.div>
            </div>
            
            <div className="space-y-4 md:space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className={cn(imageContainerClass, "aspect-square")}
              >
                <img src="/screenshot-2.png" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className={cn(imageContainerClass, "aspect-[3/4]")}
              >
                <img src="/screenshot-4.png" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contatti" className="py-32 md:py-64 px-6 bg-white/[0.01] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="editorial-grid">
            <div className="md:col-span-7 space-y-20">
              <SectionLabel className="text-neon/50">Connect</SectionLabel>
              <h2 className="text-7xl md:text-[11rem] font-black text-white italic leading-[0.8] tracking-tighter uppercase">VIENI A <br /> <span className="text-neon not-italic neon-text-glow">TROVARCI.</span></h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-24">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-10">
                  <h4 className="text-neon text-[10px] tracking-[0.6em] font-black uppercase flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-neon" /> Location
                  </h4>
                  <p className="text-white/80 text-2xl md:text-3xl font-light italic leading-tight">
                    Lungomare Cristoforo Colombo, 52/56, <br /> 89812 Pizzo VV
                  </p>
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/40 border-b border-white/10 pb-2 hover:text-neon hover:border-neon transition-all duration-500">
                    Navigate Maps <ArrowUpRight className="size-3" />
                  </a>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-10">
                  <h4 className="text-neon text-[10px] tracking-[0.6em] font-black uppercase flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-neon" /> Contact
                  </h4>
                  <p className="text-white/80 text-2xl md:text-3xl font-light tracking-tighter italic">327 319 2481</p>
                  <a href="tel:3273192481" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/40 border-b border-white/10 pb-2 hover:text-neon hover:border-neon transition-all duration-500">
                    Direct Call <Phone className="size-3" />
                  </a>
                </motion.div>
              </div>
            </div>

            <div className="md:col-span-5 relative mt-32 md:mt-0">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(imageContainerClass, "aspect-square p-6 bg-white/[0.02]")}
              >
                <div className="relative w-full h-full overflow-hidden border border-white/5">
                  <img src="/screenshot-8.png" alt="Atmosphere" className="w-full h-full object-cover brightness-[0.4]" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center p-12 border border-white/10 backdrop-blur-md w-full bg-black/20">
                      <span className="text-neon text-[10px] tracking-[0.6em] uppercase mb-10 block font-black neon-text-glow">Open Daily</span>
                      <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">18:00 <br /> <span className="text-white/10 not-italic block my-4">—</span> <br /> 02:00</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
