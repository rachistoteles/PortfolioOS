<script setup lang="ts">
import { computed, ref } from "vue";

import AboutWindow from "./AboutWindow.vue";
import ArticlePreview from "./ArticlePreview.vue";
import DesktopWindow from "./DesktopWindow.vue";
import InternalPage from "./InternalPage.vue";
import JournalExplorer from "./JournalExplorer.vue";
import ProjectPreview from "./ProjectPreview.vue";
import ProjectsExplorer from "./ProjectsExplorer.vue";
import XPTaskbar from "./XPTaskbar.vue";
import type {
  ArticleSummary,
  DesktopWindowRoute,
  DesktopWindowState,
  ProjectSummary,
} from "./desktopTypes";
import { useDesktopWindows } from "./useDesktopWindows";

const props = defineProps<{
  projects: ProjectSummary[];
  articles: ArticleSummary[];
}>();

const {
  focusedWindowId,
  orderedWindows,
  closeWindow,
  focusWindow,
  minimizeWindow,
  moveWindow,
  navigateWindow,
  openWindow,
  resizeWindow,
  goThroughHistory,
  toggleFromTaskbar,
  toggleMaximize,
} = useDesktopWindows([
  {
    id: "welcome",
    kind: "welcome",
    title: "Welcome to PortfolioOS",
    icon: "📁",
    position: { x: 330, y: 170 },
    width: 680,
    height: 390,
  },
]);

const workspaceElement = ref<HTMLElement | null>(null);
const projectsById = computed<Record<string, ProjectSummary>>(() =>
  Object.fromEntries(props.projects.map((project) => [project.id, project])),
);
const articlesById = computed<Record<string, ArticleSummary>>(() =>
  Object.fromEntries(props.articles.map((article) => [article.id, article])),
);

const projectsRoute: DesktopWindowRoute = {
  kind: "projects",
  title: "My Projects",
  icon: "🖥️",
  width: 820,
  height: 560,
};
const journalRoute: DesktopWindowRoute = {
  kind: "journal",
  title: "Technical Journal",
  icon: "📁",
  width: 800,
  height: 550,
};
const aboutRoute: DesktopWindowRoute = {
  kind: "about",
  title: "About Richard.txt",
  icon: "📄",
  width: 1120,
  height: 760,
};

function workspaceSize() {
  return {
    width: workspaceElement.value?.clientWidth ?? window.innerWidth,
    height:
      workspaceElement.value?.clientHeight ?? Math.max(0, window.innerHeight - 40),
  };
}

function centeredPosition(route: DesktopWindowRoute) {
  const workspace = workspaceSize();
  return {
    x: Math.max(0, Math.round((workspace.width - route.width) / 2)),
    y: Math.max(0, Math.round((workspace.height - route.height) / 2)),
  };
}

function navigateTo(windowId: string, route: DesktopWindowRoute) {
  const current = orderedWindows.value.find((item) => item.id === windowId);

  if (
    current?.kind === route.kind &&
    current.entityId === route.entityId
  ) {
    focusWindow(windowId);
    return;
  }

  navigateWindow(windowId, route, workspaceSize());
}

function openDesktopNavigation(id: string, route: DesktopWindowRoute) {
  const existing = orderedWindows.value.find((item) => item.id === id);

  if (existing) {
    navigateTo(id, route);
    return;
  }

  openWindow({
    id,
    ...route,
    position: centeredPosition(route),
  });
}

function launchProjects() {
  openDesktopNavigation("projects-explorer", projectsRoute);
}

function launchJournal() {
  openDesktopNavigation("journal-explorer", journalRoute);
}

function launchAbout() {
  openDesktopNavigation("about", aboutRoute);
}

function navigateToProject(windowId: string, project: ProjectSummary) {
  navigateTo(windowId, {
    kind: "project",
    title: project.title,
    icon: "🖥️",
    entityId: project.id,
    width: 860,
    height: 620,
  });
}

function navigateToArticle(windowId: string, article: ArticleSummary) {
  navigateTo(windowId, {
    kind: "article",
    entityId: article.id,
    title: article.title,
    icon: "📄",
    width: 820,
    height: 580,
  });
}

function navigateToPage(windowId: string, title: string, path: string) {
  navigateTo(windowId, {
    kind: "page",
    title,
    icon: "🌐",
    entityId: path,
    width: 1000,
    height: 700,
  });
}

function moveThroughHistory(windowId: string, direction: -1 | 1) {
  goThroughHistory(windowId, direction, workspaceSize());
}

function addressFor(desktopWindow: DesktopWindowState) {
  switch (desktopWindow.kind) {
    case "projects":
      return "C:\\PortfolioOS\\Projects";
    case "journal":
      return "C:\\PortfolioOS\\Journal";
    case "about":
      return "C:\\PortfolioOS\\About Richard.txt";
    case "project":
      return `C:\\PortfolioOS\\Projects\\${desktopWindow.entityId ?? ""}`;
    case "article":
      return `C:\\PortfolioOS\\Journal\\${desktopWindow.entityId ?? ""}`;
    case "page":
      return desktopWindow.entityId ?? "C:\\PortfolioOS";
    default:
      return "C:\\PortfolioOS\\Welcome";
  }
}
</script>

<template>
  <section class="xp-desktop" aria-label="PortfolioOS desktop">
    <div class="xp-wallpaper">
      <header class="xp-welcome">
        <p class="eyebrow">PortfolioOS</p>
        <h1>Richard's Development Desktop</h1>
        <p>
          Explore applications, experiments, coding guides, and development
          notes.
        </p>
      </header>

      <nav class="desktop-icons" aria-label="Portfolio desktop">
        <button class="desktop-icon" type="button" @click="launchProjects">
          <span class="desktop-icon__image" aria-hidden="true">🖥️</span>
          <span>My Projects</span>
          <small>{{ projects.length }} projects</small>
        </button>
        <button class="desktop-icon" type="button" @click="launchJournal">
          <span class="desktop-icon__image" aria-hidden="true">📁</span>
          <span>My Blog</span>
          <small>{{ articles.length }} articles</small>
        </button>
        <button class="desktop-icon" type="button" @click="launchAbout">
          <span class="desktop-icon__image" aria-hidden="true">📄</span>
          <span>About Richard.txt</span>
        </button>
        <button class="desktop-icon" type="button" disabled title="Coming later">
          <span class="desktop-icon__image" aria-hidden="true">⌨️</span>
          <span>Terminal</span>
          <small>Coming later</small>
        </button>
      </nav>

      <div
        ref="workspaceElement"
        class="desktop-workspace"
        aria-label="Open desktop windows"
      >
        <DesktopWindow
          v-for="desktopWindow in orderedWindows"
          :key="desktopWindow.id"
          :window-id="desktopWindow.id"
          :title="desktopWindow.title"
          :icon="desktopWindow.icon"
          :position="desktopWindow.position"
          :width="desktopWindow.width"
          :height="desktopWindow.height"
          :z-index="desktopWindow.zIndex"
          :minimized="desktopWindow.minimized"
          :maximized="desktopWindow.maximized"
          :active="focusedWindowId === desktopWindow.id"
          @close="closeWindow(desktopWindow.id)"
          @focus="focusWindow(desktopWindow.id)"
          @minimize="minimizeWindow(desktopWindow.id)"
          @move="moveWindow(desktopWindow.id, $event)"
          @resize="
            resizeWindow(desktopWindow.id, $event.width, $event.height)
          "
          @toggle-maximize="toggleMaximize(desktopWindow.id)"
        >
          <template #menu>
            <button type="button" @click="closeWindow(desktopWindow.id)">Close</button>
            <button
              type="button"
              @click="navigateTo(desktopWindow.id, projectsRoute)"
            >Projects</button>
            <button
              type="button"
              @click="navigateTo(desktopWindow.id, journalRoute)"
            >Journal</button>
            <button
              type="button"
              @click="navigateTo(desktopWindow.id, aboutRoute)"
            >About</button>
          </template>

          <template #toolbar>
            <button
              type="button"
              :disabled="desktopWindow.historyIndex === 0"
              aria-label="Go back"
              @click="moveThroughHistory(desktopWindow.id, -1)"
            >
              <span aria-hidden="true">◀</span> Back
            </button>
            <button
              type="button"
              :disabled="
                desktopWindow.historyIndex === desktopWindow.history.length - 1
              "
              aria-label="Go forward"
              @click="moveThroughHistory(desktopWindow.id, 1)"
            >
              <span aria-hidden="true">▶</span> Forward
            </button>
            <button
              type="button"
              @click="navigateTo(desktopWindow.id, projectsRoute)"
            >
              <span aria-hidden="true">🖥️</span> Projects
            </button>
            <button
              type="button"
              @click="navigateTo(desktopWindow.id, journalRoute)"
            >
              <span aria-hidden="true">📁</span> Journal
            </button>
            <button
              type="button"
              @click="navigateTo(desktopWindow.id, aboutRoute)"
            >
              <span aria-hidden="true">📄</span> About
            </button>
          </template>

          <template #address>{{ addressFor(desktopWindow) }}</template>

          <template v-if="desktopWindow.kind === 'welcome'">
            <p>
              Projects are the main focus of this portfolio. Open the Projects
              or Journal icon to browse without leaving the desktop.
            </p>
            <p>
              Drag the title bar with a pointer, or focus it and use
              <kbd>Alt</kbd> plus the arrow keys. Open windows remain available
              from the taskbar.
            </p>
          </template>

          <ProjectsExplorer
            v-else-if="desktopWindow.kind === 'projects'"
            :projects="projects"
            @open-project="navigateToProject(desktopWindow.id, $event)"
          />
          <JournalExplorer
            v-else-if="desktopWindow.kind === 'journal'"
            :articles="articles"
            @open-article="navigateToArticle(desktopWindow.id, $event)"
          />
          <AboutWindow v-else-if="desktopWindow.kind === 'about'" />
          <ProjectPreview
            v-else-if="
              desktopWindow.kind === 'project' && desktopWindow.entityId
            "
            :project="projectsById[desktopWindow.entityId]"
            @open-full-page="
              navigateToPage(
                desktopWindow.id,
                desktopWindow.title,
                `/projects/${desktopWindow.entityId}`,
              )
            "
          />
          <ArticlePreview
            v-else-if="
              desktopWindow.kind === 'article' && desktopWindow.entityId
            "
            :article="articlesById[desktopWindow.entityId]"
            @open-full-page="
              navigateToPage(
                desktopWindow.id,
                desktopWindow.title,
                `/blog/${desktopWindow.entityId}`,
              )
            "
          />
          <InternalPage
            v-else-if="desktopWindow.kind === 'page' && desktopWindow.entityId"
            :src="desktopWindow.entityId"
            :title="desktopWindow.title"
          />
        </DesktopWindow>
      </div>
    </div>

    <XPTaskbar
      :windows="orderedWindows"
      :focused-window-id="focusedWindowId"
      @launch-projects="launchProjects"
      @launch-journal="launchJournal"
      @launch-about="launchAbout"
      @toggle-window="toggleFromTaskbar"
    />
  </section>
</template>
