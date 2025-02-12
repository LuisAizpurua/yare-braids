import 'kleur/colors';
import { v as NOOP_MIDDLEWARE_HEADER, w as decodeKey } from './chunks/astro/server_Bp8y7U-m.mjs';
import 'clsx';
import 'cookie';
import './chunks/shared_Bo6krByG.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/HOME/Desktop/Astro/yare-braids/","cacheDir":"file:///C:/Users/HOME/Desktop/Astro/yare-braids/node_modules/.astro/","outDir":"file:///C:/Users/HOME/Desktop/Astro/yare-braids/dist/","srcDir":"file:///C:/Users/HOME/Desktop/Astro/yare-braids/src/","publicDir":"file:///C:/Users/HOME/Desktop/Astro/yare-braids/public/","buildClientDir":"file:///C:/Users/HOME/Desktop/Astro/yare-braids/dist/","buildServerDir":"file:///C:/Users/HOME/Desktop/Astro/yare-braids/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".cls-1[data-astro-cid-zetdm5md]{fill:#ffc541}.cls-2[data-astro-cid-zetdm5md]{fill:#4e4066}.cls-3[data-astro-cid-zetdm5md]{fill:#6f5b92}.cls-4[data-astro-cid-zetdm5md]{fill:#f78d5e}.cls-5[data-astro-cid-zetdm5md]{fill:#fa976c}.cls-6[data-astro-cid-zetdm5md],.cls-7[data-astro-cid-zetdm5md],.cls-8[data-astro-cid-zetdm5md]{fill:#b65c32}.cls-10[data-astro-cid-zetdm5md],.cls-6[data-astro-cid-zetdm5md]{opacity:.6}.cls-7[data-astro-cid-zetdm5md]{opacity:.4}.cls-9[data-astro-cid-zetdm5md]{fill:#f4b73b}.cls-11[data-astro-cid-zetdm5md]{fill:#f9c358}.cls-12[data-astro-cid-zetdm5md]{fill:#9b462c}.cls-13[data-astro-cid-zetdm5md]{fill:#aa512e}.cls-14[data-astro-cid-zetdm5md]{fill:#7d6aa5}.wheel[data-astro-cid-zetdm5md]{animation:wheel-rotate 6s ease infinite;transform-origin:center;transform-box:fill-box}@keyframes wheel-rotate{50%{transform:rotate(360deg);animation-timing-function:cubic-bezier(.55,.085,.68,.53)}to{transform:rotate(960deg)}}.clock-hand-1[data-astro-cid-zetdm5md]{animation:clock-rotate 3s linear infinite;transform-origin:bottom;transform-box:fill-box}.clock-hand-2[data-astro-cid-zetdm5md]{animation:clock-rotate 6s linear infinite;transform-origin:bottom;transform-box:fill-box}@keyframes clock-rotate{to{transform:rotate(360deg)}}#box-top[data-astro-cid-zetdm5md]{animation:box-top-anim 2s linear infinite;transform-origin:right top;transform-box:fill-box}@keyframes box-top-anim{50%{transform:rotate(-5deg)}}#umbrella[data-astro-cid-zetdm5md]{animation:umbrella-anim 6s linear infinite;transform-origin:center;transform-box:fill-box}@keyframes umbrella-anim{25%{transform:translateY(10px) rotate(5deg)}75%{transform:rotate(-5deg)}}#cup[data-astro-cid-zetdm5md]{animation:cup-rotate 3s cubic-bezier(.455,.03,.515,.955) infinite;transform-origin:top left;transform-box:fill-box}@keyframes cup-rotate{50%{transform:rotate(-5deg)}}#pillow[data-astro-cid-zetdm5md]{animation:pillow-anim 3s linear infinite;transform-origin:center;transform-box:fill-box}@keyframes pillow-anim{25%{transform:rotate(10deg) translateY(5px)}75%{transform:rotate(-10deg)}}#stripe[data-astro-cid-zetdm5md]{animation:stripe-anim 3s linear infinite;transform-origin:center;transform-box:fill-box}@keyframes stripe-anim{25%{transform:translate(10px) rotate(-10deg)}75%{transform:translate(10px)}}#bike[data-astro-cid-zetdm5md]{animation:bike-anim 6s ease infinite}@keyframes bike-anim{0%{transform:translate(-1300px)}50%{transform:translate(0);animation-timing-function:cubic-bezier(.47,0,.745,.715)}to{transform:translate(1300px)}}#rucksack[data-astro-cid-zetdm5md]{animation:ruck-anim 3s linear infinite;transform-origin:top;transform-box:fill-box}@keyframes ruck-anim{50%{transform:rotate(5deg)}}.circle[data-astro-cid-zetdm5md]{animation:circle-anim ease infinite;transform-origin:center;transform-box:fill-box;perspective:0px}.circle[data-astro-cid-zetdm5md].c1{animation-duration:2s}.circle[data-astro-cid-zetdm5md].c2{animation-duration:3s}.circle[data-astro-cid-zetdm5md].c3,.circle[data-astro-cid-zetdm5md].c4{animation-duration:1s}.circle[data-astro-cid-zetdm5md].c5{animation-duration:2s}.circle[data-astro-cid-zetdm5md].c6{animation-duration:3s}@keyframes circle-anim{50%{transform:scale(.2) rotateX(360deg) rotateY(360deg)}}.four[data-astro-cid-zetdm5md],#ou[data-astro-cid-zetdm5md]{animation:four-anim cubic-bezier(.39,.575,.565,1) infinite}.four[data-astro-cid-zetdm5md].a{transform-origin:bottom left;animation-duration:3s;transform-box:fill-box}.four[data-astro-cid-zetdm5md].b{transform-origin:bottom right;animation-duration:3s;transform-box:fill-box}#ou[data-astro-cid-zetdm5md]{animation-duration:6s;transform-origin:center;transform-box:fill-box}@keyframes four-anim{50%{transform:scale(.98)}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/braid/[name]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/braid\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"braid","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"params":["name"],"component":"src/pages/api/braid/[name].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/getall.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/getAll\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"getAll.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/getAll.json.ts","pathname":"/api/getAll.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/price/[id]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/price\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"price","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/api/price/[id].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.D9UEBbfg.css"}],"routeData":{"route":"/braid/[id]","isIndex":false,"type":"page","pattern":"^\\/braid\\/([^/]+?)\\/?$","segments":[[{"content":"braid","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/braid/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.D9UEBbfg.css"}],"routeData":{"route":"/v1/[page]","isIndex":false,"type":"page","pattern":"^\\/v1\\/([^/]+?)\\/?$","segments":[[{"content":"v1","dynamic":false,"spread":false}],[{"content":"page","dynamic":true,"spread":false}]],"params":["page"],"component":"src/pages/v1/[page].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/HOME/Desktop/Astro/yare-braids/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/HOME/Desktop/Astro/yare-braids/src/pages/braid/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/HOME/Desktop/Astro/yare-braids/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/HOME/Desktop/Astro/yare-braids/src/pages/v1/[page].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/braid/[name]@_@ts":"pages/api/braid/_name_.astro.mjs","\u0000@astro-page:src/pages/api/getAll.json@_@ts":"pages/api/getall.json.astro.mjs","\u0000@astro-page:src/pages/api/price/[id]@_@ts":"pages/api/price/_id_.astro.mjs","\u0000@astro-page:src/pages/braid/[id]@_@astro":"pages/braid/_id_.astro.mjs","\u0000@astro-page:src/pages/v1/[page]@_@astro":"pages/v1/_page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DczXCvkG.mjs","\u0000astro:internal-actions":"chunks/_astro_internal-actions_49pHVSkj.mjs","C:/Users/HOME/Desktop/Astro/yare-braids/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ByZ3mQJX.mjs","@astrojs/solid-js/client.js":"_astro/client.Cy2dtwfB.js","C:/Users/HOME/Desktop/Astro/yare-braids/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","C:/Users/HOME/Desktop/Astro/yare-braids/src/components/braids-list/comp/IconAction.astro?astro&type=script&index=0&lang.ts":"_astro/IconAction.astro_astro_type_script_index_0_lang.CrtNRrBI.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/HOME/Desktop/Astro/yare-braids/src/components/braids-list/comp/IconAction.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".see\").forEach(e=>e.addEventListener(\"click\",d)),document.querySelectorAll(\".less\").forEach(e=>e.addEventListener(\"click\",s));function d(e){n(e,\"less\")}function s(e){n(e,\"see\")}function n(e,t){const c=a(e),o=l(c),u=r(`.${t}-${o}`);i(c,u),document.getElementById(`info-add-${o}`)?.classList.toggle(\"hidden\")}const i=(e,t)=>{!t!=null&&(e.classList.toggle(\"hidden\"),t.classList.toggle(\"hidden\"))},a=e=>(e.stopPropagation(),e.currentTarget),l=e=>e.closest(\"[data-id]\")?.getAttribute(\"data-id\"),r=e=>document.querySelector(e)});"]],"assets":["/_astro/logo.BVMDswEK.jpg","/_astro/_id_.D9UEBbfg.css","/favicon.svg","/logo.jpg","/braids/braid-1.jpeg","/braids/braid-10.jpeg","/braids/braid-11.jpeg","/braids/braid-2.jpeg","/braids/braid-3.jpeg","/braids/braid-4.jpeg","/braids/braid-5.jpeg","/braids/braid-6.jpeg","/braids/braid-7.jpeg","/braids/braid-8.jpeg","/braids/braid-9.jpeg","/_astro/client.Cy2dtwfB.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"WiIBTDowOsxhBw4gBzWuTakBTBu/pwX4McyQy0Qf5mo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
