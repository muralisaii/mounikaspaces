# Leela Mounika Indupurala — Interior Designer & Civil Engineer Portfolio

A premium, editorial architectural portfolio website for **Leela Mounika Indupurala**, showcasing residential and commercial interior design works, 2D AutoCAD drafting, 3D V-Ray/Enscape visualizations, and modular systems engineering.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## Highlights & Features

- **Editorial Aesthetic:** Inspired by high-end architectural magazines, featuring a curated warm ivory & charcoal palette, *Cormorant Garamond* serif headings, and *Plus Jakarta Sans* typography.
- **Custom Interactive Dot Cursor:**
  - Desktop-only smooth follower ring + inner precision dot.
  - Interactive states on links, buttons, and a specialized `"VIEW"` state over project cards.
  - Automatically disabled on touch screens and respects `prefers-reduced-motion`.
- **Curated Works Gallery:**
  - Dynamic filtering: *Living Room, Bedroom, Modular Kitchen, Space Planning (2D CAD), 3D Visualization*.
  - Full-screen Architectural Lightbox / Modal with perspective angle thumbnails, execution scope, and material specifications.
- **The Civil Engineering Advantage:** Articulates how a B.Tech in Civil Engineering provides an edge in structural feasibility, MEP/conduit coordination, and zero-error BOQ quotations.
- **7-Step Architectural Process:** Interactive timeline from *Client Consultation* to *Quotations & Cost Estimation*.
- **Direct PDF Download:** 1-click download of the complete verified PDF portfolio dossier.
- **Production Performance & SEO:** 100% static pre-rendered routes, `robots.txt`, `sitemap.xml`, OpenGraph tags, and responsive design.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + Custom CSS Design Tokens
- **Icons:** [lucide-react](https://lucide.dev/)
- **Fonts:** Google Fonts (*Cormorant Garamond*, *Plus Jakarta Sans*) via `next/font`

---

## Local Development

```bash
# Navigate to the project directory
cd portfolio-site

# Install dependencies (if not already installed)
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## Production Build Verification

```bash
npm run build
```

---

## Deployment Guide (GitHub & Vercel)

### Step 1: Push to GitHub
```bash
# Inside the portfolio-site directory (or root repository):
git add .
git commit -m "feat: complete luxury interior designer portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
2. Click **"Add New Project"** and import your repository.
3. If the Next.js app is located in `portfolio-site/`, set **Root Directory** to `portfolio-site`.
4. Keep the Framework Preset as **Next.js**.
5. Click **"Deploy"**. Vercel will automatically build and publish your portfolio with continuous deployment on every Git push.

---

## Author & Credits

- **Designer:** Leela Mounika Indupurala
- **Title:** Interior Designer & Civil Engineer
- **Experience:** RADIEK Company | Pragati Engineering College
- **Contact:** mounika6715@gmail.com | +91 9014764726
