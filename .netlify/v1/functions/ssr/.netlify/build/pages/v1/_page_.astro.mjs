import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, f as addAttribute, h as renderScript } from '../../chunks/astro/server_Bp8y7U-m.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../chunks/_astro_assets_2kwcl21B.mjs';
import 'clsx';
import { a as $$Icon, $ as $$TypeIcon } from '../../chunks/TypeIcon_Pcn_6wVX.mjs';
import { $ as $$Layout } from '../../chunks/Layout_VX8PDpv4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$7 = createAstro("https://example.com");
const $$CardImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardImage;
  const { imageUrl, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-full rounded-xl shadow-2xs overflow-hidden "> ${renderComponent($$result, "Image", $$Image, { "src": imageUrl, "width": 200, "height": 200, "format": "jpeg", "alt": name, "quality": "max", "class": "w-full h-full object-cover" })} </div>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/braids-list/comp/CardImage.astro", void 0);

const $$Astro$6 = createAstro("https://example.com");
const $$InfoExtra = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$InfoExtra;
  const { id, prices } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`info-add-${id}`, "id")} class="hidden w-full transition-transform text-left bg-[#cbcbde] duration-1000 ease-in-out"> <ul class="ml-3 my-1"> ${prices.map(({ Prices }) => !!!Prices.infoExtra ? renderTemplate`<li class="font-extrabold text-gray-600 my-1"> <span class="font-bold">$${Prices.total} - </span> ${Prices.includeMaterial ? "Si" : "No"} incluye material
</li>` : Prices.infoExtra.split(".").map(
    (str) => renderTemplate`<li class="font-extrabold font-serif text-gray-600 my-1"> ${str}.
</li>`
  ))} </ul> </div>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/braids-list/comp/InfoExtra.astro", void 0);

const $$Astro$5 = createAstro("https://example.com");
const $$IconAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$IconAction;
  const { id } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "data-id": id, "class:list": ["ml-2 w-5  hover:text-blue-500 cursor-pointer animate-spin hover:opacity-20", `see-${id}`, "see"], "name": "see", "size": 25 })} ${renderComponent($$result, "Icon", $$Icon, { "data-id": id, "class:list": ["ml-2 w-5  cursor-pointer animate-pulse", `less-${id}`, "less", "hidden"], "name": "less", "size": 20 })} ${renderScript($$result, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/braids-list/comp/IconAction.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/braids-list/comp/IconAction.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const $$TypeIcons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TypeIcons;
  const { id, name, description } = Astro2.props;
  const base = "https://yare-braid.netlify.app";
  const pricesBraid = await (await fetch(`${base}/api/price/${id}`)).json();
  return renderTemplate`${maybeRenderHead()}<div id="parent-info" class="flex flex-row p-5 bg-[#cbcbde] w-full"> <h1 class="font-bold text-gray-700 hover:cursor-pointer animate-pulse"> <a${addAttribute("/braid/" + id, "href")}>${name}</a> </h1> <div class="flex-1"></div> <div class="flex flex-row justify-center flex-wrap"> <p${addAttribute(`price-braid-${1}`, "id")} class="font-bold text-[#363636]">$${pricesBraid[0].Prices.total}</p> ${renderComponent($$result, "IconAction", $$IconAction, { "id": id })} </div> </div> ${renderComponent($$result, "InfoExtra", $$InfoExtra, { "id": id, "prices": pricesBraid })}`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/braids-list/comp/TypeIcons.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$CardBraids = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardBraids;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col justify-center items-center rounded-2xl bg-[#8b8b8b] w-80 h-80 overflow-hidden shadow-2xl shadow-gray-600 mx-5 my-7"> ${renderComponent($$result, "CardImage", $$CardImage, { "imageUrl": `/braids/braid-${data.id}.jpeg`, ...data })} ${renderComponent($$result, "TypeIcons", $$TypeIcons, { ...data })} </article>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/braids-list/CardBraids.astro", void 0);

const $$FooterInfo = createComponent(($$result, $$props, $$slots) => {
  const title = "Yarelis Janeth";
  const msg = "Bienvenidas a nuestro mundo de creatividad y estilo, donde cada trenza cuenta una historia \xFAnica. En nuestro emprendimiento, transformamos tu cabello en una obra de arte, fusionando tradici\xF3n y tendencias para que te sientas empoderada. \xA1Descubre el peinado perfecto que resalta tu belleza y personalidad!";
  return renderTemplate`${maybeRenderHead()}<footer id="footerInfo" class="w-full mt-10"> <section class="h-fit w-fit overflow-hidden rounded-2xl  mx-auto my-5 px-4 py-2 flex flex-row flex-wrap justify-center items-center"> <h2 class="text-3xl font-bold">${title}<span class="material-symbols-outlined animate-bounce my-3 text-red-500 font-bold mx-2">favorite</span></h2> <p class="m-auto shadow-lg py-2 w-64 px-3 text-red-700">${msg}</p> </section> </footer>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/footer-info/FooterInfo.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.BVMDswEK.jpg","width":1120,"height":1120,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HOME/Desktop/Astro/yare-braids/src/assets/images/logo.jpg";
							}
							
							return target[name];
						}
					});

const $$HeaderTitle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-center rounded-4xl m-5 mb-10 flex flex-col justify-center px-10 py-5 items-center shadow-2xl"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "width": 120, "format": "jpg", "alt": "logo", "quality": "max", "class": "rounded-xl shadow-2xs " })} </div>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/index/HeaderTitle.astro", void 0);

const $$HeaderLi = createComponent(($$result, $$props, $$slots) => {
  const Title = "Yare Braids";
  const subTitle = "Trenza tu estilo, enreda tu mundo de belleza";
  return renderTemplate`${maybeRenderHead()}<li> <h1 class="font-[Playfair Display] font-medium sm:text-5xl md:text-5xl text-[15px] text-center text-amber-600 tracking-wide leading-tight"> ${Title} </h1> </li> <li class="mx-2.5"> <p class="font-[Poppins] sm:text-3xl md:text-3xl text-[10px] text-center text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed animate-pulse"> ${subTitle} </p> </li> <li class="my-5"> <div class="flex flex-row justify-center items-center space-x-2"> ${renderComponent($$result, "TypeIcon", $$TypeIcon, {})} </div> </li>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/nav-components/comp/HeaderLi.astro", void 0);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full w-max-full text-center"> <nav class="rounded-4xl m-5 flex justify-center px-20 py-10 items-center shadow-2xl"> <ul class="flex flex-row flex-wrap justify-center items-center "> ${renderComponent($$result, "HeaderTitle", $$HeaderTitle, {})} ${renderComponent($$result, "HeaderLi", $$HeaderLi, {})} </ul> </nav> </header>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/nav-components/NavBar.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$SectionPaginate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionPaginate;
  const { prev, next, current } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="w-full h-28 flex flex-wrap flex-row justify-center items-center"> <!-- <section class="w-full flex flex-row flex-wrap justify-center items-center mx-2 space-x-2">
        <InputSearch />
    </section>
        <section class="w-full flex-1"></section> --> <section class="w-full text-center my-5"> <a${addAttribute(!prev, "aria-disabled")}${addAttribute(["mx-2 w-20 m-auto underline-offset-0 text-blue-500 text-2xl", { "pointer-events-none text-gray-700": !prev }], "class:list")}${addAttribute(`${prev}`, "href")}>${renderComponent($$result, "Icon", $$Icon, { "class": "hover:text-blue-600 inline", "name": "minor", "size": 40 })}</a> <a${addAttribute(!next, "aria-disabled")}${addAttribute(["mx-2 w-20 m-auto underline-offset-0 text-blue-500 text-2xl", { "pointer-events-none text-gray-700": !next }], "class:list")}${addAttribute(`${next}`, "href")}>${renderComponent($$result, "Icon", $$Icon, { "class": "hover:text-blue-600 inline", "name": "heigher", "size": 40 })}</a> </section> </nav>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/pagination/SectionPaginate.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { next = 2, prev = 1, current = 1 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="my-8 m-auto text-center overflow-hidden shadow-2xs shadow-gray-200"> ${renderComponent($$result, "SectionPaginate", $$SectionPaginate, { "next": next, "prev": prev, "current": current })} </header>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/pagination/Pagination.astro", void 0);

const $$Astro = createAstro("https://example.com");
const getStaticPaths = async ({ paginate }) => {
  try {
    const dataResponse = [{ "id": 1, "name": "Box Braids Small", "description": "Este estilo elegante y vers\xE1til, Ideal para quienes buscan un peinado pr\xE1ctico, con la opci\xF3n de personalizarlo con colores y accesorios" }, { "id": 2, "name": "Box Braids Medium", "description": "Perfecto para quienes buscan un peinado pr\xE1ctico y estilizado con menos tiempo de instalaci\xF3n que las trenzas finas" }, { "id": 3, "name": "Box Braids Jumbo", "description": "Trenzas gruesas y voluminosas, ideales para un look audaz y llamativo" }, { "id": 4, "name": "Boho Braids Small", "description": "Trenzas finas con un toque bohemio, ideales para un look relajado y desenfadado con acabado natural y estilizado" }, { "id": 5, "name": "Boho Braids Medium", "description": "Trenzas medianas que irradian un aire bohemio y fresco, perfectas para un look relajado y \xFAnico" }, { "id": 6, "name": "Boho Braids Jumbo", "description": "Un look bohemio excelente con trenzas gruesas que capturan todas las miradas con su estilo audaz y natural" }, { "id": 7, "name": "Box Braids 2", "description": "Trenzas bien definidas y de grosor medio, ofreciendo un estilo limpio, elegante y f\xE1cil de mantener. Ideal para un look duradero con un toque moderno" }, { "id": 8, "name": "Box Braids 4", "description": "Trenzas gruesas y llamativas, perfectas para un look audaz y lleno de volumen, Es r\xE1pido de hacer y destaca por su durabilidad y versatilidad" }, { "id": 9, "name": "Box Braids 6", "description": "Trenzas ultra gruesas que ofrecen un estilo impactante y lleno de personalidad" }, { "id": 10, "name": "Box Braids 8 o 10", "description": "Trenzas voluminosas que aportan un estilo potente y lleno de personalidad, ideales para un look fuerte, duradero y de gran impacto visual" }, { "id": 11, "name": "Front Braids", "description": "Trenzas delanteras que enmarcan el rostro con un estilo fresco y elegante, perfectas para un look pr\xE1ctico y chic. Ideal para quienes buscan un toque \xFAnico y moderno en su peinado" }];
    return paginate(dataResponse, { pageSize: 3 });
  } catch (error) {
    console.error("\u26A0\uFE0F Error en getStaticPaths:", error);
    return [];
  }
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { data, url } = Astro2.props.page;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "Pagination", $$Pagination, { ...url })} ${maybeRenderHead()}<section class="flex flex-row flex-wrap justify-center items-center space-y-10 space-x-10"> ${data.map((info) => renderTemplate`${renderComponent($$result2, "CardBraids", $$CardBraids, { "data": info })}`)} </section> ${renderComponent($$result2, "FooterInfo", $$FooterInfo, {})} ` })}`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/pages/v1/[page].astro", void 0);

const $$file = "C:/Users/HOME/Desktop/Astro/yare-braids/src/pages/v1/[page].astro";
const $$url = "/v1/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
