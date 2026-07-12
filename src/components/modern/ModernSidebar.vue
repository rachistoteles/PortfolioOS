<script setup lang="ts">
import { ref } from "vue";

const isCollapsed = ref(false);

const links = [
  { href: "#modern-overview", label: "Overview", icon: "⌂" },
  { href: "#modern-projects", label: "Projects", icon: "◇" },
  { href: "#modern-recent", label: "Journal", icon: "≡" },
  { href: "#modern-about", label: "About", icon: "○" },
];
</script>

<template>
  <aside
    class="modern-sidebar"
    :class="{ 'modern-sidebar--collapsed': isCollapsed }"
    aria-label="Modern portfolio navigation"
  >
    <div class="modern-sidebar__heading">
      <span class="modern-sidebar__logo" aria-hidden="true">RV</span>
      <span v-if="!isCollapsed" class="modern-sidebar__name">
        <strong>Richard Vázquez</strong>
        <small>Portfolio navigation</small>
      </span>
    </div>

    <nav>
      <a v-for="link in links" :key="link.href" :href="link.href">
        <span class="modern-sidebar__icon" aria-hidden="true">{{ link.icon }}</span>
        <span v-if="!isCollapsed">{{ link.label }}</span>
      </a>
    </nav>

    <button
      type="button"
      class="modern-sidebar__collapse"
      :aria-label="isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
      :aria-expanded="!isCollapsed"
      @click="isCollapsed = !isCollapsed"
    >
      <span aria-hidden="true">{{ isCollapsed ? "›" : "‹" }}</span>
      <span v-if="!isCollapsed">Collapse</span>
    </button>
  </aside>
</template>

<style scoped>
.modern-sidebar {
  display: flex;
  width: 13.5rem;
  min-width: 0;
  height: 100%;
  padding: 0.8rem;
  border-right: 1px solid rgb(255 255 255 / 10%);
  background: rgb(5 12 20 / 84%);
  flex-direction: column;
  gap: 1rem;
  transition: width 180ms ease;
}

.modern-sidebar--collapsed {
  width: 4.4rem;
}

.modern-sidebar__heading {
  display: flex;
  min-height: 2.8rem;
  align-items: center;
  gap: 0.65rem;
}

.modern-sidebar__logo {
  display: grid;
  width: 2.7rem;
  height: 2.7rem;
  flex: 0 0 auto;
  border: 1px solid rgb(130 247 213 / 40%);
  border-radius: 0.7rem;
  background: rgb(130 247 213 / 10%);
  color: #82f7d5;
  font-size: 0.75rem;
  font-weight: 900;
  place-items: center;
}

.modern-sidebar__name {
  min-width: 0;
}

.modern-sidebar__name strong,
.modern-sidebar__name small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.modern-sidebar__name strong {
  font-size: 0.78rem;
}

.modern-sidebar__name small {
  margin-top: 0.15rem;
  color: #78908b;
  font-size: 0.65rem;
}

.modern-sidebar nav {
  display: grid;
  gap: 0.3rem;
}

.modern-sidebar nav a,
.modern-sidebar__collapse {
  display: flex;
  min-height: 2.45rem;
  padding: 0.45rem 0.6rem;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 0.55rem;
  background: transparent;
  color: #b6c8c3;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.76rem;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

.modern-sidebar nav a:hover,
.modern-sidebar nav a:focus-visible,
.modern-sidebar__collapse:hover,
.modern-sidebar__collapse:focus-visible {
  border-color: rgb(130 247 213 / 30%);
  background: rgb(130 247 213 / 9%);
  color: #ecfff9;
  outline: 0;
}

.modern-sidebar__icon {
  display: grid;
  width: 1.5rem;
  flex: 0 0 auto;
  color: #82f7d5;
  font-size: 1rem;
  place-items: center;
}

.modern-sidebar__collapse {
  width: 100%;
  margin-top: auto;
}

@media (max-width: 720px) {
  .modern-sidebar,
  .modern-sidebar--collapsed {
    width: 100%;
    height: auto;
    padding: 0.45rem 0.65rem;
    border-right: 0;
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    flex-direction: row;
    align-items: center;
  }

  .modern-sidebar__heading,
  .modern-sidebar__collapse {
    display: none;
  }

  .modern-sidebar nav {
    display: flex;
    width: 100%;
    overflow-x: auto;
    justify-content: space-between;
  }

  .modern-sidebar nav a {
    min-height: 2.2rem;
    flex: 0 0 auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .modern-sidebar {
    transition: none;
  }
}
</style>
