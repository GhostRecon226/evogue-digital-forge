export type CaseStudyCategory =
  | "Product Design"
  | "Engineering"
  | "Strategy"
  | "Branding"
  | "AI and Automation";

export type CaseStudy = {
  slug: string;
  name: string;
  client: string;
  tags: string[];
  categories: CaseStudyCategory[];
  summary: string;
  metrics: string[];
  details: {
    client: string;
    industry: string;
    services: string;
    duration: string;
    year: string;
  };
  problem: string[];
  approach: string[];
  outcome: string[];
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "project-alpha",
    name: "Project Alpha",
    client: "Fintech startup, West Africa",
    tags: ["WEB APP", "FINTECH", "STRATEGY"],
    categories: ["Product Design", "Engineering", "Strategy"],
    summary:
      "A full product engagement from strategy through to launch. We designed and built a fintech platform serving users across the region.",
    metrics: ["12 Weeks to Launch", "3x User Growth", "West Africa"],
    details: {
      client: "Confidential fintech startup",
      industry: "Financial Services",
      services: "Strategy, Product Design, Engineering",
      duration: "12 weeks",
      year: "2024",
    },
    problem: [
      "The founding team had a strong thesis on underserved SME banking across West Africa, but no clear path from idea to a shippable product. Earlier attempts had stalled in design loops and unclear scope.",
      "They needed a partner who could move from strategy into delivery without handoffs — and ship something real users could touch within a single quarter.",
    ],
    approach: [
      "We ran a focused two-week discovery to lock the core value proposition, then committed to a tight MVP scope: onboarding, KYC, accounts, and transfers.",
      "Design and engineering moved in parallel from week three. We shipped weekly to a private beta and rebuilt around the patterns that real users actually used.",
    ],
    outcome: [
      "The platform launched on schedule. Onboarding completion sat above 70% from week one, and active users tripled in the first 90 days post-launch.",
      "The team now operates the product independently, with a roadmap they own and a system that won't fight them as they scale.",
    ],
    seo: {
      title: "Project Alpha — West African Fintech Built in 12 Weeks",
      description:
        "How Evogue Consulting designed, built, and launched a fintech platform for a West African startup in 12 weeks — and grew active users 3x.",
      ogImage: "/og/project-alpha.jpg",
    },
  },
  {
    slug: "project-beta",
    name: "Project Beta",
    client: "Logistics company, Global",
    tags: ["BRANDING", "DESIGN"],
    categories: ["Branding", "Product Design"],
    summary:
      "Brand identity and digital presence for a logistics company operating across multiple markets.",
    metrics: ["Full Brand System", "4 Markets", "6 Weeks"],
    details: {
      client: "Global logistics operator",
      industry: "Logistics & Supply Chain",
      services: "Brand Identity, Web Design",
      duration: "6 weeks",
      year: "2024",
    },
    problem: [
      "After a decade of organic growth, the company's identity was a patchwork of regional sub-brands. Customers across markets were seeing four different versions of the same business.",
      "Leadership wanted one coherent brand without losing the regional character that made local teams effective.",
    ],
    approach: [
      "We audited every customer-facing asset across the four markets, then built a single visual system flexible enough to flex regionally without fragmenting.",
      "The new identity rolled out behind a redesigned website that doubles as the brand's source of truth for partners and internal teams.",
    ],
    outcome: [
      "The company shipped a unified brand across four markets in six weeks. Internal teams now pull from one system instead of negotiating one-off assets.",
      "Sales materials, the website, and partner collateral all speak with the same voice for the first time in the company's history.",
    ],
    seo: {
      title: "Project Beta — Unified Brand for a Global Logistics Operator",
      description:
        "A single, flexible brand system rolled out across four markets in six weeks for a global logistics company. Strategy, identity, and digital presence by Evogue.",
      ogImage: "/og/project-beta.jpg",
    },
  },
  {
    slug: "project-gamma",
    name: "Project Gamma",
    client: "E-commerce operation",
    tags: ["AI", "AUTOMATION"],
    categories: ["AI and Automation", "Engineering"],
    summary:
      "Custom AI agents and workflow automations that cut operational overhead and improved fulfilment speed.",
    metrics: ["40% Ops Time Saved", "3 Automations Built", "8 Weeks"],
    details: {
      client: "Mid-market e-commerce brand",
      industry: "E-commerce",
      services: "AI Agents, Workflow Automation",
      duration: "8 weeks",
      year: "2024",
    },
    problem: [
      "The operations team was drowning in repetitive work: order triage, customer support classification, and supplier follow-ups were all manual and brittle.",
      "Hiring more people wasn't the answer. They needed leverage, not headcount.",
    ],
    approach: [
      "We mapped every recurring workflow, then built three AI agents that took the high-volume, low-judgement work off the team's plate while flagging anything that needed a human.",
      "Each agent shipped behind a dashboard the ops team controls directly — no engineering tickets to tune behavior.",
    ],
    outcome: [
      "Operations time dropped by 40% in the first month. Order-to-fulfilment time improved measurably, and the support backlog shrank to near zero.",
      "The team can now scale order volume without scaling the back office.",
    ],
    seo: {
      title: "Project Gamma — AI Agents That Cut E-commerce Ops Time by 40%",
      description:
        "Three custom AI agents and workflow automations gave a mid-market e-commerce brand 40% of its operations time back in eight weeks. Built by Evogue.",
      ogImage: "/og/project-gamma.jpg",
    },
  },
  {
    slug: "project-delta",
    name: "Project Delta",
    client: "SaaS startup, Europe",
    tags: ["WEB APP", "ENGINEERING"],
    categories: ["Engineering", "Product Design"],
    summary:
      "End-to-end engineering for a SaaS platform targeting small businesses across Europe.",
    metrics: ["MVP in 10 Weeks", "500+ Beta Users", "Europe"],
    details: {
      client: "Early-stage SaaS startup",
      industry: "SaaS / SMB Tools",
      services: "Product Design, Full-stack Engineering",
      duration: "10 weeks",
      year: "2024",
    },
    problem: [
      "The founders had validated demand through interviews and a waiting list, but no engineering capacity to convert that demand into a product.",
      "They needed an MVP that could survive contact with 500+ beta users without becoming a maintenance burden later.",
    ],
    approach: [
      "We chose a deliberately boring stack and shipped the smallest version of the product that solved the core job. Everything beyond that waited.",
      "Beta users came in waves of 50 so we could feel the system breathe before adding the next batch.",
    ],
    outcome: [
      "The platform onboarded over 500 beta users across multiple European markets without an outage. Conversion to paid tiers began in week eight.",
      "The codebase the founders inherited is one they can extend themselves.",
    ],
    seo: {
      title: "Project Delta — European SaaS MVP Shipped in 10 Weeks",
      description:
        "End-to-end engineering for a European SaaS startup: MVP shipped in 10 weeks, 500+ beta users onboarded without an outage, paid conversion by week eight.",
      ogImage: "/og/project-delta.jpg",
    },
  },
  {
    slug: "project-epsilon",
    name: "Project Epsilon",
    client: "NGO, East Africa",
    tags: ["STRATEGY", "CONSULTING"],
    categories: ["Strategy"],
    summary:
      "Product strategy and digital roadmap for an NGO scaling its reach across East Africa.",
    metrics: ["6-Month Roadmap", "3 Country Rollout", "East Africa"],
    details: {
      client: "Regional NGO",
      industry: "Non-profit / Development",
      services: "Strategy, Roadmap, Advisory",
      duration: "8 weeks",
      year: "2024",
    },
    problem: [
      "The NGO was preparing to triple its operational footprint across East Africa, but its digital tooling had been built incrementally and couldn't carry the new scale.",
      "Leadership needed a clear-eyed view of what to keep, what to rebuild, and what to retire — without paralysing the teams already in the field.",
    ],
    approach: [
      "We spent three weeks talking to field staff, programme leads, and donors to understand what actually mattered, then sequenced a six-month roadmap against funding cycles.",
      "Every recommendation was tied to a specific operational outcome the NGO could measure.",
    ],
    outcome: [
      "The roadmap is now the operating plan for the next three country rollouts. Two of the three are already in flight.",
      "The leadership team has a shared language for digital decisions that didn't exist before the engagement.",
    ],
    seo: {
      title: "Project Epsilon — Six-Month Digital Roadmap for an East African NGO",
      description:
        "Product strategy and a six-month digital roadmap that is now powering a three-country rollout for an East African NGO. Strategy by Evogue Consulting.",
      ogImage: "/og/project-epsilon.jpg",
    },
  },
  {
    slug: "project-zeta",
    name: "Project Zeta",
    client: "Corporate team, Nigeria",
    tags: ["TRAINING", "ADVISORY"],
    categories: ["Strategy"],
    summary:
      "A structured training programme for a corporate team transitioning into agile product practices.",
    metrics: ["20 Team Members", "8-Week Programme", "Lagos"],
    details: {
      client: "Corporate product team",
      industry: "Enterprise",
      services: "Training, Advisory",
      duration: "8 weeks",
      year: "2024",
    },
    problem: [
      "A 20-person team inside a larger organisation was being asked to operate as a product team for the first time, without the practices or shared vocabulary that work demands.",
      "Off-the-shelf training hadn't stuck. Leadership wanted something tailored to the team's actual day-to-day.",
    ],
    approach: [
      "We built an eight-week programme that paired weekly sessions with applied work on the team's real backlog. No hypothetical exercises.",
      "Each session left them with a practice they used the same week.",
    ],
    outcome: [
      "By the end of the programme, the team was running their own discovery, planning, and review rituals without external facilitation.",
      "Leadership now treats the unit as a model for how other product teams inside the organisation should operate.",
    ],
    seo: {
      title: "Project Zeta — Agile Product Training for a 20-Person Corporate Team",
      description:
        "An eight-week applied training programme that turned a 20-person corporate unit in Lagos into a self-running product team. Programme by Evogue.",
      ogImage: "/og/project-zeta.jpg",
    },
  },
];

export const filterCategories: ("All" | CaseStudyCategory)[] = [
  "All",
  "Product Design",
  "Engineering",
  "Strategy",
  "Branding",
  "AI and Automation",
];
