# PortfolioOS Development Instructions

## Project purpose

PortfolioOS is a developer portfolio and technical journal with two presentation modes:

1. A nostalgic desktop-inspired interface shown by default.
2. A polished modern interface activated through a theme control.

Projects are the principal content. Blog articles are secondary and should support projects through guides, development logs, debugging notes, architecture discussions, and useful tools.

## Architecture

- Astro handles pages, layouts, routing, and structured content.
- Vue is used only for interactive application-like components.
- TypeScript strict mode is required.
- Project and blog content lives in Astro Content Collections.
- No backend or database is required for the initial version.
- The site should remain deployable as a static build.
- XP and modern interfaces must consume the same underlying content.
- Do not duplicate project or blog data between themes.

## Coding rules

- Prefer small, focused components.
- Preserve semantic HTML and keyboard accessibility.
- Support `prefers-reduced-motion`.
- Avoid copying copyrighted Microsoft icons, wallpapers, or assets.
- Create original desktop-era visual assets.
- Prefer WebM and MP4 loops over GIF for project demonstrations.
- Never commit secrets or environment files.
- Do not introduce a backend unless a feature clearly requires it.
- Do not replace working content collections with hardcoded arrays.
- Keep the project compatible with static deployment.
- Add clear `TODO(Codex)` markers for unfinished features.
- Do not remove a `TODO(Codex)` marker until the requested feature has been implemented or intentionally replaced with a more precise TODO.

## Commands

```bash
npm run dev
npm run build
npm run preview
```

## Current implementation priorities

1. Confirm the static site builds successfully.
2. Create dynamic project routes.
3. Create dynamic blog routes.
4. Build reusable project cards.
5. Build reusable feature-preview video components.
6. Build the accessible desktop-window system.
7. Build the XP taskbar and Start menu.
8. Build the blog and project explorer windows.
9. Build the modern interface.
10. Add the animated transformation between interfaces.
11. Add responsive mobile navigation.
12. Add metadata, RSS, sitemap, and deployment configuration.

## Content rules

Projects are stored in:

```text
src/content/projects/
```

Blog articles are stored in:

```text
src/content/blog/
```

Project media should be stored in:

```text
public/media/projects/
```

Blog media should be stored in:

```text
public/media/blog/
```

Both presentation modes must read from the same Astro Content Collections.

## Design requirements

### Nostalgic mode

The nostalgic interface should feel like an original desktop operating system inspired by early-2000s computing.

It may include:

- Desktop icons
- Windows
- A taskbar
- A Start menu
- Project Explorer
- Blog Explorer
- A terminal-style navigation component
- Startup or loading screens
- Original icons and visual assets

Do not directly copy Microsoft trademarks, wallpapers, icons, sounds, or protected interface assets.

### Modern mode

The modern interface should present the same content using a polished contemporary design.

It should include:

- Strong project presentation
- Responsive project cards
- Feature demonstration videos
- Technology tags
- Architecture explanations
- Related blog posts
- Accessible navigation
- Mobile-friendly layouts

## Accessibility requirements

- All interactive elements must be keyboard accessible.
- Dialogs and windows must use appropriate semantic roles.
- Focus must remain visible.
- Respect `prefers-reduced-motion`.
- Do not rely only on color to communicate state.
- Images and videos must have useful labels or fallback descriptions.
- Decorative elements should be hidden from assistive technologies when appropriate.

## Media requirements

Prefer short muted looping videos instead of GIF files.

Recommended formats:

- WebM for efficient browser playback
- MP4 as a compatibility fallback
- WebP for still images

Project video components should support:

- `autoplay`
- `muted`
- `loop`
- `playsinline`
- A poster image
- Reduced-motion behavior
- A textual description

## Existing placeholders

Search for all implementation placeholders with:

```bash
grep -Rni "TODO(Codex)" \
  src AGENTS.md \
  --exclude-dir=node_modules
```

## Validation requirements

Before considering a task complete, run:

```bash
npm run build
```

When relevant, also run:

```bash
npm run dev
```

Do not report a feature as complete when the production build fails.

## Git workflow

Before committing:

```bash
git status
npm run build
```

Use clear commit messages describing the completed feature.

Example:

```bash
git add .
git commit -m "Add dynamic project and blog routes"
```
