# SVYEP — Silicon Valley Youth Entrepreneurship Program

The official website for the **Silicon Valley Youth Entrepreneurship Program (SVYEP)**, a student-run nonprofit connecting high school students with entrepreneurship resources, networking events, internships, and industry professionals across Silicon Valley and beyond.

🌐 **Live site:** [svyep.org](https://svyep.org)

---

## About SVYEP

SVYEP empowers the next generation of entrepreneurs by providing:
 
- **Connections** — In-person speaker events, networking sessions, and Zoom webinars with industry leaders
- **Experience** — Paid internships, volunteer opportunities at local Silicon Valley startups, and hands-on work with professionals
- **Education** — Student-led workshops and access to a nationwide network of schools

**By the numbers:**
- 1,900+ members
- $305,000+ raised
- 215,000+ students impacted
- 25+ internships facilitated
- 60+ businesses partnered with

---

## Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Animations:** [Motion](https://motion.dev/), [Lottie](https://lottiefiles.com/)
- **Content:** MDsveX (Markdown)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- Node.js `v20.19` or higher
- npm

### Installation

```bash
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── lib/
│   ├── articles/        # Markdown article files
│   ├── components/      # Reusable Svelte components
│   ├── data/            # Static site data (team, events, stats)
│   └── logos/           # Partner and sponsor logos
├── routes/              # SvelteKit pages
│   ├── about/
│   ├── articles/
│   ├── events/
│   ├── impact/
│   ├── join/
│   ├── donate/
│   └── partner/
static/
└── images/              # Static images and assets
```

---

## Deployment

The site is deployed on **Vercel**. Pushing to the `main` branch triggers an automatic deployment.

---

© 2025 Silicon Valley Youth Entrepreneurship Program
