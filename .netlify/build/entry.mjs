import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CBr4sVx0.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/api/braid/_name_.astro.mjs');
const _page4 = () => import('./pages/api/getall.json.astro.mjs');
const _page5 = () => import('./pages/api/price/_id_.astro.mjs');
const _page6 = () => import('./pages/braid/_id_.astro.mjs');
const _page7 = () => import('./pages/v1/_page_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/api/braid/[name].ts", _page3],
    ["src/pages/api/getAll.json.ts", _page4],
    ["src/pages/api/price/[id].ts", _page5],
    ["src/pages/braid/[id].astro", _page6],
    ["src/pages/v1/[page].astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "e259a540-7b43-4b94-b083-208bebfe455e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
