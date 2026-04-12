# Progetto: Lux Lounge Bar - Sito Web Showcase Premium

**Data:** 2026-04-11
**Stato:** In Pianificazione
**Riferimento:** https://ashford.framer.media/

## Obiettivo
Creare un sito web vetrina di alto livello per "Lux Lounge Bar", ispirato all'estetica editoriale e minimalista del sito di riferimento Ashford. Il sito deve comunicare lussuosità, eleganza e un'atmosfera lounge sofisticata sul mare.

## Analisi Design System (Ispirazione Ashford)
- **Tipografia:** Uso di font sans-serif bold e all-caps per gli header (es. Geist o Inter con tracking ampio) e font puliti per il corpo del testo.
- **Layout:** Struttura a griglia asimmetrica, ampio uso di whitespace (spazio bianco), etichettatura delle sezioni con il prefisso `/`.
- **Colori:** Base scura (Rich Black/Charcoal) per un'atmosfera serale, contrastata da toni "carta" (off-white) e accenti eleganti (es. slate blue o muted gold).
- **Immagini:** Utilizzo delle immagini reali in `references/` con crop editoriali e overlay raffinati.
- **Ritmo:** Alternanza tra sezioni puramente visuali e sezioni informative con gerarchia visiva forte.

## Piano di Implementazione

### 1. Fondamenta (Design System)
- Configurazione `tailwind.config.ts` con i colori e la tipografia definita.
- Definizione degli stili globali in `globals.css` (smooth scroll, custom scrollbars).

### 2. Componenti Core
- `Navbar`: Logo (`references/Logo.png`), link interni, CTA telefono.
- `Hero`: Immagine impattante, Headline emozionale, CTA doppie (Menu & Contatti).
- `SectionLabel`: Componente per le etichette `/ Nome Sezione`.
- `PremiumButton`: Bottoni con hover state avanzati.

### 3. Sviluppo Sezioni
- **Hero:** Visuale immersiva del locale/mare.
- **Il Locale:** Storytelling con immagini e testo asimmetrico.
- **Cocktail Experience:** Gallery editoriale dei drink.
- **Menu:** Sezione dedicata con CTA esterna a `leggimenu.it`.
- **Gallery:** Griglia moderna "masonry-style" o asimmetrica.
- **Contatti & Location:** Info essenziali, link a Google Maps, design pulito.
- **Footer:** Chiusura elegante con info legali e social.

### 4. Raffinatezza e Animazioni
- Implementazione di Framer Motion per entry animations (fade-in, slide-up).
- Micro-interazioni sui bottoni e link.
- Ottimizzazione responsive (mobile-first).

## Asset Utilizzati
- `references/Logo.png` (Brand)
- `references/Screenshot 2026-04-11 *.png` (Immagini locale e cocktail)

## Prossimi Passi
1. Configurazione Tailwind e Base UI.
2. Sviluppo della struttura di pagina in `src/app/page.tsx`.
3. Raffinamento stilistico finale.
