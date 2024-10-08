<script setup lang="ts">
const { toggleMenuMobile, toggleDarkMode, layoutConfig } = useLayout()
</script>

<template>
  <div class="flex justify-between items-center px-6 py-0 w-full min-h-16">
    <div>
      <Button rounded severity="secondary" class="lg:hidden" @click="toggleMenuMobile()">
        <template #icon>
          <LucideMenu :size="20" />
        </template>
      </Button>
    </div>
    <div class="flex gap-2">
      <Button rounded text severity="secondary" @click="toggleDarkMode">
        <template #icon>
          <LucideSun v-if="layoutConfig.darkTheme" />
          <LucideMoon v-else />
        </template>
      </Button>
    </div>
  </div>
</template>
