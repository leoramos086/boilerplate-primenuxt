<script setup lang="ts">
import DefaultSidebar from './DefaultSidebar.vue'
import DefaultTopbar from './DefaultTopbar.vue'

const { layoutState, layoutConfig } = useLayout()

const classContainer = computed(() => {
  return [
    'flex-auto mx-auto p-4 lg:p-6 w-full',
    { 'lg:w-10/12 2xl:w-9/12': !layoutConfig.responsived },
  ]
})
</script>

<template>
  <div
    class="flex flex-col lg:ml-[4.3rem] min-h-screen text-color transition-all duration-300"
    :class="[layoutState.menuAnchored ? 'lg:ml-64': 'lg:ml-[4.3rem]']"
  >
    <DefaultSidebar />
    <DefaultTopbar />
    <div class="flex-auto layout-content-wrapper p-4 lg:p-6">
      <slot />
    </div>
  </div>
</template>
