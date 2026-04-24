import falaProductsThumb from "@/assets/case-studies/fala-products.jpg";
import futureTechAcademyThumb from "@/assets/case-studies/the-future-tech-academy.jpg";

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
  detailTags?: string[];
  categories: CaseStudyCategory[];
  summary: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  metrics: string[];
  details: {
    client: string;
    industry: string;
    services: string;
    duration?: string;
    year?: string;
    location?: string;
    website?: string;
  };
  problem: string[];
  approach: string[];
  outcome: string[];
  testimonial?: {
    quote: string;
    name: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fala-products",
    name: "Fala Products",
    client: "Solar fans and lifestyle essentials brand, Nigeria",
    tags: ["E-COMMERCE", "BRANDING", "STRATEGY"],
    detailTags: ["E-COMMERCE", "BRANDING", "STRATEGY", "ADVISORY"],
    categories: ["Branding", "Product Design", "Strategy"],
    summary:
      "Built the brand identity, e-commerce website, and business strategy for a Nigerian solar and lifestyle brand entering the market.",
    thumbnail: falaProductsThumb,
    thumbnailAlt: "Fala Products solar fan and lifestyle essentials",
    metrics: ["Full Brand System", "Website Launch", "Strategy and Advisory"],
    details: {
      client: "Fala Production Ltd.",
      industry: "E-Commerce, Consumer Goods",
      services: "Brand Identity, Web Design and Development, Business Strategy, Advisory",
      location: "Nigeria",
      website: "www.falaproducts.com",
    },
    problem: [
      "Fala Production Ltd. had a real product and a clear market. What they didn't have was a digital presence that matched the quality of what they were selling. As a brand entering the e-commerce space, they needed more than just a website. They needed a coherent identity, a strategy for how to show up online, and a foundation they could grow from.",
    ],
    approach: [
      "We came in at the ground level. Before we touched a design tool or wrote a line of code, we spent time understanding the business, the product range, the target customer, and the competitive landscape. From there we delivered on four fronts: brand identity, website design and build, business strategy, and ongoing advisory support through the early phase.",
    ],
    outcome: [
      "Fala Products launched with a digital presence that punches above its weight for an early-stage brand. The website is live, the brand identity is consistent, and the business has a clear strategic foundation to build from. They are now in their early growth phase with the tools and thinking in place to scale.",
    ],
    testimonial: {
      quote:
        "Evogue didn't just build us a website. They helped us think through the entire business from the ground up. We launched with confidence because we had a team that actually cared about whether we succeeded.",
      name: "Fala Products Team",
    },
    seo: {
      title: "Fala Products — Brand, E-commerce & Strategy for a Nigerian Solar Brand",
      description:
        "How Evogue Consulting built the brand identity, e-commerce website, and business strategy for Fala Products, a Nigerian solar fans and lifestyle essentials brand.",
      ogImage: "/og/fala-products.jpg",
    },
  },
  {
    slug: "the-future-tech-academy",
    name: "The Future Tech Academy",
    client: "Forex and AI training academy, Nigeria",
    tags: ["EDUTECH", "BRANDING", "STRATEGY"],
    detailTags: ["EDUTECH", "BRANDING", "STRATEGY", "ADVISORY"],
    categories: ["Branding", "Strategy"],
    summary:
      "Built the brand identity, website, and business strategy for a Forex and AI training academy entering a competitive market.",
    thumbnail: futureTechAcademyThumb,
    thumbnailAlt: "The Future Tech Academy — Forex and AI training in Nigeria",
    metrics: ["Full Brand System", "Website Launch", "Strategy and Advisory"],
    details: {
      client: "The Future Tech Academy",
      industry: "EduTech, Financial Education",
      services: "Brand Identity, Web Design and Development, Business Strategy, Advisory",
      location: "Nigeria",
      website: "www.thefuturetechacademy.com",
    },
    problem: [
      "The Future Tech Academy had a clear mission: teach practical Forex trading and AI skills to people serious about building financial and technical literacy. The problem was credibility. In a market crowded with unserious operators and questionable courses, they needed a digital presence that immediately communicated trust, professionalism, and substance. A brand and website that made the right people stop scrolling.",
    ],
    approach: [
      "We started where we always start, with the business. We spent time understanding who the Academy was trying to reach, what made their teaching approach different, and how to position them clearly in a noisy space. From there we built the brand identity, designed and built the website, worked through the business strategy, and stayed on as advisors through the early phase.",
    ],
    outcome: [
      "The Future Tech Academy launched with a brand and digital presence that sets them apart in a crowded market. The website is live, the identity is consistent and credible, and the business has a clear strategic foundation to grow its student base and expand its course offerings.",
    ],
    testimonial: {
      quote:
        "We knew what we wanted to teach. Evogue helped us figure out how to show up. The brand and website they built gave us instant credibility with exactly the kind of students we wanted to attract.",
      name: "The Future Tech Academy Team",
    },
    seo: {
      title: "The Future Tech Academy — Brand, Website & Strategy for a Forex and AI Academy",
      description:
        "How Evogue Consulting built the brand identity, website, and business strategy for The Future Tech Academy, a Forex and AI training academy in Nigeria.",
      ogImage: "/og/the-future-tech-academy.jpg",
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
