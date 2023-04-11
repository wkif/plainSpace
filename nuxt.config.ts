// https://nuxt.com/docs/api/configuration/nuxt-config

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@pinia-plugin-persistedstate/nuxt', '@unocss/nuxt', '@nuxtjs/color-mode', '@nuxt/content'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.less";',
        },
      },
    },
    plugins: [],
  },
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: {},
    rules: [],
  },
  css: ['@/assets/styles/font.css', '@/assets/styles/default.less'],
  content: {
    highlight: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'vitesse-light',
      },
      preload: [
        'cpp',
        'javascript',
        'bash',
        'dart',
        'sql',
        'css',
        'html',
        'java',
        'json',
        'sass',
        'scss',
        'c',
        'swift',
        'md',
        'nginx',
        'yaml',
        'xml',
        'shell',
        'ts',
      ],
    },
    markdown: {
      toc: { depth: 4, searchDepth: 4 },
    },
  },
})
