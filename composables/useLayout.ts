interface LayoutConfig {
  darkTheme: boolean
  responsived: boolean
}

interface LayoutState {
  menuAnchored: boolean
  menuMobileActive: boolean
  menuDesktopActive: boolean
  activeMenuItem: string | null
}

const layoutConfig = reactive<LayoutConfig>({
  darkTheme: false,
  responsived: true,
})

const layoutState = reactive<LayoutState>({
  menuMobileActive: false,
  menuDesktopActive: false,
  menuAnchored: false,
  activeMenuItem: null,
})

export function useLayout() {
  function toggleMenuAnchored() {
    layoutState.menuAnchored = !layoutState.menuAnchored
  }

  function toggleMenuMobile(status: boolean | null = null) {
    layoutState.menuMobileActive = (status !== null) ? status : !layoutState.menuMobileActive
  }

  const toggleDarkMode = () => {
    if (!document.startViewTransition) {
      executeDarkModeToggle()

      return
    }

    document.startViewTransition(() => executeDarkModeToggle())
  }

  const toggleResponsived = () => {
    layoutConfig.responsived = !layoutConfig.responsived
  }

  const executeDarkModeToggle = () => {
    layoutConfig.darkTheme = !layoutConfig.darkTheme

    if (layoutConfig.darkTheme) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  const setDesktopMenuActive = (status: boolean) => {
    if (!layoutState.menuAnchored) {
      layoutState.menuDesktopActive = status
    }
  }

  const setActiveMenuItem = (item: string | null) => {
    layoutState.activeMenuItem = item
  }

  const disableMenu = () => {
    layoutState.menuDesktopActive = false
    layoutState.menuMobileActive = false
  }

  const isSidebarActive = computed(() => layoutState.menuMobileActive || layoutState.menuDesktopActive)

  return {
    layoutConfig: readonly(layoutConfig),
    layoutState: readonly(layoutState),
    isSidebarActive,
    toggleMenuAnchored,
    toggleMenuMobile,
    toggleDarkMode,
    toggleResponsived,
    setActiveMenuItem,
    setDesktopMenuActive,
    disableMenu,

  }
}
