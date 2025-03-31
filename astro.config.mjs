// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

//import cloudflare from '@astrojs/cloudflare';

import netlify from "@astrojs/netlify";
import solidJs from '@astrojs/solid-js';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site:'https://yare-braids.netlify.app',
  integrations: [mdx(), icon(), solidJs()],
    output:'static',
    adapter: netlify()
});