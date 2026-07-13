<script setup lang="ts">
type ProjectFeature = {
  title: string
  description: string
}

type ProjectData = {
  title?: string
  description?: string
  status?: string
  technologies?: string[]
  features?: ProjectFeature[]
}

type RelatedPost = {
  title: string
  description: string
  href: string
  date?: string
  readingTime?: string
  category?: string
}

const props = withDefaults(
  defineProps<{
    project?: ProjectData
    relatedPosts?: RelatedPost[]
  }>(),
  {
    project: () => ({
      title: 'Mekbuda',
      description:
        'A media-first portfolio and management platform for presenting original custom lighter designs.',
      status: 'completed',
      technologies: ['Laravel', 'Vue', 'TypeScript', 'PostgreSQL'],
      features: [],
    }),
    relatedPosts: () => [],
  },
)

const sectionLinks = [
  ['overview', 'Overview'],
  ['gallery', 'Gallery'],
  ['designs', 'Design pages'],
  ['admin', 'Admin'],
  ['media', 'Media'],
  ['platform', 'Platform'],
  ['architecture', 'Architecture'],
  ['journal', 'Journal'],
]

const productFlow = [
  ['01', 'Discover', 'Visitors enter through a visual portfolio built around the artwork.'],
  ['02', 'Explore', 'Each custom lighter can be viewed as an individual creation with its own media.'],
  ['03', 'Understand', 'Descriptions, categories, and presentation details give the work context.'],
  ['04', 'Connect', 'Clear calls to action guide visitors toward inquiries and future commissions.'],
  ['05', 'Manage', 'An authenticated admin area keeps the public portfolio maintainable.'],
]

const galleryCapabilities = [
  ['Artwork-first presentation', 'The interface gives the custom lighter designs visual priority instead of treating them as ordinary product records.'],
  ['Curated project identity', 'A consistent cosmic visual system gives the portfolio a recognizable style without overpowering the artwork.'],
  ['Responsive discovery', 'Cards, media, navigation, and detail layouts adapt from large desktop displays to mobile screens.'],
  ['Structured content', 'Design titles, descriptions, status, ordering, categories, and media remain editable instead of being embedded in templates.'],
]

const designPageFeatures = [
  ['Focused presentation', 'Each creation receives its own page rather than being limited to a social-media grid.'],
  ['Media sequences', 'Images and short videos can show different angles, details, and the physical finish of the piece.'],
  ['Project context', 'Descriptions can explain the character, inspiration, techniques, and visual choices behind a design.'],
  ['Inquiry direction', 'The page can guide interested visitors toward a commission or contact flow without presenting every piece as an ordinary store item.'],
]

const adminTools = [
  ['Create designs', 'Add a new portfolio creation with its public-facing information.'],
  ['Edit and publish', 'Refine metadata, control visibility, and maintain the order of the gallery.'],
  ['Manage media', 'Attach multiple images or video references to the same design.'],
  ['Validate changes', 'Laravel request validation protects the data entering the management system.'],
  ['Test workflows', 'Feature tests cover important portfolio-management behavior.'],
  ['Protect access', 'Administrative actions remain separate from the public browsing experience.'],
]

const mediaTypes = [
  ['COVER', 'Primary gallery image', 88],
  ['DETAIL', 'Close-up craftsmanship', 72],
  ['ANGLE', 'Alternative viewpoint', 64],
  ['VIDEO', 'Short looping showcase', 80],
]

const supportingFeatures = [
  ['Featured creations', 'Important designs can receive stronger placement on the public portfolio.'],
  ['Publication state', 'Draft or unpublished work can remain inside the management system without appearing publicly.'],
  ['Design ordering', 'The gallery can be curated deliberately instead of relying only on creation date.'],
  ['Multiple media records', 'A design can own a sequence of presentation assets rather than one fixed image field.'],
  ['Authentication', 'Administrative pages are protected from the public portfolio.'],
  ['Request validation', 'Dedicated Laravel request classes keep create and update rules centralized.'],
  ['Responsive navigation', 'The interface remains usable across desktop and mobile layouts.'],
  ['Themed presentation', 'A deep cosmic visual identity replaces the initial default orange application styling.'],
  ['Accessible structure', 'Semantic sections, clear hierarchy, readable contrast, and visible focus states support navigation.'],
  ['Portfolio ownership', 'The project moves creative work from a social-only presence toward an owned, extensible web platform.'],
  ['Seeded development data', 'Factories and seeders make the gallery and admin experience easier to test during development.'],
  ['Automated verification', 'Formatting and feature tests support safer iteration on the management workflow.'],
]

const architecture = [
  ['Laravel', 'Routes, authentication, controllers, validation, persistence, and server-rendered application structure.'],
  ['Vue', 'Interactive interface elements and application-like management experiences.'],
  ['PostgreSQL', 'Persistent storage for users, designs, and media relationships.'],
  ['LighterDesign model', 'The central record for portfolio content, visibility, ordering, and descriptive data.'],
  ['DesignMedia model', 'A separate media layer that allows one creation to own multiple presentation assets.'],
  ['Vite + npm', 'Frontend development, asset compilation, and production builds.'],
]

const decisions = [
  ['Portfolio before storefront', 'I treated the work as collectible creative pieces first, leaving room for a future order system without forcing an e-commerce structure too early.'],
  ['Owned platform over social dependency', 'Instagram can still help discovery, but the website controls presentation, hierarchy, context, and future functionality.'],
  ['Separate design and media records', 'A relational media model supports richer galleries and avoids locking each creation to a single image.'],
  ['Admin tools as part of the product', 'The public site only stays useful when new work can be added, edited, reordered, and published without code changes.'],
]

const plannedPosts: RelatedPost[] = [
  {
    title: 'From Instagram Portfolio to an Owned Creative Platform',
    description:
      'Why I moved Mekbuda toward a dedicated website and how the content model differs from a social-media feed.',
    href: '#',
    category: 'Planned article',
    readingTime: 'Product strategy',
  },
  {
    title: 'Designing a Media-First Laravel Portfolio',
    description:
      'How LighterDesign and DesignMedia support covers, detail images, alternate angles, and short videos.',
    href: '#',
    category: 'Planned article',
    readingTime: 'Laravel architecture',
  },
  {
    title: 'Building an Admin Workflow for a Creative Portfolio',
    description:
      'The decisions behind validation, publishing, ordering, media management, and feature testing.',
    href: '#',
    category: 'Planned article',
    readingTime: 'Admin UX',
  },
]

const visiblePosts = props.relatedPosts.length > 0 ? props.relatedPosts : plannedPosts
</script>

<template>
  <article class="mekbuda-case-study">
    <div class="ambient ambient-one" aria-hidden="true" />
    <div class="ambient ambient-two" aria-hidden="true" />

    <div class="project-breadcrumb">
      <a href="/projects">Projects</a>
      <span>/</span>
      <span>{{ props.project.title ?? 'Mekbuda' }}</span>
    </div>

    <header class="project-hero">
      <div class="hero-copy">
        <div class="eyebrow-row">
          <span class="eyebrow">Creative portfolio platform</span>
          <span class="status-dot"><i /> Complete core product · Active refinement</span>
        </div>

        <h1>I built <span>Mekbuda</span> to give custom artwork a home beyond social media.</h1>

        <p class="hero-summary">
          {{ props.project.description }} The product combines a media-first public gallery,
          individual design pages, an inquiry-ready visitor journey, and an authenticated
          administration workspace for maintaining the portfolio.
        </p>

        <div class="technology-row" aria-label="Technologies used">
          <span v-for="technology in props.project.technologies" :key="technology">
            {{ technology }}
          </span>
          <span>Vite</span>
          <span>Feature tests</span>
        </div>

        <div class="hero-facts">
          <div>
            <span>Role</span>
            <strong>Product design &amp; full-stack development</strong>
          </div>
          <div>
            <span>Core experience</span>
            <strong>Public portfolio + admin management</strong>
          </div>
          <div>
            <span>Direction</span>
            <strong>Media expansion &amp; commission workflows</strong>
          </div>
        </div>
      </div>

      <div class="hero-gallery" aria-label="Mekbuda portfolio placeholder">
        <div class="gallery-topbar">
          <div class="window-dots"><i /><i /><i /></div>
          <span>MEKBUDA / CREATION ARCHIVE</span>
          <span>16 WORKS</span>
        </div>

        <div class="gallery-stage">
          <div class="featured-piece">
            <div class="piece-art">
              <span>MB</span>
              <i v-for="line in 9" :key="line" :style="{ transform: `rotate(${line * 20}deg)` }" />
            </div>
            <div>
              <small>FEATURED CREATION</small>
              <h2>Character Edition</h2>
              <p>Custom illustrated lighter · mixed-media finish</p>
            </div>
          </div>

          <div class="mini-gallery">
            <article v-for="(label, index) in ['Chucky', 'King Simba', 'Nezuko', 'Buzz']" :key="label">
              <div :class="`mini-art art-${index + 1}`"><span>{{ label.slice(0, 2).toUpperCase() }}</span></div>
              <strong>{{ label }}</strong>
              <small>Custom design</small>
            </article>
          </div>
        </div>

        <div class="media-replacement-note">
          <span>MEDIA PLACEHOLDER</span>
          Replace this panel with a real gallery screenshot or short autoplay loop.
        </div>
      </div>
    </header>

    <nav class="section-nav" aria-label="On this project page">
      <span>Explore</span>
      <a v-for="section in sectionLinks" :key="section[0]" :href="`#${section[0]}`">
        {{ section[1] }}
      </a>
    </nav>

    <main>
      <section id="overview" class="content-section overview-section">
        <div class="section-heading">
          <div>
            <span>01</span>
            <h2>An owned platform for a physical creative practice</h2>
          </div>
          <p>
            Mekbuda began with artwork that was primarily visible through social posts. I designed
            the website so each creation could be presented with more control, context, media,
            and permanence.
          </p>
        </div>

        <div class="statement-card">
          <span class="statement-mark">“</span>
          <p>
            The central product decision was to build a portfolio first—not a generic product
            catalog. The interface should preserve the personality of the work while creating a
            foundation for inquiries, commissions, and future commerce.
          </p>
        </div>

        <div class="product-flow">
          <article v-for="(step, index) in productFlow" :key="step[1]">
            <span>{{ step[0] }}</span>
            <div>
              <h3>{{ step[1] }}</h3>
              <p>{{ step[2] }}</p>
            </div>
            <i v-if="index < productFlow.length - 1">→</i>
          </article>
        </div>
      </section>

      <section id="gallery" class="content-section feature-chapter gallery-chapter">
        <div class="chapter-copy">
          <span class="chapter-kicker">Public experience · 02</span>
          <h2>The gallery makes the artwork the interface.</h2>
          <p>
            I designed the public side around visual discovery. The content model supports a
            curated order, featured work, descriptive context, and responsive media without
            forcing visitors through an application-like dashboard.
          </p>

          <div class="capability-list">
            <article v-for="item in galleryCapabilities" :key="item[0]">
              <span>+</span>
              <div><h3>{{ item[0] }}</h3><p>{{ item[1] }}</p></div>
            </article>
          </div>

          <details class="developer-note">
            <summary>Developer note</summary>
            <p>
              Public portfolio pages are driven by structured design records rather than hardcoded
              cards. Visibility, ordering, featured state, descriptions, and media can evolve
              independently from the page templates.
            </p>
          </details>
        </div>

        <div class="media-frame media-frame-large">
          <div class="media-frame-bar">
            <span>mekbuda-gallery.webp</span>
            <span>16:10 screenshot</span>
          </div>

          <div class="gallery-mockup">
            <div class="mock-nav">
              <b>MEKBUDA</b>
              <span>Creations</span>
              <span>About</span>
              <span>Contact</span>
            </div>

            <div class="mock-feature">
              <div class="mock-feature-art"><span>ART</span></div>
              <div>
                <small>ORIGINAL CREATION</small>
                <h3>Made by hand.<br />Presented with intention.</h3>
                <p>Portfolio copy and feature media placeholder.</p>
                <i />
              </div>
            </div>

            <div class="mock-grid">
              <article v-for="item in 6" :key="item">
                <div :class="`mock-image image-${item}`"><span>0{{ item }}</span></div>
                <b>Creation {{ String(item).padStart(2, '0') }}</b>
                <small>View design</small>
              </article>
            </div>
          </div>

          <p>Replace with the real responsive gallery once final screenshots are prepared.</p>
        </div>
      </section>

      <section id="designs" class="content-section design-section">
        <div class="section-heading">
          <div><span>03</span><h2>Every creation can tell its own story</h2></div>
          <p>
            Social feeds compress every piece into the same card. Individual design pages create
            room for detail, process, alternate views, and clearer visitor actions.
          </p>
        </div>

        <div class="design-layout">
          <div class="design-preview">
            <div class="preview-bar">
              <span>DESIGN / 007</span>
              <b>PUBLISHED</b>
            </div>
            <div class="preview-body">
              <div class="preview-art">
                <span>07</span>
                <i v-for="ring in 4" :key="ring" :style="{ inset: `${ring * 10}%` }" />
              </div>
              <div class="preview-copy">
                <small>CHARACTER SERIES</small>
                <h3>Nezuko-inspired custom lighter</h3>
                <p>
                  A detailed portfolio description can explain the visual references, surface
                  treatment, and decisions behind the finished piece.
                </p>
                <div><span>Illustrated</span><span>Hand-finished</span><span>One-off</span></div>
              </div>
            </div>
            <div class="thumbnail-row">
              <i v-for="thumb in 5" :key="thumb"><span>{{ thumb }}</span></i>
            </div>
          </div>

          <div class="design-feature-grid">
            <article v-for="feature in designPageFeatures" :key="feature[0]">
              <span>{{ feature[0].slice(0, 2).toUpperCase() }}</span>
              <h3>{{ feature[0] }}</h3>
              <p>{{ feature[1] }}</p>
            </article>
          </div>
        </div>

        <details class="developer-note inline-note">
          <summary>Developer note</summary>
          <p>
            Detail pages can compose one LighterDesign record with an ordered collection of
            DesignMedia records. The same relationship supports cover images, gallery assets,
            detail shots, and future video entries.
          </p>
        </details>
      </section>

      <section id="admin" class="content-section admin-section">
        <div class="admin-intro">
          <div>
            <span class="chapter-kicker">Management system · 04</span>
            <h2>I treated portfolio maintenance as part of the product.</h2>
          </div>
          <p>
            A creative website becomes stale when every update requires editing templates. The
            authenticated admin workspace allows the portfolio to grow through structured,
            validated content management.
          </p>
        </div>

        <div class="admin-dashboard">
          <div class="admin-sidebar">
            <b>MEKBUDA ADMIN</b>
            <span class="active">Portfolio</span>
            <span>Media</span>
            <span>Featured work</span>
            <span>Settings</span>
          </div>

          <div class="admin-content">
            <div class="admin-toolbar">
              <div><small>PORTFOLIO MANAGEMENT</small><h3>Designs</h3></div>
              <button type="button">+ New design</button>
            </div>

            <div class="admin-stats">
              <span><b>16</b>Published</span>
              <span><b>04</b>Drafts</span>
              <span><b>06</b>Featured</span>
              <span><b>48</b>Media files</span>
            </div>

            <div class="admin-table">
              <div class="table-head"><span>Design</span><span>Status</span><span>Order</span><span>Media</span></div>
              <div v-for="(name, index) in ['Chucky', 'King Simba', 'Nezuko', 'Juanma López', 'Buzz Lightyear']" :key="name">
                <span><i>{{ name.slice(0, 1) }}</i><b>{{ name }}</b></span>
                <em>{{ index === 3 ? 'Draft' : 'Published' }}</em>
                <small>0{{ index + 1 }}</small>
                <small>{{ 2 + index }}</small>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-tools">
          <article v-for="tool in adminTools" :key="tool[0]">
            <span>✓</span>
            <div><h3>{{ tool[0] }}</h3><p>{{ tool[1] }}</p></div>
          </article>
        </div>

        <details class="developer-note inline-note">
          <summary>Developer note</summary>
          <p>
            Laravel controllers and dedicated store/update request classes implement the CRUD
            workflow. Authentication separates administrative routes, while feature tests verify
            important management behavior.
          </p>
        </details>
      </section>

      <section id="media" class="content-section media-section">
        <div class="media-heading">
          <div>
            <span class="chapter-kicker">Presentation system · 05</span>
            <h2>One design can support an entire visual sequence.</h2>
          </div>
          <p>
            Physical artwork benefits from movement and multiple viewpoints. I separated media
            from the design record so the platform can grow from static covers into richer
            presentations and short looping videos.
          </p>
        </div>

        <div class="media-dashboard">
          <div class="media-player">
            <div class="player-top"><span>design-loop.webm</span><b>00:06 LOOP</b></div>
            <div class="video-placeholder">
              <div class="video-object"><span>MB</span><i /><i /><i /></div>
              <p>Short muted autoplay video placeholder</p>
            </div>
            <div class="player-progress"><i /></div>
          </div>

          <div class="media-routing">
            <article v-for="item in mediaTypes" :key="item[0]">
              <div><strong>{{ item[0] }}</strong><span>{{ item[1] }}</span></div>
              <i><em :style="{ width: `${item[2]}%` }" /></i>
              <b>{{ item[2] }}</b>
            </article>
          </div>
        </div>

        <div class="media-note">
          <span>Recommended production format</span>
          <p>
            Use WebP or AVIF for still images, plus muted WebM and MP4 sources for short loops.
            Keep a poster image so the visual remains useful before video playback begins.
          </p>
        </div>
      </section>

      <section id="platform" class="content-section platform-section">
        <div class="section-heading">
          <div><span>06</span><h2>Supporting systems keep the product maintainable</h2></div>
          <p>
            These features receive less visual emphasis than the gallery and admin workspace, but
            they make the application reliable, extensible, and practical to operate.
          </p>
        </div>

        <div class="support-grid">
          <article v-for="(feature, index) in supportingFeatures" :key="feature[0]">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ feature[0] }}</h3>
            <p>{{ feature[1] }}</p>
          </article>
        </div>
      </section>

      <section id="architecture" class="content-section architecture-section">
        <div class="architecture-heading">
          <div>
            <span class="chapter-kicker">Technical structure · 07</span>
            <h2>A small domain model supports a richer presentation system.</h2>
          </div>
          <p>
            The architecture stays centered on designs and their media. Public pages, admin tools,
            validation, tests, and future ordering features can all build from that shared model.
          </p>
        </div>

        <div class="architecture-map">
          <div class="architecture-column">
            <span>PUBLIC EXPERIENCE</span>
            <article><b>Gallery</b><small>Browse creations</small></article>
            <article><b>Design pages</b><small>View media and context</small></article>
            <article><b>Inquiry path</b><small>Connect with the artist</small></article>
          </div>

          <div class="architecture-bridge">
            <i />
            <article>
              <span>DOMAIN</span>
              <b>LighterDesign</b>
              <small>1 → many</small>
              <b>DesignMedia</b>
            </article>
            <i />
          </div>

          <div class="architecture-column">
            <span>MANAGEMENT</span>
            <article><b>Laravel admin</b><small>Create and update</small></article>
            <article><b>Validation</b><small>Protect structured data</small></article>
            <article><b>Feature tests</b><small>Verify workflows</small></article>
          </div>
        </div>

        <div class="architecture-grid">
          <article v-for="item in architecture" :key="item[0]">
            <span>{{ item[0] }}</span>
            <p>{{ item[1] }}</p>
          </article>
        </div>

        <h3 class="decision-title">Important design decisions</h3>
        <div class="decision-grid">
          <article v-for="(decision, index) in decisions" :key="decision[0]">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <div><h3>{{ decision[0] }}</h3><p>{{ decision[1] }}</p></div>
          </article>
        </div>

        <div class="status-panel">
          <div>
            <span>PRODUCT STATUS</span>
            <h3>Complete foundation, designed to grow</h3>
            <p>
              The public portfolio, content model, authenticated administration, validation, and
              tested management workflow form a complete core product. Future development can
              focus on richer media, content polish, inquiries, and commission functionality.
            </p>
          </div>
          <div class="status-bars">
            <span><b>Portfolio foundation</b><i><em style="width: 100%" /></i><strong>Complete</strong></span>
            <span><b>Admin management</b><i><em style="width: 100%" /></i><strong>Complete</strong></span>
            <span><b>Media expansion</b><i><em style="width: 74%" /></i><strong>Active</strong></span>
            <span><b>Commission workflow</b><i><em style="width: 48%" /></i><strong>Planned</strong></span>
          </div>
        </div>
      </section>

      <section id="journal" class="content-section journal-section">
        <div class="journal-heading">
          <div>
            <span class="chapter-kicker">Related journal · 08</span>
            <h2>Development stories behind Mekbuda</h2>
          </div>
          <p>
            The project page presents the finished system. Journal posts can explain the content
            migration, Laravel architecture, media model, administrative workflow, and design
            decisions in greater depth.
          </p>
        </div>

        <div class="journal-grid">
          <a
            v-for="post in visiblePosts"
            :key="post.title"
            class="journal-card"
            :class="{ planned: props.relatedPosts.length === 0 }"
            :href="post.href"
          >
            <div class="journal-card-top">
              <span>{{ post.category ?? 'Mekbuda' }}</span>
              <span>{{ post.date ?? post.readingTime ?? 'Article' }}</span>
            </div>
            <div class="journal-visual">
              <i v-for="line in 8" :key="line" :style="{ width: `${38 + ((line * 19) % 55)}%` }" />
            </div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <span class="read-link">
              {{ props.relatedPosts.length === 0 ? 'Planned journal topic' : 'Read article' }}
              <b>↗</b>
            </span>
          </a>
        </div>
      </section>
    </main>
  </article>
</template>

<style scoped>
.mekbuda-case-study {
  --mk-bg: #090613;
  --mk-panel: #120d1f;
  --mk-panel-soft: #191029;
  --mk-text: #fff7ee;
  --mk-muted: #c9b9cf;
  --mk-faint: #8a7892;
  --mk-line: rgba(238, 209, 255, 0.14);
  --mk-pink: #ff73bf;
  --mk-violet: #a879ff;
  --mk-orange: #ffad66;
  --mk-gold: #ffd785;
  --mk-green: #7ce9b2;
  position: relative;
  isolation: isolate;
  width: min(100% - 1.2rem, 92rem);
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid var(--mk-line);
  border-radius: 2rem;
  background:
    linear-gradient(rgba(255,255,255,.016) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.016) 1px, transparent 1px),
    radial-gradient(circle at 12% 4%, rgba(255,115,191,.13), transparent 27rem),
    radial-gradient(circle at 88% 25%, rgba(168,121,255,.11), transparent 25rem),
    var(--mk-bg);
  background-size: 44px 44px, 44px 44px, auto, auto, auto;
  color: var(--mk-text);
  box-shadow: 0 40px 120px rgba(0,0,0,.42);
  padding: clamp(1rem, 2vw, 2rem) clamp(1rem, 3.4vw, 3.6rem) clamp(4rem, 8vw, 8rem);
}

.mekbuda-case-study *,
.mekbuda-case-study *::before,
.mekbuda-case-study *::after { box-sizing: border-box; }

.mekbuda-case-study a { color: inherit; }
.mekbuda-case-study h1,
.mekbuda-case-study h2,
.mekbuda-case-study h3,
.mekbuda-case-study p { margin-top: 0; }

.ambient {
  position: absolute;
  z-index: -1;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  filter: blur(90px);
  opacity: .15;
  pointer-events: none;
}
.ambient-one { top: 10rem; left: -19rem; background: var(--mk-pink); }
.ambient-two { top: 78rem; right: -20rem; background: var(--mk-violet); }

.project-breadcrumb {
  display: flex;
  gap: .65rem;
  align-items: center;
  color: var(--mk-faint);
  font-size: .75rem;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.project-breadcrumb a { text-decoration: none; }
.project-breadcrumb a:hover { color: var(--mk-pink); }

.project-hero {
  display: grid;
  grid-template-columns: 1.03fr .97fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  min-height: 43rem;
  padding: clamp(3rem, 7vw, 7rem) 0 4rem;
}

.eyebrow-row {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem 1.2rem;
  align-items: center;
  margin-bottom: 1.4rem;
}
.eyebrow,
.chapter-kicker {
  color: var(--mk-pink);
  font-size: .68rem;
  font-weight: 950;
  letter-spacing: .16em;
  text-transform: uppercase;
}
.status-dot {
  display: inline-flex;
  gap: .5rem;
  align-items: center;
  color: var(--mk-muted);
  font-size: .72rem;
  font-weight: 800;
}
.status-dot i {
  width: .48rem;
  height: .48rem;
  border-radius: 50%;
  background: var(--mk-green);
  box-shadow: 0 0 16px var(--mk-green);
}

.hero-copy h1 {
  max-width: 51rem;
  margin-bottom: 1.3rem;
  font-size: clamp(3rem, 6vw, 6.15rem);
  font-weight: 950;
  line-height: .94;
  letter-spacing: -.065em;
}
.hero-copy h1 span {
  background: linear-gradient(100deg, var(--mk-pink), var(--mk-orange) 45%, var(--mk-violet));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-summary {
  max-width: 48rem;
  color: var(--mk-muted);
  font-size: clamp(1rem, 1.5vw, 1.16rem);
  line-height: 1.75;
}

.technology-row {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin: 1.7rem 0 2.2rem;
}
.technology-row span {
  border: 1px solid var(--mk-line);
  border-radius: 999px;
  background: rgba(255,255,255,.025);
  padding: .45rem .7rem;
  color: #eaddef;
  font-size: .7rem;
  font-weight: 850;
}

.hero-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .8rem;
}
.hero-facts div {
  border-left: 2px solid rgba(255,115,191,.38);
  padding-left: .9rem;
}
.hero-facts span {
  display: block;
  margin-bottom: .25rem;
  color: var(--mk-faint);
  font-size: .62rem;
  font-weight: 900;
  letter-spacing: .1em;
  text-transform: uppercase;
}
.hero-facts strong {
  color: #f1e5f4;
  font-size: .76rem;
  line-height: 1.4;
}

.hero-gallery,
.media-frame,
.design-preview,
.admin-dashboard,
.media-player,
.architecture-map,
.status-panel {
  border: 1px solid rgba(255,115,191,.23);
  border-radius: 1.5rem;
  background: linear-gradient(145deg, rgba(25,16,41,.96), rgba(8,5,15,.98));
  box-shadow: 0 35px 80px rgba(0,0,0,.42), inset 0 1px rgba(255,255,255,.05);
}

.hero-gallery,
.media-frame,
.design-preview,
.admin-dashboard,
.media-player { overflow: hidden; }

.gallery-topbar,
.media-frame-bar,
.preview-bar,
.player-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--mk-line);
  padding: .75rem 1rem;
  color: var(--mk-faint);
  font-size: .62rem;
  font-weight: 900;
  letter-spacing: .1em;
}
.window-dots { display: flex; gap: .3rem; }
.window-dots i {
  width: .45rem;
  height: .45rem;
  border-radius: 50%;
  background: var(--mk-line);
}
.window-dots i:first-child { background: #ff7b7b; }
.window-dots i:nth-child(2) { background: #ffd36b; }
.window-dots i:last-child { background: #74e3a4; }

.gallery-stage { padding: .9rem; }
.featured-piece {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1.1rem;
  align-items: center;
  border: 1px solid var(--mk-line);
  border-radius: 1rem;
  background: rgba(255,255,255,.025);
  padding: 1rem;
}
.piece-art,
.mock-feature-art,
.preview-art {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  aspect-ratio: 1;
  border: 1px solid rgba(255,115,191,.25);
  border-radius: 1.1rem;
  background:
    radial-gradient(circle, rgba(255,115,191,.2), rgba(168,121,255,.1) 55%, transparent 72%),
    #0c0714;
}
.piece-art span,
.mock-feature-art span,
.preview-art > span {
  z-index: 2;
  color: var(--mk-pink);
  font-size: 1.7rem;
  font-weight: 950;
  letter-spacing: -.08em;
}
.piece-art i {
  position: absolute;
  width: 170%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,115,191,.78), transparent);
}
.featured-piece small,
.preview-copy small {
  color: var(--mk-pink);
  font-size: .58rem;
  font-weight: 900;
  letter-spacing: .12em;
}
.featured-piece h2 { margin: .35rem 0 .3rem; font-size: 1.25rem; }
.featured-piece p { margin: 0; color: var(--mk-faint); font-size: .72rem; }

.mini-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .55rem;
  margin-top: .65rem;
}
.mini-gallery article {
  border: 1px solid var(--mk-line);
  border-radius: .85rem;
  background: rgba(255,255,255,.02);
  padding: .55rem;
}
.mini-art {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  margin-bottom: .5rem;
  border-radius: .65rem;
  background: radial-gradient(circle at 30% 25%, rgba(255,255,255,.12), transparent 45%), #171020;
}
.art-1 { background-color: #21101c; }
.art-2 { background-color: #21180e; }
.art-3 { background-color: #21121f; }
.art-4 { background-color: #111b27; }
.mini-art span { color: rgba(255,255,255,.72); font-size: .75rem; font-weight: 950; }
.mini-gallery strong { display: block; font-size: .62rem; }
.mini-gallery small { color: var(--mk-faint); font-size: .54rem; }

.media-replacement-note {
  border-top: 1px solid var(--mk-line);
  padding: .8rem 1rem;
  color: var(--mk-faint);
  font-size: .63rem;
}
.media-replacement-note span {
  margin-right: .5rem;
  color: var(--mk-orange);
  font-weight: 900;
}

.section-nav {
  position: sticky;
  top: .8rem;
  z-index: 20;
  display: flex;
  gap: .35rem;
  align-items: center;
  overflow-x: auto;
  margin: 0 0 5rem;
  border: 1px solid var(--mk-line);
  border-radius: 1rem;
  background: rgba(9,6,19,.84);
  padding: .6rem;
  box-shadow: 0 12px 35px rgba(0,0,0,.25);
  backdrop-filter: blur(18px);
  scrollbar-width: none;
}
.section-nav > span {
  flex: 0 0 auto;
  padding: 0 .65rem;
  color: var(--mk-faint);
  font-size: .65rem;
  font-weight: 900;
  text-transform: uppercase;
}
.section-nav a {
  flex: 0 0 auto;
  border-radius: .6rem;
  padding: .55rem .72rem;
  color: var(--mk-muted);
  font-size: .72rem;
  font-weight: 800;
  text-decoration: none;
}
.section-nav a:hover {
  background: rgba(255,115,191,.1);
  color: var(--mk-pink);
}

.content-section {
  margin-top: clamp(5rem, 10vw, 10rem);
  scroll-margin-top: 6rem;
}

.section-heading,
.admin-intro,
.media-heading,
.architecture-heading,
.journal-heading {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 3rem;
  align-items: end;
  margin-bottom: 2rem;
}
.section-heading > div,
.admin-intro > div,
.media-heading > div,
.architecture-heading > div,
.journal-heading > div {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: .85rem;
  align-items: start;
}
.section-heading > div > span {
  color: var(--mk-pink);
  font-size: .7rem;
  font-weight: 950;
  letter-spacing: .14em;
}
.section-heading h2,
.admin-intro h2,
.media-heading h2,
.architecture-heading h2,
.journal-heading h2 {
  margin-bottom: 0;
  font-size: clamp(2rem, 4vw, 4.2rem);
  font-weight: 950;
  line-height: 1;
  letter-spacing: -.05em;
}
.section-heading > p,
.admin-intro > p,
.media-heading > p,
.architecture-heading > p,
.journal-heading > p {
  margin-bottom: 0;
  color: var(--mk-muted);
  line-height: 1.7;
}

.statement-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255,115,191,.24);
  border-radius: 1.4rem;
  background: linear-gradient(120deg, rgba(255,115,191,.09), rgba(168,121,255,.035));
  padding: clamp(1.4rem, 4vw, 3rem);
}
.statement-card p {
  max-width: 69rem;
  margin: 0;
  font-size: clamp(1.25rem, 2.3vw, 2.1rem);
  font-weight: 760;
  line-height: 1.45;
  letter-spacing: -.025em;
}
.statement-mark {
  position: absolute;
  top: -1.7rem;
  right: 2rem;
  color: rgba(255,115,191,.12);
  font-size: 10rem;
  font-weight: 950;
}

.product-flow {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: .7rem;
  margin-top: 1rem;
}
.product-flow article {
  position: relative;
  min-height: 10rem;
  border: 1px solid var(--mk-line);
  border-radius: 1rem;
  background: var(--mk-panel);
  padding: 1rem;
}
.product-flow article > span {
  color: var(--mk-pink);
  font-size: .63rem;
  font-weight: 950;
}
.product-flow h3 { margin: 1.4rem 0 .45rem; font-size: .95rem; }
.product-flow p { margin: 0; color: var(--mk-faint); font-size: .7rem; line-height: 1.5; }
.product-flow article > i {
  position: absolute;
  top: 50%;
  right: -.75rem;
  z-index: 2;
  color: var(--mk-pink);
  font-style: normal;
}

.feature-chapter {
  display: grid;
  grid-template-columns: .88fr 1.12fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}
.chapter-copy h2 {
  margin: .75rem 0 1rem;
  font-size: clamp(2.25rem, 4.6vw, 4.7rem);
  font-weight: 950;
  line-height: .98;
  letter-spacing: -.055em;
}
.chapter-copy > p {
  color: var(--mk-muted);
  line-height: 1.75;
}
.capability-list { display: grid; gap: .65rem; margin: 1.5rem 0; }
.capability-list article {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: .75rem;
  border-top: 1px solid var(--mk-line);
  padding-top: .8rem;
}
.capability-list article > span {
  color: var(--mk-pink);
  font-size: 1.1rem;
  font-weight: 950;
}
.capability-list h3 { margin: 0 0 .2rem; font-size: .82rem; }
.capability-list p { margin: 0; color: var(--mk-faint); font-size: .72rem; line-height: 1.5; }

.developer-note {
  border: 1px solid var(--mk-line);
  border-radius: .9rem;
  background: rgba(255,255,255,.022);
  padding: .8rem 1rem;
}
.developer-note summary {
  cursor: pointer;
  color: var(--mk-pink);
  font-size: .68rem;
  font-weight: 950;
  letter-spacing: .1em;
  text-transform: uppercase;
}
.developer-note p {
  margin: .7rem 0 0;
  color: var(--mk-muted);
  font-size: .78rem;
  line-height: 1.6;
}
.inline-note { margin-top: 1rem; }

.gallery-mockup { padding: .9rem; }
.mock-nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  border: 1px solid var(--mk-line);
  border-radius: .75rem;
  padding: .75rem;
  color: var(--mk-faint);
  font-size: .62rem;
}
.mock-nav b { margin-right: auto; color: var(--mk-text); }
.mock-feature {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 1rem;
  align-items: center;
  min-height: 13rem;
  margin: .7rem 0;
  border-radius: .9rem;
  background: linear-gradient(120deg, rgba(255,115,191,.08), rgba(168,121,255,.07));
  padding: 1rem;
}
.mock-feature-art { aspect-ratio: 4 / 3; }
.mock-feature small { color: var(--mk-pink); font-size: .55rem; font-weight: 900; }
.mock-feature h3 { margin: .35rem 0; font-size: 1.5rem; line-height: 1; }
.mock-feature p { color: var(--mk-faint); font-size: .68rem; }
.mock-feature div:last-child > i {
  display: block;
  width: 5rem;
  height: .35rem;
  border-radius: 1rem;
  background: linear-gradient(90deg, var(--mk-pink), var(--mk-orange));
}
.mock-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .55rem;
}
.mock-grid article {
  border: 1px solid var(--mk-line);
  border-radius: .75rem;
  background: rgba(255,255,255,.018);
  padding: .5rem;
}
.mock-image {
  display: grid;
  place-items: end start;
  aspect-ratio: 4 / 3;
  margin-bottom: .5rem;
  border-radius: .55rem;
  background: linear-gradient(145deg, rgba(255,115,191,.2), rgba(168,121,255,.08)), #130b1d;
  padding: .5rem;
}
.image-2,.image-5 { background-color: #1b1410; }
.image-3,.image-6 { background-color: #0e1721; }
.mock-image span { color: rgba(255,255,255,.55); font-size: .55rem; font-weight: 900; }
.mock-grid b { display: block; font-size: .62rem; }
.mock-grid small { color: var(--mk-faint); font-size: .52rem; }
.media-frame > p { margin: 0; padding: .75rem 1rem; color: var(--mk-faint); font-size: .62rem; }

.design-layout {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 1rem;
}
.preview-body {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 1.2rem;
  align-items: center;
  padding: 1rem;
}
.preview-art { aspect-ratio: 4 / 5; }
.preview-art i {
  position: absolute;
  border: 1px solid rgba(255,115,191,.28);
  border-radius: 40% 60% 55% 45%;
  animation: rotate-ring 10s linear infinite;
}
.preview-copy h3 { margin: .5rem 0 .7rem; font-size: 1.45rem; }
.preview-copy p { color: var(--mk-muted); font-size: .75rem; line-height: 1.65; }
.preview-copy > div { display: flex; flex-wrap: wrap; gap: .35rem; }
.preview-copy > div span {
  border: 1px solid var(--mk-line);
  border-radius: 999px;
  padding: .3rem .5rem;
  color: var(--mk-faint);
  font-size: .55rem;
}
.thumbnail-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: .45rem; border-top: 1px solid var(--mk-line); padding: .75rem; }
.thumbnail-row i {
  display: grid;
  place-items: end start;
  aspect-ratio: 1;
  border-radius: .55rem;
  background: rgba(255,255,255,.045);
  padding: .35rem;
  font-style: normal;
}
.thumbnail-row span { color: var(--mk-faint); font-size: .5rem; }

.design-feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .7rem;
}
.design-feature-grid article,
.support-grid article,
.architecture-grid article,
.journal-card {
  border: 1px solid var(--mk-line);
  border-radius: 1rem;
  background: var(--mk-panel);
  padding: 1rem;
}
.design-feature-grid article > span {
  color: var(--mk-pink);
  font-size: .6rem;
  font-weight: 950;
}
.design-feature-grid h3 { margin: 1.4rem 0 .4rem; font-size: .86rem; }
.design-feature-grid p { margin: 0; color: var(--mk-faint); font-size: .68rem; line-height: 1.55; }

.admin-dashboard {
  display: grid;
  grid-template-columns: 11rem 1fr;
}
.admin-sidebar {
  display: grid;
  align-content: start;
  gap: .45rem;
  border-right: 1px solid var(--mk-line);
  padding: 1rem;
}
.admin-sidebar b { margin-bottom: 1.5rem; font-size: .7rem; }
.admin-sidebar span {
  border-radius: .55rem;
  padding: .65rem;
  color: var(--mk-faint);
  font-size: .65rem;
}
.admin-sidebar .active {
  background: rgba(255,115,191,.1);
  color: var(--mk-pink);
}
.admin-content { padding: 1rem; }
.admin-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}
.admin-toolbar small { color: var(--mk-faint); font-size: .55rem; }
.admin-toolbar h3 { margin: .15rem 0 0; }
.admin-toolbar button {
  border: 0;
  border-radius: .6rem;
  background: linear-gradient(100deg, var(--mk-pink), var(--mk-violet));
  padding: .65rem .85rem;
  color: #160814;
  font: inherit;
  font-size: .65rem;
  font-weight: 900;
}
.admin-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .55rem;
  margin: 1rem 0;
}
.admin-stats span {
  display: grid;
  border: 1px solid var(--mk-line);
  border-radius: .7rem;
  padding: .7rem;
  color: var(--mk-faint);
  font-size: .55rem;
}
.admin-stats b { color: var(--mk-text); font-size: 1rem; }
.admin-table { border: 1px solid var(--mk-line); border-radius: .75rem; overflow: hidden; }
.admin-table > div {
  display: grid;
  grid-template-columns: 1.5fr .7fr .45fr .45fr;
  gap: .6rem;
  align-items: center;
  border-top: 1px solid var(--mk-line);
  padding: .65rem;
  font-size: .62rem;
}
.admin-table > div:first-child { border-top: 0; }
.admin-table .table-head {
  color: var(--mk-faint);
  font-size: .52rem;
  font-weight: 900;
  letter-spacing: .08em;
}
.admin-table > div > span {
  display: flex;
  gap: .5rem;
  align-items: center;
}
.admin-table span i {
  display: grid;
  width: 1.65rem;
  height: 1.65rem;
  place-items: center;
  border-radius: .4rem;
  background: rgba(255,115,191,.1);
  color: var(--mk-pink);
  font-style: normal;
}
.admin-table em { color: var(--mk-green); font-style: normal; }
.admin-tools {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .7rem;
  margin-top: .8rem;
}
.admin-tools article,
.decision-grid article {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: .7rem;
  border: 1px solid var(--mk-line);
  border-radius: .9rem;
  background: var(--mk-panel);
  padding: .9rem;
}
.admin-tools article > span { color: var(--mk-green); font-weight: 950; }
.admin-tools h3,
.decision-grid h3 { margin: 0 0 .25rem; font-size: .78rem; }
.admin-tools p,
.decision-grid p { margin: 0; color: var(--mk-faint); font-size: .66rem; line-height: 1.5; }

.media-dashboard {
  display: grid;
  grid-template-columns: 1.08fr .92fr;
  gap: 1rem;
}
.video-placeholder {
  display: grid;
  place-items: center;
  min-height: 23rem;
  background:
    radial-gradient(circle at center, rgba(255,115,191,.14), transparent 42%),
    #090510;
}
.video-object {
  position: relative;
  display: grid;
  width: 9rem;
  aspect-ratio: .58;
  place-items: center;
  border: 1px solid rgba(255,115,191,.3);
  border-radius: 1.6rem;
  background: linear-gradient(145deg, rgba(255,115,191,.17), rgba(168,121,255,.08));
  transform: rotate(-9deg);
  box-shadow: 0 25px 60px rgba(0,0,0,.4);
}
.video-object span { z-index: 2; color: var(--mk-pink); font-size: 1.6rem; font-weight: 950; }
.video-object i {
  position: absolute;
  width: 140%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,115,191,.72), transparent);
}
.video-object i:nth-of-type(2) { transform: rotate(60deg); }
.video-object i:nth-of-type(3) { transform: rotate(120deg); }
.video-placeholder p { position: absolute; margin-top: 18rem; color: var(--mk-faint); font-size: .62rem; }
.player-progress { border-top: 1px solid var(--mk-line); padding: .75rem; }
.player-progress i { display: block; width: 68%; height: 3px; border-radius: 1rem; background: linear-gradient(90deg, var(--mk-pink), var(--mk-orange)); }

.media-routing { display: grid; gap: .65rem; }
.media-routing article {
  display: grid;
  grid-template-columns: 9rem 1fr 2rem;
  gap: .7rem;
  align-items: center;
  border: 1px solid var(--mk-line);
  border-radius: .85rem;
  background: var(--mk-panel);
  padding: .85rem;
}
.media-routing strong { display: block; color: var(--mk-pink); font-size: .67rem; }
.media-routing span { color: var(--mk-faint); font-size: .6rem; }
.media-routing > article > i,
.status-bars span > i {
  display: block;
  overflow: hidden;
  height: .35rem;
  border-radius: 1rem;
  background: rgba(255,255,255,.06);
}
.media-routing em,
.status-bars em {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--mk-pink), var(--mk-orange));
}
.media-routing article > b { color: var(--mk-faint); font-size: .6rem; }

.media-note {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  margin-top: .8rem;
  border: 1px solid rgba(255,173,102,.2);
  border-radius: .9rem;
  background: rgba(255,173,102,.045);
  padding: 1rem;
}
.media-note span { color: var(--mk-orange); font-size: .67rem; font-weight: 950; text-transform: uppercase; }
.media-note p { margin: 0; color: var(--mk-muted); font-size: .72rem; line-height: 1.55; }

.support-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .7rem;
}
.support-grid article > span {
  color: var(--mk-pink);
  font-size: .58rem;
  font-weight: 950;
}
.support-grid h3 { margin: 1.6rem 0 .45rem; font-size: .82rem; }
.support-grid p { margin: 0; color: var(--mk-faint); font-size: .66rem; line-height: 1.55; }

.architecture-map {
  display: grid;
  grid-template-columns: 1fr .6fr 1fr;
  gap: 1rem;
  padding: 1rem;
}
.architecture-column {
  display: grid;
  gap: .55rem;
}
.architecture-column > span {
  color: var(--mk-faint);
  font-size: .58rem;
  font-weight: 950;
  letter-spacing: .1em;
}
.architecture-column article {
  display: grid;
  border: 1px solid var(--mk-line);
  border-radius: .75rem;
  background: rgba(255,255,255,.02);
  padding: .8rem;
}
.architecture-column b { font-size: .75rem; }
.architecture-column small { margin-top: .2rem; color: var(--mk-faint); font-size: .58rem; }
.architecture-bridge {
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  gap: .5rem;
  align-items: stretch;
}
.architecture-bridge > i {
  justify-self: center;
  width: 1px;
  background: linear-gradient(var(--mk-pink), var(--mk-violet));
}
.architecture-bridge article {
  display: grid;
  gap: .25rem;
  border: 1px solid rgba(255,115,191,.3);
  border-radius: .85rem;
  background: rgba(255,115,191,.07);
  padding: .85rem;
  text-align: center;
}
.architecture-bridge span { color: var(--mk-pink); font-size: .55rem; font-weight: 950; }
.architecture-bridge b { font-size: .7rem; }
.architecture-bridge small { color: var(--mk-faint); font-size: .55rem; }

.architecture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .7rem;
  margin-top: .8rem;
}
.architecture-grid span {
  color: var(--mk-pink);
  font-size: .68rem;
  font-weight: 900;
}
.architecture-grid p { margin: .75rem 0 0; color: var(--mk-faint); font-size: .67rem; line-height: 1.55; }

.decision-title { margin: 2rem 0 .9rem; font-size: 1rem; }
.decision-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .7rem;
}
.decision-grid article > span { color: var(--mk-pink); font-size: .62rem; font-weight: 950; }

.status-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
  padding: 1.4rem;
}
.status-panel > div:first-child > span {
  color: var(--mk-pink);
  font-size: .62rem;
  font-weight: 950;
  letter-spacing: .12em;
}
.status-panel h3 { margin: .5rem 0; font-size: 1.35rem; }
.status-panel p { margin: 0; color: var(--mk-muted); font-size: .75rem; line-height: 1.65; }
.status-bars { display: grid; gap: .8rem; align-content: center; }
.status-bars > span {
  display: grid;
  grid-template-columns: 8rem 1fr 4rem;
  gap: .6rem;
  align-items: center;
}
.status-bars b { color: var(--mk-muted); font-size: .62rem; }
.status-bars strong { color: var(--mk-faint); font-size: .58rem; text-align: right; }

.journal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .8rem;
}
.journal-card {
  display: flex;
  min-height: 20rem;
  flex-direction: column;
  text-decoration: none;
  transition: transform .2s ease, border-color .2s ease, background .2s ease;
}
.journal-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,115,191,.35);
  background: var(--mk-panel-soft);
}
.journal-card.planned { cursor: default; }
.journal-card-top {
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  color: var(--mk-faint);
  font-size: .55rem;
  font-weight: 900;
  text-transform: uppercase;
}
.journal-visual {
  display: grid;
  gap: .35rem;
  min-height: 7rem;
  align-content: center;
  margin: 1rem 0;
  border-radius: .75rem;
  background:
    radial-gradient(circle at 15% 25%, rgba(255,115,191,.15), transparent 40%),
    rgba(255,255,255,.025);
  padding: 1rem;
}
.journal-visual i {
  display: block;
  height: 3px;
  border-radius: 1rem;
  background: linear-gradient(90deg, var(--mk-pink), rgba(168,121,255,.12));
}
.journal-card h3 { margin-bottom: .6rem; font-size: 1rem; line-height: 1.25; }
.journal-card p { color: var(--mk-faint); font-size: .7rem; line-height: 1.55; }
.read-link {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  border-top: 1px solid var(--mk-line);
  padding-top: .8rem;
  color: var(--mk-pink);
  font-size: .65rem;
  font-weight: 900;
}

@keyframes rotate-ring {
  to { transform: rotate(360deg); }
}

.mekbuda-case-study a:focus-visible,
.mekbuda-case-study summary:focus-visible,
.mekbuda-case-study button:focus-visible {
  outline: 3px solid var(--mk-gold);
  outline-offset: 3px;
}

@media (max-width: 72rem) {
  .project-hero,
  .feature-chapter {
    grid-template-columns: 1fr;
  }

  .hero-gallery { max-width: 48rem; }
  .support-grid { grid-template-columns: repeat(3, 1fr); }
  .admin-tools { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 58rem) {
  .hero-facts,
  .product-flow,
  .journal-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-flow article > i { display: none; }

  .section-heading,
  .admin-intro,
  .media-heading,
  .architecture-heading,
  .journal-heading,
  .design-layout,
  .media-dashboard,
  .status-panel {
    grid-template-columns: 1fr;
  }

  .section-heading > div,
  .admin-intro > div,
  .media-heading > div,
  .architecture-heading > div,
  .journal-heading > div {
    grid-template-columns: auto 1fr;
  }

  .support-grid,
  .architecture-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .architecture-map {
    grid-template-columns: 1fr;
  }

  .architecture-bridge {
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto;
  }

  .architecture-bridge > i {
    align-self: center;
    width: 100%;
    height: 1px;
  }
}

@media (max-width: 42rem) {
  .mekbuda-case-study {
    width: min(100% - .6rem, 92rem);
    border-radius: 1.2rem;
    padding-inline: .8rem;
  }

  .project-hero { min-height: auto; padding-top: 3rem; }
  .hero-copy h1 { font-size: clamp(2.8rem, 14vw, 4.4rem); }
  .hero-facts,
  .product-flow,
  .mini-gallery,
  .mock-grid,
  .design-feature-grid,
  .admin-tools,
  .support-grid,
  .architecture-grid,
  .decision-grid,
  .journal-grid {
    grid-template-columns: 1fr;
  }

  .featured-piece,
  .mock-feature,
  .preview-body {
    grid-template-columns: 1fr;
  }

  .featured-piece .piece-art { width: min(100%, 12rem); }
  .admin-dashboard { grid-template-columns: 1fr; }
  .admin-sidebar {
    display: flex;
    overflow-x: auto;
    border-right: 0;
    border-bottom: 1px solid var(--mk-line);
  }
  .admin-sidebar b { margin: 0 1rem 0 0; }
  .admin-sidebar span { flex: 0 0 auto; }

  .admin-stats { grid-template-columns: repeat(2, 1fr); }
  .admin-table { overflow-x: auto; }
  .admin-table > div { min-width: 34rem; }

  .media-routing article { grid-template-columns: 1fr; }
  .media-note { grid-template-columns: 1fr; }
  .status-bars > span { grid-template-columns: 1fr; }
  .status-bars strong { text-align: left; }

  .section-nav { margin-bottom: 3rem; }
}
</style>
