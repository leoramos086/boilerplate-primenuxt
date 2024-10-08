<script setup lang="ts">
import DefaultMenu from './DefaultMenu.vue'

const { layoutState, toggleMenuMobile, setDesktopMenuActive, toggleMenuAnchored } = useLayout()

const sidebarClass = computed(() => {
  return {
    '-translate-x-full': !layoutState.menuMobileActive,
    'is-active': layoutState.menuDesktopActive || layoutState.menuAnchored || layoutState.menuMobileActive,
    'lg:w-[4.3rem]': !layoutState.menuDesktopActive && !layoutState.menuAnchored,
  }
})
</script>

<template>
  <div>
    <div
      class="top-0 left-0 z-[50] fixed flex flex-col bg-contentBg shadow-card rounded-r-card w-64 h-full text-contentCl transform transition-all lg:translate-x-0 duration-300 overflow-hidden ease-out group"
      :class="sidebarClass"
      @mouseenter="setDesktopMenuActive(true)"
      @mouseleave="setDesktopMenuActive(false)"
    >
      <div class="group-[.is-active]:align-center flex justify-center group-[.is-active]:justify-between px-4 py-6">
        <span>Logo</span>
        <RadioButton
          v-if="layoutState.menuAnchored || layoutState.menuDesktopActive"
          v-model="layoutState.menuAnchored"
          class="lg:block hidden"
          :pt="{ icon: 'opacity-0', box: 'border-primary border-2' }"
          binary
          @click="toggleMenuAnchored"
        />
      </div>
      <DefaultMenu />
      <!-- <div>footer</div> -->
    </div>
    <div
      v-if="layoutState.menuMobileActive"
      class="top-0 left-0 z-[40] fixed bg-black/60 w-full h-full"
      @click="toggleMenuMobile(false)"
    />
  </div>
</template>
