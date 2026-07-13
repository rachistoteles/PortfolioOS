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
      title: 'Lattice Matrix',
      description:
        'An interactive mathematical research workbench for exploring lattices, constants, transformations, and structural relationships.',
      status: 'completed',
      technologies: ['Vue 3', 'TypeScript', 'Vite'],
      features: [],
    }),
    relatedPosts: () => [],
  },
)

const sectionLinks = [
  ['overview', 'Overview'],
  ['catalog', 'Catalog'],
  ['electric', 'Electric'],
  ['quantum', 'Quantum'],
  ['bridge', 'Bridge'],
  ['tools', 'Tools'],
  ['method', 'Method'],
  ['architecture', 'Architecture'],
  ['journal', 'Journal'],
]

const researchFlow = [
  {
    number: '01',
    title: 'Collect',
    description: 'Bring constants, derived values, equations, and candidate relationships into one structured workspace.',
  },
  {
    number: '02',
    title: 'Normalize',
    description: 'Express values through common coordinates, units, factorizations, or transformation rules.',
  },
  {
    number: '03',
    title: 'Explore',
    description: 'Use interactive lattices and workbenches to inspect local and cross-domain structure.',
  },
  {
    number: '04',
    title: 'Compare',
    description: 'Test whether a visible pattern survives changes of representation and independent derivation.',
  },
  {
    number: '05',
    title: 'Document',
    description: 'Keep provenance, equations, caveats, and verification close to every proposed result.',
  },
]

const catalogItems = [
  {
    code: 'α',
    type: 'Interactive lattice',
    title: 'Electric Lattice',
    description:
      'Explores dimension-aware relationships across unit sectors and fine-structure exponent levels.',
    tags: ['7 sectors', 'Radial generator', 'Factor search'],
    state: 'Available',
  },
  {
    code: 'αⁿ',
    type: 'Interactive lattice',
    title: 'Quantum & Atomic Electromagnetic Constants',
    description:
      'Compares electrical, atomic-length, magnetic, spectroscopic, resistance, and hydrogenic quantities.',
    tags: ['Quantum', 'Atomic', 'Factorization'],
    state: 'Available',
  },
  {
    code: 'E⇄Q',
    type: 'Interactive lattice',
    title: 'Cross-Lattice Bridge Explorer',
    description:
      'Traces how radial electric laws reconstruct quantum and atomic constants through multi-path agreement.',
    tags: ['Bridge', 'Derivations', 'Validation'],
    state: 'Available',
  },
  {
    code: 'Σ',
    type: 'Catalog',
    title: 'Physics Values & Constants',
    description:
      'A categorized and searchable reference of foundational constants and derived physical values.',
    tags: ['SI & CODATA', 'Categories', 'Provenance'],
    state: 'Catalog',
  },
  {
    code: '01',
    type: 'Interactive lattice',
    title: 'Binary Transformation Workbench',
    description:
      'Compares integers as aligned binary fields, changed bits, masks, and verified transformation paths.',
    tags: ['BigInt', 'Bit masks', 'Animation'],
    state: 'Tool',
  },
  {
    code: 'π',
    type: 'Interactive lattice',
    title: 'Pi Sequence Locator',
    description:
      'Searches verified local decimal digits of π and returns positions, context, and symbolic references.',
    tags: ['Batch search', 'Exact positions', 'Local dataset'],
    state: 'Tool',
  },
]

const electricCapabilities = [
  {
    title: 'Dimension-aware placement',
    description:
      'Values are positioned using their structural role rather than sorted only by decimal magnitude.',
  },
  {
    title: 'Exponent navigation',
    description:
      'The workbench exposes how powers of α move quantities through neighboring lattice levels.',
  },
  {
    title: 'Sector comparison',
    description:
      'Electrical, length, energy, charge, and related sectors can be studied without collapsing their units.',
  },
  {
    title: 'Candidate factor search',
    description:
      'Interactive controls help test simple multiplicative and exponent-based connections between nodes.',
  },
]

const quantumLayers = [
  ['Quantum electrical', 'Resistance, conductance, flux, charge, and electromagnetic scales.'],
  ['Atomic length', 'Bohr-scale and Compton-scale quantities represented through shared factors.'],
  ['Magnetic', 'Flux and magnetic-moment structures compared against electrical constructions.'],
  ['Spectroscopic', 'Frequency, energy, and wavelength values connected through verified equations.'],
  ['Hydrogenic', 'Atomic relationships explored through α, mass, charge, and geometric factors.'],
  ['Factorization', 'Each candidate relation is decomposed into explicit constants and exponents.'],
]

const bridgePaths = [
  {
    from: 'Electric law',
    relation: 'radial factorization',
    to: 'Quantum scale',
    strength: 92,
  },
  {
    from: 'Charge sector',
    relation: 'α exponent bridge',
    to: 'Atomic length',
    strength: 84,
  },
  {
    from: 'Flux relation',
    relation: 'unit-aware conversion',
    to: 'Magnetic value',
    strength: 76,
  },
  {
    from: 'Energy node',
    relation: 'independent derivation',
    to: 'Spectroscopic node',
    strength: 88,
  },
]

const supportingTools = [
  {
    title: 'Physics Values & Constants',
    code: 'Σ',
    description:
      'A searchable catalog that keeps numerical values, categories, equations, units, and source provenance together.',
  },
  {
    title: 'Binary Transformation Workbench',
    code: '01',
    description:
      'A visual environment for aligning integers, inspecting changed bits, generating masks, and verifying transformation paths.',
  },
  {
    title: 'Pi Sequence Locator',
    code: 'π',
    description:
      'A deterministic local search utility for finding exact decimal sequences and their surrounding context inside π.',
  },
]

const researchPrinciples = [
  {
    title: 'Structure is not proof',
    description:
      'A visual alignment is treated as a hypothesis until the relation can be derived and independently checked.',
  },
  {
    title: 'Units remain explicit',
    description:
      'Dimensionless factors and physical units are separated so a numerical resemblance cannot silently become an equation.',
  },
  {
    title: 'Provenance stays visible',
    description:
      'Constants, source values, definitions, and derivation paths remain attached to the displayed result.',
  },
  {
    title: 'Multiple paths matter',
    description:
      'A bridge becomes more interesting when different valid derivations converge on the same quantity.',
  },
  {
    title: 'Exact and approximate are distinct',
    description:
      'The interface distinguishes identities, defined constants, measured quantities, approximations, and fitted patterns.',
  },
  {
    title: 'Exploration remains reversible',
    description:
      'Filters and transformations should make it easy to inspect how a result was produced and undo each step.',
  },
]

const architecture = [
  {
    title: 'Catalog shell',
    description:
      'Provides navigation, workbench discovery, shared status indicators, and a consistent research identity.',
  },
  {
    title: 'Lattice modules',
    description:
      'Each investigation owns its data, coordinate rules, interactions, explanations, and validation state.',
  },
  {
    title: 'Typed datasets',
    description:
      'Constants and derived quantities use explicit fields for value, units, category, source, and formula metadata.',
  },
  {
    title: 'Transformation utilities',
    description:
      'Reusable numerical helpers perform exponent, factor, binary, sequence, and formatting operations.',
  },
  {
    title: 'Local-first research',
    description:
      'Core workbenches remain deterministic and inspectable without depending on a remote analysis service.',
  },
  {
    title: 'Static portfolio integration',
    description:
      'The case study summarizes the product while dedicated journal posts can document individual mathematical experiments.',
  },
]

const decisions = [
  {
    title: 'A collection instead of one oversized calculator',
    description:
      'I separated investigations into focused workbenches so each mathematical model can define its own assumptions and controls.',
  },
  {
    title: 'Visual hierarchy before visual decoration',
    description:
      'Large symbols, restrained color, and grid-based layouts identify the active structure without turning the research into a dashboard of noise.',
  },
  {
    title: 'Exploration and validation on the same page',
    description:
      'The interface should let me manipulate a candidate pattern while keeping equations, units, and verification close enough to challenge it.',
  },
  {
    title: 'Reusable data instead of screenshots of results',
    description:
      'Values and relationships are represented as structured records so new views can reinterpret the same research material.',
  },
]

const plannedPosts: RelatedPost[] = [
  {
    title: 'Building an Electric Lattice from Dimension-Aware Relationships',
    description:
      'How I moved from a list of physical quantities toward a navigable lattice of sectors, α exponents, and candidate factors.',
    href: '#',
    category: 'Planned article',
    readingTime: 'Electric lattice',
  },
  {
    title: 'When a Mathematical Pattern Is Not Yet a Result',
    description:
      'A practical framework for separating visual structure, numerical coincidence, derivation, and evidence.',
    href: '#',
    category: 'Planned article',
    readingTime: 'Research method',
  },
  {
    title: 'Designing the Cross-Lattice Bridge Explorer',
    description:
      'How independent paths, dimensional constraints, and provenance can make an interactive mathematical tool more trustworthy.',
    href: '#',
    category: 'Planned article',
    readingTime: 'Validation',
  },
]

const visiblePosts =
  props.relatedPosts.length > 0 ? props.relatedPosts : plannedPosts
</script>

<template>
  <article class="lattice-case-study">
    <div class="ambient ambient-a" aria-hidden="true" />
    <div class="ambient ambient-b" aria-hidden="true" />

    <div class="project-breadcrumb">
      <a href="/projects">Projects</a>
      <span>/</span>
      <span>{{ props.project.title ?? 'Lattice Matrix' }}</span>
    </div>

    <header class="project-hero">
      <div class="hero-copy">
        <div class="eyebrow-row">
          <span class="eyebrow">Mathematical research workbench</span>
          <span class="status-dot"><i /> Complete foundation · Active research</span>
        </div>

        <h1>
          I built <span>Lattice Matrix</span> to explore mathematics as a
          connected system.
        </h1>

        <p class="hero-summary">
          {{ props.project.description }}
          Instead of keeping constants, transformations, and candidate
          relationships in disconnected notes, I created a collection of
          interactive workbenches where structures can be visualized,
          manipulated, compared, and documented.
        </p>

        <div class="technology-row" aria-label="Technologies used">
          <span
            v-for="technology in props.project.technologies"
            :key="technology"
          >
            {{ technology }}
          </span>
          <span>Local datasets</span>
          <span>Interactive mathematics</span>
        </div>

        <div class="hero-facts">
          <div>
            <span>Role</span>
            <strong>Research design &amp; frontend development</strong>
          </div>
          <div>
            <span>Core model</span>
            <strong>Independent interactive workbenches</strong>
          </div>
          <div>
            <span>Research direction</span>
            <strong>Pattern discovery with visible validation</strong>
          </div>
        </div>
      </div>

      <div class="hero-workbench" aria-label="Lattice Matrix catalog mockup">
        <div class="workbench-bar">
          <div class="brand-mark"><i /><span>Lattice</span></div>
          <div class="workbench-tabs">
            <span class="active">Catalog</span>
            <span>Electric</span>
            <span>Quantum–Atomic</span>
            <span>Bridge</span>
          </div>
          <div class="local-state"><i /> LOCAL</div>
        </div>

        <div class="workbench-hero">
          <div>
            <small>RESEARCH LATTICE COLLECTION</small>
            <h2>Lattice<br /><span>Workbench</span></h2>
          </div>
          <p>
            A growing collection of interactive lattices for exploring
            mathematical structures, transformations, and relationships.
          </p>
        </div>

        <div class="workbench-grid">
          <article
            v-for="item in catalogItems.slice(0, 4)"
            :key="item.title"
          >
            <div class="card-state"><i /> {{ item.state }}</div>
            <b class="card-symbol">{{ item.code }}</b>
            <small>{{ item.type }}</small>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div>
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>

        <div class="media-replacement-note">
          <span>SCREENSHOT READY</span>
          Replace this mockup with the supplied catalog screenshot at
          <code>/media/projects/lattice-matrix/catalog.webp</code>.
        </div>
      </div>
    </header>

    <nav class="section-nav" aria-label="On this project page">
      <span>Explore</span>
      <a
        v-for="section in sectionLinks"
        :key="section[0]"
        :href="`#${section[0]}`"
      >
        {{ section[1] }}
      </a>
    </nav>

    <main>
      <section id="overview" class="content-section overview-section">
        <div class="section-heading">
          <div>
            <span>01</span>
            <h2>A laboratory for mathematical structures</h2>
          </div>

          <p>
            Lattice Matrix is not one universal formula and it is not a claim
            that every displayed pattern is a discovery. It is an environment
            for turning research questions into inspectable, reusable
            interfaces.
          </p>
        </div>

        <div class="statement-card">
          <span class="statement-mark">∴</span>
          <p>
            The product gives exploratory mathematics a place between a
            notebook and a formal paper: visual enough to reveal structure,
            but explicit enough to expose assumptions, units, equations, and
            unresolved questions.
          </p>
        </div>

        <div class="research-flow">
          <article
            v-for="(step, index) in researchFlow"
            :key="step.title"
          >
            <span>{{ step.number }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
            <i v-if="index < researchFlow.length - 1">→</i>
          </article>
        </div>
      </section>

      <section id="catalog" class="content-section catalog-section">
        <div class="section-heading">
          <div>
            <span>02</span>
            <h2>The catalog turns separate experiments into one research system</h2>
          </div>

          <p>
            Each card opens a focused workbench with its own model and
            interactions. Shared navigation and visual language make the
            collection feel coherent without forcing every investigation into
            the same diagram.
          </p>
        </div>

        <div class="catalog-grid">
          <article
            v-for="item in catalogItems"
            :key="item.title"
            class="catalog-card"
          >
            <div class="catalog-card-top">
              <span><i /> {{ item.state }}</span>
              <b>↗</b>
            </div>

            <div class="catalog-symbol">{{ item.code }}</div>

            <small>{{ item.type }}</small>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>

            <div class="tag-row">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>

        <details class="developer-note">
          <summary>Developer note</summary>
          <p>
            The catalog is a module registry rather than a hardcoded landing
            page. Each entry can define its title, status, tags, route,
            description, visual symbol, and workbench metadata.
          </p>
        </details>
      </section>

      <section id="electric" class="content-section feature-chapter">
        <div class="chapter-copy">
          <span class="chapter-kicker">Primary workbench · 03</span>
          <h2>The Electric Lattice studies relationships without erasing dimensions.</h2>

          <p>
            The first major workbench organizes physical quantities by sector,
            structural role, and fine-structure exponent. It helps me inspect
            whether neighboring nodes share a meaningful derivation or only a
            numerical resemblance.
          </p>

          <div class="capability-list">
            <article
              v-for="capability in electricCapabilities"
              :key="capability.title"
            >
              <span>+</span>
              <div>
                <h3>{{ capability.title }}</h3>
                <p>{{ capability.description }}</p>
              </div>
            </article>
          </div>

          <details class="developer-note">
            <summary>Developer note</summary>
            <p>
              Node placement is generated from structured quantity records and
              coordinate rules. Display formatting remains separate from the
              numerical representation so scientific notation, units, and
              factor decompositions can be changed independently.
            </p>
          </details>
        </div>

        <div class="electric-visual">
          <div class="visual-header">
            <span>ELECTRIC LATTICE / α COORDINATES</span>
            <span>7 SECTORS</span>
          </div>

          <div class="radial-map">
            <div class="axis axis-x" />
            <div class="axis axis-y" />
            <div class="orbit orbit-1" />
            <div class="orbit orbit-2" />
            <div class="orbit orbit-3" />

            <div class="center-node">
              <small>REFERENCE</small>
              <b>α⁰</b>
            </div>

            <div class="lattice-node node-a">
              <span>+2</span>
              <b>Radius</b>
              <small>length sector</small>
            </div>

            <div class="lattice-node node-b">
              <span>+1</span>
              <b>Flux</b>
              <small>electric sector</small>
            </div>

            <div class="lattice-node node-c">
              <span>+0.5</span>
              <b>Charge</b>
              <small>charge sector</small>
            </div>

            <div class="lattice-node node-d">
              <span>−1</span>
              <b>Energy</b>
              <small>quantum sector</small>
            </div>

            <div class="lattice-node node-e">
              <span>−2</span>
              <b>Open node</b>
              <small>research question</small>
            </div>
          </div>

          <div class="visual-footer">
            <span>Radial generator</span>
            <span>Dimension filter</span>
            <span>Factor search</span>
          </div>
        </div>
      </section>

      <section id="quantum" class="content-section quantum-section">
        <div class="section-heading">
          <div>
            <span>04</span>
            <h2>Quantum and atomic constants become comparable layers</h2>
          </div>

          <p>
            This workbench expands the lattice idea across electromagnetic,
            atomic, magnetic, spectroscopic, and hydrogenic quantities while
            retaining each equation and unit system.
          </p>
        </div>

        <div class="quantum-layout">
          <div class="quantum-stack">
            <article
              v-for="(layer, index) in quantumLayers"
              :key="layer[0]"
              :style="{ '--offset': `${index * 8}px` }"
            >
              <span>0{{ index + 1 }}</span>
              <div>
                <h3>{{ layer[0] }}</h3>
                <p>{{ layer[1] }}</p>
              </div>
              <b>{{ ['Ω', 'a₀', 'Φ', 'ν', 'H', 'αⁿ'][index] }}</b>
            </article>
          </div>

          <div class="factor-panel">
            <div class="factor-header">
              <span>ACTIVE FACTORIZATION</span>
              <b>VERIFIED PATH</b>
            </div>

            <div class="factor-equation">
              <span>Q</span>
              <b>=</b>
              <span>C</span>
              <b>·</b>
              <span>αᵃ</span>
              <b>·</b>
              <span>nᵇ</span>
              <b>·</b>
              <span>Zᶜ</span>
              <b>·</b>
              <span>Kᵈ</span>
            </div>

            <div class="factor-values">
              <div><span>a</span><b>+1</b><small>fine-structure level</small></div>
              <div><span>b</span><b>−2</b><small>principal factor</small></div>
              <div><span>c</span><b>+1</b><small>charge factor</small></div>
              <div><span>d</span><b>0</b><small>geometry factor</small></div>
            </div>

            <div class="factor-warning">
              <span>VALIDATION</span>
              <p>
                A coordinate is accepted only when the original definition and
                unit conversion reproduce the displayed factorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="bridge" class="content-section bridge-section">
        <div class="bridge-heading">
          <div>
            <span class="chapter-kicker">Cross-domain validation · 05</span>
            <h2>The Bridge Explorer asks whether separate lattices really agree.</h2>
          </div>

          <p>
            A proposed structure becomes more valuable when it can reconstruct
            a quantity through more than one independent route. The bridge
            view makes those routes visible and keeps disagreement inspectable.
          </p>
        </div>

        <div class="bridge-map">
          <div class="bridge-side">
            <span>ELECTRIC LATTICE</span>
            <article><b>Radial laws</b><small>geometric field relations</small></article>
            <article><b>Charge nodes</b><small>electrical scaling</small></article>
            <article><b>Flux nodes</b><small>field integration</small></article>
          </div>

          <div class="bridge-core">
            <div class="bridge-line line-a" />
            <div class="bridge-line line-b" />
            <div class="bridge-line line-c" />
            <div class="bridge-symbol">⇄</div>
            <span>MULTI-PATH<br />AGREEMENT</span>
          </div>

          <div class="bridge-side right">
            <span>QUANTUM–ATOMIC</span>
            <article><b>Quantum scales</b><small>electromagnetic definitions</small></article>
            <article><b>Atomic lengths</b><small>mass and α factors</small></article>
            <article><b>Magnetic values</b><small>flux and moment relations</small></article>
          </div>
        </div>

        <div class="bridge-paths">
          <article v-for="path in bridgePaths" :key="path.from">
            <div>
              <strong>{{ path.from }}</strong>
              <span>{{ path.relation }}</span>
              <strong>{{ path.to }}</strong>
            </div>

            <i><em :style="{ width: `${path.strength}%` }" /></i>
            <b>{{ path.strength }}%</b>
          </article>
        </div>

        <details class="developer-note inline-note">
          <summary>Developer note</summary>
          <p>
            Bridge records store source nodes, destination nodes, equations,
            expected units, derived values, tolerance, and validation notes.
            The diagram renders the relationship but does not replace the
            underlying derivation.
          </p>
        </details>
      </section>

      <section id="tools" class="content-section tools-section">
        <div class="section-heading">
          <div>
            <span>06</span>
            <h2>Supporting tools expand the research vocabulary</h2>
          </div>

          <p>
            Not every experiment needs a multidimensional lattice. Smaller,
            focused workbenches handle reference data, discrete
            transformations, and exact sequence search.
          </p>
        </div>

        <div class="tool-grid">
          <article
            v-for="(tool, index) in supportingTools"
            :key="tool.title"
          >
            <div class="tool-symbol">{{ tool.code }}</div>

            <div class="tool-index">0{{ index + 1 }}</div>

            <h3>{{ tool.title }}</h3>
            <p>{{ tool.description }}</p>

            <div
              v-if="index === 0"
              class="constant-preview"
              aria-label="Constants preview"
            >
              <span><b>α</b><small>Fine-structure constant</small><em>7.297…×10⁻³</em></span>
              <span><b>h</b><small>Planck constant</small><em>6.626…×10⁻³⁴</em></span>
              <span><b>c</b><small>Speed of light</small><em>299 792 458</em></span>
            </div>

            <div
              v-else-if="index === 1"
              class="binary-preview"
              aria-label="Binary transformation preview"
            >
              <code>00110101</code>
              <span>⊕</span>
              <code>00011100</code>
              <b>→</b>
              <code>00101001</code>
            </div>

            <div
              v-else
              class="pi-preview"
              aria-label="Pi sequence preview"
            >
              <span>3.14159265358979323846</span>
              <i>58979</i>
              <small>position 7 · verified local data</small>
            </div>
          </article>
        </div>
      </section>

      <section id="method" class="content-section method-section">
        <div class="method-heading">
          <div>
            <span class="chapter-kicker">Research discipline · 07</span>
            <h2>The interface is designed to challenge patterns, not merely display them.</h2>
          </div>

          <p>
            Mathematical exploration can generate attractive coincidences
            quickly. I built validation cues into the workbench so promising
            structures remain distinguishable from unsupported claims.
          </p>
        </div>

        <div class="principle-grid">
          <article
            v-for="(principle, index) in researchPrinciples"
            :key="principle.title"
          >
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </article>
        </div>

        <div class="evidence-ladder">
          <div class="ladder-title">
            <span>EVIDENCE LADDER</span>
            <p>A pattern can move upward only when a stronger test succeeds.</p>
          </div>

          <div class="ladder-levels">
            <article class="level-one">
              <span>01</span><b>Visual alignment</b><small>Interesting shape</small>
            </article>
            <article class="level-two">
              <span>02</span><b>Numerical agreement</b><small>Within tolerance</small>
            </article>
            <article class="level-three">
              <span>03</span><b>Dimensional validity</b><small>Units agree</small>
            </article>
            <article class="level-four">
              <span>04</span><b>Independent derivation</b><small>Equation reproduces it</small>
            </article>
            <article class="level-five">
              <span>05</span><b>General result</b><small>Survives broader tests</small>
            </article>
          </div>
        </div>
      </section>

      <section id="architecture" class="content-section architecture-section">
        <div class="architecture-heading">
          <div>
            <span class="chapter-kicker">Product architecture · 08</span>
            <h2>Shared infrastructure, independent mathematical models</h2>
          </div>

          <p>
            The application reuses navigation, data contracts, visual tokens,
            formatting, and verification patterns while allowing every
            workbench to remain mathematically specific.
          </p>
        </div>

        <div class="architecture-map">
          <div class="architecture-column">
            <span>RESEARCH INPUT</span>
            <article><b>Constants</b><small>value, units, source</small></article>
            <article><b>Equations</b><small>definitions and derivations</small></article>
            <article><b>Hypotheses</b><small>candidate relationships</small></article>
          </div>

          <div class="architecture-core">
            <span>SHARED WORKBENCH LAYER</span>
            <b>Typed data</b>
            <i />
            <b>Transforms</b>
            <i />
            <b>Validation</b>
            <i />
            <b>Visualization</b>
          </div>

          <div class="architecture-column">
            <span>INTERACTIVE OUTPUT</span>
            <article><b>Lattices</b><small>spatial structure</small></article>
            <article><b>Bridges</b><small>cross-model paths</small></article>
            <article><b>Research notes</b><small>status and evidence</small></article>
          </div>
        </div>

        <div class="architecture-grid">
          <article
            v-for="item in architecture"
            :key="item.title"
          >
            <span>{{ item.title }}</span>
            <p>{{ item.description }}</p>
          </article>
        </div>

        <h3 class="decision-title">Important design decisions</h3>

        <div class="decision-grid">
          <article
            v-for="(decision, index) in decisions"
            :key="decision.title"
          >
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <div>
              <h3>{{ decision.title }}</h3>
              <p>{{ decision.description }}</p>
            </div>
          </article>
        </div>

        <div class="status-panel">
          <div>
            <span>PRODUCT STATUS</span>
            <h3>A complete research platform with an expanding catalog</h3>
            <p>
              The catalog shell, workbench pattern, core lattice explorers,
              supporting tools, and validation-oriented presentation are
              implemented. Development remains active as I add new models,
              improve derivations, and turn individual experiments into
              documented journal studies.
            </p>
          </div>

          <div class="status-bars">
            <span>
              <b>Workbench foundation</b>
              <i><em style="width: 100%" /></i>
              <strong>Complete</strong>
            </span>
            <span>
              <b>Core lattice catalog</b>
              <i><em style="width: 100%" /></i>
              <strong>Complete</strong>
            </span>
            <span>
              <b>Research validation</b>
              <i><em style="width: 78%" /></i>
              <strong>Active</strong>
            </span>
            <span>
              <b>New investigations</b>
              <i><em style="width: 62%" /></i>
              <strong>Expanding</strong>
            </span>
          </div>
        </div>
      </section>

      <section id="journal" class="content-section journal-section">
        <div class="journal-heading">
          <div>
            <span class="chapter-kicker">Related journal · 09</span>
            <h2>The research belongs in articles as well as interfaces</h2>
          </div>

          <p>
            The project page explains the platform. Journal posts can preserve
            the exact definitions, calculations, failed paths, revisions, and
            evidence behind each mathematical investigation.
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
              <span>{{ post.category ?? 'Lattice Matrix' }}</span>
              <span>{{ post.date ?? post.readingTime ?? 'Article' }}</span>
            </div>

            <div class="journal-visual">
              <div class="journal-axis x" />
              <div class="journal-axis y" />
              <i
                v-for="node in 7"
                :key="node"
                :style="{
                  left: `${12 + ((node * 23) % 76)}%`,
                  top: `${14 + ((node * 31) % 70)}%`,
                }"
              />
            </div>

            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>

            <span class="read-link">
              {{
                props.relatedPosts.length === 0
                  ? 'Planned research article'
                  : 'Read article'
              }}
              <b>↗</b>
            </span>
          </a>
        </div>
      </section>
    </main>
  </article>
</template>

<style scoped>
.lattice-case-study {
  --lm-bg: #040b12;
  --lm-bg-soft: #071421;
  --lm-panel: #091a2b;
  --lm-panel-soft: #0c2236;
  --lm-text: #edf8ff;
  --lm-muted: #99afc1;
  --lm-faint: #587287;
  --lm-line: rgba(113, 181, 218, 0.16);
  --lm-line-strong: rgba(95, 211, 255, 0.32);
  --lm-cyan: #5ddcff;
  --lm-blue: #4c98ff;
  --lm-green: #61f2ac;
  --lm-violet: #a58aff;
  --lm-warning: #ffd27a;

  position: relative;
  isolation: isolate;
  width: min(100% - 1.2rem, 96rem);
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid var(--lm-line);
  border-radius: 1.7rem;
  background:
    linear-gradient(rgba(90, 189, 231, 0.026) 1px, transparent 1px),
    linear-gradient(90deg, rgba(90, 189, 231, 0.026) 1px, transparent 1px),
    radial-gradient(circle at 4% 8%, rgba(52, 180, 233, 0.14), transparent 27rem),
    radial-gradient(circle at 94% 12%, rgba(124, 96, 221, 0.1), transparent 25rem),
    var(--lm-bg);
  background-size: 46px 46px, 46px 46px, auto, auto, auto;
  color: var(--lm-text);
  padding:
    clamp(1rem, 2vw, 2rem)
    clamp(1rem, 3.4vw, 3.8rem)
    clamp(4rem, 8vw, 8rem);
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.45);
}

.lattice-case-study *,
.lattice-case-study *::before,
.lattice-case-study *::after {
  box-sizing: border-box;
}

.lattice-case-study a {
  color: inherit;
}

.lattice-case-study h1,
.lattice-case-study h2,
.lattice-case-study h3,
.lattice-case-study p {
  margin-top: 0;
}

.ambient {
  position: absolute;
  z-index: -1;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  filter: blur(95px);
  opacity: 0.13;
  pointer-events: none;
}

.ambient-a {
  top: 25rem;
  left: -20rem;
  background: var(--lm-cyan);
}

.ambient-b {
  top: 115rem;
  right: -19rem;
  background: var(--lm-violet);
}

.project-breadcrumb {
  display: flex;
  gap: 0.65rem;
  align-items: center;
  color: var(--lm-faint);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-breadcrumb a {
  text-decoration: none;
}

.project-breadcrumb a:hover {
  color: var(--lm-cyan);
}

.project-hero {
  display: grid;
  grid-template-columns: 0.96fr 1.04fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  min-height: 46rem;
  padding: clamp(3rem, 7vw, 7rem) 0 4rem;
}

.eyebrow-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.2rem;
  align-items: center;
  margin-bottom: 1.4rem;
}

.eyebrow,
.chapter-kicker {
  color: var(--lm-cyan);
  font-size: 0.66rem;
  font-weight: 950;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.status-dot {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--lm-muted);
  font-size: 0.7rem;
  font-weight: 800;
}

.status-dot i,
.card-state i,
.catalog-card-top i,
.local-state i {
  width: 0.43rem;
  height: 0.43rem;
  border-radius: 50%;
  background: var(--lm-green);
  box-shadow: 0 0 14px var(--lm-green);
}

.hero-copy h1 {
  max-width: 49rem;
  margin-bottom: 1.35rem;
  font-size: clamp(3rem, 6vw, 6.2rem);
  font-weight: 950;
  line-height: 0.93;
  letter-spacing: -0.067em;
}

.hero-copy h1 span {
  background: linear-gradient(
    95deg,
    var(--lm-cyan),
    #b9ecff 45%,
    var(--lm-violet)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.hero-summary {
  max-width: 48rem;
  color: var(--lm-muted);
  font-size: clamp(1rem, 1.5vw, 1.16rem);
  line-height: 1.78;
}

.technology-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.7rem 0 2.2rem;
}

.technology-row span,
.tag-row span,
.workbench-grid article > div:last-child span,
.visual-footer span {
  border: 1px solid var(--lm-line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.022);
  padding: 0.4rem 0.62rem;
  color: #bdd4e4;
  font-size: 0.62rem;
  font-weight: 800;
}

.hero-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
}

.hero-facts div {
  border-left: 2px solid rgba(93, 220, 255, 0.38);
  padding-left: 0.9rem;
}

.hero-facts span {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--lm-faint);
  font-size: 0.6rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-facts strong {
  color: #dcecf6;
  font-size: 0.74rem;
  line-height: 1.42;
}

.hero-workbench,
.electric-visual,
.factor-panel,
.bridge-map,
.tool-grid > article,
.evidence-ladder,
.architecture-map,
.status-panel {
  border: 1px solid var(--lm-line-strong);
  border-radius: 1.25rem;
  background:
    linear-gradient(145deg, rgba(10, 28, 45, 0.98), rgba(3, 10, 17, 0.99));
  box-shadow:
    0 34px 80px rgba(0, 0, 0, 0.43),
    inset 0 1px rgba(255, 255, 255, 0.04);
}

.hero-workbench,
.electric-visual,
.factor-panel,
.tool-grid > article {
  overflow: hidden;
}

.workbench-bar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid var(--lm-line);
  padding: 0.75rem 0.9rem;
}

.brand-mark,
.local-state,
.card-state,
.catalog-card-top > span {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.brand-mark i {
  width: 0.9rem;
  height: 0.9rem;
  border: 1px solid var(--lm-cyan);
  transform: rotate(45deg);
}

.brand-mark span {
  font-size: 0.62rem;
  font-weight: 900;
}

.workbench-tabs {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  color: var(--lm-faint);
  font-size: 0.52rem;
}

.workbench-tabs .active {
  color: var(--lm-cyan);
}

.local-state {
  color: var(--lm-faint);
  font-size: 0.5rem;
  font-weight: 900;
}

.workbench-hero {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 2rem;
  align-items: center;
  min-height: 13rem;
  border-bottom: 1px solid var(--lm-line);
  background:
    linear-gradient(90deg, rgba(27, 148, 199, 0.08), transparent 50%),
    radial-gradient(circle at 90% 20%, rgba(142, 104, 235, 0.09), transparent 45%);
  padding: 1.4rem;
}

.workbench-hero small {
  color: var(--lm-cyan);
  font-size: 0.52rem;
  font-weight: 950;
  letter-spacing: 0.13em;
}

.workbench-hero h2 {
  margin: 0.35rem 0 0;
  font-size: clamp(2.2rem, 4vw, 4.4rem);
  font-weight: 950;
  line-height: 0.75;
  letter-spacing: -0.065em;
}

.workbench-hero h2 span {
  color: transparent;
  -webkit-text-stroke: 1px rgba(198, 235, 255, 0.38);
}

.workbench-hero p {
  margin: 0;
  border-left: 2px solid rgba(93, 220, 255, 0.26);
  padding-left: 0.8rem;
  color: var(--lm-muted);
  font-size: 0.62rem;
  line-height: 1.6;
}

.workbench-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  padding: 0.6rem;
}

.workbench-grid article {
  position: relative;
  min-height: 10rem;
  overflow: hidden;
  border: 1px solid var(--lm-line);
  border-radius: 0.75rem;
  background: rgba(10, 30, 48, 0.86);
  padding: 0.75rem;
}

.card-state {
  color: var(--lm-green);
  font-size: 0.46rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.card-symbol {
  position: absolute;
  top: 0.2rem;
  right: 0.5rem;
  color: rgba(77, 145, 191, 0.13);
  font-family: Georgia, serif;
  font-size: 4rem;
  font-weight: 400;
}

.workbench-grid article > small,
.catalog-card > small {
  display: block;
  margin-top: 2rem;
  color: var(--lm-cyan);
  font-size: 0.46rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.workbench-grid h3 {
  margin: 0.25rem 0 0.35rem;
  font-size: 0.86rem;
}

.workbench-grid p {
  margin: 0;
  color: var(--lm-faint);
  font-size: 0.5rem;
  line-height: 1.45;
}

.workbench-grid article > div:last-child {
  display: flex;
  flex-wrap: wrap;
  gap: 0.24rem;
  margin-top: 0.6rem;
}

.workbench-grid article > div:last-child span {
  padding: 0.18rem 0.32rem;
  font-size: 0.4rem;
}

.media-replacement-note {
  border-top: 1px solid var(--lm-line);
  padding: 0.75rem 0.9rem;
  color: var(--lm-faint);
  font-size: 0.58rem;
  line-height: 1.5;
}

.media-replacement-note span {
  margin-right: 0.5rem;
  color: var(--lm-cyan);
  font-weight: 950;
}

.media-replacement-note code {
  color: #ccecff;
}

.section-nav {
  position: sticky;
  top: 0.8rem;
  z-index: 20;
  display: flex;
  gap: 0.35rem;
  align-items: center;
  overflow-x: auto;
  margin: 0 0 5rem;
  border: 1px solid var(--lm-line);
  border-radius: 0.9rem;
  background: rgba(4, 11, 18, 0.86);
  padding: 0.58rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(18px);
  scrollbar-width: none;
}

.section-nav > span {
  flex: 0 0 auto;
  padding: 0 0.65rem;
  color: var(--lm-faint);
  font-size: 0.62rem;
  font-weight: 900;
  text-transform: uppercase;
}

.section-nav a {
  flex: 0 0 auto;
  border-radius: 0.55rem;
  padding: 0.52rem 0.7rem;
  color: var(--lm-muted);
  font-size: 0.7rem;
  font-weight: 800;
  text-decoration: none;
}

.section-nav a:hover {
  background: rgba(93, 220, 255, 0.08);
  color: var(--lm-cyan);
}

.content-section {
  margin-top: clamp(5rem, 10vw, 10rem);
  scroll-margin-top: 6rem;
}

.section-heading,
.bridge-heading,
.method-heading,
.architecture-heading,
.journal-heading {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 3rem;
  align-items: end;
  margin-bottom: 2rem;
}

.section-heading > div,
.bridge-heading > div,
.method-heading > div,
.architecture-heading > div,
.journal-heading > div {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.85rem;
  align-items: start;
}

.section-heading > div > span {
  color: var(--lm-cyan);
  font-size: 0.68rem;
  font-weight: 950;
  letter-spacing: 0.14em;
}

.section-heading h2,
.bridge-heading h2,
.method-heading h2,
.architecture-heading h2,
.journal-heading h2 {
  margin-bottom: 0;
  font-size: clamp(2rem, 4vw, 4.15rem);
  font-weight: 950;
  line-height: 0.99;
  letter-spacing: -0.052em;
}

.section-heading > p,
.bridge-heading > p,
.method-heading > p,
.architecture-heading > p,
.journal-heading > p {
  margin-bottom: 0;
  color: var(--lm-muted);
  line-height: 1.72;
}

.statement-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(93, 220, 255, 0.22);
  border-radius: 1.2rem;
  background:
    linear-gradient(120deg, rgba(47, 174, 221, 0.08), rgba(135, 103, 228, 0.035));
  padding: clamp(1.4rem, 4vw, 3rem);
}

.statement-card p {
  max-width: 72rem;
  margin: 0;
  font-size: clamp(1.2rem, 2.2vw, 2rem);
  font-weight: 760;
  line-height: 1.48;
  letter-spacing: -0.025em;
}

.statement-mark {
  position: absolute;
  top: -2rem;
  right: 2rem;
  color: rgba(93, 220, 255, 0.1);
  font-family: Georgia, serif;
  font-size: 9rem;
}

.research-flow {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.65rem;
  margin-top: 0.8rem;
}

.research-flow article {
  position: relative;
  min-height: 10.5rem;
  border: 1px solid var(--lm-line);
  border-radius: 0.85rem;
  background: var(--lm-panel);
  padding: 0.95rem;
}

.research-flow article > span {
  color: var(--lm-cyan);
  font-size: 0.6rem;
  font-weight: 950;
}

.research-flow h3 {
  margin: 1.4rem 0 0.45rem;
  font-size: 0.92rem;
}

.research-flow p {
  margin: 0;
  color: var(--lm-faint);
  font-size: 0.68rem;
  line-height: 1.5;
}

.research-flow article > i {
  position: absolute;
  top: 50%;
  right: -0.72rem;
  z-index: 2;
  color: var(--lm-cyan);
  font-style: normal;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.catalog-card {
  position: relative;
  min-height: 20rem;
  overflow: hidden;
  border: 1px solid var(--lm-line);
  border-radius: 1rem;
  background:
    linear-gradient(145deg, rgba(11, 31, 50, 0.98), rgba(7, 20, 33, 0.98));
  padding: 1rem;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.catalog-card:hover {
  transform: translateY(-4px);
  border-color: var(--lm-line-strong);
}

.catalog-card-top {
  display: flex;
  justify-content: space-between;
  color: var(--lm-green);
  font-size: 0.52rem;
  font-weight: 900;
  text-transform: uppercase;
}

.catalog-card-top > b {
  color: var(--lm-cyan);
  font-size: 0.85rem;
}

.catalog-symbol {
  position: absolute;
  top: 1.4rem;
  right: 0.5rem;
  color: rgba(76, 142, 185, 0.12);
  font-family: Georgia, serif;
  font-size: 7rem;
}

.catalog-card > small {
  margin-top: 6.5rem;
}

.catalog-card h3 {
  max-width: 18rem;
  margin: 0.35rem 0 0.55rem;
  font-size: 1.15rem;
  line-height: 1.15;
}

.catalog-card p {
  color: var(--lm-faint);
  font-size: 0.7rem;
  line-height: 1.55;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 1rem;
}

.tag-row span {
  padding: 0.25rem 0.45rem;
  font-size: 0.5rem;
}

.developer-note {
  border: 1px solid var(--lm-line);
  border-radius: 0.85rem;
  background: rgba(255, 255, 255, 0.018);
  padding: 0.8rem 1rem;
}

.catalog-section > .developer-note {
  margin-top: 0.75rem;
}

.developer-note summary {
  cursor: pointer;
  color: var(--lm-cyan);
  font-size: 0.65rem;
  font-weight: 950;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.developer-note p {
  margin: 0.7rem 0 0;
  color: var(--lm-muted);
  font-size: 0.76rem;
  line-height: 1.65;
}

.inline-note {
  margin-top: 0.75rem;
}

.feature-chapter {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}

.chapter-copy h2 {
  margin: 0.75rem 0 1rem;
  font-size: clamp(2.2rem, 4.5vw, 4.65rem);
  font-weight: 950;
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.chapter-copy > p {
  color: var(--lm-muted);
  line-height: 1.75;
}

.capability-list {
  display: grid;
  gap: 0.65rem;
  margin: 1.5rem 0;
}

.capability-list article {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  border-top: 1px solid var(--lm-line);
  padding-top: 0.8rem;
}

.capability-list article > span {
  color: var(--lm-cyan);
  font-size: 1.05rem;
  font-weight: 950;
}

.capability-list h3 {
  margin: 0 0 0.2rem;
  font-size: 0.8rem;
}

.capability-list p {
  margin: 0;
  color: var(--lm-faint);
  font-size: 0.7rem;
  line-height: 1.5;
}

.visual-header,
.visual-footer,
.factor-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid var(--lm-line);
  padding: 0.8rem 1rem;
  color: var(--lm-faint);
  font-size: 0.55rem;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.radial-map {
  position: relative;
  min-height: 34rem;
  overflow: hidden;
  background:
    radial-gradient(circle, rgba(93, 220, 255, 0.07), transparent 54%),
    linear-gradient(rgba(93, 220, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(93, 220, 255, 0.025) 1px, transparent 1px);
  background-size: auto, 32px 32px, 32px 32px;
}

.axis {
  position: absolute;
  background:
    linear-gradient(90deg, transparent, rgba(93, 220, 255, 0.25), transparent);
}

.axis-x {
  top: 50%;
  left: 8%;
  width: 84%;
  height: 1px;
}

.axis-y {
  top: 8%;
  left: 50%;
  width: 1px;
  height: 84%;
  background:
    linear-gradient(transparent, rgba(93, 220, 255, 0.25), transparent);
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(93, 220, 255, 0.14);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.orbit-1 {
  width: 10rem;
  height: 10rem;
}

.orbit-2 {
  width: 19rem;
  height: 19rem;
}

.orbit-3 {
  width: 29rem;
  height: 29rem;
}

.center-node,
.lattice-node {
  position: absolute;
  display: grid;
  border: 1px solid var(--lm-line-strong);
  border-radius: 0.75rem;
  background: rgba(5, 15, 24, 0.92);
  padding: 0.65rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
}

.center-node {
  top: 50%;
  left: 50%;
  width: 6.7rem;
  place-items: center;
  transform: translate(-50%, -50%);
  text-align: center;
}

.center-node small,
.lattice-node small {
  color: var(--lm-faint);
  font-size: 0.5rem;
}

.center-node b {
  color: var(--lm-cyan);
  font-family: Georgia, serif;
  font-size: 1.8rem;
}

.lattice-node span {
  color: var(--lm-cyan);
  font-size: 0.52rem;
  font-weight: 950;
}

.lattice-node b {
  margin: 0.25rem 0;
  font-size: 0.7rem;
}

.node-a {
  top: 12%;
  left: 43%;
}

.node-b {
  top: 31%;
  right: 10%;
}

.node-c {
  bottom: 15%;
  right: 19%;
}

.node-d {
  bottom: 18%;
  left: 14%;
}

.node-e {
  top: 28%;
  left: 8%;
  border-style: dashed;
}

.visual-footer {
  justify-content: flex-start;
  flex-wrap: wrap;
  border-top: 1px solid var(--lm-line);
  border-bottom: 0;
}

.quantum-layout {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 1rem;
}

.quantum-stack {
  display: grid;
  gap: 0.55rem;
}

.quantum-stack article {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.8rem;
  align-items: center;
  border: 1px solid var(--lm-line);
  border-radius: 0.85rem;
  background: var(--lm-panel);
  padding: 0.85rem;
  transform: translateX(var(--offset));
}

.quantum-stack article > span {
  color: var(--lm-cyan);
  font-size: 0.58rem;
  font-weight: 950;
}

.quantum-stack h3 {
  margin: 0 0 0.22rem;
  font-size: 0.8rem;
}

.quantum-stack p {
  margin: 0;
  color: var(--lm-faint);
  font-size: 0.64rem;
  line-height: 1.45;
}

.quantum-stack article > b {
  color: rgba(93, 220, 255, 0.34);
  font-family: Georgia, serif;
  font-size: 1.5rem;
}

.factor-panel {
  display: flex;
  flex-direction: column;
}

.factor-header b {
  color: var(--lm-green);
}

.factor-equation {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  min-height: 12rem;
  padding: 1rem;
}

.factor-equation span {
  display: grid;
  min-width: 3.4rem;
  height: 3.4rem;
  place-items: center;
  border: 1px solid var(--lm-line-strong);
  border-radius: 0.75rem;
  background: rgba(93, 220, 255, 0.045);
  color: var(--lm-cyan);
  font-family: Georgia, serif;
  font-size: 1.05rem;
}

.factor-equation > b {
  color: var(--lm-faint);
}

.factor-values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.55rem;
  padding: 0 1rem 1rem;
}

.factor-values div {
  display: grid;
  border: 1px solid var(--lm-line);
  border-radius: 0.7rem;
  padding: 0.7rem;
}

.factor-values span {
  color: var(--lm-cyan);
  font-size: 0.55rem;
  font-weight: 900;
}

.factor-values b {
  margin: 0.45rem 0;
  font-size: 1rem;
}

.factor-values small {
  color: var(--lm-faint);
  font-size: 0.48rem;
}

.factor-warning {
  margin-top: auto;
  border-top: 1px solid var(--lm-line);
  background: rgba(97, 242, 172, 0.035);
  padding: 1rem;
}

.factor-warning span {
  color: var(--lm-green);
  font-size: 0.58rem;
  font-weight: 950;
}

.factor-warning p {
  margin: 0.35rem 0 0;
  color: var(--lm-muted);
  font-size: 0.68rem;
  line-height: 1.55;
}

.bridge-map {
  display: grid;
  grid-template-columns: 1fr 0.65fr 1fr;
  gap: 1rem;
  min-height: 24rem;
  padding: 1rem;
}

.bridge-side {
  display: grid;
  align-content: center;
  gap: 0.65rem;
}

.bridge-side > span {
  color: var(--lm-cyan);
  font-size: 0.58rem;
  font-weight: 950;
  letter-spacing: 0.1em;
}

.bridge-side article {
  display: grid;
  border: 1px solid var(--lm-line);
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.018);
  padding: 0.85rem;
}

.bridge-side b {
  font-size: 0.75rem;
}

.bridge-side small {
  margin-top: 0.2rem;
  color: var(--lm-faint);
  font-size: 0.57rem;
}

.bridge-core {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 20rem;
}

.bridge-symbol {
  z-index: 2;
  display: grid;
  width: 6.5rem;
  height: 6.5rem;
  place-items: center;
  border: 1px solid var(--lm-line-strong);
  border-radius: 50%;
  background: var(--lm-bg);
  color: var(--lm-cyan);
  font-family: Georgia, serif;
  font-size: 2.5rem;
  box-shadow: 0 0 45px rgba(93, 220, 255, 0.1);
}

.bridge-core > span {
  position: absolute;
  bottom: 2rem;
  color: var(--lm-faint);
  font-size: 0.5rem;
  font-weight: 900;
  line-height: 1.5;
  text-align: center;
}

.bridge-line {
  position: absolute;
  width: 170%;
  height: 1px;
  background:
    linear-gradient(90deg, transparent, rgba(93, 220, 255, 0.46), transparent);
}

.line-b {
  transform: rotate(25deg);
}

.line-c {
  transform: rotate(-25deg);
}

.bridge-paths {
  display: grid;
  gap: 0.55rem;
  margin-top: 0.75rem;
}

.bridge-paths article {
  display: grid;
  grid-template-columns: 20rem 1fr 3rem;
  gap: 0.75rem;
  align-items: center;
  border: 1px solid var(--lm-line);
  border-radius: 0.8rem;
  background: var(--lm-panel);
  padding: 0.8rem;
}

.bridge-paths article > div {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0.55rem;
  align-items: center;
}

.bridge-paths strong {
  font-size: 0.68rem;
}

.bridge-paths span {
  color: var(--lm-faint);
  font-size: 0.53rem;
}

.bridge-paths > article > i,
.status-bars span > i {
  display: block;
  overflow: hidden;
  height: 0.35rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.055);
}

.bridge-paths em,
.status-bars em {
  display: block;
  height: 100%;
  border-radius: inherit;
  background:
    linear-gradient(90deg, var(--lm-cyan), var(--lm-green));
}

.bridge-paths article > b {
  color: var(--lm-faint);
  font-size: 0.58rem;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.tool-grid > article {
  position: relative;
  min-height: 25rem;
  padding: 1rem;
}

.tool-symbol {
  position: absolute;
  top: 0.2rem;
  right: 0.75rem;
  color: rgba(93, 220, 255, 0.1);
  font-family: Georgia, serif;
  font-size: 7rem;
}

.tool-index {
  color: var(--lm-cyan);
  font-size: 0.58rem;
  font-weight: 950;
}

.tool-grid h3 {
  max-width: 15rem;
  margin: 7rem 0 0.55rem;
  font-size: 1.2rem;
  line-height: 1.15;
}

.tool-grid > article > p {
  color: var(--lm-faint);
  font-size: 0.7rem;
  line-height: 1.58;
}

.constant-preview {
  display: grid;
  gap: 0.45rem;
  margin-top: 1rem;
}

.constant-preview > span {
  display: grid;
  grid-template-columns: 2rem 1fr auto;
  gap: 0.5rem;
  align-items: center;
  border-top: 1px solid var(--lm-line);
  padding-top: 0.55rem;
}

.constant-preview b {
  color: var(--lm-cyan);
  font-family: Georgia, serif;
}

.constant-preview small {
  color: var(--lm-muted);
  font-size: 0.56rem;
}

.constant-preview em {
  color: var(--lm-faint);
  font-size: 0.5rem;
  font-style: normal;
}

.binary-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  min-height: 7rem;
  margin-top: 1rem;
  border: 1px solid var(--lm-line);
  border-radius: 0.7rem;
  background: rgba(0, 0, 0, 0.16);
  padding: 0.7rem;
}

.binary-preview code {
  color: var(--lm-cyan);
  font-size: 0.66rem;
  letter-spacing: 0.08em;
}

.binary-preview span,
.binary-preview b {
  color: var(--lm-faint);
}

.pi-preview {
  display: grid;
  min-height: 7rem;
  align-content: center;
  margin-top: 1rem;
  border: 1px solid var(--lm-line);
  border-radius: 0.7rem;
  background: rgba(0, 0, 0, 0.16);
  padding: 0.8rem;
}

.pi-preview > span {
  overflow: hidden;
  color: var(--lm-muted);
  font-family: monospace;
  font-size: 0.7rem;
  white-space: nowrap;
}

.pi-preview i {
  width: max-content;
  margin: 0.4rem 0;
  border-bottom: 2px solid var(--lm-cyan);
  color: var(--lm-cyan);
  font-family: monospace;
  font-size: 1rem;
  font-style: normal;
}

.pi-preview small {
  color: var(--lm-faint);
  font-size: 0.5rem;
}

.principle-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.7rem;
}

.principle-grid article,
.architecture-grid article,
.journal-card {
  border: 1px solid var(--lm-line);
  border-radius: 0.9rem;
  background: var(--lm-panel);
  padding: 1rem;
}

.principle-grid article > span {
  color: var(--lm-cyan);
  font-size: 0.58rem;
  font-weight: 950;
}

.principle-grid h3 {
  margin: 1.7rem 0 0.45rem;
  font-size: 0.84rem;
}

.principle-grid p {
  margin: 0;
  color: var(--lm-faint);
  font-size: 0.67rem;
  line-height: 1.55;
}

.evidence-ladder {
  display: grid;
  grid-template-columns: 0.35fr 1.65fr;
  gap: 1rem;
  margin-top: 0.8rem;
  padding: 1rem;
}

.ladder-title {
  display: grid;
  align-content: center;
  border-right: 1px solid var(--lm-line);
  padding-right: 1rem;
}

.ladder-title span {
  color: var(--lm-cyan);
  font-size: 0.62rem;
  font-weight: 950;
  letter-spacing: 0.1em;
}

.ladder-title p {
  margin: 0.5rem 0 0;
  color: var(--lm-faint);
  font-size: 0.65rem;
  line-height: 1.55;
}

.ladder-levels {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.45rem;
  align-items: end;
}

.ladder-levels article {
  display: grid;
  min-height: var(--height);
  align-content: end;
  border: 1px solid var(--lm-line);
  border-radius: 0.7rem;
  background:
    linear-gradient(180deg, rgba(93, 220, 255, 0.06), rgba(93, 220, 255, 0.015));
  padding: 0.7rem;
}

.level-one { --height: 7rem; }
.level-two { --height: 8.5rem; }
.level-three { --height: 10rem; }
.level-four { --height: 11.5rem; }
.level-five {
  --height: 13rem;
  border-color: rgba(97, 242, 172, 0.3) !important;
}

.ladder-levels span {
  color: var(--lm-cyan);
  font-size: 0.5rem;
  font-weight: 950;
}

.ladder-levels b {
  margin: 0.4rem 0 0.2rem;
  font-size: 0.68rem;
}

.ladder-levels small {
  color: var(--lm-faint);
  font-size: 0.5rem;
}

.architecture-map {
  display: grid;
  grid-template-columns: 1fr 0.75fr 1fr;
  gap: 1rem;
  padding: 1rem;
}

.architecture-column {
  display: grid;
  gap: 0.55rem;
}

.architecture-column > span,
.architecture-core > span {
  color: var(--lm-faint);
  font-size: 0.55rem;
  font-weight: 950;
  letter-spacing: 0.1em;
}

.architecture-column article {
  display: grid;
  border: 1px solid var(--lm-line);
  border-radius: 0.72rem;
  background: rgba(255, 255, 255, 0.018);
  padding: 0.8rem;
}

.architecture-column b {
  font-size: 0.73rem;
}

.architecture-column small {
  margin-top: 0.2rem;
  color: var(--lm-faint);
  font-size: 0.56rem;
}

.architecture-core {
  display: grid;
  align-content: center;
  gap: 0.4rem;
  border: 1px solid rgba(93, 220, 255, 0.25);
  border-radius: 0.85rem;
  background: rgba(93, 220, 255, 0.035);
  padding: 0.9rem;
  text-align: center;
}

.architecture-core b {
  font-size: 0.68rem;
}

.architecture-core i {
  justify-self: center;
  width: 1px;
  height: 1rem;
  background:
    linear-gradient(var(--lm-cyan), transparent);
}

.architecture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.7rem;
  margin-top: 0.75rem;
}

.architecture-grid span {
  color: var(--lm-cyan);
  font-size: 0.66rem;
  font-weight: 900;
}

.architecture-grid p {
  margin: 0.75rem 0 0;
  color: var(--lm-faint);
  font-size: 0.66rem;
  line-height: 1.55;
}

.decision-title {
  margin: 2rem 0 0.9rem;
  font-size: 1rem;
}

.decision-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.7rem;
}

.decision-grid article {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.7rem;
  border: 1px solid var(--lm-line);
  border-radius: 0.85rem;
  background: var(--lm-panel);
  padding: 0.9rem;
}

.decision-grid article > span {
  color: var(--lm-cyan);
  font-size: 0.58rem;
  font-weight: 950;
}

.decision-grid h3 {
  margin: 0 0 0.25rem;
  font-size: 0.78rem;
}

.decision-grid p {
  margin: 0;
  color: var(--lm-faint);
  font-size: 0.65rem;
  line-height: 1.5;
}

.status-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 0.8rem;
  padding: 1.35rem;
}

.status-panel > div:first-child > span {
  color: var(--lm-cyan);
  font-size: 0.6rem;
  font-weight: 950;
  letter-spacing: 0.12em;
}

.status-panel h3 {
  margin: 0.5rem 0;
  font-size: 1.3rem;
}

.status-panel p {
  margin: 0;
  color: var(--lm-muted);
  font-size: 0.73rem;
  line-height: 1.65;
}

.status-bars {
  display: grid;
  gap: 0.8rem;
  align-content: center;
}

.status-bars > span {
  display: grid;
  grid-template-columns: 8rem 1fr 4rem;
  gap: 0.6rem;
  align-items: center;
}

.status-bars b {
  color: var(--lm-muted);
  font-size: 0.6rem;
}

.status-bars strong {
  color: var(--lm-faint);
  font-size: 0.56rem;
  text-align: right;
}

.journal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.journal-card {
  display: flex;
  min-height: 20rem;
  flex-direction: column;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.journal-card:hover {
  transform: translateY(-4px);
  border-color: var(--lm-line-strong);
  background: var(--lm-panel-soft);
}

.journal-card.planned {
  cursor: default;
}

.journal-card-top {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  color: var(--lm-faint);
  font-size: 0.53rem;
  font-weight: 900;
  text-transform: uppercase;
}

.journal-visual {
  position: relative;
  min-height: 7rem;
  overflow: hidden;
  margin: 1rem 0;
  border-radius: 0.72rem;
  background:
    linear-gradient(rgba(93, 220, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(93, 220, 255, 0.035) 1px, transparent 1px),
    rgba(255, 255, 255, 0.018);
  background-size: 18px 18px;
}

.journal-axis {
  position: absolute;
  background: rgba(93, 220, 255, 0.2);
}

.journal-axis.x {
  top: 50%;
  left: 8%;
  width: 84%;
  height: 1px;
}

.journal-axis.y {
  top: 8%;
  left: 50%;
  width: 1px;
  height: 84%;
}

.journal-visual i {
  position: absolute;
  width: 0.42rem;
  height: 0.42rem;
  border: 1px solid var(--lm-cyan);
  border-radius: 50%;
  background: var(--lm-bg);
  box-shadow: 0 0 9px rgba(93, 220, 255, 0.45);
}

.journal-card h3 {
  margin-bottom: 0.6rem;
  font-size: 1rem;
  line-height: 1.25;
}

.journal-card p {
  color: var(--lm-faint);
  font-size: 0.68rem;
  line-height: 1.55;
}

.read-link {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  border-top: 1px solid var(--lm-line);
  padding-top: 0.8rem;
  color: var(--lm-cyan);
  font-size: 0.63rem;
  font-weight: 900;
}

.lattice-case-study a:focus-visible,
.lattice-case-study summary:focus-visible {
  outline: 3px solid var(--lm-warning);
  outline-offset: 3px;
}

@media (max-width: 76rem) {
  .project-hero,
  .feature-chapter {
    grid-template-columns: 1fr;
  }

  .hero-workbench {
    max-width: 58rem;
  }

  .catalog-grid,
  .principle-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 60rem) {
  .hero-facts,
  .research-flow,
  .tool-grid,
  .journal-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .research-flow article > i {
    display: none;
  }

  .section-heading,
  .bridge-heading,
  .method-heading,
  .architecture-heading,
  .journal-heading,
  .quantum-layout,
  .status-panel {
    grid-template-columns: 1fr;
  }

  .bridge-map,
  .architecture-map {
    grid-template-columns: 1fr;
  }

  .bridge-core {
    min-height: 10rem;
  }

  .bridge-line {
    width: 80%;
  }

  .architecture-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .evidence-ladder {
    grid-template-columns: 1fr;
  }

  .ladder-title {
    border-right: 0;
    border-bottom: 1px solid var(--lm-line);
    padding: 0 0 0.8rem;
  }
}

@media (max-width: 43rem) {
  .lattice-case-study {
    width: min(100% - 0.6rem, 96rem);
    border-radius: 1.1rem;
    padding-inline: 0.8rem;
  }

  .project-hero {
    min-height: auto;
    padding-top: 3rem;
  }

  .hero-copy h1 {
    font-size: clamp(2.8rem, 14vw, 4.4rem);
  }

  .hero-facts,
  .research-flow,
  .catalog-grid,
  .tool-grid,
  .principle-grid,
  .architecture-grid,
  .decision-grid,
  .journal-grid {
    grid-template-columns: 1fr;
  }

  .workbench-hero,
  .workbench-grid {
    grid-template-columns: 1fr;
  }

  .workbench-tabs {
    display: none;
  }

  .workbench-bar {
    grid-template-columns: 1fr auto;
  }

  .workbench-hero h2 {
    line-height: 0.88;
  }

  .factor-values {
    grid-template-columns: repeat(2, 1fr);
  }

  .bridge-paths article {
    grid-template-columns: 1fr;
  }

  .bridge-paths article > div {
    grid-template-columns: 1fr;
  }

  .ladder-levels {
    grid-template-columns: 1fr;
  }

  .ladder-levels article {
    min-height: auto;
  }

  .status-bars > span {
    grid-template-columns: 1fr;
  }

  .status-bars strong {
    text-align: left;
  }

  .section-nav {
    margin-bottom: 3rem;
  }
}
</style>
