import { siteData } from "./profiles.js";

const body = document.body;
const profileSlug = body.dataset.profile || "home";
const profile = siteData.profiles[profileSlug] || siteData.profiles.home;
const currentYear = document.getElementById("year");
const main = document.querySelector("main");
const siteNav = document.querySelector(".site-nav");
const profileSwitcher = document.querySelector(".profile-switcher");
const companyLogos = {
  Deqollab: {
    src: "./assets/deqollab.png",
    badgeClass: "logo-badge logo-badge-dark",
  },
  "American Express GCS": {
    src: "./assets/american-express.svg",
    badgeClass: "logo-badge",
  },
  "Axis Bank": {
    src: "./assets/axis-bank.svg",
    badgeClass: "logo-badge logo-badge-dark",
  },
};
const icons = {
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m5 7 7 6 7-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 4.5h2.6l1.1 3.9-1.6 1.6a15.4 15.4 0 0 0 4.1 4.1l1.6-1.6 3.9 1.1v2.6c0 .8-.6 1.5-1.4 1.5C11.3 18 6 12.7 6 5.9c0-.8.7-1.4 1.5-1.4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 9.3V18M7.2 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4.6 12V9.3M11.8 12.7c0-2 1.3-3.4 3.1-3.4 1.8 0 2.9 1.2 2.9 3.5V18M4.5 4.5h15v15h-15z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  location:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s5-4.9 5-9a5 5 0 1 0-10 0c0 4.1 5 9 5 9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="11" r="1.8" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5.5 5.5v5.6c0 4.2 2.7 7.9 6.5 9 3.8-1.1 6.5-4.8 6.5-9V5.5L12 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m9.7 11.8 1.7 1.8 3.2-3.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  globe:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.8 12h16.4M12 3.8c2.5 2.4 3.9 5.3 3.9 8.2S14.5 17.8 12 20.2M12 3.8c-2.5 2.4-3.9 5.3-3.9 8.2S9.5 17.8 12 20.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  briefcase:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7V5.8c0-.7.6-1.3 1.3-1.3h5.4c.7 0 1.3.6 1.3 1.3V7M4.5 9.3h15v8.4c0 .8-.7 1.5-1.5 1.5H6c-.8 0-1.5-.7-1.5-1.5V9.3Zm0 0L12 13l7.5-3.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  building:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 19.5V5.8c0-.7.6-1.3 1.3-1.3h6.4c.7 0 1.3.6 1.3 1.3v13.7M3.5 19.5h17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 8.2h1.2M11.8 8.2H13M8.5 11.5h1.2M11.8 11.5H13M8.5 14.8h1.2M11.8 14.8H13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.8v2.1M17 4.8v2.1M4.8 8.2h14.4M5.8 6.9h12.4c.6 0 1.1.5 1.1 1.1v10.2c0 .6-.5 1.1-1.1 1.1H5.8c-.6 0-1.1-.5-1.1-1.1V8c0-.6.5-1.1 1.1-1.1Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v9M8.8 11.8 12 15l3.2-3.2M5.2 18.5h13.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  external:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 5.5h5.5V11M10.5 13.5l8-8M18.5 13.5v5H5.5v-13h5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  spark:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Zm6.3 10.8.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Zm-12.6 0 .7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const renderIcon = (name, classes = "icon") =>
  `<span class="${classes}" aria-hidden="true">${icons[name] || ""}</span>`;

const inferLinkIcon = (link) => {
  if (link.href.startsWith("mailto:")) return "email";
  if (link.href.startsWith("tel:")) return "phone";
  if (link.href.includes("linkedin")) return "linkedin";
  if (link.download) return "download";
  if (link.external) return "external";
  return "briefcase";
};

const inferFactIcon = (fact) => {
  if (fact.includes("Eindhoven") || fact.includes("Netherlands")) return "location";
  if (fact.toLowerCase().includes("permit")) return "shield";
  if (fact.includes("English") || fact.includes("Dutch")) return "globe";
  if (fact.toLowerCase().includes("open to")) return "briefcase";
  return "spark";
};

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (profileSwitcher) {
  profileSwitcher.innerHTML = siteData.profileSwitcher
    .map(
      (item) => `
        <a class="profile-link ${item.slug === profileSlug ? "is-active" : ""}" href="${item.href}">
          ${item.label}
        </a>
      `,
    )
    .join("");
}

if (siteNav) {
  siteNav.innerHTML = siteData.sectionNav
    .map(
      (item, index) => `
        <a href="${item.href}" class="${index === 0 ? "is-active" : ""}">
          ${item.label}
        </a>
      `,
    )
    .join("");
}

const renderLink = (link, classes = "") => {
  const attributes = [];

  if (classes) {
    attributes.push(`class="${classes}"`);
  }
  if (link.external) {
    attributes.push('target="_blank"', 'rel="noreferrer"');
  }
  if (link.download) {
    attributes.push("download");
  }

  return `<a ${attributes.join(" ")} href="${link.href}">${renderIcon(
    inferLinkIcon(link),
    "icon icon-inline",
  )}<span>${link.label}</span></a>`;
};

const renderMetrics = (metrics) =>
  metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <p class="metric-value">${metric.value}</p>
          <p class="metric-title">${metric.title}</p>
          <p class="metric-copy">${metric.copy}</p>
        </article>
      `,
    )
    .join("");

const renderExperiences = (items) =>
  items
    .map((item) => {
      const logo = companyLogos[item.company];
      const lockup = logo
        ? `
          <div class="company-lockup">
            <span class="${logo.badgeClass}">
              <img class="company-logo" src="${logo.src}" alt="${item.company} logo" />
            </span>
          </div>
        `
        : "";

      return `
        <article class="timeline-item">
          <div class="timeline-meta">
            ${lockup}
            <p class="timeline-role meta-line">${renderIcon(
              "briefcase",
              "icon icon-inline meta-icon",
            )}<span>${item.role}</span></p>
            <p class="timeline-company meta-line">${renderIcon(
              "building",
              "icon icon-inline meta-icon",
            )}<span>${item.company}</span></p>
            <p class="timeline-period meta-line">${renderIcon(
              "calendar",
              "icon icon-inline meta-icon",
            )}<span>${item.period}</span></p>
          </div>
          <div class="timeline-body">
            <ul>
              ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
          </div>
        </article>
      `;
    })
    .join("");

const renderFitCards = (cards) =>
  cards
    .map((card) => {
      const action = card.href
        ? `<a class="card-link" href="${card.href}">${card.linkLabel}</a>`
        : "";

      return `
        <article class="content-card emphasis-card fit-card">
          <h3>${card.title}</h3>
          <p>${card.body}</p>
          ${action}
        </article>
      `;
    })
    .join("");

main.innerHTML = `
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">${profile.eyebrow}</p>
      <h1>${profile.headline}</h1>
      <p class="hero-summary">${profile.summary}</p>

      <div class="hero-actions">
        ${renderLink(profile.primaryCta, "button button-primary")}
        ${renderLink(
          { ...profile.secondaryCta, download: true },
          "button button-secondary",
        )}
      </div>

      <ul class="quick-facts" aria-label="Quick facts">
        ${profile.facts
          .map(
            (fact) =>
              `<li>${renderIcon(
                inferFactIcon(fact),
                "icon icon-inline quick-fact-icon",
              )}<span>${fact}</span></li>`,
          )
          .join("")}
      </ul>
    </div>

    <aside class="hero-panel">
      <div class="panel-card portrait-card">
        <img class="portrait-image" src="${siteData.portrait.src}" alt="${siteData.portrait.alt}" />
        <p class="portrait-caption">${renderIcon(
          "spark",
          "icon icon-inline portrait-icon",
        )}<span>${siteData.portrait.caption}</span></p>
      </div>

      <div class="panel-card spotlight">
        <p class="panel-label">Recruiter Snapshot</p>
        <ul class="snapshot-list">
          ${profile.snapshotBullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
      </div>

      <div class="panel-card contact-card">
        <p class="panel-label">Direct Links</p>
        ${profile.resourceLinks.map((link) => renderLink(link, "resource-link")).join("")}
      </div>
    </aside>
  </section>

  <section class="section" id="about">
    <div class="section-heading">
      <p class="eyebrow">Profile</p>
      <h2>${profile.aboutTitle}</h2>
    </div>

    <div class="two-column">
      <article class="content-card">
        ${profile.aboutParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </article>

      <article class="content-card emphasis-card">
        <h3>Core Areas</h3>
        <ul class="tag-list">
          ${profile.coreAreas.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    </div>
  </section>

  <section class="section">
    <div class="section-heading">
      <p class="eyebrow">Best Fit</p>
      <h2>${profile.fitTitle}</h2>
    </div>

    <div class="fit-grid">
      ${renderFitCards(profile.fitCards)}
    </div>
  </section>

  <section class="section" id="impact">
    <div class="section-heading">
      <p class="eyebrow">Impact</p>
      <h2>Outcomes a recruiter can assess quickly</h2>
    </div>

    <div class="metric-grid">
      ${renderMetrics(profile.metrics)}
    </div>
  </section>

  <section class="section" id="experience">
    <div class="section-heading">
      <p class="eyebrow">Experience</p>
      <h2>${profile.experienceTitle}</h2>
    </div>

    <div class="timeline">
      ${renderExperiences(profile.experiences)}
    </div>
  </section>

  <section class="section credentials" id="credentials">
    <div class="section-heading">
      <p class="eyebrow">Credentials</p>
      <h2>Education, tools, and working style</h2>
    </div>

    <div class="credential-grid">
      <article class="content-card">
        <h3>Education</h3>
        <ul class="plain-list">
          ${siteData.credentials.education.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>

      <article class="content-card">
        <h3>Certificates</h3>
        <ul class="plain-list">
          ${siteData.credentials.certificates.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>

      <article class="content-card">
        <h3>Strengths</h3>
        <ul class="plain-list">
          ${siteData.credentials.strengths.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    </div>
  </section>

  <section class="cta-band">
    <div>
      <p class="eyebrow">Next Step</p>
      <h2>${profile.ctaTitle}</h2>
    </div>
    <div class="cta-actions">
      ${renderLink(profile.ctaPrimary, "button button-primary")}
      ${renderLink(profile.ctaSecondary, "button button-secondary")}
    </div>
  </section>
`;

const navLinks = document.querySelectorAll(".site-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});
