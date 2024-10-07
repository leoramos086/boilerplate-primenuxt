interface LayoutConfig {
  darkTheme: boolean
}

interface LayoutState {
  menuAnchored: boolean
  menuMobileActive: boolean
  menuDesktopActive: boolean
}

const layoutConfig = reactive<LayoutConfig>({
  darkTheme: false,
})

const layoutState = reactive<LayoutState>({
  menuMobileActive: false,
  menuDesktopActive: false,
  menuAnchored: false,
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

  const executeDarkModeToggle = () => {
    layoutConfig.darkTheme = !layoutConfig.darkTheme

    if (layoutConfig.darkTheme) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  const setMenuActive = (status: boolean) => {
    if (!layoutState.menuAnchored) {
      layoutState.menuDesktopActive = status
    }
  }

  return {
    layoutConfig: readonly(layoutConfig),
    layoutState: readonly(layoutState),
    toggleMenuAnchored,
    toggleMenuMobile,
    toggleDarkMode,
    setMenuActive,
  }
}
