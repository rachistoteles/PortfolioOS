import {
  DEFAULT_PORTFOLIO_THEME,
  PORTFOLIO_THEME_ATTRIBUTE,
  PORTFOLIO_THEME_STORAGE_KEY,
  getPortfolioTheme,
  isPortfolioThemeId,
  type PortfolioThemeId,
} from "../config/portfolioThemes";

export {
  DEFAULT_PORTFOLIO_THEME,
  PORTFOLIO_THEME_ATTRIBUTE,
  PORTFOLIO_THEME_STORAGE_KEY,
  getPortfolioTheme,
  isPortfolioThemeId,
};

export function normalizePortfolioTheme(
  value: string | null | undefined,
): PortfolioThemeId {
  if (isPortfolioThemeId(value)) {
    return value;
  }

  // Backward compatibility with the previous binary toggle.
  if (value === "modern") {
    return "modern";
  }

  return DEFAULT_PORTFOLIO_THEME;
}

export function applyPortfolioTheme(themeId: PortfolioThemeId): void {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.setAttribute(PORTFOLIO_THEME_ATTRIBUTE, themeId);
  // Keep the legacy attribute in sync for any remaining selectors during migration.
  document.documentElement.dataset.theme =
    themeId === "modern" ? "modern" : themeId === "xp" ? "xp" : themeId;
  localStorage.setItem(PORTFOLIO_THEME_STORAGE_KEY, themeId);
}

export function readStoredPortfolioTheme(): PortfolioThemeId {
  if (typeof localStorage === "undefined") {
    return DEFAULT_PORTFOLIO_THEME;
  }

  return normalizePortfolioTheme(
    localStorage.getItem(PORTFOLIO_THEME_STORAGE_KEY),
  );
}
