import { computed, ref } from "vue";

import type {
  DesktopWindowRoute,
  DesktopWindowState,
  WindowPosition,
  WindowSeed,
} from "./desktopTypes";

const INITIAL_Z_INDEX = 10;

function routeFromSeed(seed: WindowSeed): DesktopWindowRoute {
  return {
    kind: seed.kind,
    title: seed.title,
    icon: seed.icon,
    entityId: seed.entityId,
    width: seed.width,
    height: seed.height,
  };
}

function centeredPosition(
  route: DesktopWindowRoute,
  workspace: { width: number; height: number },
) {
  return {
    x: Math.max(0, Math.round((workspace.width - route.width) / 2)),
    y: Math.max(0, Math.round((workspace.height - route.height) / 2)),
  };
}

export function useDesktopWindows(initialWindows: WindowSeed[] = []) {
  let nextZIndex = INITIAL_Z_INDEX;
  const windows = ref<DesktopWindowState[]>(
    initialWindows.map((window) => {
      const route = routeFromSeed(window);

      return {
        ...window,
        minimized: false,
        maximized: window.maximized ?? false,
        zIndex: nextZIndex++,
        history: [route],
        historyIndex: 0,
      };
    }),
  );
  const focusedWindowId = ref<string | null>(
    windows.value.at(-1)?.id ?? null,
  );

  const orderedWindows = computed(() =>
    [...windows.value].sort(
      (first, second) => first.zIndex - second.zIndex,
    ),
  );

  function findWindow(id: string) {
    return windows.value.find((window) => window.id === id);
  }

  function focusWindow(id: string) {
    const target = findWindow(id);

    if (!target) {
      return;
    }

    target.minimized = false;
    target.zIndex = nextZIndex++;
    focusedWindowId.value = id;
  }

  function openWindow(seed: WindowSeed) {
    const existing = findWindow(seed.id);

    if (existing) {
      focusWindow(existing.id);
      return existing;
    }

    const created: DesktopWindowState = {
      ...seed,
      minimized: false,
      maximized: seed.maximized ?? false,
      zIndex: nextZIndex++,
      history: [routeFromSeed(seed)],
      historyIndex: 0,
    };

    windows.value.push(created);
    focusedWindowId.value = created.id;
    return created;
  }

  function focusTopWindow() {
    const topWindow = windows.value
      .filter((window) => !window.minimized)
      .sort((first, second) => second.zIndex - first.zIndex)[0];
    focusedWindowId.value = topWindow?.id ?? null;
  }

  function closeWindow(id: string) {
    windows.value = windows.value.filter((window) => window.id !== id);

    if (focusedWindowId.value === id) {
      focusTopWindow();
    }
  }

  function minimizeWindow(id: string) {
    const target = findWindow(id);

    if (!target) {
      return;
    }

    target.minimized = true;

    if (focusedWindowId.value === id) {
      focusTopWindow();
    }
  }

  function toggleMaximize(id: string) {
    const target = findWindow(id);

    if (!target) {
      return;
    }

    target.maximized = !target.maximized;
    focusWindow(id);
  }

  function moveWindow(id: string, position: WindowPosition) {
    const target = findWindow(id);

    if (target && !target.maximized) {
      target.position = position;
    }
  }

  function resizeWindow(id: string, width: number, height: number) {
    const target = findWindow(id);

    if (target && !target.maximized) {
      target.width = width;
      target.height = height;
    }
  }

  function recenterWindow(
    id: string,
    workspace: { width: number; height: number },
  ) {
    const target = findWindow(id);

    if (target) {
      target.position = centeredPosition(target, workspace);
    }
  }

  function applyRoute(
    target: DesktopWindowState,
    route: DesktopWindowRoute,
    workspace: { width: number; height: number },
  ) {
    Object.assign(target, route);
    target.position = centeredPosition(route, workspace);
    target.maximized = false;
    target.minimized = false;
    focusWindow(target.id);
  }

  function navigateWindow(
    id: string,
    route: DesktopWindowRoute,
    workspace: { width: number; height: number },
  ) {
    const target = findWindow(id);

    if (!target) {
      return;
    }

    target.history = target.history.slice(0, target.historyIndex + 1);
    target.history.push(route);
    target.historyIndex = target.history.length - 1;
    applyRoute(target, route, workspace);
  }

  function goThroughHistory(
    id: string,
    direction: -1 | 1,
    workspace: { width: number; height: number },
  ) {
    const target = findWindow(id);

    if (!target) {
      return;
    }

    const nextIndex = target.historyIndex + direction;

    if (nextIndex < 0 || nextIndex >= target.history.length) {
      return;
    }

    target.historyIndex = nextIndex;
    const route = target.history[nextIndex];

    if (route) {
      applyRoute(target, route, workspace);
    }
  }

  function toggleFromTaskbar(id: string) {
    const target = findWindow(id);

    if (!target) {
      return;
    }

    if (focusedWindowId.value === id && !target.minimized) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  }

  return {
    focusedWindowId,
    orderedWindows,
    closeWindow,
    focusWindow,
    minimizeWindow,
    moveWindow,
    navigateWindow,
    openWindow,
    recenterWindow,
    resizeWindow,
    goThroughHistory,
    toggleFromTaskbar,
    toggleMaximize,
  };
}
