// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import db from '@astrojs/db';

import icon from 'astro-icon';

//import cloudflare from '@astrojs/cloudflare';

import solidJs from '@astrojs/solid-js';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://example.com',
  integrations: [mdx(), db(), icon(), solidJs()],
   output:'server',
   adapter: netlify()
});

