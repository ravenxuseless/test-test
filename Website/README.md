# Leander Bergemann — Portfolio Website

Modulare Portfolio- & Bewerbungswebsite, gebaut mit **Next.js (App Router)**, **React** und **TailwindCSS**.

## Setup

```powershell
# Im Ordner Website/
npm install
npm run dev
```

Dann im Browser: http://localhost:3000

## Build / Production

```powershell
npm run build
npm run start
```

## Struktur

```
Website/
├── app/                     # Next.js App Router (Routing)
│   ├── layout.js            # Root Layout: Navbar + Footer
│   ├── page.js              # Startseite
│   ├── globals.css          # Tailwind + globale Styles
│   ├── ueber-mich/
│   ├── lebenslauf/
│   ├── faehigkeiten/
│   ├── kontakt/
│   ├── portfolio/
│   │   ├── page.js                  # Übersicht
│   │   ├── kategorie/[slug]/        # Dynamisch: Kategorie-Seite
│   │   └── [slug]/                  # Dynamisch: Einzelprojekt
│   └── case-studies/
│       ├── page.js
│       └── [slug]/                  # Dynamisch: Einzel-Case-Study
│
├── components/
│   ├── navigation/Navbar.js
│   ├── layout/Footer.js
│   ├── sections/  (PageHero, SectionHeader, TimelineItem)
│   └── cards/     (ProjectCard, SkillCard)
│
├── data/                    # ALLE Inhalte zentral & datenbasiert
│   ├── navigation.js
│   ├── socialLinks.js
│   ├── about.js
│   ├── skills.js
│   ├── experience.js
│   ├── portfolio.js
│   └── caseStudies.js
│
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

## Inhalte erweitern

Alle Inhalte liegen unter `data/`. Beispiele:

- **Neues Projekt:** in `data/portfolio.js` zum `projects`-Array hinzufügen
- **Neuer Skill:** in `data/skills.js` zu passender Gruppe ergänzen
- **Neuer Lebenslauf-Eintrag:** in `data/experience.js`
- **Neue Case Study:** in `data/caseStudies.js`

## Routing-Übersicht

| Pfad | Inhalt |
|------|--------|
| `/` | Startseite (Hero + Highlights + Featured Projects) |
| `/ueber-mich` | Über-mich-Text + Fakten |
| `/lebenslauf` | Timeline-Ansicht |
| `/faehigkeiten` | Skill-Gruppen |
| `/portfolio` | Übersicht + Kategorien |
| `/portfolio/kategorie/[slug]` | Projekte einer Kategorie |
| `/portfolio/[slug]` | Einzelnes Projekt |
| `/case-studies` | Case-Study-Übersicht |
| `/case-studies/[slug]` | Einzelne Case Study |
| `/kontakt` | Kontaktformular + Social Links |

## Nächste Schritte

- [ ] Bild von Leander einfügen (`/public/leander.jpg` + in Hero & Über-mich einbinden)
- [ ] Portfolio-Bilder hinzufügen (Cover + Galerie)
- [ ] Lebenslauf-Daten aus PDF mit echten Daten füllen
- [ ] Kontaktformular an Backend / E-Mail-Service anbinden
- [ ] Animationen (Framer Motion / GSAP) nachrüsten

## Design

- Farbwelt: tiefes Schwarz, dunkles Lila, neon-lila Akzent (siehe `tailwind.config.js`)
- Fonts: Inter (Body) + Space Grotesk (Display) via Google Fonts
- Stil: modern, minimalistisch, futuristisch, kreativ — wie in `Anleitung/Design.txt` beschrieben
