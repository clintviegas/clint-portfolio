export const siteConfig = {
  name: "Clint Viegas",
  url: "https://clint-viegas.vercel.app",
  email: "clint.viegas@gmail.com",
  whatsapp: "+17788699298",
  whatsappDisplay: "+1 (778) 869-9298",
  // TODO: Add your LinkedIn profile URL
  linkedinUrl: "",
  // TODO: Add your GitHub profile URL
  githubUrl: "",
  // TODO: Add your Calendly or scheduling URL (falls back to WhatsApp until set)
  calendlyUrl: "",
  description:
    "Freelance web and software developer building websites, SaaS products, dashboards, automations, and business software.",
  tagline: "Websites, SaaS & business software — built to grow.",
  keywords: [
    "Clint Viegas",
    "web and software developer",
    "freelance web developer Vancouver",
    "hire web developer Canada",
    "SaaS developer for hire",
    "website developer UAE",
    "custom web app development",
    "freelance software developer",
    "Next.js developer",
  ],
  availability: "Available for freelance & remote roles",
  heroBadge: "Available for freelance & remote roles",
  heroHeadline: "Web & Software Developer building products that grow businesses.",
  heroSubheadline:
    "I build websites, SaaS products, dashboards, and automations for startups, agencies, and growing businesses.",
  photo: "/clint-photo.png",
};

export const aboutMe = {
  title: "Clint Viegas",
  subtitle: "Web & Software Developer",
  paragraphs: [
    "I'm a Full-Stack Developer passionate about building modern web applications, scalable software, and digital experiences that make a real impact.",
    "I enjoy transforming ideas into products—from high-converting marketing websites and custom business platforms to SaaS applications, dashboards, and internal tools. My approach combines clean architecture, thoughtful user experience, and modern technologies to create solutions that are fast, reliable, and built to scale.",
    "What I enjoy most about software development is solving problems. Every project presents a unique challenge, whether it's simplifying complex workflows, improving business operations, or creating intuitive experiences that people genuinely enjoy using. I'm always looking for better ways to build, optimize, and continuously improve every product I work on.",
    "Outside of development, I enjoy exploring emerging technologies, experimenting with new tools, and staying up to date with the rapidly evolving software landscape. I'm constantly learning because great developers never stop improving.",
    "I'm always excited to collaborate with startups, agencies, and businesses to build products that are thoughtful, performant, and designed for long-term success.",
  ],
};

export type HeroShowcaseWindow = {
  src: string;
  alt: string;
  href: string;
  label: string;
  top: string;
  left?: string;
  right?: string;
  width: string;
};

export const heroShowcaseWindows: HeroShowcaseWindow[] = [
  {
    src: "/projects/celpipace.png",
    alt: "CELPIPACE SaaS platform",
    href: "https://www.celpipace.ca",
    label: "CELPIPACE",
    top: "0%",
    left: "0%",
    width: "47%",
  },
  {
    src: "/projects/leo-india.png",
    alt: "Leo India creative agency site",
    href: "https://leo-website-kohl.vercel.app",
    label: "Leo India",
    top: "0%",
    right: "0%",
    width: "47%",
  },
  {
    src: "/projects/ganesh.png",
    alt: "Ganesh Khatri cinematographer portfolio",
    href: "https://vibewithgannu.vercel.app",
    label: "Ganesh Khatri",
    top: "34%",
    left: "2%",
    width: "45%",
  },
  {
    src: "/projects/gaurab-bhandari.png",
    alt: "Gaurab Bhandari filmmaker portfolio",
    href: "https://demo.gaurabbhandari.com",
    label: "Gaurab Bhandari",
    top: "34%",
    right: "0%",
    width: "47%",
  },
  {
    src: "/projects/celeson.png",
    alt: "Celeson Enterprise corporate website",
    href: "https://celeson-website.vercel.app",
    label: "Celeson",
    top: "68%",
    left: "26%",
    width: "48%",
  },
];

export type ProjectMetric = {
  label: string;
  value: string;
  isPlaceholder?: boolean;
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
  techStack: string[];
  impact: string;
  metrics: ProjectMetric[];
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
    techStack: ["Next.js", "React", "TypeScript", "Stripe", "OpenAI", "Supabase", "Vercel"],
    impact: "Turned a content idea into a subscription SaaS with AI scoring — students practice, pay, and track progress in one product.",
    metrics: [
      { label: "Practice content", value: "1,190+ questions live" },
      { label: "Mock exams", value: "8 full exams with score reports" },
      // TODO: replace with real metric
      { label: "Active subscribers", value: "Used by X users", isPlaceholder: true },
    ],
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
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: "Gave Rekart a professional UAE storefront that supports retail growth and brand trust online.",
    metrics: [
      { label: "Market", value: "Live at rekart.ae" },
      // TODO: replace with real metric
      { label: "Lead conversion", value: "Improved lead conversion by X%", isPlaceholder: true },
      // TODO: replace with real metric
      { label: "Performance", value: "Improved page speed by X%", isPlaceholder: true },
    ],
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
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    impact: "Delivered a bold agency site that converts visitors into internship applicants and brand inquiries.",
    metrics: [
      { label: "Launch", value: "Live at scalify.ae" },
      // TODO: replace with real metric
      { label: "Applications", value: "Generated X leads", isPlaceholder: true },
      // TODO: replace with real metric
      { label: "Timeline", value: "Launched MVP in X weeks", isPlaceholder: true },
    ],
    role: "Designer & developer — end to end",
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
    highlight: true,
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
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    impact: "Demonstrates premium agency UX patterns — adaptable template for creative and advertising brands.",
    metrics: [
      { label: "Demo", value: "Full agency site structure" },
      // TODO: replace with real metric when sold to a client
      { label: "Timeline", value: "Launched MVP in X weeks", isPlaceholder: true },
    ],
    role: "Designer & developer — demo build",
    region: "Demo",
  },
  {
    slug: "gaurab-bhandari",
    title: "Gaurab Bhandari",
    category: "Portfolio · Web",
    vertical: "Film & Photography",
    description: "Filmmaker portfolio with hero video, services grid, reels, and print shop — cinematic and immersive.",
    outcome: "Live at demo.gaurabbhandari.com",
    liveUrl: "https://demo.gaurabbhandari.com",
    featured: true,
    highlight: true,
    kind: "production",
    image: "/projects/gaurab-bhandari.png",
    year: "2025",
    seoTitle: "Gaurab Bhandari Case Study — Filmmaker Portfolio",
    seoDescription:
      "Case study: filmmaker and visual artist portfolio for Gaurab Bhandari — video hero, services, gallery, and cinematic layout at demo.gaurabbhandari.com.",
    challenge:
      "Gaurab needed a portfolio that feels as cinematic as his work — immersive, professional, and built to convert inquiries into bookings for drone, documentary, and commercial projects.",
    solution:
      "Designed and built a live portfolio with full-screen video hero, service cards, featured reels grid, print shop section, and a warm creative aesthetic for international clients.",
    results: [
      "Cinematic video-first homepage",
      "Services, gallery, reels, and shop sections live",
      "Portfolio at demo.gaurabbhandari.com",
      "Built to convert visitors into booking inquiries",
    ],
    deliverables: ["Portfolio site", "Video hero", "Services grid", "Reels showcase"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: "Gave a filmmaker a cinematic portfolio built to convert visitors into booking inquiries worldwide.",
    metrics: [
      { label: "Launch", value: "Live at demo.gaurabbhandari.com" },
      // TODO: replace with real metric
      { label: "Inquiries", value: "Improved lead conversion by X%", isPlaceholder: true },
    ],
    role: "Designer & developer",
    region: "Nepal · Worldwide",
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
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    impact: "Unified order entry for Rekart's sales team — one tool for walk-in, field, and workshop desks.",
    metrics: [
      { label: "Catalog", value: "89+ products searchable by SKU" },
      { label: "Usage", value: "Used daily by Rekart team" },
      // TODO: replace with real metric
      { label: "Efficiency", value: "Reduced manual work by X%", isPlaceholder: true },
    ],
    role: "Developer — full build",
    region: "UAE",
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
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: "Gave a 33+ year logistics company a credible multi-region web presence across India and the GCC.",
    metrics: [
      { label: "Markets", value: "India & GCC multi-region site" },
      // TODO: replace with real metric
      { label: "Inquiries", value: "Generated X leads", isPlaceholder: true },
    ],
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
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: "Helped a Dubai cinematographer stand out with a cinematic portfolio built to win client inquiries.",
    metrics: [
      { label: "Launch", value: "Live at vibewithgannu.vercel.app" },
      // TODO: replace with real metric
      { label: "Inquiries", value: "Improved lead conversion by X%", isPlaceholder: true },
    ],
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
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: "Replaced spreadsheet digging with a clear daily sales performance view for business owners.",
    metrics: [
      { label: "Deployment", value: "Live dashboard on Vercel" },
      // TODO: replace with real metric
      { label: "Team usage", value: "Used by X team members", isPlaceholder: true },
      // TODO: replace with real metric
      { label: "Efficiency", value: "Reduced manual work by X%", isPlaceholder: true },
    ],
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
  {
    num: "01",
    title: "10+ products",
    body: "Websites, SaaS platforms, and business software. Built properly, shipped on time, used by real people.",
  },
  {
    num: "02",
    title: "Worldwide",
    body: "Clients across North America, the Middle East, Europe, and beyond. Fully remote, zero excuses.",
  },
  {
    num: "03",
    title: "End to end",
    body: "One developer. Idea to launch. No handoffs, no agency markup, no waiting on someone else.",
  },
  {
    num: "04",
    title: "Live products",
    body: "Real clients, real launches. CELPIPACE, Rekart, Scalify, Leo India, Gaurab Bhandari and more. Every product live and in the wild.",
  },
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

export type StackCategory = "Framework" | "Backend" | "AI" | "DevTools" | "Infra";

export const aiStack: { name: string; category: StackCategory }[] = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Framework" },
  { name: "TypeScript", category: "Framework" },
  { name: "Tailwind CSS", category: "Framework" },
  { name: "Supabase", category: "Backend" },
  { name: "Firebase", category: "Backend" },
  { name: "Stripe", category: "Backend" },
  { name: "OpenAI", category: "AI" },
  { name: "Anthropic", category: "AI" },
  { name: "Claude Code", category: "AI" },
  { name: "Cursor", category: "DevTools" },
  { name: "Codex", category: "DevTools" },
  { name: "n8n", category: "DevTools" },
  { name: "MCP", category: "DevTools" },
  { name: "Vercel", category: "Infra" },
  { name: "Cloudflare", category: "Infra" },
];

export const clientLogos: { name: string; slug?: string; logoSrc?: string }[] = [
  { name: "CELPIPACE", slug: "celpipace" },
  { name: "Rekart", slug: "rekart-ae" },
  { name: "Scalify", slug: "scalify" },
  { name: "Celeson", slug: "celeson" },
  { name: "Leo India", slug: "leo-india" },
  { name: "Gaurab Bhandari", slug: "gaurab-bhandari" },
  // TODO: add logoSrc when client approves asset, e.g. logoSrc: "/logos/rekart.svg"
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We align on goals, users, constraints, timeline, and success metrics — so the build solves the right problem.",
  },
  {
    step: "02",
    title: "Design",
    body: "UX direction, architecture, and technical plan — clear scope before a line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    body: "Fast iteration with modern tooling. Regular previews and your feedback at every stage.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Deployed, tested, and handed over. Production-ready with documentation and clean handoff.",
  },
  {
    step: "05",
    title: "Iterate",
    body: "Post-launch improvements, automation, and scale — so the product keeps growing with your business.",
  },
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

export const featuredTestimonial = testimonials[1];

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
    a: "Websites, SaaS platforms, dashboards, automations, and business software. If it runs in a browser, I can build it.",
  },
];

export const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Clint, I'd like to discuss a project with you.")}`;

export const emailLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Project inquiry")}&body=${encodeURIComponent("Hi Clint,\n\nI'd like to discuss a project with you.\n\n")}`;

/** Falls back to WhatsApp until calendlyUrl is set in siteConfig */
export const scheduleLink =
  siteConfig.calendlyUrl.trim() !== "" ? siteConfig.calendlyUrl : whatsappLink;

export const workMarquee = projects
  .filter((p) => p.featured)
  .sort((a, b) => Number(Boolean(b.highlight)) - Number(Boolean(a.highlight)))
  .map((p) => ({ title: p.title, category: p.vertical }));
