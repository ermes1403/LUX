import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function CookiePolicy() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-48">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-16 text-neon neon-text-glow">Cookie Policy.</h1>
        <div className="space-y-8 text-white/60 font-light leading-relaxed">
          <p>
            Questa informativa spiega come utilizziamo i cookie per migliorare la tua esperienza su questo sito.
          </p>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Cosa sono i cookie?</h2>
            <p>
              I cookie sono piccoli file di testo memorizzati sul tuo dispositivo per ricordare le tue preferenze e fornirti contenuti personalizzati.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Tipologie di cookie utilizzati</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookie Tecnici:</strong> Necessari per il corretto funzionamento del sito.</li>
              <li><strong>Cookie Analitici:</strong> Usati in modo aggregato per capire come gli utenti interagiscono con il sito.</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Gestione dei cookie</h2>
            <p>
              Puoi configurare il tuo browser per rifiutare o cancellare i cookie in qualsiasi momento. Tuttavia, alcune funzionalità del sito potrebbero risultare compromesse.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
