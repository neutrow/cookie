// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Reactor Docs',
      disable404Route: true,
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/reactor-mc'
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.reactor.ink'
        }
      ],
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en'
        },
        es: {
          label: 'Español',
          lang: 'es'
        }
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' }
          ]
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' }
        }
      ],
      components: {
        Head: './src/components/Head.astro'
      },
      customCss: ['./src/styles/custom.css']
    })
  ],
  experimental: {
    fonts: [
      {
        cssVariable: '--font-be-vietnam-pro',
        name: 'Be Vietnam Pro',
        provider: fontProviders.fontsource()
      },
      {
        cssVariable: '--font-jetbrains-mono',
        name: 'JetBrains Mono',
        provider: fontProviders.fontsource()
      }
    ]
  }
})
