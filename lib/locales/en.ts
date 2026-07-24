import type { SiteLocaleContent } from "@/lib/locales/types";

export const enContent: SiteLocaleContent = {
  metadata: {
    home: {
      title: "WorkUnit s.r.o. | Work teams and subcontracting services",
      description:
        "WorkUnit provides work teams and subcontracting services for construction, logistics and manufacturing projects in Slovakia and across the EU.",
      openGraphDescription:
        "Reliable work teams for projects in Slovakia, Czechia, Germany, Austria and the Netherlands.",
    },
    services: {
      title: "Services | WorkUnit s.r.o.",
      description:
        "WorkUnit services for construction, warehouse logistics and manufacturing projects.",
      openGraphDescription:
        "Work teams and subcontracting services for construction, logistics and manufacturing.",
    },
    projects: {
      title: "Projects and references | WorkUnit s.r.o.",
      description:
        "Anonymised project types and a clear structure for future approved WorkUnit references.",
      openGraphDescription:
        "Case studies and references will be added once the relevant details are approved.",
    },
    about: {
      title: "About us | WorkUnit s.r.o.",
      description: "The WorkUnit story, company resources, values and markets served.",
      openGraphDescription:
        "WorkUnit grew from hands-on construction experience and real project work.",
    },
    faq: {
      title: "FAQ | WorkUnit s.r.o.",
      description:
        "Answers to common questions about workers, teams, countries, pricing, accommodation and cooperation.",
      openGraphDescription: "Common questions about WorkUnit teams and cooperation.",
    },
    contact: {
      title: "Contact | WorkUnit s.r.o.",
      description: "Contact WorkUnit by phone, email or through our project enquiry form.",
      openGraphDescription:
        "Enquire about a work team or subcontracting cooperation for your B2B project.",
    },
    recruitment: {
      title: "Looking for work | WorkUnit s.r.o.",
      description:
        "Looking for contract work in construction, logistics or manufacturing? Send your details to WorkUnit and we may contact you when a suitable opportunity arises.",
    },
    cookies: {
      title: "Cookie policy | WorkUnit s.r.o.",
      description: "Information about cookies used on www.workunit.sk.",
    },
    privacy: {
      title: "Privacy policy | WorkUnit s.r.o.",
      description:
        "How WorkUnit processes personal data, including data submitted through contact forms.",
    },
    thankYou: {
      title: "Thank you | WorkUnit s.r.o.",
      description: "Confirmation that your WorkUnit enquiry has been submitted.",
      openGraphDescription: "The WorkUnit team will contact you as soon as possible.",
    },
    workerThankYou: {
      title: "Thank you | WorkUnit s.r.o.",
      description: "Confirmation that your details have been submitted to WorkUnit's HR team.",
      openGraphDescription:
        "We have received your details and may contact you when a suitable contract or work opportunity becomes available.",
    },
  },
  media: {
    homepageHero: "Work team arriving at a construction project with a van in the background",
    servicesHero: "Work team in an industrial setting ready for a project",
    construction: "Construction workers on a modern building project",
    projectsHero: "Coordination of a work team on a construction and industrial project",
    projectConstructionGermany: "Workers being coordinated on a large construction site",
    projectRoofing: "Roofing specialists working on a flat roof",
    projectLogistics: "Warehouse logistics with forklift operation and goods handling",
    projectManufacturing: "Installation work in a manufacturing facility",
    aboutHero: "Work team and coordinator at a construction site base",
    aboutFacilities: "Two work vans, tools and practical project equipment",
    projectProof: "Worker coordination and document checks on a construction site",
    contactHero: "Worker beside a van on a construction project",
    faqHero: "Work team coordination during a project briefing",
  },
  common: {
    coverage: {
      eyebrow: "Where we operate",
      title: "Work teams for Slovakia and selected EU markets",
      description:
        "WorkUnit clearly identifies the countries it serves. Its strongest practical experience is in Germany and Czechia.",
    },
    countries: [
      { code: "SK", name: "Slovakia", note: "registered office and home market" },
      { code: "CZ", name: "Czechia", note: "practical project experience" },
      { code: "DE", name: "Germany", note: "key market and practical experience" },
      { code: "AT", name: "Austria", note: "important commercial market" },
      { code: "NL", name: "Netherlands", note: "important commercial market" },
    ],
    cta: {
      eyebrow: "Start a conversation",
      title: "Do you need a reliable team for your project?",
      description:
        "Send us the type of work, country, expected start date and number of workers required. We will check availability and suggest the next steps.",
      buttonLabel: "Contact WorkUnit",
    },
  },
  home: {
    hero: {
      eyebrow: "Construction · Logistics · Manufacturing",
      title: "Work teams for construction, logistics and manufacturing projects",
      description:
        "WorkUnit provides subcontracting services and reliable workers to companies in Slovakia, Germany, Czechia, Austria, the Netherlands and other EU countries.",
      primaryCta: "Contact WorkUnit",
      secondaryCta: "View services",
    },
    trustStats: [
      { value: "Established", label: "in 2022" },
      { value: "Typical deployment", label: "within 5–7 days" },
      { value: "Small and larger", label: "work teams" },
      { value: "Project experience", label: "in Germany and Czechia" },
    ],
    audiences: {
      eyebrow: "Who we work with",
      title: "For companies that need extra capacity without added complexity",
      description:
        "Our typical contact is a site manager or decision-maker handling seasonal demand, a new project or a tight deadline.",
      items: [
        "construction companies",
        "major general contractors",
        "logistics companies",
        "manufacturing and installation facilities",
        "local firms requiring smaller subcontract packages",
        "international companies assessing a potential supplier",
      ],
    },
    servicesSection: {
      eyebrow: "Services at a glance",
      title: "Construction is our strongest field",
      description: "All core services are presented clearly on one page.",
      actionLabel: "View section",
    },
    processSection: {
      eyebrow: "Cooperation process",
      title: "From the first conversation to approved time sheets",
      description:
        "The process makes it clear what information the client should prepare and how communication will work throughout the project.",
    },
    collaborationSteps: [
      { title: "Contact us", description: "Phone or email is the quickest way to reach us." },
      {
        title: "Review the brief",
        description: "We discuss the work, country, location, timing, team size and expectations.",
      },
      {
        title: "Check availability",
        description: "We review capacity and assemble a suitable team for the trade and country.",
      },
      {
        title: "Agree the terms",
        description: "Commercial and administrative terms are tailored to the specific project.",
      },
      {
        title: "Prepare deployment",
        description: "Workers have the PPE, training or permits required by the project.",
      },
      {
        title: "Communicate during delivery",
        description: "Communication runs through workers, the team lead or WorkUnit as required.",
      },
      {
        title: "Approve time sheets",
        description: "Attendance and hours worked are confirmed through agreed time sheets.",
      },
    ],
    benefitsSection: {
      eyebrow: "Practical advantages",
      title: "Practical resources and a stable cooperation model",
      description:
        "We state only confirmed facts: 2 Renault Master work vans, basic cordless tools, a typical range of 1–10 workers and experience primarily in Germany and Czechia.",
      items: [
        {
          title: "Typical deployment within 5–7 days",
          description:
            "We can respond quickly to a standard enquiry; larger or specialist requirements are assessed individually.",
        },
        {
          title: "Small and larger teams",
          description:
            "We typically provide 1–10 workers, from pairs to larger crews depending on the project.",
        },
        {
          title: "Reliable workers",
          description:
            "WorkUnit combines its own personnel, established collaborators and subcontractors.",
        },
        {
          title: "Vehicles and tools",
          description: "Two Renault Master work vans and basic cordless tools are available.",
        },
      ],
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Work teams matched to the project, trade and country",
      description:
        "WorkUnit primarily supplies workers and work teams. By agreement, it may also take responsibility for a defined part of project delivery, but it does not act as the general contractor.",
      cta: "I need a work team",
    },
    overview: {
      eyebrow: "Service overview",
      title: "All core capabilities in one place",
      description:
        "Our main services are presented on a single page, with construction as the most important commercial field.",
    },
    items: [
      {
        id: "stavebnictvo",
        number: "01",
        title: "Construction",
        eyebrow: "Core field",
        description:
          "Work teams for construction projects, including roofing, skilled trades, installation and finishing work based on project requirements.",
        items: [
          "flat-roof installers",
          "pitched-roof installers",
          "sheet-metal workers",
          "painters",
          "bricklayers",
          "concrete workers",
          "window installers",
          "crane operators",
          "excavator operators",
          "general labourers",
          "installation work",
          "finishing work",
          "façade work",
          "dry lining",
          "electrical work subject to availability",
          "welding subject to availability",
          "reinforcement work",
        ],
        note: "Specific trades and worker numbers are confirmed against the brief and available capacity.",
      },
      {
        id: "skladova-logistika",
        number: "02",
        title: "Warehouse logistics",
        eyebrow: "Operational capacity",
        description:
          "Teams for warehouse and logistics operations where reliability, pace and the ability to adapt to operational needs are essential.",
        items: [
          "forklift operation",
          "goods handling",
          "loading",
          "unloading",
          "general warehouse work",
          "logistics processes tailored to the operation",
        ],
      },
      {
        id: "vyroba",
        number: "03",
        title: "Manufacturing",
        eyebrow: "Industry and assembly",
        description:
          "Workers for manufacturing and assembly environments, particularly straightforward production and installation tasks agreed for the project.",
        items: [
          "assembly work",
          "manufacturing personnel",
          "industrial projects",
          "straightforward production and installation work by agreement",
        ],
      },
    ],
    process: {
      eyebrow: "How cooperation works",
      title: "A clear process before team deployment",
      description:
        "The client provides the work type, project location, timing, team size, required trades, expected duration and administrative requirements.",
    },
    provide: {
      title: "What we can provide",
      description:
        "Individual workers, complete teams, established collaborators, transport where available, work vans and basic cordless tools. Each crew has a responsible person who supports organisation on site.",
    },
    clientNeeds: {
      title: "What we need from the client",
      description:
        "A contract or purchase order, project brief, country and work location, timing, worker numbers, required trades and country-specific administrative requirements.",
    },
    ctaTitle: "Do you need a team for a long-term project?",
  },
  projects: {
    hero: {
      eyebrow: "Projects and experience",
      title: "References presented without invented client claims",
      description:
        "Client names, logos, photographs and measured results have not yet been approved for publication. We therefore present anonymised project types and clearly identify what will be added later.",
      cta: "Enquire about a similar project",
    },
    notice:
      "This version deliberately avoids client names, logos and unverified figures. Approved case studies, photographs and project results can be added once they are available for publication.",
    items: [
      {
        title: "Construction project in Germany",
        description:
          "Representative project type. Specific details will be added after client approval.",
        code: "DE / BUILD",
        type: "Anonymised project",
        image: "projectConstructionGermany",
      },
      {
        title: "Roofing and insulation work",
        description:
          "Representative project type. Specific details will be added after client approval.",
        code: "ROOF / CASE",
        type: "Case study details to follow",
        image: "projectRoofing",
      },
      {
        title: "Logistics operation",
        description:
          "Representative project type. Specific details will be added after client approval.",
        code: "LOG / EU",
        type: "Photographs and figures to follow",
        image: "projectLogistics",
      },
      {
        title: "Assembly work in manufacturing",
        description:
          "Representative project type. Specific details will be added after client approval.",
        code: "PROD / MNT",
        type: "Anonymised project",
        image: "projectManufacturing",
      },
    ],
    cardNote:
      "Specific details, client names and outcomes will be added after client approval.",
    future: {
      eyebrow: "Future evidence",
      title: "Reserved for approved client logos",
      description:
        "References, projects, logos and photographs exist, but have not yet been supplied or approved for publication.",
    },
    clientLogo: "Client logo",
    cta: {
      title: "Does your project need a work team?",
      description:
        "Send us the type of work, country, worker numbers and expected start date. WorkUnit will review capacity and the available options.",
    },
  },
  about: {
    hero: {
      eyebrow: "About the company",
      title: "A business built on hands-on construction experience",
      description:
        "WorkUnit grew from practical project experience where workmanship, reliability and having the right people available at the right time make the difference.",
      cta: "Contact WorkUnit",
    },
    identity: {
      eyebrow: "Who we are",
      title: "Reliable workers and subcontractors selected for each assignment",
      description:
        "The company combines its own personnel, established collaborators and subcontractors according to the project.",
      paragraphs: [
        "Before founding the company, managing director Michael Krennert worked as a flat-roof installer. Construction, particularly flat- and pitched-roof insulation, therefore formed WorkUnit's natural foundation.",
        "The business developed steadily, won assignments and expanded its partnerships. Communication remains direct and free from exaggerated promises, with an emphasis on workmanship, fair terms and long-term stability.",
      ],
    },
    values: {
      eyebrow: "Values",
      title: "Quality, reliability and fair terms",
      description: "Our values reflect practical experience and the way the company works.",
      items: [
        {
          title: "Workmanship",
          description:
            "Teams are selected based on experience, communication and evidence of previous work.",
        },
        {
          title: "Reliability",
          description:
            "Long-term cooperation depends on fair agreements, attendance and recorded working hours.",
        },
        {
          title: "Fairness",
          description:
            "Pricing and terms are agreed individually so that cooperation works for both parties.",
        },
        {
          title: "Responsiveness",
          description: "For a standard assignment, deployment is typically possible within 5–7 days.",
        },
        {
          title: "Stability",
          description:
            "WorkUnit focuses primarily on long-term projects and established collaborators.",
        },
      ],
    },
    facilities: {
      eyebrow: "Resources",
      title: "Practical equipment for project delivery",
      description:
        "We state only confirmed resources: 2 Renault Master work vans, basic cordless tools, established collaborators and teams with a responsible lead.",
      items: [
        "2 Renault Master work vans",
        "basic cordless tools",
        "workers with their own PPE",
        "a responsible person in every crew",
      ],
    },
    timelineSection: {
      eyebrow: "Timeline",
      title: "From construction experience to international projects",
    },
    timeline: [
      {
        year: "before 2022",
        title: "Hands-on construction experience",
        description:
          "Managing director Michael Krennert worked as a flat-roof installer, creating the company's practical foundation.",
      },
      {
        year: "2022",
        title: "WorkUnit s.r.o. established",
        description:
          "The company grew from construction experience and projects where quality and reliability matter.",
      },
      {
        year: "2023",
        title: "VAT registration",
        description: "WorkUnit continued to professionalise its operations for B2B cooperation.",
      },
      {
        year: "today",
        title: "Projects in Slovakia and abroad",
        description:
          "The business focuses primarily on long-term projects and work teams across the EU.",
      },
    ],
  },
  faq: {
    hero: {
      eyebrow: "Frequently asked questions",
      title: "Answers before your first enquiry",
      description:
        "Specific terms always depend on the project, country, trade and duration. These answers provide a clear starting point.",
      cta: "Ask another question",
    },
    items: [
      {
        question: "How quickly can you provide workers?",
        answer:
          "For a standard assignment, deployment is typically possible within 5–7 days. Timings for larger or specialist requirements are agreed individually.",
      },
      {
        question: "What team sizes can you provide?",
        answer:
          "We provide individuals and complete work teams. A typical project involves 1–10 workers; larger requirements are assessed individually.",
      },
      {
        question: "Which countries do you cover?",
        answer:
          "We focus on Slovakia, Czechia, Germany, Austria and the Netherlands, with our strongest experience in Germany and Czechia.",
      },
      {
        question: "Do you arrange accommodation?",
        answer:
          "We can help identify suitable accommodation close to the project. Workers cover their own accommodation costs.",
      },
      {
        question: "Do you have your own vehicles and tools?",
        answer: "Yes. Renault Master work vans and basic cordless tools are available.",
      },
      {
        question: "How is pricing determined?",
        answer:
          "Pricing is agreed individually based on the project type, country, trade, scope and duration.",
      },
      {
        question: "What information do you need from the client?",
        answer:
          "The work type, location, expected start date, worker numbers, required trades, expected duration and administrative requirements.",
      },
      {
        question: "Can teams work weekends or rotations?",
        answer: "Yes. Weekend work and rotational schedules can be agreed where appropriate.",
      },
      {
        question: "Does every team have a coordinator?",
        answer:
          "Each crew has a responsible person who supports team organisation and communication.",
      },
      {
        question: "Who should I contact about an urgent requirement?",
        answer:
          "Calling or emailing is the quickest option. The managing director normally handles enquiries on working days between approximately 07:00 and 16:00.",
      },
      {
        question: "Do you provide work outside construction, logistics and manufacturing?",
        answer:
          "We do not provide every type of work outside these fields, but we will be happy to assess your specific requirement.",
      },
    ],
    cta: {
      title: "Still have a question?",
      description:
        "Send us your question or the basic project details through the contact form. We will direct it to the right person.",
      buttonLabel: "Contact WorkUnit",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Send an enquiry or contact WorkUnit directly",
      description:
        "Choose the most relevant contact or complete the form. We will route your message to the person best placed to respond.",
      emailCta: "Send an email",
      phoneCta: "Call WorkUnit",
    },
    intro: {
      eyebrow: "Contacts by enquiry type",
      title: "Speak to the right person",
      description:
        "Select a contact based on your enquiry. If you are unsure, use the form and we will direct your message appropriately.",
    },
    cards: {
      general: {
        role: "General Manager",
        description: "For general enquiries, cooperation and urgent matters.",
        uses: ["general enquiries", "cooperation", "urgent matters", "primary contact"],
      },
      sales: {
        role: "Sales Manager",
        description: "For commercial enquiries, quotations and new projects.",
        uses: ["commercial enquiries", "quotations", "new projects", "B2B cooperation"],
      },
      hr: {
        role: "HR Manager",
        description: "For workers, self-employed contractors and potential team members.",
        uses: ["workers", "contractors", "work opportunities", "work teams"],
      },
    },
    cardEyebrow: "Contact",
    sendEmail: "Send email",
    call: "Call",
    companyEyebrow: "Company details",
    companyLabels: {
      address: "Address",
      registrationNumber: "Company registration number",
      taxNumber: "Tax number",
      vatNumber: "VAT number",
      primaryEmail: "General email",
      salesEmail: "Sales email",
      primaryPhone: "Main phone",
    },
    socialTitle: "Social media",
    socialDescription: "Follow WorkUnit on social media.",
    inquiryHelpTitle: "What to include in your enquiry",
    inquiryHelpText:
      "The work type, project location, expected start date, worker numbers, required trades, expected duration and administrative requirements.",
  },
  recruitment: {
    hero: {
      eyebrow: "For workers and work teams",
      title: "Looking for contract work in Slovakia or abroad?",
      description:
        "WorkUnit cooperates with individuals and established teams on construction, installation, logistics and manufacturing projects. Complete the short form and we may contact you when a suitable opportunity arises.",
      formCta: "Complete the form",
      hrCta: "Contact HR",
    },
    audiences: {
      eyebrow: "Who this page is for",
      title: "For people and teams who want to hear about new contract opportunities",
      description:
        "Submitting your details does not guarantee an assignment. It allows us to contact you when a suitable opportunity matches your trade, location and availability.",
      items: [
        {
          title: "Individuals",
          description:
            "If you have construction, logistics or manufacturing experience and are looking for a new contract, send us your details.",
        },
        {
          title: "Work teams",
          description:
            "Established crews can tell us about their team, trades, experience and availability.",
        },
        {
          title: "Self-employed contractors",
          description:
            "We also work with self-employed contractors where they match current project requirements.",
        },
        {
          title: "Work abroad",
          description:
            "Opportunities may arise in Slovakia, Czechia, Germany, Austria, the Netherlands and other countries, subject to current projects.",
        },
      ],
    },
    professions: {
      eyebrow: "Trades we commonly need",
      title: "Construction, installation, logistics and manufacturing roles",
      description:
        "If your trade is not listed, you may still submit the form. We will contact you if a suitable opportunity becomes available.",
      items: [
        "flat- and pitched-roof installers",
        "sheet-metal workers",
        "bricklayers",
        "painters",
        "concrete workers",
        "fitters and installers",
        "general labourers",
        "warehouse workers",
        "forklift operators",
        "manufacturing workers",
        "other trades required by current projects",
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "A straightforward process without unrealistic promises",
      description:
        "Joining our contact database means we can approach you when a suitable opportunity matches current project requirements.",
      items: [
        {
          title: "Complete the form",
          description: "Send your basic details, trade, availability, preferred countries and experience.",
        },
        {
          title: "We review your experience",
          description:
            "We assess your details against current projects, assignment requirements and team capacity.",
        },
        {
          title: "We contact you about a suitable opportunity",
          description:
            "If a relevant opportunity arises, we will get in touch to discuss the details.",
        },
        {
          title: "Agree the next steps",
          description:
            "Together we confirm the terms, country, timing, administration and work arrangements.",
        },
      ],
    },
    formSection: {
      eyebrow: "Contact form for workers",
      title: "Tell us about yourself or your work team",
      description:
        "The form is intended for workers, self-employed contractors and work teams. Your message will be sent to WorkUnit's HR contact.",
      managerRole: "HR Manager",
    },
  },
  thankYou: {
    eyebrow: "Enquiry submitted",
    title: "Thank you for your enquiry.",
    description: "The WorkUnit team will contact you as soon as possible.",
    homeCta: "Back to home",
    servicesCta: "View services",
  },
  workerThankYou: {
    eyebrow: "Details received",
    title: "Thank you. We have received your details.",
    description:
      "We may contact you when a suitable contract or work opportunity becomes available.",
    homeCta: "Back to home",
    servicesCta: "View services",
  },
  legal: {
    eyebrow: "Legal information",
    cookies: {
      title: "Cookie policy",
      description: "Information about cookies used on the WorkUnit website.",
    },
    privacy: {
      title: "Privacy policy",
      description: "This policy explains how WorkUnit s.r.o. processes personal data.",
    },
  },
};
