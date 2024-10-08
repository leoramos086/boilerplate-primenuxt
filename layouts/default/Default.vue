<script setup lang="ts">
import DefaultSidebar from './DefaultSidebar.vue'
import DefaultTopbar from './DefaultTopbar.vue'

const { layoutState } = useLayout()
</script>

<template>
  <div
    class="flex flex-col lg:ml-[4.3rem] min-h-screen text-color transition-all duration-300"
    :class="{ 'lg:ml-64': layoutState.menuAnchored }"
  >
    <DefaultSidebar />
    <DefaultTopbar />
    <div class="flex-auto layout-content-wrapper p-4 lg:p-6">
      <slot />
    </div>
  </div>
</template>
