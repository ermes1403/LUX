# Project Overview
Questo è un'applicazione web moderna basata su **Next.js 16** (App Router), sviluppata con **React 19**, **TypeScript** e **Tailwind CSS 4**. Per l'interfaccia utente viene utilizzata la libreria **shadcn/ui**, che fornisce componenti accessibili e personalizzabili integrati direttamente nel codice sorgente.

## Main Technologies
- **Framework:** Next.js 16.2.3 (App Router)
- **UI Library:** shadcn/ui (basata su Base UI e Lucide React)
- **Styling:** Tailwind CSS 4 (PostCSS)
- **Language:** TypeScript 5
- **Icons:** Lucide React

## Architecture
- `src/app/`: Contiene le rotte, i layout e le pagine dell'applicazione (App Router).
- `src/components/ui/`: Componenti UI atomici gestiti da shadcn.
- `src/lib/`: Utility condivise, inclusa la funzione `cn` per la gestione dinamica delle classi Tailwind in `src/lib/utils.ts`.
- `public/`: Asset statici come immagini e font.

# Building and Running
Il progetto utilizza npm come gestore di pacchetti predefinito.

- **Sviluppo Locale:** `npm run dev` (avvia il server su http://localhost:3000)
- **Build di Produzione:** `npm run build`
- **Avvio Produzione:** `npm run start`
- **Linting:** `npm run lint`

# Development Conventions
- **Feature Design Workflow:** Ogni volta che viene richiesta lo sviluppo di una nuova funzionalità o implementazione, è obbligatorio:
  1. Verificare data e ora correnti.
  2. Creare un documento di progetto nella cartella `/docs` nominato `yyyy-mm-dd-nome-funzione.md`.
  3. Descrivere nel documento l'implementazione prevista e ciò che verrà sviluppato.
  4. Attendere esplicita conferma dell'utente prima di procedere con lo sviluppo.
- **Componenti UI:** Non installare librerie UI esterne se non strettamente necessario; preferire l'aggiunta di nuovi componenti shadcn tramite `npx shadcn@latest add [component-name]`.
- **Styling:** Utilizzare esclusivamente classi utility di Tailwind CSS. Evitare file CSS separati tranne che per `globals.css`.
- **TypeScript:** Mantenere una tipizzazione rigorosa. Evitare l'uso di `any`.
- **Import Alias:** Utilizzare l'alias `@/` per riferirsi alla directory `src/` (es. `import { Button } from "@/components/ui/button"`).
- **File Naming:** Utilizzare `kebab-case` per i nomi dei file e delle cartelle (es. `my-component.tsx`).
