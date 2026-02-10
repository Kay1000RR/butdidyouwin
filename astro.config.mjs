import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://butdidyouwin.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ],
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
