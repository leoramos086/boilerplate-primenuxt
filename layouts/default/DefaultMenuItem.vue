<script setup lang="ts">
import type { MenuItem } from './types/MenuItem'

const { layoutState, isSidebarActive, setActiveMenuItem, disableMenu } = useLayout()

interface Props {
  item: MenuItem
  index?: number
  root?: boolean
  parentItemKey?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  index: 0,
  root: true,
  parentItemKey: null,
})

const isActiveMenu = ref(false)
const itemKey = ref<string | null>(null)

onBeforeMount(() => {
  itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index)

  const activeItem = layoutState.activeMenuItem

  isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(itemKey.value + '-') : false
})

watch(
  () => layoutState.activeMenuItem,
  (newVal) => {
    isActiveMenu.value = newVal === itemKey.value || (newVal as string).startsWith(itemKey.value + '-')
  },
)

function itemClick(event: Event, item: MenuItem) {
  if (item.disabled) {
    event.preventDefault()
    return
  }

  if ((item.to || item.url) && (isSidebarActive)) {
    disableMenu()
  }

  if (item.command) {
    item.command({ originalEvent: event, item: item })
  }

  const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey.value) : itemKey.value

  setActiveMenuItem(foundItemKey)
}
</script>

<template>
  <li class="group" :class="{ 'root-menuitem': root, 'active-menuitem': isActiveMenu }">
    <div v-if="root && item.visible !== false" class="opacity-0 group-[.is-active]:opacity-100 px-3 py-1 font-bold text-sm uppercase transition-opacity duration-300">
      {{ item.label }}
    </div>
    <RouterLink
      v-if="item.to && !item.items && item.visible !== false"
      class="flex hover:bg-contentHoverBg py-4 pr-2 pl-5 rounded transition-all *:transition-all *:duration-300 cursor-pointer align-center"
      :class="[item.class]"
      tabindex="0"
      :to="item.to"
      @click="itemClick($event, item)"
    >
      <i class="mr-2">
        <component :is="item.icon" />
      </i>

      <span class="opacity-0 group-[.is-active]:opacity-100">{{ item.label }}</span>
    </RouterLink>

    <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
      <ul v-show="root ? true : isActiveMenu">
        <DefaultMenuItem
          v-for="(child, i) in item.items"
          :key="itemKey + '_' + i"
          :index="i"
          :item="child"
          :parent-item-key="itemKey"
          :root="false"
        />
      </ul>
    </Transition>
  </li>
</template>

<style scoped>
.router-link-active {
  @apply font-bold text-primary
}

.layout-submenu-enter-from,
.layout-submenu-leave-to {
  max-height: 0;
}

.layout-submenu-enter-to,
.layout-submenu-leave-from {
  max-height: 1000px;
}

.layout-submenu-leave-active {
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.layout-submenu-enter-active {
  overflow: hidden;
  transition: max-height 1s ease-in-out;
}
</style>
