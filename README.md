# ZONEXPORT — Free Fire MAX Esports Tournament Landing Website

A premium, mobile-first esports tournament landing website for **ZONEXPORT**, an India-focused
skill-based Free Fire MAX tournament platform. Built with plain **HTML, CSS and JavaScript**
(no build step) and a dark purple / cyan / neon-blue gaming aesthetic.

The layout, section flow, typography hierarchy, card style, hamburger navigation and mobile
responsiveness closely follow the supplied design reference, while all branding, content and
visual assets are original to ZONEXPORT (the original "GameClash" brand is used nowhere).

---

## ✅ Completed Features

- **Fixed glass header** — blurred navy/purple bar, ZONEXPORT circular logo, scroll-aware shadow.
  - **Mobile:** hamburger → animated slide-in navigation drawer with overlay + Languages accordion.
  - **Desktop (≥900px):** full horizontal nav (Home, Tournaments, Features, Leaderboard, About, Terms), Languages dropdown, and a "Download App" CTA.
  - Active nav link highlights based on scroll position.
- **Hero section** — dark navy→purple gradient, diagonal neon lines, glowing orbs, floating particles,
  original Free Fire MAX-style promo banner ("CLASH HARD. WIN BIG REWARDS."), ZONEXPORT title,
  description, **DOWNLOAD NOW** + **EXPLORE TOURNAMENTS** CTAs, and animated stat counters.
- **App Screenshot section** — light section with 3 cards (EASY TO USE / DAILY MATCHES / EARN & REDEEM),
  each with a pure-CSS ZONEXPORT phone mockup UI.
- **Features section** — dark purple section with **tab navigation** (Daily Matches / Earn & Redeem /
  Easy to Use), neon active underline, smooth tab switching and a large phone mockup per tab.
- **Tournaments section** — light section with category groups (CS Headshot², CS M1887 Headshot,
  CS 1-Gun HS, Battle Royale, Clash Squad, Lone Wolf). Cards are data-driven and show banner, mode
  badges, title, progress bar, players joined/max, date & time, WIN PRIZE %, PER KILL %, entry fee
  and a JOIN button (links to the APK).
- **Top 10 Players leaderboard** — responsive Place / User / Wins table, #1/#2/#3 highlighted,
  row hover, no horizontal overflow on mobile.
- **Download CTA** — full-width glowing purple/cyan section with a large **DOWNLOAD NOW** button
  (real APK link) and official website link.
- **About + Footer** — About ZONEXPORT copy, 4-column footer (Explore / Company / Get the App + brand),
  social icons, and © 2026 ZONEXPORT copyright.
- **Animations** — scroll reveal, neon hover glow, card lift, button glow, particles, count-up stats,
  animated hamburger; all respect `prefers-reduced-motion`.
- **Responsive** — mobile-first, verified 360–430px phones through tablet, desktop and large desktop.
  No horizontal scroll, no overflow, no overlapping.
- **SEO** — semantic HTML5, meta description/keywords, Open Graph tags, favicon.

## 🔗 Functional Entry Points (paths & links)

| Path / Link | Purpose |
|---|---|
| `index.html` | Single-page site (all sections) |
| `#home` | Hero |
| `#app-screens` | App screenshot cards |
| `#features` | Features + tabs |
| `#tournaments` | Tournament listings |
| `#leaderboard` | Top 10 players |
| `#download` | Download CTA |
| `#about` | About ZONEXPORT |
| `#terms` | Footer / Terms area |
| APK download | `https://github.com/mahali386/ZONEXPORT/releases/download/V1/ZONEXPORT.apk` |
| Official website | `https://zonexport.site.je` |

## 🗂 Project Structure

```
index.html            Main page (semantic sections, all content)
css/style.css         Mobile-first styles, neon gaming theme, responsive breakpoints
js/main.js            Drawer, tabs, tournament & leaderboard data, reveal, particles, counters
images/
  logo.png            ZONEXPORT circular logo (AI-generated, original)
  hero-banner.png     Hero promo banner (AI-generated, original)
  tournament-1.png    2v2 Clash Squad tournament banner (AI-generated, original)
  tournament-2.png    Battle Royale tournament banner (AI-generated, original)
README.md
```

## 🧩 Data Models (client-side JS, in `js/main.js`)

- **tournament**: `{ group, banner, badges[[label,class]], title, joined, max, date, time, win, kill, entry }`
- **player**: `{ u (username), w (wins) }`

Data is defined as JS arrays and rendered into the DOM — no backend or database is used.

## 🖼 Note on Visual Assets

- Logo, hero banner and two tournament banners were generated as **original** artwork.
- The **phone/app mockups** are built with **pure HTML + CSS** (not images), so they stay crisp
  at every resolution.
- Image generation credits ran out before the standalone in-phone screenshot images could be
  generated, so those app screens are the CSS mockups rather than raster screenshots. **You mentioned
  you will upload your own real app screenshots** — drop them into `images/` and they can be swapped
  in to replace the CSS mockups.

## 🚧 Not Yet Implemented / Next Steps

- Replace CSS phone mockups with your **real app screenshots** once you upload them.
- Optional: standalone raster in-phone screenshot images (blocked earlier by exhausted image credits).
- Optional: a full Terms & Conditions / Privacy Policy content page (currently anchor to footer).
- Optional: live tournament data via the RESTful Table API instead of static JS arrays.
- Optional: multi-language content (the Languages menu is UI-only right now).

## 🚀 Deployment

To publish and get a live URL, open the **Publish tab** and deploy with one click.
