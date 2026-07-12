<script setup lang="ts">
import { ref } from "vue";

const sections = [
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "projects", label: "Projects", icon: "🛠️" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "skills", label: "Skills", icon: "⚙️" },
] as const;

type SectionId = (typeof sections)[number]["id"];
const activeSection = ref<SectionId>("profile");
</script>

<template>
  <article class="about-window">
    <header class="about-window__hero">
      <div class="about-window__avatar" aria-hidden="true">RV</div>
      <div>
        <p class="eyebrow">Computer Engineer</p>
        <h3>Richard Vázquez Burgos</h3>
        <p>Puerto Rico, PR · Bilingual in English and Spanish</p>
      </div>
    </header>

    <div class="about-window__layout">
      <nav class="about-window__nav" aria-label="About sections">
        <button
          v-for="section in sections"
          :key="section.id"
          type="button"
          :class="{ active: activeSection === section.id }"
          :aria-pressed="activeSection === section.id"
          @click="activeSection = section.id"
        >
          <span aria-hidden="true">{{ section.icon }}</span>
          {{ section.label }}
        </button>
      </nav>

      <div class="about-window__panel">
        <section v-if="activeSection === 'profile'">
          <h4>Developer profile</h4>
          <p class="about-window__lead">
            Computer engineer and independent developer building full-stack
            applications, internal business tools, creative software, and
            experimental systems.
          </p>
          <dl class="contact-grid">
            <div>
              <dt>Email</dt>
              <dd><a href="mailto:richardvb76@gmail.com">richardvb76@gmail.com</a></dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href="tel:+17875093318">787-509-3318</a> / <a href="tel:+19393165946">939-316-5946</a></dd>
            </div>
            <div>
              <dt>Portfolio</dt>
              <dd><a href="https://richardvb.netlify.app/">richardvb.netlify.app</a></dd>
            </div>
            <div>
              <dt>Current role</dt>
              <dd>Independent Developer · January 2025–Present</dd>
            </div>
          </dl>
          <div class="profile-callout">
            <strong>Current focus</strong>
            <p>
              Delivering independent software projects while applying product
              ownership, Agile leadership, database optimization, and
              full-stack engineering experience.
            </p>
          </div>
        </section>

        <section v-else-if="activeSection === 'experience'">
          <h4>Work and leadership experience</h4>
          <ol class="timeline">
            <li>
              <time>Jan 2026–Jun 2026</time>
              <strong>Director of Operations · Club E.F.T.C.</strong>
            </li>
            <li>
              <time>Aug 2025–Dec 2025</time>
              <strong>Assistant Coach · Taurinos EFTC Professional Adult Team</strong>
            </li>
            <li>
              <time>Jan 2025–Present</time>
              <strong>Independent Developer</strong>
              <p>Building and maintaining client-facing and personal software products.</p>
            </li>
            <li>
              <time>Oct 2024–Dec 2024</time>
              <strong>Software Engineer I · New Generation Code</strong>
              <p>Optimized SQL Server databases and developed SSIS data-integration services.</p>
            </li>
            <li>
              <time>Jun 2023–Apr 2024</time>
              <strong>Software Engineer I · Collins Aerospace</strong>
              <p>Owned two Power Apps products integrated with Microsoft 365 and mentored a COOP student.</p>
            </li>
            <li>
              <time>May 2021–Jul 2022</time>
              <strong>Computer Engineer Intern · Collins Aerospace</strong>
              <p>Supported ALM and Agile Scrum delivery and collaborated on REST APIs serving high-volume applications.</p>
            </li>
          </ol>
        </section>

        <section v-else-if="activeSection === 'projects'">
          <h4>Independent developer projects</h4>
          <div class="project-grid">
            <article>
              <strong>Uchiha HUB</strong>
              <p>OpenAI-powered command and question interface with an original themed UI.</p>
            </article>
            <article>
              <strong>Isla Verde License</strong>
              <p>Vue, Node, PostgreSQL, and AWS application supporting cannabis-license workflows.</p>
            </article>
            <article>
              <strong>Oh Hell Poker Tracker</strong>
              <p>Game-session and performance tracking software.</p>
            </article>
            <article>
              <strong>Nexus Wave</strong>
              <p>Independent application project presented within this portfolio.</p>
            </article>
            <article>
              <strong>Mekbuda</strong>
              <p>Full-stack product with administrative workflows and deployment support.</p>
            </article>
            <article>
              <strong>ONVO</strong>
              <p>UPRM online voting system; served as developer, project manager, and Scrum Master.</p>
            </article>
          </div>
        </section>

        <section v-else-if="activeSection === 'education'">
          <h4>Education and certifications</h4>
          <div class="credential">
            <span aria-hidden="true">🎓</span>
            <div>
              <strong>University of Puerto Rico at Mayagüez</strong>
              <p>Bachelor of Science in Computer Engineering · May 2023</p>
            </div>
          </div>
          <div class="credential">
            <span aria-hidden="true">▣</span>
            <div>
              <strong>Microsoft Certified</strong>
              <p>Power Platform Fundamentals</p>
            </div>
          </div>
          <div class="credential">
            <span aria-hidden="true">in</span>
            <div>
              <strong>LinkedIn Learning Certifications</strong>
              <ul>
                <li>Java Profiling</li>
                <li>Python Data Structures: Linked Lists for Technical Interviews</li>
                <li>Agile Project Management with Jira Cloud</li>
              </ul>
            </div>
          </div>
        </section>

        <section v-else>
          <h4>Technical toolkit</h4>
          <div class="skills-grid">
            <div><strong>Front end</strong><p>HTML, CSS, JavaScript, React, Angular, Vue, Bootstrap, Sass, Tailwind, Webpack, Vite</p></div>
            <div><strong>Back end</strong><p>Node.js, Express, Django, Spring Boot, REST API development</p></div>
            <div><strong>Data</strong><p>MySQL, PostgreSQL, SQL Server, MongoDB, Firebase, SSIS</p></div>
            <div><strong>Microsoft 365</strong><p>Power Apps, Power BI, Power Automate, Azure, SharePoint, Outlook, OneDrive</p></div>
            <div><strong>Delivery</strong><p>Git, GitHub, GitLab, SVN, Agile Scrum, unit and integration testing</p></div>
            <div><strong>Collaboration</strong><p>Product ownership, project management, mentoring, peer programming, bilingual communication</p></div>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<style scoped>
.about-window { min-height: 100%; }
.about-window__hero {
  display: flex;
  padding: 0.9rem 1rem;
  border: 1px solid #7f9db9;
  background: linear-gradient(135deg, #fff, #dbeafe);
  align-items: center;
  gap: 1rem;
}
.about-window__avatar {
  display: grid;
  width: 4.5rem;
  height: 4.5rem;
  flex: 0 0 auto;
  border: 2px solid white;
  border-radius: 5px;
  background: linear-gradient(135deg, #fff8bd, #69b157);
  box-shadow: 0 0 0 1px #17458f;
  color: #17458f;
  font-size: 1.4rem;
  font-weight: 800;
  place-items: center;
}
.about-window__hero h3 { margin: 0; color: #0a246a; font-size: clamp(1.6rem, 4vw, 2.7rem); }
.about-window__hero p:last-child { margin: 0.3rem 0 0; color: #445; }
.about-window__layout { display: grid; min-height: 24rem; margin-top: 0.7rem; grid-template-columns: 10.5rem minmax(0, 1fr); gap: 0.7rem; }
.about-window__nav { display: flex; padding: 0.35rem; border: 1px solid #7f9db9; background: #f4f1e8; flex-direction: column; gap: 0.2rem; }
.about-window__nav button { display: flex; padding: 0.55rem; border: 1px solid transparent; background: transparent; color: #111; align-items: center; gap: 0.5rem; text-align: left; cursor: pointer; }
.about-window__nav button:hover,
.about-window__nav button:focus-visible,
.about-window__nav button.active { border-color: #17458f; background: #316ac5; color: white; outline: 0; }
.about-window__panel { padding: 0.8rem 1rem; border: 1px solid #7f9db9; background: white; }
.about-window__panel h4 { margin: 0 0 0.7rem; color: #0a246a; font-size: 1.1rem; }
.about-window__lead { max-width: 48rem; font-size: 1rem; line-height: 1.6; }
.contact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem; }
.contact-grid div { padding: 0.55rem; border: 1px solid #d2cfc3; background: #f7f6f1; }
.contact-grid dt { color: #555; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }
.contact-grid dd { margin: 0.2rem 0 0; overflow-wrap: anywhere; }
.contact-grid a,
.about-window__panel a { color: #003399; }
.profile-callout { margin-top: 0.7rem; padding: 0.65rem; border-left: 4px solid #316ac5; background: #edf4ff; }
.profile-callout p { margin: 0.25rem 0 0; }
.timeline { margin: 0; padding: 0; list-style: none; }
.timeline li { display: grid; padding: 0.42rem 0; border-bottom: 1px solid #ddd; grid-template-columns: 8.5rem 1fr; gap: 0.15rem 0.7rem; }
.timeline time { color: #17458f; font-size: 0.72rem; font-weight: 700; }
.timeline p { margin: 0.15rem 0 0; grid-column: 2; font-size: 0.78rem; line-height: 1.45; }
.project-grid,
.skills-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.6rem; }
.project-grid article,
.skills-grid div { padding: 0.65rem; border: 1px solid #aca899; background: #f7f6f1; }
.project-grid p,
.skills-grid p { margin: 0.25rem 0 0; font-size: 0.78rem; line-height: 1.45; }
.credential { display: flex; padding: 0.7rem 0; border-bottom: 1px solid #ddd; gap: 0.7rem; }
.credential > span { font-size: 1.5rem; }
.credential p,
.credential ul { margin: 0.25rem 0 0; }

@media (max-width: 720px) {
  .about-window__hero { align-items: flex-start; }
  .about-window__avatar { width: 3.5rem; height: 3.5rem; }
  .about-window__layout { grid-template-columns: 1fr; }
  .about-window__nav { overflow-x: auto; flex-direction: row; }
  .about-window__nav button { flex: 0 0 auto; }
  .contact-grid,
  .project-grid,
  .skills-grid { grid-template-columns: 1fr; }
  .timeline li { grid-template-columns: 1fr; }
  .timeline p { grid-column: 1; }
}
</style>
