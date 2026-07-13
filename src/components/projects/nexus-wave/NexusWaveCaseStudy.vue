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
      title: 'Nexus Wave',
      description:
        'A music creation and analysis workspace combining lyrics, phonetics, audio analysis, visualization, and album organization.',
      status: 'in-development',
      technologies: ['Vue', 'FastAPI', 'Python', 'TypeScript'],
      features: [],
    }),
    relatedPosts: () => [],
  },
)

const sectionLinks = [
  ['overview', 'Overview'],
  ['creation', 'Creation'],
  ['lyrics', 'Lyrics'],
  ['audio', 'Audio'],
  ['virel', 'Virel'],
  ['phonetics', 'Phonetics'],
  ['platform', 'Platform'],
  ['architecture', 'Architecture'],
  ['journal', 'Journal'],
]

const productFlow = [
  ['01', 'Create', 'Build albums, tracks, and project structure.'],
  ['02', 'Develop', 'Write lyrics, manage media, and refine every track.'],
  ['03', 'Analyze', 'Extract audio, melody, rhythm, and lyrical information.'],
  ['04', 'Interpret', 'Turn technical data into readable creative tools.'],
  ['05', 'Visualize', 'Drive original audio-reactive scenes and presets.'],
]

const creationCapabilities = [
  ['Album workspace', 'A focused home for project identity, progress, duration, artwork, and track status.'],
  ['Three interface modes', 'Simple, Advanced, and Editor modes expose the right amount of information for each task.'],
  ['Track-level editing', 'Lyrics, audio, artwork, synchronization, metadata, analysis, and status stay connected.'],
  ['Progress system', 'Checklists and project summaries make incomplete work visible without opening every track.'],
]

const lyricTools = [
  ['Lyrics analysis', 'Examines structure, repeated language, rhyme behavior, density, and performance-oriented patterns.'],
  ['Synchronization', 'Associates lyric lines with audio time for playback, visualizers, and timed reading.'],
  ['Readable results', 'Technical findings are presented as creative observations rather than raw machine output.'],
  ['Track integration', 'Lyrics remain part of the same track model as audio, artwork, status, and analysis.'],
]

const audioMetrics = [
  ['BASS', 'Low-frequency weight'],
  ['MID', 'Body and vocal presence'],
  ['TREBLE', 'Air, detail, and brightness'],
  ['ENERGY', 'Overall musical intensity'],
  ['BEAT', 'Transient and pulse evidence'],
  ['PITCH', 'Melodic and pitch-class information'],
]

const virelSignals = [
  ['Pulse', 'Rhythmic repetition and movement', 78],
  ['Pressure', 'Sustained density and weight', 64],
  ['Glass', 'Sharp, bright, fragile motion', 42],
  ['Impact', 'Hits, attacks, and sudden changes', 88],
  ['Ghost', 'Decay, memory, and residual motion', 56],
  ['Breath', 'Slow expansion and organic release', 70],
]

const supportingFeatures = [
  ['Lead Sheet Renderer', 'Transforms pitch and timing information into a compact musician-oriented representation.'],
  ['Topline Mapper', 'Shows vocal or melodic contour, repeated shapes, range, and movement across a track.'],
  ['Visualizer presets', 'Reusable configurations define motion, space, geometry, color, feedback, and signal bias.'],
  ['Visualizer debugging', 'Exposes raw audio, normalized values, multipliers, derived signals, and renderer outputs.'],
  ['Knowledge Center', 'In-app guides explain musical concepts, analysis models, phonetics, and system architecture.'],
  ['Knowledge Atlas', 'Connects concepts visually so users can explore relationships instead of reading linearly.'],
  ['Dependency Tree', 'Shows which data and systems are required by each feature.'],
  ['Global audio player', 'Keeps playback available while moving between project, analysis, and visualizer views.'],
  ['Command palette', 'Provides searchable navigation and actions through a shared command registry.'],
  ['Keyboard shortcuts', 'Supports rapid navigation, playback, saving, fullscreen, preset switching, and reset actions.'],
  ['Responsive interface', 'Adapts the main workspace, navigation, cards, editors, and visualizer controls for mobile.'],
  ['Local customization', 'Persists theme, interface mode, sidebar state, presets, player visibility, and private notes.'],
]

const architecture = [
  ['Vue 3 + Vite', 'Feature-oriented interfaces, editors, interactive tools, and renderer controls.'],
  ['FastAPI', 'Album, track, upload, lyrics, pronunciation, activity, and analysis services.'],
  ['Python analysis', 'Audio and linguistic processing produce normalized, structured results.'],
  ['Canvas + WebGL', 'Multiple rendering strategies support 2D scenes, shaders, Three.js experiments, and integrations.'],
  ['Structured project data', 'Albums and tracks remain the shared domain model across creative and technical tools.'],
]

const challenges = [
  ['Complexity without clutter', 'I separated simple viewing, advanced inspection, and direct editing into distinct workspace modes.'],
  ['Meaningful audio reactions', 'I avoided mapping every frequency to every effect and introduced specialized signal routing.'],
  ['Practical pronunciation', 'I designed output for singers and readers instead of limiting the tool to formal phonetic notation.'],
  ['Reusable visualization logic', 'I separated audio analysis, Virel intent, preset configuration, and renderer implementation.'],
]

const plannedPosts: RelatedPost[] = [
  {
    title: 'Building Virel: Beyond Direct Audio Mapping',
    description:
      'How I designed an expressive signal layer between raw analysis and the visual renderer.',
    href: '#',
    category: 'Planned article',
    readingTime: 'Virel architecture',
  },
  {
    title: 'Readable Phonetics for Multilingual Singing',
    description:
      'Why formal transcription was not enough, and how the pronunciation pipeline became performance-oriented.',
    href: '#',
    category: 'Planned article',
    readingTime: 'Language tools',
  },
  {
    title: 'Designing Three Modes for One Creative Workspace',
    description:
      'The interface strategy behind Simple, Advanced, and Editor modes in the Creation Manager.',
    href: '#',
    category: 'Planned article',
    readingTime: 'Product design',
  },
]

const visiblePosts = props.relatedPosts.length > 0 ? props.relatedPosts : plannedPosts
</script>

<template>
  <article class="nexus-case-study">
    <div class="ambient ambient-one" aria-hidden="true" />
    <div class="ambient ambient-two" aria-hidden="true" />

    <div class="project-breadcrumb">
      <a href="/projects">Projects</a>
      <span>/</span>
      <span>{{ props.project.title ?? 'Nexus Wave' }}</span>
    </div>

    <header class="project-hero">
      <div class="hero-copy">
        <div class="eyebrow-row">
          <span class="eyebrow">Full-stack creative application</span>
          <span class="status-dot"><i /> Complete product · Active development</span>
        </div>

        <h1>I built <span>Nexus Wave</span> to connect the creative and technical sides of music.</h1>

        <p class="hero-summary">
          {{ props.project.description }} It brings album organization, lyrics intelligence,
          multilingual phonetics, audio analysis, melody interpretation, and original
          audio-reactive visualization into one connected workspace.
        </p>

        <div class="technology-row" aria-label="Technologies used">
          <span v-for="technology in props.project.technologies" :key="technology">
            {{ technology }}
          </span>
          <span>WebGL</span>
          <span>Audio APIs</span>
        </div>

        <div class="hero-facts">
          <div>
            <span>Role</span>
            <strong>Product design &amp; full-stack development</strong>
          </div>
          <div>
            <span>Product state</span>
            <strong>Complete core experience</strong>
          </div>
          <div>
            <span>Direction</span>
            <strong>Actively expanding analysis &amp; visualization</strong>
          </div>
        </div>
      </div>

      <div class="hero-console" aria-label="Nexus Wave interface placeholder">
        <div class="console-topbar">
          <div class="window-dots"><i /><i /><i /></div>
          <span>NEXUS WAVE / LIVE SYSTEM</span>
          <span>01:42</span>
        </div>

        <div class="console-grid">
          <div class="album-panel">
            <span class="panel-label">CURRENT PROJECT</span>
            <div class="cover-placeholder">
              <span>NW</span>
              <i v-for="line in 6" :key="line" :style="{ transform: `rotate(${line * 30}deg)` }" />
            </div>
            <h2>Hidden Variables</h2>
            <p>12 tracks · 42:18</p>
          </div>

          <div class="signal-panel">
            <div class="signal-heading">
              <span>Audio frame</span>
              <b>LIVE</b>
            </div>
            <div class="hero-wave">
              <i
                v-for="bar in 38"
                :key="bar"
                :style="{
                  height: `${18 + ((bar * 19) % 72)}%`,
                  animationDelay: `${bar * -38}ms`,
                }"
              />
            </div>
            <div class="signal-values">
              <span><b>.78</b>Bass</span>
              <span><b>.52</b>Mid</span>
              <span><b>.67</b>Treble</span>
              <span><b>.91</b>Beat</span>
            </div>
          </div>

          <div class="track-panel">
            <span class="panel-label">TRACK PIPELINE</span>
            <div v-for="(step, index) in ['Lyrics', 'Audio', 'Analysis', 'Virel']" :key="step" class="track-step">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <b>{{ step }}</b>
              <i :style="{ width: `${54 + index * 12}%` }" />
            </div>
          </div>
        </div>

        <div class="media-replacement-note">
          <span>MEDIA PLACEHOLDER</span>
          Replace this panel with a screenshot or short autoplay loop.
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
            <h2>A connected music-development environment</h2>
          </div>
          <p>
            Nexus Wave is not a digital audio workstation. I built it as the layer around a music
            project: the place where creative material can be organized, interpreted, studied,
            and transformed into new experiences.
          </p>
        </div>

        <div class="statement-card">
          <span class="statement-mark">“</span>
          <p>
            The central design idea is connection. Lyrics should know about the track. Analysis
            should feed visualizers. Pronunciation should support performance. Documentation
            should explain the same systems the application uses.
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

      <section id="creation" class="content-section feature-chapter creation-chapter">
        <div class="chapter-copy">
          <span class="chapter-kicker">Core experience · 02</span>
          <h2>The Creation Manager turns an album into a working system.</h2>
          <p>
            I designed the Creation Manager as the main workspace for albums and tracks. It keeps
            project identity, media, lyrics, status, analysis, and progress together instead of
            scattering them across disconnected pages.
          </p>

          <div class="capability-list">
            <article v-for="item in creationCapabilities" :key="item[0]">
              <span>+</span>
              <div><h3>{{ item[0] }}</h3><p>{{ item[1] }}</p></div>
            </article>
          </div>

          <details class="developer-note">
            <summary>Developer note</summary>
            <p>
              The Creation Manager is the primary CRUD surface for album and track entities. Vue
              coordinates specialized editors while FastAPI routes manage persistence, uploads,
              activity, and analysis operations.
            </p>
          </details>
        </div>

        <div class="media-frame media-frame-large">
          <div class="media-frame-bar">
            <span>creation-manager.webp</span>
            <span>16:10 screenshot</span>
          </div>
          <div class="creation-mockup">
            <aside>
              <b>ALBUM WORKSPACE</b>
              <span class="mock-cover">NW</span>
              <strong>Project overview</strong>
              <small>Advanced mode</small>
            </aside>
            <div class="mock-content">
              <div class="mock-toolbar"><i /><i /><i /><span /></div>
              <div class="mock-summary">
                <span v-for="item in ['42:18 total', '12 tracks', '9 analyzed', '76% ready']" :key="item">{{ item }}</span>
              </div>
              <div class="mock-track" v-for="track in 5" :key="track">
                <b>{{ String(track).padStart(2, '0') }}</b>
                <div><strong>Track workspace {{ track }}</strong><i :style="{ width: `${45 + track * 9}%` }" /></div>
                <span>{{ track % 2 ? 'Analyzed' : 'In progress' }}</span>
              </div>
            </div>
          </div>
          <p>Replace with the real Creation Manager screenshot when project media is ready.</p>
        </div>
      </section>

      <section id="lyrics" class="content-section lyrics-section">
        <div class="section-heading">
          <div><span>03</span><h2>Lyrics become structured creative data</h2></div>
          <p>
            The lyrics workspace keeps writing, analysis, pronunciation, and timed playback tied
            to the same track instead of treating lyrics as a detached text file.
          </p>
        </div>

        <div class="lyrics-layout">
          <div class="lyric-editor-card">
            <div class="editor-header">
              <span>VERSE_02.txt</span>
              <b>ANALYSIS READY</b>
            </div>
            <div class="lyric-line"><span>01</span><p>I mapped every doorway, counted every light,</p><i>11</i></div>
            <div class="lyric-line active"><span>02</span><p>learned how the walls move when they leave my sight.</p><i>13</i></div>
            <div class="lyric-line"><span>03</span><p>Found codes in the static, little signs in the rain,</p><i>12</i></div>
            <div class="lyric-line"><span>04</span><p>turned the silence into numbers, put a function on the pain.</p><i>16</i></div>
            <div class="lyric-analysis-row">
              <span>Internal rhyme</span><span>Balanced density</span><span>Long closing phrase</span>
            </div>
          </div>

          <div class="lyrics-tools-grid">
            <article v-for="tool in lyricTools" :key="tool[0]">
              <span>{{ tool[0].slice(0, 2).toUpperCase() }}</span>
              <h3>{{ tool[0] }}</h3>
              <p>{{ tool[1] }}</p>
            </article>
          </div>
        </div>

        <details class="developer-note inline-note">
          <summary>Developer note</summary>
          <p>
            Lyrics services return structured results that can be stored on a track and reused by
            analysis panels, synchronization tools, phonetic renderers, and future composition
            workflows.
          </p>
        </details>
      </section>

      <section id="audio" class="content-section audio-section">
        <div class="audio-intro">
          <div>
            <span class="chapter-kicker">Analysis engine · 04</span>
            <h2>I built the audio analyzer as shared infrastructure, not a single report.</h2>
          </div>
          <p>
            Its results support project review, melody tools, visualizers, debugging, and future
            generative systems. Raw values are normalized and translated into interfaces that are
            useful to musicians and creators.
          </p>
        </div>

        <div class="audio-dashboard">
          <div class="spectrum-card">
            <div class="dashboard-heading"><span>Frequency profile</span><b>TRACK 07</b></div>
            <div class="spectrum">
              <i v-for="bar in 64" :key="bar" :style="{ height: `${12 + ((bar * 37) % 86)}%` }" />
            </div>
            <div class="frequency-labels"><span>20 Hz</span><span>160 Hz</span><span>2.5 kHz</span><span>16 kHz</span></div>
          </div>

          <div class="metric-cards">
            <article v-for="(metric, index) in audioMetrics" :key="metric[0]">
              <span>{{ metric[0] }}</span>
              <strong>{{ ['0.78', '0.52', '0.67', '0.84', '0.91', 'A♯'][index] }}</strong>
              <p>{{ metric[1] }}</p>
            </article>
          </div>
        </div>

        <div class="derived-tools">
          <article>
            <span>DERIVED VIEW 01</span>
            <h3>Lead Sheet Renderer</h3>
            <p>Condenses pitch and timing data into a readable note-oriented representation.</p>
            <div class="note-sequence"><i>C</i><i>E♭</i><i>G</i><i>A♯</i><i>G</i><i>F</i></div>
          </article>
          <article>
            <span>DERIVED VIEW 02</span>
            <h3>Topline Mapper</h3>
            <p>Shows melodic contour, range, repeated shapes, stability, and large interval jumps.</p>
            <svg viewBox="0 0 500 130" role="img" aria-label="Topline contour placeholder">
              <polyline points="0,95 55,70 105,82 160,35 215,48 270,28 325,65 380,58 435,92 500,45" />
            </svg>
          </article>
        </div>

        <details class="developer-note inline-note">
          <summary>Developer note</summary>
          <p>
            The analyzer produces summary values and time-based frames. Consumers remain separate:
            analysis UI, lead-sheet tools, Virel, visualizer engines, and debugging panels can all
            interpret the same source data differently.
          </p>
        </details>
      </section>

      <section id="virel" class="content-section virel-section">
        <div class="virel-header">
          <div>
            <span class="chapter-kicker">Original system · 05</span>
            <h2>Virel gives the music an expressive visual language.</h2>
          </div>
          <p>
            Direct mappings often make visualizers feel mechanical: bass changes size, treble
            changes brightness, and everything moves at once. I created Virel to add an
            interpretation layer between analysis and rendering.
          </p>
        </div>

        <div class="virel-stage">
          <div class="virel-orb" aria-hidden="true">
            <i v-for="ring in 5" :key="ring" :style="{ inset: `${ring * 9}%`, animationDelay: `${ring * -0.7}s` }" />
            <span>VIREL</span>
          </div>

          <div class="virel-pipeline">
            <article><span>INPUT</span><h3>Audio frame</h3><p>Bass · Mid · Treble · Volume · Energy · Beat</p></article>
            <b>→</b>
            <article class="active"><span>INTERPRET</span><h3>Virel signals</h3><p>Pulse · Pressure · Glass · Impact · Ghost · Breath</p></article>
            <b>→</b>
            <article><span>INTENT</span><h3>Visual behavior</h3><p>Motion · Space · Geometry · Color · Feedback</p></article>
            <b>→</b>
            <article><span>OUTPUT</span><h3>Renderer</h3><p>Canvas · WebGL · Three.js · Butterchurn</p></article>
          </div>
        </div>

        <div class="signal-grid">
          <article v-for="signal in virelSignals" :key="signal[0]">
            <div><span>{{ signal[0] }}</span><b>{{ signal[2] }}</b></div>
            <p>{{ signal[1] }}</p>
            <i><span :style="{ width: `${signal[2]}%` }" /></i>
          </article>
        </div>

        <div class="virel-media-row">
          <div class="video-placeholder">
            <div class="video-grid" aria-hidden="true">
              <i v-for="cell in 48" :key="cell" :style="{ opacity: 0.12 + (cell % 8) / 18 }" />
            </div>
            <span class="play-mark">▶</span>
            <div><b>SHORT LOOP PLACEHOLDER</b><p>Replace with visualizer-loop.webm and visualizer-loop.mp4.</p></div>
          </div>

          <div class="virel-description">
            <span>WHY IT MATTERS</span>
            <h3>Presets can describe an artistic intention instead of hard-coding one renderer.</h3>
            <p>
              A preset can request rotation, symmetry, pressure, decay, trails, or bright edges.
              Each renderer then interprets those intentions using the tools it supports.
            </p>
            <details class="developer-note">
              <summary>Developer note</summary>
              <p>
                Virel is a renderer-independent frame and signal model. Helpers such as smoothing,
                hold, decay, accumulation, and clamping transform normalized audio into expressive
                intermediate values before renderer-specific parameters are produced.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="phonetics" class="content-section phonetics-section">
        <div class="section-heading">
          <div><span>06</span><h2>Pronunciation designed for actual performance</h2></div>
          <p>
            Formal IPA is useful, but it is not always easy to read while recording. I built the
            phonetic tools around the language the performer already knows how to pronounce.
          </p>
        </div>

        <div class="phonetic-converter">
          <div class="language-card source-language">
            <span>SOURCE · ITALIAN</span>
            <h3>Non lasciarmi qui nel buio</h3>
            <p>Original lyric</p>
          </div>
          <div class="converter-core">
            <span>Script</span><i>→</i><span>Normalize</span><i>→</i><span>Reader rules</span>
          </div>
          <div class="language-card output-language">
            <span>READER · SPANISH</span>
            <h3>Non lashármi kuí nel búio</h3>
            <p>Singing-oriented pronunciation</p>
          </div>
        </div>

        <div class="phonetic-details">
          <article><span>01</span><h3>Source-aware</h3><p>Handles language-specific script and pronunciation behavior.</p></article>
          <article><span>02</span><h3>Reader-aware</h3><p>Explains unfamiliar sounds using a pronunciation system the performer knows.</p></article>
          <article><span>03</span><h3>Style-aware</h3><p>Can provide readable output, Latin transliteration, IPA, ARPABET, or dialect modes.</p></article>
        </div>

        <details class="developer-note inline-note">
          <summary>Developer note</summary>
          <p>
            The pipeline separates source language, reader language, output style, transliteration,
            pronunciation normalization, and optional dialect handling so each stage can evolve
            independently.
          </p>
        </details>
      </section>

      <section id="platform" class="content-section platform-section">
        <div class="section-heading">
          <div><span>07</span><h2>The supporting systems complete the product</h2></div>
          <p>
            These features receive less visual emphasis, but they are essential to making Nexus
            Wave feel like a coherent application rather than a collection of experiments.
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
            <span class="chapter-kicker">Technical overview · 08</span>
            <h2>A modular architecture for stable tools and experimental systems.</h2>
          </div>
          <p>
            I kept the main product workflows separate from experimental visualization and analysis
            features. This makes it possible to extend the application without rewriting its core
            album and track model.
          </p>
        </div>

        <div class="architecture-stack">
          <article v-for="(layer, index) in architecture" :key="layer[0]">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <div><h3>{{ layer[0] }}</h3><p>{{ layer[1] }}</p></div>
            <i v-if="index < architecture.length - 1">↓</i>
          </article>
        </div>

        <div class="challenge-grid">
          <article v-for="challenge in challenges" :key="challenge[0]">
            <span>DESIGN DECISION</span>
            <h3>{{ challenge[0] }}</h3>
            <p>{{ challenge[1] }}</p>
          </article>
        </div>

        <div class="current-state-card">
          <div>
            <span>PRODUCT STATUS</span>
            <h3>Complete, usable, and still evolving.</h3>
            <p>
              The core creation, analysis, documentation, pronunciation, and visualization workflows
              are implemented. Current development focuses on deeper analysis, stronger visual
              generators, improved mobile behavior, and tighter connections between systems.
            </p>
          </div>
          <div class="state-meter">
            <span><b>Core product</b><i><em style="width: 100%" /></i><strong>Complete</strong></span>
            <span><b>Feature expansion</b><i><em style="width: 78%" /></i><strong>Active</strong></span>
            <span><b>Research systems</b><i><em style="width: 58%" /></i><strong>Ongoing</strong></span>
          </div>
        </div>
      </section>

      <section id="journal" class="content-section journal-section">
        <div class="journal-heading">
          <div>
            <span class="chapter-kicker">Related journal · 09</span>
            <h2>Development stories behind Nexus Wave</h2>
          </div>
          <p>
            The project page presents the product. Journal posts provide the space to explain the
            individual systems, experiments, failures, and design decisions in greater depth.
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
              <span>{{ post.category ?? 'Nexus Wave' }}</span>
              <span>{{ post.date ?? post.readingTime ?? 'Article' }}</span>
            </div>
            <div class="journal-visual">
              <i v-for="line in 8" :key="line" :style="{ width: `${36 + ((line * 17) % 58)}%` }" />
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
.nexus-case-study {
  --nw-bg: #061019;
  --nw-panel: #0a1722;
  --nw-panel-soft: #0d1d2a;
  --nw-text: #ecfaff;
  --nw-muted: #9db2be;
  --nw-faint: #647c89;
  --nw-line: rgba(173, 229, 240, 0.13);
  --nw-cyan: #46dff2;
  --nw-blue: #5d8dff;
  --nw-violet: #aa7cff;
  --nw-green: #73efbd;
  --nw-orange: #ffb86c;
  position: relative;
  isolation: isolate;
  width: min(100% - 1.2rem, 92rem);
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid var(--nw-line);
  border-radius: 2rem;
  background:
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px),
    radial-gradient(circle at 15% 5%, rgba(70,223,242,.1), transparent 26rem),
    radial-gradient(circle at 85% 28%, rgba(170,124,255,.08), transparent 24rem),
    var(--nw-bg);
  background-size: 42px 42px, 42px 42px, auto, auto, auto;
  color: var(--nw-text);
  box-shadow: 0 40px 120px rgba(0,0,0,.38);
  padding: clamp(1rem, 2vw, 2rem) clamp(1rem, 3.4vw, 3.6rem) clamp(4rem, 8vw, 8rem);
}

.nexus-case-study *, .nexus-case-study *::before, .nexus-case-study *::after { box-sizing: border-box; }
.nexus-case-study a { color: inherit; }
.nexus-case-study h1,.nexus-case-study h2,.nexus-case-study h3,.nexus-case-study p { margin-top: 0; }

.ambient { position: absolute; z-index: -1; width: 28rem; height: 28rem; border-radius: 50%; filter: blur(80px); opacity: .14; pointer-events: none; }
.ambient-one { top: 12rem; left: -18rem; background: var(--nw-cyan); }
.ambient-two { top: 72rem; right: -18rem; background: var(--nw-violet); }

.project-breadcrumb { display: flex; gap: .65rem; align-items: center; color: var(--nw-faint); font-size: .75rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.project-breadcrumb a { text-decoration: none; }
.project-breadcrumb a:hover { color: var(--nw-cyan); }

.project-hero { display: grid; grid-template-columns: 1.05fr .95fr; gap: clamp(2rem, 5vw, 5rem); align-items: center; min-height: 43rem; padding: clamp(3rem, 7vw, 7rem) 0 4rem; }
.eyebrow-row { display: flex; flex-wrap: wrap; gap: .75rem 1.2rem; align-items: center; margin-bottom: 1.4rem; }
.eyebrow, .chapter-kicker { color: var(--nw-cyan); font-size: .68rem; font-weight: 950; letter-spacing: .16em; text-transform: uppercase; }
.status-dot { display: inline-flex; gap: .5rem; align-items: center; color: var(--nw-muted); font-size: .72rem; font-weight: 800; }
.status-dot i { width: .48rem; height: .48rem; border-radius: 50%; background: var(--nw-green); box-shadow: 0 0 16px var(--nw-green); }
.hero-copy h1 { max-width: 50rem; margin-bottom: 1.3rem; font-size: clamp(3rem, 6vw, 6.25rem); font-weight: 950; line-height: .94; letter-spacing: -.065em; }
.hero-copy h1 span { background: linear-gradient(100deg, var(--nw-cyan), var(--nw-blue) 45%, var(--nw-violet)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero-summary { max-width: 48rem; color: var(--nw-muted); font-size: clamp(1rem, 1.5vw, 1.16rem); line-height: 1.75; }
.technology-row { display: flex; flex-wrap: wrap; gap: .5rem; margin: 1.7rem 0 2.2rem; }
.technology-row span { border: 1px solid var(--nw-line); border-radius: 999px; background: rgba(255,255,255,.025); padding: .45rem .7rem; color: #c9e1e9; font-size: .7rem; font-weight: 850; }
.hero-facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: .8rem; }
.hero-facts div { border-left: 2px solid rgba(70,223,242,.36); padding-left: .9rem; }
.hero-facts span { display: block; margin-bottom: .25rem; color: var(--nw-faint); font-size: .62rem; font-weight: 900; letter-spacing: .1em; text-transform: uppercase; }
.hero-facts strong { color: #d8edf4; font-size: .76rem; line-height: 1.4; }

.hero-console { position: relative; overflow: hidden; border: 1px solid rgba(70,223,242,.24); border-radius: 1.5rem; background: linear-gradient(145deg, rgba(13,31,45,.95), rgba(5,14,22,.98)); box-shadow: 0 35px 80px rgba(0,0,0,.45), inset 0 1px rgba(255,255,255,.05); }
.hero-console::before { content: ''; position: absolute; inset: 0; background: linear-gradient(120deg, transparent 22%, rgba(70,223,242,.06), transparent 55%); pointer-events: none; }
.console-topbar, .media-frame-bar { display: flex; justify-content: space-between; align-items: center; gap: 1rem; border-bottom: 1px solid var(--nw-line); padding: .75rem 1rem; color: var(--nw-faint); font-size: .62rem; font-weight: 900; letter-spacing: .1em; }
.window-dots { display: flex; gap: .3rem; }
.window-dots i { width: .45rem; height: .45rem; border-radius: 50%; background: var(--nw-line); }
.window-dots i:first-child { background: #ff7b7b; }.window-dots i:nth-child(2) { background: #ffd36b; }.window-dots i:last-child { background: #74e3a4; }
.console-grid { display: grid; grid-template-columns: .75fr 1.25fr; gap: .75rem; padding: .9rem; }
.album-panel,.signal-panel,.track-panel { border: 1px solid var(--nw-line); border-radius: 1rem; background: rgba(255,255,255,.025); padding: 1rem; }
.signal-panel { grid-row: span 2; }
.panel-label,.signal-heading { color: var(--nw-faint); font-size: .58rem; font-weight: 900; letter-spacing: .11em; }
.cover-placeholder { position: relative; display: grid; place-items: center; width: 7.2rem; aspect-ratio: 1; margin: 1rem auto; overflow: hidden; border: 1px solid rgba(70,223,242,.22); border-radius: 1.1rem; background: radial-gradient(circle, rgba(70,223,242,.18), rgba(93,141,255,.08) 55%, transparent 70%); }
.cover-placeholder span { z-index: 2; color: var(--nw-cyan); font-weight: 950; letter-spacing: -.08em; font-size: 1.6rem; }
.cover-placeholder i { position: absolute; width: 160%; height: 1px; background: linear-gradient(90deg, transparent, rgba(70,223,242,.8), transparent); }
.album-panel h2 { margin: 0 0 .2rem; text-align: center; font-size: .95rem; }.album-panel p { margin: 0; color: var(--nw-faint); text-align: center; font-size: .68rem; }
.signal-heading { display: flex; justify-content: space-between; }.signal-heading b { color: var(--nw-green); }
.hero-wave { display: flex; align-items: center; gap: .16rem; height: 12rem; margin: 1.1rem 0; }
.hero-wave i { flex: 1; min-width: 2px; border-radius: 999px; background: linear-gradient(to top, var(--nw-blue), var(--nw-cyan)); transform-origin: center; animation: wave-pulse 1.8s ease-in-out infinite alternate; }
.signal-values { display: grid; grid-template-columns: repeat(4, 1fr); gap: .4rem; }
.signal-values span { display: grid; gap: .2rem; border-top: 1px solid var(--nw-line); padding-top: .6rem; color: var(--nw-faint); font-size: .56rem; text-transform: uppercase; }.signal-values b { color: var(--nw-text); font-size: .8rem; }
.track-step { display: grid; grid-template-columns: auto 1fr; gap: .2rem .55rem; align-items: center; margin-top: .72rem; }.track-step > span { color: var(--nw-faint); font-size: .58rem; }.track-step b { font-size: .7rem; }.track-step i { grid-column: 2; height: 3px; border-radius: 2rem; background: linear-gradient(90deg, var(--nw-cyan), var(--nw-violet)); }
.media-replacement-note { border-top: 1px solid var(--nw-line); padding: .8rem 1rem; color: var(--nw-faint); font-size: .63rem; }.media-replacement-note span { margin-right: .5rem; color: var(--nw-orange); font-weight: 900; }

.section-nav { position: sticky; top: .8rem; z-index: 20; display: flex; gap: .35rem; align-items: center; overflow-x: auto; margin: 0 0 5rem; border: 1px solid var(--nw-line); border-radius: 1rem; background: rgba(6,16,25,.82); padding: .6rem; box-shadow: 0 12px 35px rgba(0,0,0,.24); backdrop-filter: blur(18px); scrollbar-width: none; }
.section-nav > span { flex: 0 0 auto; padding: 0 .65rem; color: var(--nw-faint); font-size: .65rem; font-weight: 900; text-transform: uppercase; }
.section-nav a { flex: 0 0 auto; border-radius: .6rem; padding: .55rem .72rem; color: var(--nw-muted); font-size: .72rem; font-weight: 800; text-decoration: none; }
.section-nav a:hover { background: rgba(70,223,242,.1); color: var(--nw-cyan); }

.content-section { margin-top: clamp(5rem, 10vw, 10rem); scroll-margin-top: 6rem; }
.section-heading,.audio-intro,.virel-header,.architecture-heading,.journal-heading { display: grid; grid-template-columns: 1.1fr .9fr; gap: 3rem; align-items: end; margin-bottom: 2rem; }
.section-heading > div { display: flex; gap: .8rem; align-items: center; }
.section-heading > div > span { color: var(--nw-cyan); font-size: .7rem; font-weight: 950; letter-spacing: .13em; }
.section-heading h2,.audio-intro h2,.virel-header h2,.architecture-heading h2,.journal-heading h2 { margin: 0; font-size: clamp(2rem, 4vw, 3.7rem); line-height: 1.02; letter-spacing: -.045em; }
.section-heading > p,.audio-intro > p,.virel-header > p,.architecture-heading > p,.journal-heading > p { margin: 0; color: var(--nw-muted); line-height: 1.7; }
.statement-card { position: relative; display: grid; grid-template-columns: auto 1fr; gap: 1rem; border: 1px solid rgba(70,223,242,.2); border-radius: 1.2rem; background: linear-gradient(120deg, rgba(70,223,242,.08), rgba(170,124,255,.04)); padding: clamp(1.4rem, 3vw, 2.2rem); }
.statement-mark { color: var(--nw-cyan); font-family: Georgia, serif; font-size: 4rem; line-height: .8; }.statement-card p { max-width: 65rem; margin: 0; color: #d7eaf0; font-size: clamp(1rem, 1.7vw, 1.3rem); line-height: 1.7; }
.product-flow { display: grid; grid-template-columns: repeat(5, 1fr); gap: .75rem; margin-top: 1rem; }
.product-flow article { position: relative; min-height: 11rem; border: 1px solid var(--nw-line); border-radius: 1rem; background: rgba(255,255,255,.022); padding: 1.1rem; }
.product-flow article > span { color: var(--nw-cyan); font-size: .66rem; font-weight: 950; }.product-flow h3 { margin: 2.5rem 0 .45rem; font-size: 1rem; }.product-flow p { margin: 0; color: var(--nw-faint); font-size: .76rem; line-height: 1.55; }.product-flow article > i { position: absolute; top: 50%; right: -.74rem; z-index: 2; display: grid; width: 1.45rem; height: 1.45rem; place-items: center; border: 1px solid var(--nw-line); border-radius: 50%; background: var(--nw-bg); color: var(--nw-cyan); font-style: normal; }

.feature-chapter { display: grid; grid-template-columns: .85fr 1.15fr; gap: clamp(2rem, 5vw, 5rem); align-items: center; }
.chapter-copy h2 { margin: .65rem 0 1rem; font-size: clamp(2.3rem, 4.5vw, 4.4rem); line-height: 1; letter-spacing: -.05em; }.chapter-copy > p { color: var(--nw-muted); line-height: 1.75; }
.capability-list { display: grid; gap: .65rem; margin: 1.5rem 0; }.capability-list article { display: grid; grid-template-columns: auto 1fr; gap: .75rem; border-top: 1px solid var(--nw-line); padding-top: .8rem; }.capability-list article > span { color: var(--nw-cyan); font-weight: 900; }.capability-list h3 { margin: 0 0 .2rem; font-size: .86rem; }.capability-list p { margin: 0; color: var(--nw-faint); font-size: .75rem; line-height: 1.5; }
.developer-note { border: 1px solid var(--nw-line); border-radius: .85rem; background: rgba(255,255,255,.022); padding: .85rem 1rem; }.developer-note summary { cursor: pointer; color: var(--nw-cyan); font-size: .7rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }.developer-note p { margin: .75rem 0 0; color: var(--nw-muted); font-size: .78rem; line-height: 1.6; }.inline-note { margin-top: 1rem; }
.media-frame { overflow: hidden; border: 1px solid var(--nw-line); border-radius: 1.35rem; background: #07131d; box-shadow: 0 30px 70px rgba(0,0,0,.28); }.media-frame > p { margin: 0; border-top: 1px solid var(--nw-line); padding: .8rem 1rem; color: var(--nw-faint); font-size: .65rem; }
.creation-mockup { display: grid; grid-template-columns: 11rem 1fr; min-height: 29rem; }.creation-mockup aside { display: flex; flex-direction: column; border-right: 1px solid var(--nw-line); background: rgba(255,255,255,.02); padding: 1rem; }.creation-mockup aside > b { color: var(--nw-faint); font-size: .56rem; letter-spacing: .11em; }.mock-cover { display: grid; width: 100%; aspect-ratio: 1; place-items: center; margin: 1rem 0; border: 1px solid rgba(70,223,242,.22); border-radius: .9rem; background: radial-gradient(circle, rgba(70,223,242,.2), transparent 70%); color: var(--nw-cyan); font-size: 1.6rem; font-weight: 950; }.creation-mockup aside strong { font-size: .78rem; }.creation-mockup aside small { margin-top: .3rem; color: var(--nw-faint); }
.mock-content { padding: 1rem; }.mock-toolbar { display: flex; gap: .4rem; align-items: center; margin-bottom: 1rem; }.mock-toolbar i { width: .45rem; height: .45rem; border-radius: 50%; background: var(--nw-line); }.mock-toolbar span { width: 35%; height: .5rem; margin-left: auto; border-radius: 1rem; background: var(--nw-line); }.mock-summary { display: grid; grid-template-columns: repeat(4,1fr); gap: .45rem; margin-bottom: .7rem; }.mock-summary span { border: 1px solid var(--nw-line); border-radius: .55rem; padding: .6rem; color: var(--nw-faint); font-size: .58rem; text-align: center; }.mock-track { display: grid; grid-template-columns: auto 1fr auto; gap: .75rem; align-items: center; margin-top: .55rem; border: 1px solid var(--nw-line); border-radius: .7rem; padding: .8rem; }.mock-track > b { color: var(--nw-cyan); font-size: .62rem; }.mock-track div { display: grid; gap: .45rem; }.mock-track strong { font-size: .68rem; }.mock-track i { height: 3px; border-radius: 999px; background: linear-gradient(90deg,var(--nw-cyan),var(--nw-blue)); }.mock-track > span { color: var(--nw-faint); font-size: .56rem; }

.lyrics-layout { display: grid; grid-template-columns: 1.15fr .85fr; gap: 1rem; }.lyric-editor-card { overflow: hidden; border: 1px solid var(--nw-line); border-radius: 1.1rem; background: #07131d; }.editor-header { display: flex; justify-content: space-between; border-bottom: 1px solid var(--nw-line); padding: .8rem 1rem; color: var(--nw-faint); font-size: .62rem; font-weight: 900; }.editor-header b { color: var(--nw-green); }.lyric-line { display: grid; grid-template-columns: auto 1fr auto; gap: 1rem; align-items: center; border-bottom: 1px solid rgba(173,229,240,.07); padding: .95rem 1rem; }.lyric-line.active { background: linear-gradient(90deg,rgba(70,223,242,.11),transparent); }.lyric-line > span,.lyric-line > i { color: var(--nw-faint); font-size: .62rem; font-style: normal; }.lyric-line p { margin: 0; color: #dceff4; font-family: ui-monospace,SFMono-Regular,Menlo,monospace; font-size: .75rem; }.lyric-analysis-row { display: flex; flex-wrap: wrap; gap: .4rem; padding: 1rem; }.lyric-analysis-row span { border: 1px solid rgba(170,124,255,.2); border-radius: 999px; background: rgba(170,124,255,.06); padding: .35rem .55rem; color: #cbb9f4; font-size: .6rem; font-weight: 800; }
.lyrics-tools-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; }.lyrics-tools-grid article { border: 1px solid var(--nw-line); border-radius: 1rem; background: rgba(255,255,255,.025); padding: 1.1rem; }.lyrics-tools-grid article > span { display: grid; width: 2.2rem; height: 2.2rem; place-items: center; border-radius: .65rem; background: rgba(170,124,255,.12); color: var(--nw-violet); font-size: .65rem; font-weight: 950; }.lyrics-tools-grid h3 { margin: 1.4rem 0 .45rem; font-size: .9rem; }.lyrics-tools-grid p { margin: 0; color: var(--nw-faint); font-size: .73rem; line-height: 1.55; }

.audio-dashboard { display: grid; grid-template-columns: 1.15fr .85fr; gap: 1rem; }.spectrum-card,.metric-cards article,.derived-tools article { border: 1px solid var(--nw-line); border-radius: 1.1rem; background: rgba(255,255,255,.025); }.spectrum-card { padding: 1rem; }.dashboard-heading { display: flex; justify-content: space-between; color: var(--nw-faint); font-size: .62rem; font-weight: 900; }.dashboard-heading b { color: var(--nw-orange); }.spectrum { display: flex; align-items: end; gap: .1rem; height: 15rem; margin: 1rem 0 .55rem; }.spectrum i { flex: 1; min-width: 1px; border-radius: 4px 4px 0 0; background: linear-gradient(to top,var(--nw-blue),var(--nw-cyan)); opacity: .8; }.frequency-labels { display: flex; justify-content: space-between; color: var(--nw-faint); font-size: .55rem; }.metric-cards { display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; }.metric-cards article { padding: 1rem; }.metric-cards span { color: var(--nw-faint); font-size: .58rem; font-weight: 900; }.metric-cards strong { display: block; margin: .7rem 0 .25rem; color: var(--nw-cyan); font-size: 1.7rem; }.metric-cards p { margin: 0; color: var(--nw-faint); font-size: .66rem; }
.derived-tools { display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; margin-top: 1rem; }.derived-tools article { padding: 1.2rem; }.derived-tools > article > span { color: var(--nw-cyan); font-size: .58rem; font-weight: 900; letter-spacing: .1em; }.derived-tools h3 { margin: .6rem 0 .4rem; }.derived-tools p { color: var(--nw-faint); font-size: .75rem; }.note-sequence { display: flex; gap: .5rem; align-items: end; height: 4rem; margin-top: 1rem; }.note-sequence i { display: grid; flex: 1; place-items: center; border: 1px solid rgba(70,223,242,.2); border-radius: .55rem; background: rgba(70,223,242,.06); color: var(--nw-cyan); font-style: normal; font-size: .7rem; }.note-sequence i:nth-child(2n) { align-self: start; height: 2.6rem; }.note-sequence i:nth-child(2n+1) { height: 3.4rem; }.derived-tools svg { width: 100%; height: 5rem; margin-top: .5rem; overflow: visible; }.derived-tools polyline { fill: none; stroke: var(--nw-violet); stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 0 8px rgba(170,124,255,.55)); }

.virel-section { position: relative; margin-inline: calc(clamp(1rem, 3.4vw, 3.6rem) * -1); border-block: 1px solid rgba(170,124,255,.18); background: radial-gradient(circle at center,rgba(170,124,255,.1),transparent 38rem),linear-gradient(180deg,rgba(255,255,255,.025),transparent); padding: clamp(4rem,8vw,8rem) clamp(1rem,3.4vw,3.6rem); }.virel-header h2 { max-width: 50rem; }.virel-stage { display: grid; grid-template-columns: .72fr 1.28fr; gap: 2rem; align-items: center; border: 1px solid rgba(170,124,255,.2); border-radius: 1.4rem; background: rgba(5,11,19,.68); padding: clamp(1.2rem,3vw,2.3rem); }.virel-orb { position: relative; display: grid; width: min(100%,18rem); aspect-ratio: 1; place-items: center; margin: auto; border-radius: 50%; background: radial-gradient(circle,rgba(70,223,242,.18),rgba(170,124,255,.08) 45%,transparent 70%); }.virel-orb i { position: absolute; border: 1px solid rgba(70,223,242,.32); border-radius: 50%; animation: rotate-ring 9s linear infinite; }.virel-orb i:nth-child(even) { border-color: rgba(170,124,255,.32); animation-direction: reverse; }.virel-orb span { z-index: 2; color: var(--nw-cyan); font-size: 1.3rem; font-weight: 950; letter-spacing: .22em; text-shadow: 0 0 24px rgba(70,223,242,.65); }.virel-pipeline { display: grid; grid-template-columns: repeat(7,auto); gap: .6rem; align-items: center; }.virel-pipeline article { min-height: 9rem; border: 1px solid var(--nw-line); border-radius: .9rem; background: rgba(255,255,255,.02); padding: 1rem; }.virel-pipeline article.active { border-color: rgba(70,223,242,.28); background: linear-gradient(145deg,rgba(70,223,242,.1),rgba(170,124,255,.05)); }.virel-pipeline article > span { color: var(--nw-faint); font-size: .55rem; font-weight: 900; letter-spacing: .1em; }.virel-pipeline h3 { margin: 1.2rem 0 .45rem; font-size: .8rem; }.virel-pipeline p { margin: 0; color: var(--nw-faint); font-size: .62rem; line-height: 1.45; }.virel-pipeline > b { color: var(--nw-violet); }
.signal-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin-top: 1rem; }.signal-grid article { border: 1px solid var(--nw-line); border-radius: .9rem; background: rgba(255,255,255,.022); padding: 1rem; }.signal-grid article > div { display: flex; justify-content: space-between; }.signal-grid article > div span { color: #e9f7fb; font-weight: 900; }.signal-grid article > div b { color: var(--nw-cyan); font-size: .7rem; }.signal-grid p { min-height: 2.2rem; margin: .45rem 0 .8rem; color: var(--nw-faint); font-size: .68rem; }.signal-grid article > i { display: block; height: 3px; border-radius: 1rem; background: var(--nw-line); }.signal-grid article > i span { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg,var(--nw-violet),var(--nw-cyan)); }
.virel-media-row { display: grid; grid-template-columns: 1.15fr .85fr; gap: 2rem; align-items: center; margin-top: 1.2rem; }.video-placeholder { position: relative; min-height: 21rem; overflow: hidden; border: 1px solid rgba(70,223,242,.2); border-radius: 1.2rem; background: radial-gradient(circle,rgba(70,223,242,.16),rgba(170,124,255,.08) 44%,#07111b 72%); }.video-grid { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(8,1fr); }.video-grid i { border: 1px solid rgba(70,223,242,.12); }.play-mark { position: absolute; top: 50%; left: 50%; display: grid; width: 4rem; height: 4rem; place-items: center; transform: translate(-50%,-50%); border: 1px solid rgba(70,223,242,.3); border-radius: 50%; background: rgba(6,16,25,.75); color: var(--nw-cyan); box-shadow: 0 0 45px rgba(70,223,242,.24); }.video-placeholder > div:last-child { position: absolute; right: 1rem; bottom: 1rem; left: 1rem; }.video-placeholder b { color: var(--nw-cyan); font-size: .62rem; letter-spacing: .1em; }.video-placeholder p { margin: .2rem 0 0; color: var(--nw-faint); font-size: .68rem; }.virel-description > span { color: var(--nw-violet); font-size: .62rem; font-weight: 900; letter-spacing: .12em; }.virel-description h3 { margin: .7rem 0; font-size: clamp(1.5rem,2.6vw,2.4rem); line-height: 1.12; letter-spacing: -.035em; }.virel-description > p { color: var(--nw-muted); line-height: 1.7; }

.phonetic-converter { display: grid; grid-template-columns: 1fr auto 1fr; gap: 1rem; align-items: center; }.language-card { border: 1px solid var(--nw-line); border-radius: 1.1rem; background: rgba(255,255,255,.025); padding: clamp(1.2rem,3vw,2rem); }.language-card > span { color: var(--nw-faint); font-size: .6rem; font-weight: 900; letter-spacing: .1em; }.language-card h3 { margin: 2rem 0 .45rem; font-size: clamp(1.35rem,2.5vw,2.2rem); }.language-card p { margin: 0; color: var(--nw-faint); }.output-language { border-color: rgba(115,239,189,.24); background: linear-gradient(145deg,rgba(115,239,189,.08),rgba(255,255,255,.02)); }.output-language h3 { color: var(--nw-green); }.converter-core { display: flex; flex-direction: column; gap: .45rem; align-items: center; color: var(--nw-faint); font-size: .58rem; font-weight: 900; text-transform: uppercase; }.converter-core i { color: var(--nw-cyan); font-style: normal; }.phonetic-details { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin-top: 1rem; }.phonetic-details article { border-top: 1px solid var(--nw-line); padding-top: 1rem; }.phonetic-details span { color: var(--nw-green); font-size: .65rem; font-weight: 900; }.phonetic-details h3 { margin: .7rem 0 .35rem; }.phonetic-details p { margin: 0; color: var(--nw-faint); font-size: .75rem; line-height: 1.55; }

.support-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; }.support-grid article { min-height: 13rem; border: 1px solid var(--nw-line); border-radius: 1rem; background: rgba(255,255,255,.022); padding: 1rem; transition: transform .2s ease,border-color .2s ease,background .2s ease; }.support-grid article:hover { transform: translateY(-4px); border-color: rgba(70,223,242,.25); background: rgba(70,223,242,.045); }.support-grid span { color: var(--nw-cyan); font-size: .62rem; font-weight: 900; }.support-grid h3 { margin: 2rem 0 .45rem; font-size: .9rem; }.support-grid p { margin: 0; color: var(--nw-faint); font-size: .72rem; line-height: 1.55; }

.architecture-stack { display: grid; grid-template-columns: repeat(5,1fr); gap: .75rem; }.architecture-stack article { position: relative; min-height: 12rem; border: 1px solid var(--nw-line); border-radius: 1rem; background: rgba(255,255,255,.022); padding: 1rem; }.architecture-stack article > span { color: var(--nw-blue); font-size: .62rem; font-weight: 900; }.architecture-stack h3 { margin: 2.1rem 0 .45rem; font-size: .9rem; }.architecture-stack p { margin: 0; color: var(--nw-faint); font-size: .7rem; line-height: 1.5; }.architecture-stack article > i { position: absolute; right: 50%; bottom: -.92rem; z-index: 2; display: none; color: var(--nw-cyan); font-style: normal; }
.challenge-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; margin-top: 1rem; }.challenge-grid article { border: 1px solid var(--nw-line); border-radius: 1rem; background: linear-gradient(145deg,rgba(93,141,255,.06),rgba(255,255,255,.018)); padding: 1.1rem; }.challenge-grid span { color: var(--nw-blue); font-size: .56rem; font-weight: 900; letter-spacing: .1em; }.challenge-grid h3 { margin: 1.5rem 0 .45rem; font-size: .92rem; }.challenge-grid p { margin: 0; color: var(--nw-faint); font-size: .72rem; line-height: 1.55; }
.current-state-card { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 1rem; border: 1px solid rgba(115,239,189,.2); border-radius: 1.15rem; background: linear-gradient(130deg,rgba(115,239,189,.07),rgba(70,223,242,.025)); padding: clamp(1.4rem,3vw,2.2rem); }.current-state-card > div:first-child > span { color: var(--nw-green); font-size: .62rem; font-weight: 900; letter-spacing: .12em; }.current-state-card h3 { margin: .7rem 0; font-size: clamp(1.5rem,2.5vw,2.4rem); }.current-state-card p { margin: 0; color: var(--nw-muted); line-height: 1.65; }.state-meter { display: grid; gap: 1rem; align-content: center; }.state-meter > span { display: grid; grid-template-columns: 7rem 1fr 4rem; gap: .7rem; align-items: center; }.state-meter b,.state-meter strong { font-size: .65rem; }.state-meter b { color: var(--nw-muted); }.state-meter strong { color: var(--nw-green); text-align: right; }.state-meter i { height: 4px; border-radius: 2rem; background: var(--nw-line); }.state-meter em { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg,var(--nw-green),var(--nw-cyan)); }

.journal-section { border-top: 1px solid var(--nw-line); padding-top: clamp(4rem,8vw,7rem); }.journal-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; }.journal-card { display: flex; min-height: 26rem; flex-direction: column; border: 1px solid var(--nw-line); border-radius: 1.1rem; background: rgba(255,255,255,.022); padding: 1rem; text-decoration: none; transition: transform .2s ease,border-color .2s ease; }.journal-card:hover { transform: translateY(-5px); border-color: rgba(70,223,242,.3); }.journal-card.planned { cursor: default; }.journal-card-top { display: flex; justify-content: space-between; color: var(--nw-faint); font-size: .58rem; font-weight: 900; text-transform: uppercase; }.journal-visual { display: grid; align-content: center; height: 9rem; gap: .45rem; margin: 1rem 0 1.2rem; overflow: hidden; border: 1px solid var(--nw-line); border-radius: .8rem; background: radial-gradient(circle at 75% 25%,rgba(170,124,255,.14),transparent 45%),rgba(255,255,255,.016); padding: 1rem; }.journal-visual i { height: 3px; border-radius: 2rem; background: linear-gradient(90deg,var(--nw-cyan),rgba(170,124,255,.3)); }.journal-card h3 { margin: 0 0 .6rem; font-size: 1.15rem; line-height: 1.2; }.journal-card > p { flex: 1; color: var(--nw-faint); font-size: .76rem; line-height: 1.6; }.read-link { display: flex; justify-content: space-between; border-top: 1px solid var(--nw-line); padding-top: .8rem; color: var(--nw-cyan); font-size: .7rem; font-weight: 900; }.read-link b { font-size: 1rem; }

@keyframes wave-pulse { from { transform: scaleY(.72); opacity: .55; } to { transform: scaleY(1); opacity: 1; } }
@keyframes rotate-ring { to { transform: rotate(360deg); } }

@media (max-width: 1180px) {
  .project-hero,.feature-chapter,.section-heading,.audio-intro,.virel-header,.architecture-heading,.journal-heading { grid-template-columns: 1fr; }
  .project-hero { min-height: auto; }
  .product-flow { grid-template-columns: repeat(3,1fr); }
  .support-grid { grid-template-columns: repeat(3,1fr); }
  .architecture-stack { grid-template-columns: repeat(3,1fr); }
  .challenge-grid { grid-template-columns: repeat(2,1fr); }
  .virel-stage { grid-template-columns: 1fr; }
}

@media (max-width: 850px) {
  .hero-facts,.signal-grid,.phonetic-details,.journal-grid { grid-template-columns: 1fr; }
  .product-flow,.support-grid,.architecture-stack { grid-template-columns: repeat(2,1fr); }
  .lyrics-layout,.audio-dashboard,.derived-tools,.virel-media-row,.current-state-card { grid-template-columns: 1fr; }
  .virel-pipeline { grid-template-columns: 1fr; }.virel-pipeline > b { transform: rotate(90deg); justify-self: center; }
  .phonetic-converter { grid-template-columns: 1fr; }.converter-core { flex-direction: row; justify-content: center; flex-wrap: wrap; }
  .creation-mockup { grid-template-columns: 1fr; }.creation-mockup aside { display: none; }
  .mock-summary { grid-template-columns: repeat(2,1fr); }
}

@media (max-width: 580px) {
  .nexus-case-study { width: 100%; border-radius: 0; padding-inline: .9rem; }
  .project-hero { padding-top: 3rem; }.hero-copy h1 { font-size: clamp(2.7rem,15vw,4.3rem); }
  .console-grid,.product-flow,.lyrics-tools-grid,.metric-cards,.signal-grid,.support-grid,.architecture-stack,.challenge-grid { grid-template-columns: 1fr; }
  .signal-panel { grid-row: auto; }.hero-wave { height: 9rem; }.signal-values { grid-template-columns: repeat(2,1fr); }
  .section-nav { margin-inline: -.2rem; }
  .section-heading > div { align-items: flex-start; }.section-heading > div > span { margin-top: .55rem; }
  .product-flow article > i { right: 50%; bottom: -.75rem; top: auto; transform: translateX(50%) rotate(90deg); }
  .mock-track { grid-template-columns: auto 1fr; }.mock-track > span { grid-column: 2; }
  .state-meter > span { grid-template-columns: 1fr; }.state-meter strong { text-align: left; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-wave i,.virel-orb i { animation: none; }
  .support-grid article,.journal-card { transition: none; }
}
</style>
