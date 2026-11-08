<script setup lang="ts">
import {
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, type Component } from 'vue'
import IconHelmet from '../icons/IconHelmet.vue'
import IconBook from '../icons/IconBook.vue'
import IconFeather from '../icons/IconFeather.vue'
import IconQuest from '../icons/IconQuest.vue'
import IconItems from '../icons/IconItems.vue'
import IconTable from '../icons/IconTable.vue'
import IconSwordAndSheild from '../icons/IconSwordAndSheild.vue'

type SidebarLink =
  | { label: string; iconType: 'fontawesome'; icon: IconDefinition }
  | { label: string; iconType: 'svg'; icon: Component }

type SidebarSection = { title: string; links: SidebarLink[] }

const isOpen = ref(false)

const navigationSections: SidebarSection[] = [
  {
    title: 'Tavern',
    links: [
      { label: 'Campaign', iconType: 'svg', icon: IconTable },
      { label: 'Sessions', iconType: 'svg', icon: IconFeather },
      { label: 'Character Sheets', iconType: 'svg', icon: IconSwordAndSheild },
      { label: 'Quests', iconType: 'svg', icon: IconQuest },
    ],
  },
  {
    title: 'D&D Global Compedium',
    links: [
      { label: 'Equipments', iconType: 'svg', icon: IconHelmet },
      { label: 'Items', iconType: 'svg', icon: IconItems },
      { label: 'Spells', iconType: 'svg', icon: IconBook },
    ],
  },
]
</script>

<template>
  <button
    type="button"
    class="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-3 text-sm font-medium text-coal shadow-lg md:hidden"
    :aria-expanded="isOpen"
    aria-controls="dashboard-sidebar"
    @click="isOpen = !isOpen"
  >
    <FontAwesomeIcon :icon="isOpen ? faXmark : faBars" class="h-5 w-5" aria-hidden="true" />
    <span>{{ isOpen ? 'Close menu' : 'Menu' }}</span>
  </button>

  <div
    v-if="isOpen"
    class="fixed inset-x-0 top-16 bottom-0 z-20 bg-black/60 md:hidden"
    aria-hidden="true"
    @click="isOpen = false"
  />

  <aside
    id="dashboard-sidebar"
    class="border-gold/30 bg-light fixed top-16 bottom-0 left-0 z-30 w-64 border-r transition-transform duration-300 md:translate-x-0"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    aria-label="Dashboard sidebar"
  >
    <div class="flex h-full flex-col overflow-y-auto px-3 py-5">
      <section v-for="section in navigationSections" :key="section.title" class="mb-8">
        <h2 class="text-dark/60 px-3 pb-3 text-xs font-semibold tracking-widest uppercase">
          {{ section.title }}
        </h2>

        <ul class="space-y-2 font-medium">
          <li v-for="item in section.links" :key="item.label">
            <a href="#"
              class="text-dark/45 flex items-center rounded-lg px-3 py-2.5"
              aria-disabled="true"
              :title="`${item.label} is coming soon`"
            >
              <FontAwesomeIcon
                v-if="item.iconType === 'fontawesome'"
                :icon="item.icon"
                class="h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              <component
                :is="item.icon"
                v-else
                class="h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              <span class="ms-3">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </aside>
</template>
