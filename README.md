# Clint Viegas — Portfolio

SEO-optimized freelance developer portfolio built with **Next.js 15** (App Router, static generation).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) for automatic SSR/SSG, sitemap, and Open Graph support.

## Customize

Edit `src/data/portfolio.ts` to update:

- Email, domain URL, social links
- Projects, services, skills, testimonials

Update `siteConfig.url` before deploying so sitemap, canonical URLs, and Open Graph tags point to your live domain.

## SEO included

- Server-rendered static HTML (prerendered at build time)
- Meta tags, Open Graph, Twitter cards
- JSON-LD structured data (Person, WebSite, ProfessionalService)
- `sitemap.xml` and `robots.txt`
- Semantic HTML and accessible navigation
