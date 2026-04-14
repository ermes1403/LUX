import Link from "next/link";
import Image from "next/image";
import { Globe, Share } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/lux.lounge.bar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-32 px-6 md:px-12">
      <div className="editorial-grid">
        <div className="md:col-span-5 space-y-12">
          <Link href="/" className="relative h-16 w-48 block transition-transform hover:scale-105">
            <Image
              src="/logo.png"
              alt="Lux Lounge Bar"
              fill
              className="object-contain"
            />
          </Link>
          <p className="text-muted-foreground text-lg max-w-sm font-light leading-relaxed text-balance">
            L&apos;eccellenza della mixology nella Marina di Pizzo. Un&apos;oasi di stile dove il design incontra il battito del mare.
          </p>
          <div className="flex gap-8 pt-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon transition-all group">
              <Globe className="size-5 group-hover:scale-110" />
            </a>
            <a href="#" className="text-white/40 hover:text-neon transition-all group">
              <Share className="size-5 group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8 mt-20 md:mt-0">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Navigazione</h4>
          <ul className="space-y-6">
            {['locale', 'cocktails', 'menu', 'gallery'].map((item) => (
              <li key={item}>
                <Link href={`#${item}`} className="text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-widest font-light">
                  {item === 'locale' ? 'Il Locale' : item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 space-y-8 mt-20 md:mt-0">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Contatti</h4>
          <ul className="space-y-6">
            <li className="text-sm text-muted-foreground font-light leading-relaxed italic">
              Lungomare Cristoforo Colombo, 52/56, <br /> 89812 Pizzo VV
            </li>
            <li className="text-sm text-white font-bold tracking-widest font-sans underline underline-offset-8 decoration-neon/30 italic">327 319 2481</li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-8 mt-20 md:mt-0">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white font-sans">Dati Legali</h4>
          <ul className="space-y-4 font-sans">
            <li className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
              Lux Lounge Bar di [Ragione Sociale]<br />
              P.IVA: [Inserire P.IVA]<br />
              REA: [Inserire Numero REA]
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold font-sans">
            © 2026 LUX LOUNGE BAR. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[8px] uppercase tracking-[0.3em] text-neon/40 font-bold italic font-sans">
            designed by ERMETE MUSOLINO
          </p>
        </div>
        <div className="flex gap-10 font-sans">
          <Link href="/privacy" className="text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-neon transition-colors font-bold">Privacy Policy</Link>
          <Link href="/cookie" className="text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-neon transition-colors font-bold">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
