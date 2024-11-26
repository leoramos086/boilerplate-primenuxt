<script setup lang="ts">
import DefaultTopbarSettings from './DefaultTopbarSettings.vue'

const { toggleMenuMobile } = useLayout()

const op = ref()

const toggleOp = (event: Event) => {
  op.value.toggle(event)
}
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
      <Button rounded text severity="secondary" @click="toggleOp">
        <template #icon>
          <LucideSettings2 />
        </template>
      </Button>
      <Popover ref="op" class="w-96">
        <DefaultTopbarSettings />
      </Popover>
    </div>
  </div>
</template>
