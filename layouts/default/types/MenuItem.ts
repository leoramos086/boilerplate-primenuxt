import type { FunctionalComponent } from 'vue'
import type { LucideProps } from 'lucide-vue-next'
import type { RouteLocationRaw } from 'vue-router'

export interface MenuItem {
  label: string
  icon?: FunctionalComponent<LucideProps>
  to?: RouteLocationRaw
  url?: string
  class?: string
  separator?: boolean
  target?: string
  visible?: boolean
  disabled?: boolean
  command?: (payload: { originalEvent: Event, item: MenuItem }) => void
  items?: MenuItem[]
}
