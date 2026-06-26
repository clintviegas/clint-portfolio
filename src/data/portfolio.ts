export const siteConfig = {
  name: "Clint Viegas",
  url: "https://clint-viegas.vercel.app",
  email: "clint.viegas@gmail.com",
  whatsapp: "+17788699298",
  whatsappDisplay: "+1 (778) 869-9298",
  description:
    "Freelance developer building websites, web apps, and SaaS for businesses worldwide.",
  tagline: "Websites, apps & software — built to grow your business.",
  keywords: [
    "Clint Viegas",
    "freelance web developer Vancouver",
    "hire web developer Canada",
    "SaaS developer for hire",
    "website developer UAE",
    "custom web app development",
    "freelance software developer",
  ],
  availability: "Open for new projects",
  location: "Based in Vancouver · Available worldwide",
  responseTime: "Replies within 24 hours",
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  vertical: string;
  description: string;
  outcome: string;
  liveUrl?: string;
  featured: boolean;
  highlight?: boolean;
  kind: "production" | "demo";
  image: string;
  year?: string;
  seoTitle: string;
  seoDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
  role: string;
  region: string;
};

export const projects: Project[] = [
  {
    slug: "celpipace",
    title: "CELPIPACE",
    category: "Education · SaaS",
    vertical: "EdTech",
    description: "Full CELPIP prep platform — mock exams, subscriptions, live scoring.",
    outcome: "Live at celpipace.ca",
    liveUrl: "https://www.celpipace.ca",
    featured: true,
    highlight: true,
    kind: "production",
    image: "/projects/celpipace.png",
    year: "2025",
    seoTitle: "CELPIPACE Case Study — CELPIP Prep SaaS Platform",
    seoDescription:
      "How Clint Viegas built CELPIPACE — a full CELPIP preparation SaaS with mock exams, subscriptions, AI scoring, and progress tracking for students across Canada.",
    challenge:
      "Build a complete CELPIP preparation business from scratch — not just a website, but a subscription product with practice content, mock exams, user accounts, payments, and real-time scoring that students would pay for monthly.",
    solution:
      "Designed and developed the full platform end to end: practice sets across all four skills, eight full mock exams, Stripe subscriptions, Google sign-in, a progress dashboard, and AI-powered Writing and Speaking scoring with CLB-level feedback.",
    results: [
      "1,190+ practice questions live across Listening, Reading, Writing, and Speaking",
      "8 full mock exams with saved score reports",
      "Real-time CLB scoring for Writing and Speaking",
      "Stripe subscriptions with self-serve billing",
      "Production platform at celpipace.ca",
    ],
    deliverables: ["SaaS platform", "Payment system", "User auth", "AI scoring", "Admin dashboard", "SEO pages"],
    role: "Solo developer — product, design, build, and launch",
    region: "Canada",
  },
  {
    slug: "rekart-ae",
    title: "Rekart",
    category: "E-commerce · UAE",
    vertical: "Retail & E-commerce",
    description: "Rekart's main e-commerce platform — product catalog, brand presence, and customer-facing storefront.",
    outcome: "Live at rekart.ae",
    liveUrl: "https://rekart.ae",
    featured: true,
    highlight: true,
    kind: "production",
    image: "/projects/rekart-ae.png",
    year: "2025",
    seoTitle: "Rekart Case Study — E-commerce Platform UAE",
    seoDescription:
      "Case study: Rekart e-commerce platform at rekart.ae — retail storefront and brand web presence built for the UAE market.",
    challenge:
      "Rekart needed a polished e-commerce web presence that represents their brand, showcases products, and serves customers across the UAE with a professional, trustworthy online experience.",
    solution:
      "Designed and developed the Rekart storefront and brand site — clean product presentation, mobile-first layout, and a customer experience aligned with Rekart's retail operations.",
    results: [
      "Live e-commerce presence at rekart.ae",
      "Brand-aligned storefront for UAE customers",
      "Mobile-first shopping experience",
      "Integrated with Rekart's broader ops stack",
    ],
    deliverables: ["E-commerce website", "Brand storefront", "Product catalog", "Mobile UX"],
    role: "Developer — design and build",
    region: "UAE",
  },
  {
    slug: "scalify",
    title: "Scalify",
    category: "Brand · Web",
    vertical: "Creative Agency",
    description: "Full brand website and career platform for scalify.ae.",
    outcome: "Live at scalify.ae",
    liveUrl: "https://scalify.ae",
    featured: true,
    highlight: true,
    kind: "production",
    image: "/projects/scalify.png",
    year: "2025",
    seoTitle: "Scalify Case Study — Brand Website & Career Platform",
    seoDescription:
      "Case study: designing and developing scalify.ae — a bold brand website and creative intern recruitment platform built for conversion.",
    challenge:
      "Scalify needed a web presence that matched their creative brand — a site that impresses visitors, explains what they do, and converts internship applicants without feeling like a generic template.",
    solution:
      "Designed and built the full Scalify website and career platform — bold visual identity, animated UI, application flows, and a conversion-focused experience tailored to scalify.ae.",
    results: [
      "Full brand website live at scalify.ae",
      "Creative intern recruitment experience",
      "Conversion-focused landing and application flow",
      "Mobile-first, fast-loading design",
    ],
    deliverables: ["Brand website", "Career platform", "Application flow", "Responsive design"],
    role: "Designer & developer — end to end",
    region: "UAE",
  },
  {
    slug: "rekart-oms",
    title: "Rekart OMS",
    category: "Operations · Software",
    vertical: "Retail & E-commerce",
    kind: "production",
    description: "Order management for walk-in, field, and workshop sales.",
    outcome: "Production at Rekart",
    image: "/projects/rekart-oms.png",
    featured: true,
    year: "2025",
    seoTitle: "Rekart OMS Case Study — Order Management System",
    seoDescription:
      "Case study: Rekart OMS — an order management system for walk-in sales, field orders, and workshop desks with customer capture and product search.",
    challenge:
      "Rekart's sales team needed a fast way to punch orders from walk-in customers, field sales, and workshop desks — capturing customer details, searching products by SKU, and confirming orders without switching between tools.",
    solution:
      "Built a focused order management interface with customer forms, product search across the full catalog, quantity and pricing controls, order preview, and a streamlined punch-order workflow.",
    results: [
      "Unified order flow for walk-in, field, and workshop sales",
      "Product search by name or SKU across 89+ items",
      "Customer capture with UAE market and currency support",
      "Production tool used daily by the Rekart team",
    ],
    deliverables: ["Order management UI", "Product search", "Customer forms", "Order preview"],
    role: "Developer — full build",
    region: "UAE",
  },
  {
    slug: "leo-india",
    title: "Leo India",
    category: "Demo · Creative Agency",
    vertical: "Agency & Brand",
    description: "Bold creative agency site — mission, work showcase, accolades, and press. Premium motion-led UI.",
    outcome: "UI/UX demo template",
    liveUrl: "https://leo-website-kohl.vercel.app",
    featured: true,
    kind: "demo",
    image: "/projects/leo-india.png",
    year: "2025",
    seoTitle: "Leo India Demo — Creative Agency Website Template",
    seoDescription:
      "UI/UX demo: Leo India creative agency website template with work showcase, accolades timeline, and editorial press section.",
    challenge:
      "Showcase what's possible for a world-class creative agency — a site that feels editorial, premium, and award-winning without looking like a generic template.",
    solution:
      "Built a demo agency experience inspired by top-tier creative networks — bold typography, work carousels, accolades grid, news section, and smooth scroll-driven layout.",
    results: [
      "Full agency site structure — mission, work, people, accolades, news",
      "Editorial typography and premium dark/light contrast",
      "Demo live at leo-website-kohl.vercel.app",
      "Template adaptable for any creative or advertising agency",
    ],
    deliverables: ["Agency homepage", "Work showcase", "Accolades section", "Contact flow"],
    role: "Designer & developer — demo build",
    region: "Demo",
  },
  {
    slug: "gaurab-bhandari",
    title: "Gaurab Bhandari",
    category: "Demo · Film & Creative",
    vertical: "Film & Photography",
    description: "Filmmaker portfolio with hero video, services grid, reels, and print shop — cinematic and immersive.",
    outcome: "UI/UX demo template",
    liveUrl: "https://demo.gaurabbhandari.com",
    featured: true,
    kind: "demo",
    image: "/projects/gaurab-bhandari.png",
    year: "2025",
    seoTitle: "Gaurab Bhandari Demo — Filmmaker Portfolio Template",
    seoDescription:
      "UI/UX demo: filmmaker and visual artist portfolio with video hero, services, gallery, and cinematic layout at demo.gaurabbhandari.com.",
    challenge:
      "Demonstrate a portfolio template for filmmakers, drone operators, and visual artists — immersive, cinematic, and built to convert inquiries into bookings.",
    solution:
      "Designed a demo with full-screen video hero, service cards, featured reels grid, print shop teaser, and a warm creative aesthetic suited to Nepal/international creatives.",
    results: [
      "Cinematic video-first homepage",
      "Services, gallery, reels, and shop sections",
      "Demo live at demo.gaurabbhandari.com",
      "Template for photographers, filmmakers, and visual artists",
    ],
    deliverables: ["Portfolio site", "Video hero", "Services grid", "Reels showcase"],
    role: "Designer & developer — demo build",
    region: "Demo",
  },
  {
    slug: "celeson",
    title: "Celeson Enterprise",
    category: "Corporate · Web",
    vertical: "Corporate & Logistics",
    description: "Multi-region site for a 33+ year logistics company.",
    outcome: "Live corporate presence",
    liveUrl: "https://celeson-website.vercel.app",
    featured: true,
    kind: "production",
    image: "/projects/celeson.png",
    year: "2025",
    seoTitle: "Celeson Enterprise Case Study — Corporate Website",
    seoDescription:
      "Case study: Celeson Enterprise corporate website — multi-region presence for a 33+ year safety and logistics company across India and the GCC.",
    challenge:
      "Celeson needed a corporate website that reflects 33+ years of expertise in transport safety, logistics, and operational excellence — with separate paths for India and GCC markets, case studies, and service pages.",
    solution:
      "Built a multi-region corporate site with clear market segmentation, service area pages, case studies, and a professional presence that communicates trust and scale across India and the GCC.",
    results: [
      "Multi-region site for India and GCC markets",
      "Service pages across transport safety, logistics, and hospitality",
      "Case studies and proof sections",
      "Live at celeson-website.vercel.app",
    ],
    deliverables: ["Corporate website", "Multi-region routing", "Case study pages", "SEO structure"],
    role: "Developer — design and build",
    region: "India & GCC",
  },
  {
    slug: "ganesh",
    title: "Ganesh Khatri",
    category: "Portfolio · Web",
    vertical: "Film & Creative",
    description: "Cinematographer portfolio built to win Dubai clients.",
    outcome: "Live at vibewithgannu.vercel.app",
    liveUrl: "https://vibewithgannu.vercel.app",
    featured: true,
    kind: "production",
    image: "/projects/ganesh.png",
    year: "2025",
    seoTitle: "Ganesh Khatri Case Study — Cinematographer Portfolio",
    seoDescription:
      "Case study: personal portfolio website for Ganesh Khatri, cinematographer and videographer in Dubai — built to win clients with cinematic design.",
    challenge:
      "Ganesh needed a portfolio that feels as cinematic as his work — not a generic template, but a personal brand site that impresses potential clients in Dubai's competitive creative market.",
    solution:
      "Designed and built a polished portfolio focused on showreel presentation, visual storytelling, and a mobile-first experience that puts Ganesh's work front and center.",
    results: [
      "Cinematic portfolio live at vibewithgannu.vercel.app",
      "Mobile-first design for client browsing",
      "Personal brand positioning for Dubai market",
      "Fast, polished user experience",
    ],
    deliverables: ["Portfolio website", "Showreel layout", "Personal branding", "Mobile design"],
    role: "Designer & developer",
    region: "UAE",
  },
  {
    slug: "winklmayr-dashboard",
    title: "Winklmayr Dashboard",
    category: "Analytics",
    vertical: "SaaS & Dashboards",
    description: "Sales performance dashboard with revenue reporting.",
    outcome: "Live dashboard",
    liveUrl: "https://winklmayrsalesdashboard.vercel.app",
    featured: false,
    kind: "production",
    image: "/projects/dashboard.png",
    year: "2025",
    seoTitle: "Winklmayr Dashboard Case Study — Sales Analytics",
    seoDescription:
      "Case study: Winklmayr sales dashboard — analytics and revenue reporting built for business owners who need clear performance visibility.",
    challenge:
      "The business needed a clear view of sales performance — revenue trends, team results, and actionable data without digging through spreadsheets.",
    solution:
      "Built a sales dashboard with data visualization, performance metrics, and reporting designed for quick daily review by business owners.",
    results: [
      "Sales performance visible at a glance",
      "Revenue trend visualization",
      "Live dashboard deployed on Vercel",
    ],
    deliverables: ["Analytics dashboard", "Data visualization", "Reporting views"],
    role: "Developer",
    region: "International",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const productionProjects = projects.filter((p) => p.kind === "production");
export const demoProjects = projects.filter((p) => p.kind === "demo");

export const proofStats = [
  { num: "01", title: "10+ products", body: "Websites, SaaS platforms, and business software shipped to production." },
  { num: "02", title: "Worldwide", body: "Clients across North America, the Middle East, Europe, and beyond — fully remote." },
  { num: "03", title: "End to end", body: "One developer from idea to launch. No handoff, no agency overhead." },
  { num: "04", title: "Live products", body: "CELPIPACE, Rekart, Scalify — plus UI demos across agency, film, and SaaS verticals." },
];

export const services = [
  {
    num: "01",
    title: "Websites & Landing Pages",
    description: "Conversion-focused sites that turn visitors into leads — portfolios, business sites, and launches.",
    tags: ["Business sites", "Portfolios", "Landing pages"],
  },
  {
    num: "02",
    title: "Web & Mobile Apps",
    description: "Custom apps with auth, dashboards, payments, and everything your users need.",
    tags: ["Dashboards", "User accounts", "Payments"],
  },
  {
    num: "03",
    title: "SaaS & Business Software",
    description: "Order systems, inventory, marketing platforms — software that runs operations daily.",
    tags: ["SaaS", "Internal tools", "Automation"],
  },
];

export const process = [
  { step: "01", title: "Discover", body: "Quick call on WhatsApp — goals, audience, timeline, and budget." },
  { step: "02", title: "Plan", body: "Clear scope and design direction before a line of code is written." },
  { step: "03", title: "Build", body: "Regular previews. Your feedback at every stage. No surprises." },
  { step: "04", title: "Launch", body: "Deployed, tested, and handed over. Available for ongoing work." },
];

export const comparison = {
  headers: ["", "Working with me", "Agency", "Cheap freelancer"],
  rows: [
    { label: "Who builds it", me: "You work directly with me", agency: "Juniors after the sales call", cheap: "Varies every project" },
    { label: "Handoff", me: "None — one person start to finish", agency: "Design → dev → QA gaps", cheap: "You manage the chaos" },
    { label: "Speed", me: "Days to first preview, weeks to live", agency: "Weeks before you see work", cheap: "Depends on their queue" },
    { label: "Communication", me: "WhatsApp + email, direct line", agency: "Through account managers", cheap: "Timezone roulette" },
    { label: "Accountability", me: "One name on everything", agency: "Diffused across a team", cheap: "Hard to reach after launch" },
  ],
};

export const testimonials = [
  {
    quote:
      "Clint built my portfolio exactly how I wanted — cinematic, polished, and built to win clients in Dubai. Professional from start to launch.",
    name: "Ganesh Khatri",
    role: "Cinematographer · vibewithgannu.vercel.app",
  },
  {
    quote:
      "Our corporate site reflects 33+ years of expertise across India and the GCC. Clint understood our markets and delivered a presence we are proud of.",
    name: "Arun Alphones",
    role: "Celeson Enterprise",
  },
];

export const faqs = [
  {
    q: "What makes you different from an agency?",
    a: "One person handles everything — design, build, and launch. No handoff drift, faster timelines, and you always know who to call.",
  },
  {
    q: "How do we start?",
    a: "Message me on WhatsApp with your idea. I'll reply personally within 24 hours with next steps.",
  },
  {
    q: "Do you work with clients outside your timezone?",
    a: "Yes — I work with clients worldwide. Most communication happens over WhatsApp and email, async-friendly across time zones.",
  },
  {
    q: "What types of projects do you take?",
    a: "Websites, web apps, SaaS platforms, order/inventory systems, and marketing tools. If it runs in a browser, I can build it.",
  },
];

export const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Clint, I'd like to discuss a project with you.")}`;

export const emailLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Project inquiry")}&body=${encodeURIComponent("Hi Clint,\n\nI'd like to discuss a project with you.\n\n")}`;

export const workMarquee = projects
  .filter((p) => p.featured)
  .map((p) => ({ title: p.title, category: p.vertical }));
