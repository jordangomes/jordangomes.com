export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: (chunk) => {
      return chunk ? `${chunk} | jordan gomes` : 'Jordan Gomes'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Tech enthusiast and programmer from a country that doesn't exist.` },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Jordan Gomes'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `Tech enthusiast and programmer from a country that doesn't exist.`
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL || 'http://localhost:3000/'}Logo512x512.png`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,400&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: ["faPause", "faPlay","faPauseCircle", "faPlayCircle"],
      brands: ['faSpotify']
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/axios'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    nestedProperties: ['author.name'],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
