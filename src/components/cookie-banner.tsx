"use client";

import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== 'undefined' ? localStorage.getItem("cookie-consent") : null;
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-6 animate-reveal">
      <div className="max-w-4xl mx-auto bg-background/95 backdrop-blur-xl border border-white/10 p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-white/60 leading-relaxed max-w-2xl text-center md:text-left font-light tracking-wide">
          Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Continuando la navigazione, accetti la nostra 
          <a href="/privacy" className="text-neon underline ml-1">Privacy Policy</a> secondo il regolamento GDPR.
        </p>
        <button 
          onClick={acceptCookies}
          className={cn(buttonVariants({ size: "sm" }), "w-full md:w-auto px-10 h-10")}
        >
          Accetta
        </button>
      </div>
    </div>
  );
}
