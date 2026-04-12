"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const INSTAGRAM_URL = "https://www.instagram.com/lux.lounge.bar";

export function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(8, 8, 8, 0)", "rgba(8, 8, 8, 0.8)"]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(24px)"]);
  const borderBottom = useTransform(scrollY, [0, 100], ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(255, 255, 255, 0.05)"]);

  return (
    <motion.nav 
      style={{ backgroundColor, backdropBlur, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 h-28 px-6 md:px-12 flex items-center justify-between transition-all duration-500"
    >
      <Link href="/" className="relative h-16 w-40 md:w-56 transition-transform hover:scale-105 active:scale-95">
        <Image
          src="/Logo.png"
          alt="Lux Lounge Bar"
          fill
          className="object-contain brightness-125"
          priority
        />
      </Link>

      <div className="hidden lg:flex items-center gap-12">
        {['locale', 'cocktails', 'menu', 'gallery', 'contatti'].map((item) => (
          <Link 
            key={item}
            href={`#${item}`} 
            className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-neon transition-all duration-300 relative group"
          >
            {item === 'locale' ? 'Il Locale' : item.charAt(0).toUpperCase() + item.slice(1)}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-neon transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a 
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-neon transition-all hover:rotate-12"
        >
          <Globe className="size-4" />
        </a>
        <a 
          href="https://www.leggimenu.it/menu/menulux" 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }), "h-12 px-10 rounded-none border-white/10 neon-gradient text-white font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,20,147,0.2)]")}
        >
          Menu
        </a>
      </div>
    </motion.nav>
  );
}
