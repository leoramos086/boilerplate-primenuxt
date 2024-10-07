<script setup lang="ts">
import DefaultSidebar from './DefaultSidebar.vue'
import DefaultTopbar from './DefaultTopbar.vue'
</script>

<template>
  <div class="flex flex-col bg-surface-100 dark:bg-surface-950 lg:ml-[4.3rem] min-h-screen text-color">
    <DefaultSidebar />
    <DefaultTopbar />
    <div class="flex-auto layout-content-wrapper p-4 lg:p-6">
      <slot />
    </div>
  </div>
</template>
