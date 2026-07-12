export interface ProjectFeatureSummary {
  title: string;
  description: string;
  media?: string;
}

export interface ProjectSummary {
  id: string;
  title: string;
  description: string;
  status: "planning" | "in-development" | "completed" | "archived";
  featured: boolean;
  order: number;
  coverImage?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  technologies: string[];
  features: ProjectFeatureSummary[];
  relatedPosts: string[];
}

export interface ArticleSummary {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  featured: boolean;
  category: string;
  tags: string[];
  relatedProject?: string;
  coverImage?: string;
}

export type DesktopWindowKind =
  | "welcome"
  | "projects"
  | "journal"
  | "about"
  | "project"
  | "article"
  | "page";

export interface WindowPosition {
  x: number;
  y: number;
}

export interface DesktopWindowRoute {
  kind: DesktopWindowKind;
  title: string;
  icon: string;
  entityId?: string;
  width: number;
  height: number;
}

export interface DesktopWindowState extends DesktopWindowRoute {
  id: string;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
  position: WindowPosition;
  history: DesktopWindowRoute[];
  historyIndex: number;
}

export type WindowSeed = Pick<
  DesktopWindowState,
  "id" | "kind" | "title" | "icon" | "position" | "width" | "height"
> &
  Partial<Pick<DesktopWindowState, "entityId" | "maximized">>;
