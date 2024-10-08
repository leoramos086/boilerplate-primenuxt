<script setup lang="ts">
import type { MenuItem } from './types/MenuItem'
import DefaultMenuItem from './DefaultMenuItem.vue'
import { LucideHouse } from '#components'

const menu = ref<MenuItem[]>([
  {
    label: 'Root',
    items: [
      { label: 'Home', icon: LucideHouse, to: '/' },
    ],
  },

])
</script>

<template>
  <ul class="flex flex-col mt-4 h-full text-nowrap">
    <template v-for="(item, i) in menu" :key="item">
      <DefaultMenuItem v-if="!item.separator" :item="item" :index="i" />
      <Divider v-else type="solid" class="mx-auto w-11/12" />
    </template>
  </ul>
</template>
