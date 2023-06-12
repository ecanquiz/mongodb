import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MongoDB",
  description: "A VitePress Site",
  base: '/mongodb/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/me.jpg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/intro/tutorial-introduction' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }, 
    ],

    sidebar: [
      {
        text: 'Introducción',
        path: '/intro/',
        items: [
          { text: 'Introducción al tutorial', link: '/intro/tutorial-introduction' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/how-to-code-in-typescript' }
    ]
  }
})
