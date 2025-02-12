// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

//import cloudflare from '@astrojs/cloudflare';

import netlify from "@astrojs/netlify";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site:'https://yare-braids.netlify.app',
  integrations: [mdx(), icon()],
    output:'static',
    adapter: netlify()
});

