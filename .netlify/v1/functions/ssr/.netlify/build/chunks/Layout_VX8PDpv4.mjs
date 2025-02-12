import { e as createAstro, c as createComponent, r as renderTemplate, f as addAttribute, h as renderScript, q as renderSlot, d as renderHead, g as renderComponent } from './astro/server_Bp8y7U-m.mjs';
import 'kleur/colors';
/* empty css                        */
import 'clsx';

const $$Astro$2 = createAstro("https://example.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/HOME/Desktop/Astro/yare-braids/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { name, description, image, title } = Astro2.props;
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/jpg"${addAttribute(image, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(name, "content")}><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet"> <meta property="og:type" content="website"> <meta property="og:url"${addAttribute(Astro2.url, "content")}> <meta property="og:title"${addAttribute(title, "content")}> <meta property="og:description"${addAttribute(description, "content")}> <meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}> <meta property="twitter:card" content="summary_large_image"> <meta property="twitter:url"${addAttribute(Astro2.url, "content")}> <meta property="twitter:title"${addAttribute(title, "content")}> <meta property="twitter:description"${addAttribute(description, "content")}> <meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"> <title>${title}
</title>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/head/BaseHead.astro", void 0);

var Consts = /* @__PURE__ */ ((Consts2) => {
  Consts2["name"] = "Yare Braids";
  Consts2["description"] = "Trenzas, braids, pelo, rizos, peinados. Ofrecemos los mejores estilos de trenzas y peinados para resaltar tu belleza natural.";
  Consts2["image"] = "/logo.jpg";
  return Consts2;
})(Consts || {});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { id, image = Consts.image, data } = Astro2.props;
  const name = data?.name ?? Consts.name;
  const description = Consts.description;
  const url_image = image ?? `/braids/${id}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '<script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"><\/script>', '</head> <body class="bg-gray-200"> <main class="m-10 text-center"> ', " </main> </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": name, "name": name, "description": description, "image": url_image }), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
