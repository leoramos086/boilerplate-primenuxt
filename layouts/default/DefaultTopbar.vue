<script setup lang="ts">
const { toggleMenuMobile, toggleDarkMode, toggleMenuAnchored } = useLayout()
</script>

<template>
  <div class="flex justify-between items-center px-6 py-0 w-full min-h-16">
    <div>
      <p>Esquerda</p>
    </div>
    <div class="flex gap-2">
      <Button
        label="toggleMenuAnchored"
        @click="toggleMenuAnchored()"
      />
      <Button
        label="menu"
        @click="toggleMenuMobile()"
      />
      <Button
        label="darkMode"
        @click="toggleDarkMode"
      />
    </div>
  </div>
</template>
