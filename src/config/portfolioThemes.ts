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
    name: "Modern Workstation",
    era: "Current computer",
    description: "A clean contemporary workstation for browsing projects and journal notes.",
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
    name: "Windows XP",
    era: "Early-2000s desktop",
    description: "A nostalgic desktop computer with windows, explorers, and a taskbar.",
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
    era: "Classic desktop PC",
    description: "Gray window chrome, bevel borders, and a Start-menu desktop computer.",
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
    name: "Lab Terminal",
    era: "1998–2004 campus computer",
    description: "An institutional research-lab computer portal with masthead and publications.",
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
    name: "Home Computer",
    era: "1995–2001 personal PC",
    description: "A playful personal-computer homepage with badges, guestbook energy, and bright links.",
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
    name: "Web 2.0 Machine",
    era: "2004–2010 online computer",
    description: "A glossy web-app computer with tabs, badges, and dashboard modules.",
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
