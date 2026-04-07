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

  return `<a ${attributes.join(" ")} href="${link.href}">${link.label}</a>`;
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
            <p class="timeline-role">${item.role}</p>
            <p class="timeline-company">${item.company}</p>
            <p class="timeline-period">${item.period}</p>
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
        <a class="button button-primary" href="${profile.primaryCta.href}">${profile.primaryCta.label}</a>
        <a class="button button-secondary" href="${profile.secondaryCta.href}" download>${profile.secondaryCta.label}</a>
      </div>

      <ul class="quick-facts" aria-label="Quick facts">
        ${profile.facts.map((fact) => `<li>${fact}</li>`).join("")}
      </ul>
    </div>

    <aside class="hero-panel">
      <div class="panel-card portrait-card">
        <img class="portrait-image" src="${siteData.portrait.src}" alt="${siteData.portrait.alt}" />
        <p class="portrait-caption">${siteData.portrait.caption}</p>
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
