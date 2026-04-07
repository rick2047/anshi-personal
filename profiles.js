const sharedFacts = [
  "Eindhoven, The Netherlands",
  "Valid Dutch work permit",
  "English fluent, Dutch A2",
];

const sharedMetrics = [
  {
    value: "33%",
    title: "better turnaround time and data quality",
    copy: "Improved performance by digitizing reconciliation and operational flows across five integrated data sources.",
  },
  {
    value: "22,000",
    title: "client entities supported",
    copy: "Worked on workflows supporting large-scale client servicing, reporting, and issue resolution.",
  },
  {
    value: "70,000",
    title: "daily data files processed",
    copy: "Handled high-volume payment and reporting data environments where visibility and control mattered.",
  },
  {
    value: "3h to 5m",
    title: "key credit handling reduced",
    copy: "Cut manual dependency in dispute and reconciliation operations through workflow redesign.",
  },
  {
    value: "200+",
    title: "daily cases resolved",
    copy: "Raised servicing throughput through clearer journeys, controls, and operational structure.",
  },
  {
    value: "3,400",
    title: "branch network supported",
    copy: "Delivered process improvements at pan-bank scale while maintaining operational compliance.",
  },
];

const contactLinks = [
  {
    label: "anshitamathur29@gmail.com",
    href: "mailto:anshitamathur29@gmail.com",
    external: false,
  },
  {
    label: "+31 635605125",
    href: "tel:+31635605125",
    external: false,
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/anshitamathur29",
    external: true,
  },
];

export const siteData = {
  portrait: {
    src: "./assets/anshita-portrait.jpg",
    alt: "Portrait of Anshita Mathur on a bridge with a city skyline in the background",
    caption: "Based in Eindhoven and open to recruiter conversations across the Netherlands.",
  },
  profileSwitcher: [
    { slug: "home", label: "Homepage", href: "index.html" },
    {
      slug: "business-analysis",
      label: "Business Analysis",
      href: "business-analysis.html",
    },
    {
      slug: "product-management",
      label: "Product Management",
      href: "product-management.html",
    },
    {
      slug: "data-management",
      label: "Data Management",
      href: "data-management.html",
    },
  ],
  sectionNav: [
    { label: "Profile", href: "#about" },
    { label: "Impact", href: "#impact" },
    { label: "Experience", href: "#experience" },
    { label: "Credentials", href: "#credentials" },
  ],
  credentials: {
    education: [
      "MBA, IT Business Management, Symbiosis International University",
      "Bachelor of Computer Applications, IIS University",
    ],
    certificates: [
      "Data Management Essential Training",
      "AI-First Product Leadership",
      "AI in Project Management",
      "Agile Practices",
      "Design Thinking",
      "Cybersecurity GRC",
    ],
    strengths: [
      "Stakeholder alignment across business, risk, finance, engineering, and operations",
      "Comfort with regulated processes, audit expectations, and operational controls",
      "Clear written requirements, UAT structure, and release planning",
      "Payments and reporting environments where precision and transparency matter",
    ],
  },
  profiles: {
    home: {
      eyebrow: "Payments, Product, Data, Business Analysis",
      headline:
        "Anshita Mathur turns regulated payments complexity into clearer products, stronger processes, and more trusted data.",
      summary:
        "Cross-functional professional with 5.5+ years across American Express and Axis Bank, working at the intersection of product ownership, business analysis, and data-heavy operations. Strongest in roles where business goals, controls, process design, and measurable delivery outcomes need to stay aligned.",
      facts: [...sharedFacts, "Open to Product, BA, and Data roles"],
      intentLabel: "Homepage intent",
      intentStatement:
        "Help recruiters understand the overall profile quickly, then route them into the most relevant hiring lens: business analysis, product management, or data management.",
      snapshotBullets: [
        "Payments, merchant acquiring, servicing, and reporting operations",
        "Cross-functional delivery across engineering, finance, risk, operations, and data teams",
        "Measurable improvements in turnaround time, throughput, quality, and control",
      ],
      primaryCta: {
        label: "Contact Me",
        href: "mailto:anshitamathur29@gmail.com",
      },
      secondaryCta: {
        label: "Download Product Resume",
        href: "./resume_archive/Product%20Manager%20Resume.pdf",
      },
      resourceLinks: [
        ...contactLinks,
        {
          label: "Business Analysis Resume",
          href: "./resume_archive/Anshita_Mathur_ING_CJE_ATS_v4.pdf",
          external: false,
          download: true,
        },
        {
          label: "Data Management Resume",
          href: "./resume_archive/Anshita%20Mathur%20Data%20Consultant.pdf",
          external: false,
          download: true,
        },
      ],
      aboutTitle: "A profile that spans three hiring tracks",
      aboutParagraphs: [
        "My experience sits in the space where business requirements, operational pain points, regulatory controls, and implementation realities all meet. That has made me useful in roles that need both structure and delivery ownership.",
        "Across payments and regulated financial services, I have worked on journey design, reconciliation and servicing workflows, internal platforms, reporting logic, exception handling, data quality, and stakeholder alignment. The consistent theme is making complexity clearer and more measurable.",
      ],
      coreAreas: [
        "Product ownership and roadmap thinking",
        "Business requirements, BRDs, FRDs, and UAT",
        "Data quality, governance, and reporting workflows",
        "Merchant acquiring, dispute, and servicing journeys",
        "Operational tooling and process improvement",
        "Cross-functional execution in regulated environments",
      ],
      fitTitle: "Choose the right lens",
      fitCards: [
        {
          title: "Business Analysis",
          body: "For roles focused on requirements, journey design, process improvement, release validation, and the business/IT bridge.",
          href: "business-analysis.html",
          linkLabel: "View BA profile",
        },
        {
          title: "Product Management",
          body: "For roles focused on vision, roadmap, prioritization, internal product delivery, backlog shaping, and stakeholder value.",
          href: "product-management.html",
          linkLabel: "View product profile",
        },
        {
          title: "Data Management",
          body: "For roles focused on data quality, governance, traceability, reporting reliability, and strategic data execution.",
          href: "data-management.html",
          linkLabel: "View data profile",
        },
      ],
      metrics: sharedMetrics,
      experienceTitle: "Experience through the shared lens",
      experiences: [
        {
          role: "Business Development Lead, Freelance",
          company: "Deqollab",
          period: "Jul 2025 - Present",
          bullets: [
            "Structured stakeholder requirements into delivery plans and execution roadmaps tied to business objectives.",
            "Strengthened prioritization conversations by translating broad asks into clearer implementation paths.",
          ],
        },
        {
          role: "Senior Associate, Digital Product Management",
          company: "American Express GCS",
          period: "Sep 2022 - Dec 2024",
          bullets: [
            "Delivered an internal payments operations platform that improved issue resolution and payment-data workflow visibility for 150 users.",
            "Owned delivery elements spanning roadmap inputs, prioritization, testing, rollout, leadership reporting, and data management controls.",
            "Worked across the US, Canada, and India on reporting, operational, and integration-heavy problems where quality and transparency mattered.",
          ],
        },
        {
          role: "Manager, Digital Journey Management",
          company: "Axis Bank",
          period: "Jun 2019 - Sep 2022",
          bullets: [
            "Led journey and process design across disputes, transaction servicing, and merchant-acquiring workflows.",
            "Translated regulatory and business requirements into structured releases, UAT, and operating improvements across connected systems and vendors.",
            "Improved resolution throughput, turnaround time, and control quality at pan-bank scale.",
          ],
        },
      ],
      ctaTitle:
        "Hiring for payments transformation, product delivery, business analysis, or data-heavy operations?",
      ctaPrimary: {
        label: "Email Anshita",
        href: "mailto:anshitamathur29@gmail.com",
      },
      ctaSecondary: {
        label: "Open LinkedIn",
        href: "https://www.linkedin.com/in/anshitamathur29",
        external: true,
      },
    },
    "business-analysis": {
      eyebrow: "Business Analysis Profile",
      headline:
        "Anshita Mathur translates operational and regulatory complexity into clear requirements, stronger processes, and delivery-ready change.",
      summary:
        "Business-analysis candidate with 5.5+ years in regulated financial services, experienced in journey design, process improvement, BRDs and FRDs, UAT, stakeholder management, and translating business needs into structured implementation across servicing, disputes, payments, and reporting workflows.",
      facts: [...sharedFacts, "Balanced hybrid BA focus"],
      intentLabel: "Page intent",
      intentStatement:
        "Position Anshita for business-analysis roles that need strong requirements, process mapping, release readiness, and a business-to-technology bridge in regulated environments.",
      snapshotBullets: [
        "Requirements gathering, BRDs, FRDs, and release sequencing",
        "Journey design across disputes, servicing, onboarding, and reporting operations",
        "Business, risk, operations, and IT alignment in change-heavy environments",
      ],
      primaryCta: {
        label: "Contact Me",
        href: "mailto:anshitamathur29@gmail.com",
      },
      secondaryCta: {
        label: "Download BA Resume",
        href: "./resume_archive/Anshita_Mathur_ING_CJE_ATS_v4.pdf",
      },
      resourceLinks: [
        ...contactLinks,
        {
          label: "Product Resume",
          href: "./resume_archive/Anshita_Product.pdf",
          external: false,
          download: true,
        },
      ],
      aboutTitle: "Why this profile fits business analysis",
      aboutParagraphs: [
        "I have worked in roles where the real challenge was not only delivering a system change, but first making the problem legible: what is actually broken, which stakeholders are affected, what rules govern the process, how should the journey work, and what needs to be validated before release.",
        "That is where my business-analysis value is strongest. I am comfortable structuring ambiguous operational and regulatory requirements, documenting them clearly, aligning stakeholders with different incentives, and supporting implementation through UAT, rollout readiness, and post-change follow-through.",
      ],
      coreAreas: [
        "Requirements elicitation and stakeholder workshops",
        "BRDs, FRDs, user stories, and acceptance logic",
        "Journey design and process mapping",
        "Dispute, servicing, onboarding, and exception flows",
        "UAT, release validation, and handoff quality",
        "Process improvement in regulated finance environments",
      ],
      fitTitle: "How this page should be read",
      fitCards: [
        {
          title: "Core hiring story",
          body: "A BA who can bridge business, operations, and implementation, especially where process detail and controls matter.",
        },
        {
          title: "Best-fit roles",
          body: "Business Analyst, Customer Journey Expert, Process Analyst, Functional Analyst, or change roles in finance and operations environments.",
        },
      ],
      metrics: [
        sharedMetrics[3],
        sharedMetrics[4],
        sharedMetrics[5],
        {
          value: "7",
          title: "strategic projects as SPOC",
          copy: "Owned scope, sequencing, and cross-team coordination across multiple high-stakes initiatives.",
        },
      ],
      experienceTitle: "Relevant business-analysis experience",
      experiences: [
        {
          role: "Business Development Lead, Freelance",
          company: "Deqollab",
          period: "Jul 2025 - Present",
          bullets: [
            "Turned stakeholder asks into clearer execution plans and delivery roadmaps, reinforcing the business-analysis side of prioritization and scoping.",
          ],
        },
        {
          role: "Senior Associate, Digital Product Management",
          company: "American Express GCS",
          period: "Sep 2022 - Dec 2024",
          bullets: [
            "Clarified operational and reporting requirements for an internal platform used to manage issue resolution and payment-data workflows.",
            "Mapped end-to-end workflows across client identification, template validation, file handling, and exception tracking to reduce manual intervention.",
            "Worked across engineering, analysts, and business stakeholders to make rollout and release decisions more structured and measurable.",
          ],
        },
        {
          role: "Manager, Digital Journey Management",
          company: "Axis Bank",
          period: "Jun 2019 - Sep 2022",
          bullets: [
            "Led RBI-mandated requirement gathering and end-to-end journey design across dispute management and transaction-servicing workflows.",
            "Translated business and regulatory requirements into BRDs, FRDs, test cases, release sequencing, and UAT sign-off across connected systems and external vendors.",
            "Designed unified CRM-led dispute and fraud journeys across ATM, POS, IMPS, UPI, merchant acquiring, and card-not-present flows.",
          ],
        },
      ],
      ctaTitle:
        "Hiring for business analysis, customer journey, or process-improvement roles in regulated environments?",
      ctaPrimary: {
        label: "Email Anshita",
        href: "mailto:anshitamathur29@gmail.com",
      },
      ctaSecondary: {
        label: "Download BA Resume",
        href: "./resume_archive/Anshita_Mathur_ING_CJE_ATS_v4.pdf",
      },
    },
    "product-management": {
      eyebrow: "Product Management Profile",
      headline:
        "Anshita Mathur turns business goals into product scope, delivery priorities, and measurable outcomes in payments and back-office operations.",
      summary:
        "Product-focused candidate with 5.5+ years across American Express and Axis Bank, experienced in roadmap inputs, prioritization, MVP scope, testing, rollout, stakeholder reporting, and the delivery of internal operational products in regulated financial environments.",
      facts: [...sharedFacts, "Product owner and delivery focus"],
      intentLabel: "Page intent",
      intentStatement:
        "Position Anshita for product-owner and product-management roles that need strong business-to-IT translation, prioritization discipline, internal platform ownership, and measurable operational value.",
      snapshotBullets: [
        "Roadmap, prioritization, MVP scope, and delivery ownership",
        "Internal platforms and workflow tooling for finance and payments operations",
        "Strong fit for roles bridging business stakeholders, IT teams, and operational users",
      ],
      primaryCta: {
        label: "Contact Me",
        href: "mailto:anshitamathur29@gmail.com",
      },
      secondaryCta: {
        label: "Download Product Resume",
        href: "./resume_archive/Product%20Manager%20Resume.pdf",
      },
      resourceLinks: [
        ...contactLinks,
        {
          label: "Alternative Product Resume",
          href: "./resume_archive/Anshita_Product.pdf",
          external: false,
          download: true,
        },
        {
          label: "PDM Resume",
          href: "./resume_archive/Anshita%20Mathur%20PDM.pdf",
          external: false,
          download: true,
        },
      ],
      aboutTitle: "Why this profile fits product management",
      aboutParagraphs: [
        "My product work has been strongest in environments where business value comes from making complex operations simpler, faster, and more transparent. That has meant owning scope and delivery around reporting, reconciliation, servicing, issue handling, and operational tooling rather than consumer-facing features alone.",
        "I am comfortable in roles that sit with one foot in the business and one in IT: clarifying goals, shaping MVPs, prioritizing based on impact, aligning stakeholders, and making sure rollout quality is visible. That is the lane I want to continue building in.",
      ],
      coreAreas: [
        "Product vision and problem framing",
        "Roadmap inputs, prioritization, and backlog shaping",
        "MVP scope, testing, rollout, and leadership reporting",
        "Internal platforms for finance, payments, and operations",
        "Stakeholder alignment across business, finance, risk, and engineering",
        "Agile delivery in regulated environments",
      ],
      fitTitle: "How this page is targeted",
      fitCards: [
        {
          title: "Core hiring story",
          body: "A product candidate who can maximize value in internal systems and operational products where finance, process, data, and delivery intersect.",
        },
        {
          title: "Reference direction",
          body: "Messaging is aligned to product-owner roles like KPMG Enterprise Solutions: product vision, prioritization, stakeholder alignment, and process-system change.",
        },
      ],
      metrics: [
        sharedMetrics[0],
        sharedMetrics[1],
        sharedMetrics[2],
        {
          value: "150",
          title: "internal users supported",
          copy: "Delivered a one-stop operational platform that made issue resolution and payment workflows more usable.",
        },
      ],
      experienceTitle: "Relevant product-management experience",
      experiences: [
        {
          role: "Business Development Lead, Freelance",
          company: "Deqollab",
          period: "Jul 2025 - Present",
          bullets: [
            "Structured stakeholder requirements into delivery plans and roadmaps, reinforcing prioritization and outcome-based execution.",
          ],
        },
        {
          role: "Senior Associate, Digital Product Management",
          company: "American Express GCS",
          period: "Sep 2022 - Dec 2024",
          bullets: [
            "Led design and delivery of an internal operational platform used by 150 users to streamline payment-data workflows and issue resolution.",
            "Defined roadmap inputs, MVP scope, prioritization, testing, rollout, performance tracking, and leadership reporting for card-payment operations.",
            "Owned workflow design across client identification, settlement-reporting templates, file handling, and exception management, improving quality and turnaround time.",
          ],
        },
        {
          role: "Manager, Digital Journey Management",
          company: "Axis Bank",
          period: "Jun 2019 - Sep 2022",
          bullets: [
            "Delivered merchant-acquiring and transaction-servicing solutions across POS, digital payments, card-not-present, dispute, and reconciliation journeys.",
            "Coordinated connected systems and external vendor dependencies while driving scope, validation, and release readiness.",
            "Improved operating performance through stronger journey logic, exception handling, and structured handoffs.",
          ],
        },
      ],
      ctaTitle:
        "Hiring for product-owner or product-management roles in payments, operations, or enterprise systems?",
      ctaPrimary: {
        label: "Email Anshita",
        href: "mailto:anshitamathur29@gmail.com",
      },
      ctaSecondary: {
        label: "Download Product Resume",
        href: "./resume_archive/Product%20Manager%20Resume.pdf",
      },
    },
    "data-management": {
      eyebrow: "Data Management Profile",
      headline:
        "Anshita Mathur improves data quality, governance, reporting trust, and delivery alignment in regulated financial environments.",
      summary:
        "Data-management candidate with 5.5+ years delivering data-sharing, reporting, and operational products in financial services. Experienced in data quality frameworks, KPI monitoring, traceability, governance controls, stakeholder reporting, and making data-heavy initiatives measurable and execution-ready.",
      facts: [...sharedFacts, "Data quality and governance focus"],
      intentLabel: "Page intent",
      intentStatement:
        "Position Anshita for data-management and data-product roles that need stronger quality, governance, reporting reliability, strategic alignment, and transparent execution across stakeholders.",
      snapshotBullets: [
        "Data quality monitoring, governance, and traceability",
        "Reporting products where finance and regulatory trust matter",
        "Strong fit for roles connecting data strategy, delivery, and stakeholder communication",
      ],
      primaryCta: {
        label: "Contact Me",
        href: "mailto:anshitamathur29@gmail.com",
      },
      secondaryCta: {
        label: "Download Data Resume",
        href: "./resume_archive/Anshita%20Mathur%20Data%20Consultant.pdf",
      },
      resourceLinks: [
        ...contactLinks,
        {
          label: "Adyen CV",
          href: "./resume_archive/Anshita%20Mathur%20Adyen%20CV.pdf",
          external: false,
          download: true,
        },
      ],
      aboutTitle: "Why this profile fits data management",
      aboutParagraphs: [
        "I have worked on data-sharing and reporting products where data quality is not just a technical concern but a business and governance concern. Accuracy, completeness, traceability, consistent definitions, and release discipline all affected whether stakeholders could trust the output.",
        "That makes me well suited to roles that sit between data strategy, execution, and business accountability. I am comfortable with KPI-based monitoring, issue remediation visibility, stakeholder alignment, and the practical work needed to make data processes more reliable over time.",
      ],
      coreAreas: [
        "Data quality frameworks and KPI monitoring",
        "Governance controls, release discipline, and compliance sensitivity",
        "Traceability, metadata, ownership, and reporting reliability",
        "Data-sharing products and multi-source integration environments",
        "Transparent reporting, progress tracking, and stakeholder communication",
        "Data-heavy delivery in regulated financial services",
      ],
      fitTitle: "How this page is targeted",
      fitCards: [
        {
          title: "Core hiring story",
          body: "A candidate who can help data organizations move from fragmented execution toward clearer quality, governance, and value visibility.",
        },
        {
          title: "Reference direction",
          body: "Messaging is aligned to data-transformation roles like Rabobank: strategy execution, governance, reporting transparency, and stakeholder steering.",
        },
      ],
      metrics: [
        sharedMetrics[0],
        sharedMetrics[1],
        sharedMetrics[2],
        {
          value: "3 to 4",
          title: "reporting outputs strengthened",
          copy: "Improved reliability across reporting outputs through stronger definitions, traceability, and governance controls.",
        },
      ],
      experienceTitle: "Relevant data-management experience",
      experiences: [
        {
          role: "Business Development Lead, Freelance",
          company: "Deqollab",
          period: "Jul 2025 - Present",
          bullets: [
            "Helped structure stakeholder inputs into clearer execution plans, a useful capability in data-transformation and governance-heavy settings.",
          ],
        },
        {
          role: "Senior Associate, Digital Product Management",
          company: "American Express GCS",
          period: "Sep 2022 - Dec 2024",
          bullets: [
            "Owned data management for data-sharing and reporting products where accuracy, consistency, traceability, and governance mattered across the US, Canada, and India.",
            "Designed KPI-based data quality monitoring across completeness, validity, duplicate rate, threshold breaches, issue remediation time, and rule coverage.",
            "Embedded governance controls into delivery, UAT, and release processes and worked in an Informatica-enabled environment for data profiling, validation, and standardization.",
          ],
        },
        {
          role: "Manager, Digital Journey Management",
          company: "Axis Bank",
          period: "Jun 2019 - Sep 2022",
          bullets: [
            "Worked on data-intensive banking workflows where process quality, controls, and documentation affected operational and regulatory outcomes.",
            "Improved data capture and control logic across front-, mid-, and back-office journeys.",
            "Used process documentation and monitoring to support release quality, smoother handoffs, and data-driven operational decisions.",
          ],
        },
      ],
      ctaTitle:
        "Hiring for data management, data quality, reporting, or transformation roles in the Netherlands?",
      ctaPrimary: {
        label: "Email Anshita",
        href: "mailto:anshitamathur29@gmail.com",
      },
      ctaSecondary: {
        label: "Download Data Resume",
        href: "./resume_archive/Anshita%20Mathur%20Data%20Consultant.pdf",
      },
    },
  },
};
