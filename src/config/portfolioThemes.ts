export const PORTFOLIO_THEME_STORAGE_KEY = "portfolio-theme";
export const PORTFOLIO_THEME_ATTRIBUTE = "data-portfolio-theme";

export const PORTFOLIO_THEME_IDS = [
  "modern",
  "xp",
  "win98",
  "institutional",
  "geocities",
  "web2",
] as const;

export type PortfolioThemeId = (typeof PORTFOLIO_THEME_IDS)[number];

export const DEFAULT_PORTFOLIO_THEME: PortfolioThemeId = "xp";

export interface PortfolioThemeDefinition {
  id: PortfolioThemeId;
  name: string;
  era: string;
  description: string;
  preview: {
    background: string;
    panel: string;
    accent: string;
    text: string;
  };
  /** Surfaces that should be visible on the homepage for this theme. */
  homeSurface: "desktop" | "modern" | "institutional" | "geocities" | "web2";
}

export const PORTFOLIO_THEMES: readonly PortfolioThemeDefinition[] = [
  {
    id: "modern",
    name: "Modern",
    era: "Current interface",
    description: "A compact contemporary dashboard for projects and journal activity.",
    preview: {
      background: "#081018",
      panel: "#142434",
      accent: "#82f7d5",
      text: "#eaf4f1",
    },
    homeSurface: "modern",
  },
  {
    id: "xp",
    name: "PortfolioOS",
    era: "Early-2000s desktop",
    description: "The nostalgic desktop environment with windows, explorers, and a taskbar.",
    preview: {
      background: "#2566ae",
      panel: "#ece9d8",
      accent: "#0a58d9",
      text: "#111111",
    },
    homeSurface: "desktop",
  },
  {
    id: "win98",
    name: "Windows 95/98",
    era: "Desktop UI",
    description: "Classic gray window chrome, bevel borders, and a Start-menu desktop.",
    preview: {
      background: "#008080",
      panel: "#c0c0c0",
      accent: "#000080",
      text: "#000000",
    },
    homeSurface: "desktop",
  },
  {
    id: "institutional",
    name: "Institutional Web",
    era: "1998–2004",
    description: "A formal research-lab style site with masthead, sidebar, and publications.",
    preview: {
      background: "#f4f1e8",
      panel: "#ffffff",
      accent: "#1a365d",
      text: "#1a202c",
    },
    homeSurface: "institutional",
  },
  {
    id: "geocities",
    name: "Personal Homepage",
    era: "1995–2001",
    description: "A playful early-web shrine with badges, guestbook energy, and bright links.",
    preview: {
      background: "#000080",
      panel: "#ffffcc",
      accent: "#ff00ff",
      text: "#000000",
    },
    homeSurface: "geocities",
  },
  {
    id: "web2",
    name: "Web 2.0",
    era: "2004–2010",
    description: "Glossy panels, rounded tabs, badges, and social-dashboard modules.",
    preview: {
      background: "#d9eef8",
      panel: "#ffffff",
      accent: "#3b82f6",
      text: "#1e3a5f",
    },
    homeSurface: "web2",
  },
] as const;

export function isPortfolioThemeId(value: string | null | undefined): value is PortfolioThemeId {
  return (
    typeof value === "string" &&
    (PORTFOLIO_THEME_IDS as readonly string[]).includes(value)
  );
}

export function getPortfolioTheme(
  id: string | null | undefined,
): PortfolioThemeDefinition {
  const match = PORTFOLIO_THEMES.find((theme) => theme.id === id);
  return match ?? PORTFOLIO_THEMES.find((theme) => theme.id === DEFAULT_PORTFOLIO_THEME)!;
}
