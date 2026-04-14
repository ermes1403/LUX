import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-48">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-16 text-neon neon-text-glow">Privacy Policy.</h1>
        <div className="space-y-8 text-white/60 font-light leading-relaxed">
          <p>
            Benvenuti nella Privacy Policy di Lux Lounge Bar. La tua privacy è estremamente importante per noi.
          </p>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">1. Raccolta Dati</h2>
            <p>
              Raccogliamo solo i dati necessari per fornire i nostri servizi, come informazioni di contatto fornite volontariamente o dati di navigazione anonimi.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">2. Utilizzo dei Dati</h2>
            <p>
              I dati vengono utilizzati esclusivamente per migliorare la tua esperienza sul sito, gestire le prenotazioni o rispondere alle tue richieste.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">3. Diritti dell&apos;Utente</h2>
            <p>
              Hai il diritto di accedere, rettificare o richiedere la cancellazione dei tuoi dati personali in qualsiasi momento contattandoci via email o telefono.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
