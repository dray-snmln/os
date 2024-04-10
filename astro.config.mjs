import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  // other config options...
  plugins: [
    {
      package: 'astro',
      config: {
        // other config options...
        loaders: {
          '.scss': 'sass',
        },
      },
    },
  ],
  integrations: [tailwind()],
})
