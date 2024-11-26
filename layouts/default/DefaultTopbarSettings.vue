<script setup lang="ts">
import { LucideFoldHorizontal, LucideUnfoldHorizontal } from '#components'

const { layoutConfig, toggleDarkMode, toggleResponsived } = useLayout()

const colorModeValue = ref((layoutConfig.darkTheme) ? 'Dark' : 'Light')
const colorModeOpts = ref(['Dark', 'Light'])

const containerValue = ref((layoutConfig.responsived) ? 'unfolded' : 'folded')
const containerOpts = ref([
  { value: 'folded', component: LucideFoldHorizontal },
  { value: 'unfolded', component: LucideUnfoldHorizontal },
])
</script>

<template>
  <div class="flex flex-col gap-4">
    <p class="font-semibold text-md text-muted-color">
      Cor Modo
    </p>

    <p class="text-center">
      <SelectButton
        v-model="colorModeValue"
        :options="colorModeOpts"
        class="w-full *:w-full"
        :allow-empty="false"
        @change="toggleDarkMode"
      />
    </p>

    <p class="font-semibold text-md text-muted-color">
      Container
    </p>

    <p class="text-center">
      <SelectButton
        v-model="containerValue"
        :options="containerOpts"
        class="w-full *:w-full"
        :allow-empty="false"
        option-label="value"
        option-value="value"
        @change="toggleResponsived"
      >
        <template #option="slotProps">
          <component :is="slotProps.option.component" />
        </template>
      </SelectButton>
    </p>
  </div>
</template>
