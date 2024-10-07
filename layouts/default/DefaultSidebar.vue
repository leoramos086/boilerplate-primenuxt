<script setup lang="ts">
const { layoutState, toggleMenuMobile, setMenuActive } = useLayout()

const sidebarClass = computed(() => {
  return {
    '-translate-x-0': layoutState.menuMobileActive,
    'lg:w-64': layoutState.menuDesktopActive || layoutState.menuAnchored,
    'lg:w-[4.3rem]': !layoutState.menuDesktopActive,
  }
})
</script>

<template>
  <div>
    <div
      class="top-0 left-0 z-[50] fixed flex flex-col bg-contentBg rounded-r-card w-64 h-full text-contentCl transform transition-all -translate-x-full lg:translate-x-0 duration-300 overflow-hidden ease-out"
      :class="sidebarClass"
      @mouseenter="setMenuActive(true)"
      @mouseleave="setMenuActive(false)"
    />
    <div
      v-if="layoutState.menuMobileActive"
      class="top-0 left-0 z-[40] fixed bg-black/60 w-full h-full"
      @click="toggleMenuMobile(false)"
    />
  </div>
</template>
