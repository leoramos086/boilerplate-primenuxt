declare module '#app' {
  interface NuxtApp {
    $api: $Fetch
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: $Fetch
  }
}

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    apiBase: string
  }
}

export {}
