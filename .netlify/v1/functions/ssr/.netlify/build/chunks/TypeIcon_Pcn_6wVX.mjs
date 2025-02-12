import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, f as addAttribute, g as renderComponent, p as Fragment, u as unescapeHTML } from './astro/server_Bp8y7U-m.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';

const icons$1 = {"local":{"prefix":"local","lastModified":1739326897,"icons":{"heigher":{"body":"<path fill=\"#5C5F62\" d=\"M14 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m-7.219.376 4 5a1 1 0 0 1 0 1.249l-4 5a1 1 0 1 1-1.562-1.25l3.5-4.374-3.5-4.376a1 1 0 1 1 1.562-1.25z\"/>","width":20,"height":20},"info":{"body":"<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M5.5 11v2a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-2a6 6 0 0 0-6-6h-2a6 6 0 0 0-6 6\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.5\" d=\"M12.5 12v4\"/><path fill=\"currentColor\" d=\"M12.5 9.5a.5.5 0 1 1 .001-1.001A.5.5 0 0 1 12.5 9.5\"/><path fill=\"currentColor\" d=\"M12.5 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2\"/></g>","top":-0.5,"width":25,"height":25},"instagram":{"body":"<g fill=\"none\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15.5 5h-6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12.5 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6\" clip-rule=\"evenodd\"/><rect width=\"2\" height=\"2\" x=\"15.5\" y=\"9\" fill=\"currentColor\" rx=\"1\" transform=\"rotate(-90 15.5 9)\"/><rect width=\"1\" height=\"1\" x=\"16\" y=\"8.5\" stroke=\"currentColor\" stroke-linecap=\"round\" rx=\".5\" transform=\"rotate(-90 16 8.5)\"/></g>","top":-0.5,"width":25,"height":25},"less":{"body":"<path fill=\"currentColor\" d=\"M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1\"/>"},"lessc":{"body":"<path fill=\"currentColor\" d=\"M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1\"/>"},"minor":{"body":"<path fill=\"#5C5F62\" d=\"M6 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m7.219.376a1 1 0 1 1 1.562 1.249L11.28 10l3.5 4.375a1 1 0 1 1-1.562 1.249l-4-5a1 1 0 0 1 0-1.25l4-5z\"/>","width":20,"height":20},"see":{"body":"<circle cx=\"16\" cy=\"16\" r=\"2\" fill=\"#0B1719\"/><path fill=\"#555D5E\" d=\"M16 8C9.373 8 4 14 4 16c0 3 5.373 8 12 8s12-6 12-8-5.373-8-12-8m0 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9\"/>","width":32,"height":32},"whatsapp":{"body":"<g fill=\"#0F0F0F\"><path d=\"M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552\"/><path fill-rule=\"evenodd\" d=\"M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11m-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764z\" clip-rule=\"evenodd\"/></g>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro("https://example.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons$1[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons$1[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons$1[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/node_modules/astro-icon/components/Icon.astro", void 0);

const icons = [
	{
		name: "info",
		size: 55,
		href: "#footerInfo"
	},
	{
		name: "instagram",
		size: 55,
		href: "https://www.instagram.com/_yarestyle"
	},
	{
		name: "whatsapp",
		size: 40,
		href: "https://wa.me/50766533136"
	}
];

const $$Astro = createAstro("https://example.com");
const $$TypeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TypeIcon;
  const { iconNames = icons } = Astro2.props;
  return renderTemplate`${iconNames.map((data) => renderTemplate`${maybeRenderHead()}<a class="transition-normal duration-1000 ease-in-out"${addAttribute(data.href, "href")} target="_parent"${addAttribute(data.name, "title")}>${renderComponent($$result, "Icon", $$Icon, { "name": data.name, "size": data.size, "class:list": [
    "cursor-pointer hover:text-blue-500 animate-pulse",
    { "ml-2": data.name.includes("whatsapp") }
  ] })}</a>`)}`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/nav-components/comp/TypeIcon.astro", void 0);

export { $$TypeIcon as $, $$Icon as a, icons as i };
