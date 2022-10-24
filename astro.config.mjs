import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import uno from 'astro-uno'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  presetTagify,
  presetTypography,
  presetWebFonts,
  transformerDirectives
} from 'unocss'
import presetDaisy from 'unocss-preset-daisy'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    uno({
      transformers: [transformerDirectives()],
      presets: [
        presetUno(),
        presetTypography(),
        presetDaisy(),
        presetAttributify(),
        presetTagify(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle'
          }
        }),

        presetWebFonts({
          provider: 'google', // default provider
          fonts: {
            // these will extend the default theme
            sans: 'Roboto',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            kanit: 'Kanit:400,700',
            // custom ones
            grotesk: {
              name: 'Space Grotesk',
              weights: ['400', '700']
            },
            lato: [
              {
                name: 'Lato',
                weights: ['400', '700'],
                italic: true
              },
              {
                name: 'sans-serif',
                provider: 'none'
              }
            ]
          }
        })
      ]
    })
  ]
})
