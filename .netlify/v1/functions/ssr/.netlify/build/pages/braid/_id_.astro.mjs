import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent } from '../../chunks/astro/server_Bp8y7U-m.mjs';
import 'kleur/colors';
import 'clsx';
import { i as icons, $ as $$TypeIcon } from '../../chunks/TypeIcon_Ca19XoqP.mjs';
import { $ as $$Layout } from '../../chunks/Layout_VOi-RDNo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://yare-braid.netlify.app");
const $$IndexStatic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IndexStatic;
  const baseUrl = "https://yare-braid.netlify.app";
  const hrefWa = "https://wa.me/50766533136";
  const { data } = Astro2.props;
  const { id, name, description } = data;
  const base = "https://yare-braid.netlify.app";
  const pricesBraid = await (await fetch(`${base}/api/price/${id}`)).json();
  return renderTemplate`${maybeRenderHead()}<div class="flex m-auto flex-col justify-center items-center w-fit"> <div class="max-w-sm w-full m-auto rounded-2xl my-15 overflow-hidden shadow-lg "> <img${addAttribute("w-full h-64", "class")}${addAttribute(10, "width")}${addAttribute(10, "height")}${addAttribute(`/braids/braid-${id}.jpeg`, "src")}${addAttribute(name, "alt")}> <div class="px-6 py-4"> <div class="font-bold text-xl mb-2">${name}</div> <p class="text-gray-700 text-base"> ${description} </p> </div> <div class="px-6 pt-4 pb-2"> ${pricesBraid.map(({ Prices }) => renderTemplate`<span class="inline-block bg-gray-500 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2"> <a class="hover:cursor-pointer"${addAttribute(hrefWa + `?text=${baseUrl}/braid/${id}`, "href")}>$ ${Prices.total}</a> </span>`)} </div> </div> </div>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/page-static/IndexStatic.astro", void 0);

const $$NavStatic = createComponent(($$result, $$props, $$slots) => {
  const iconNames = icons.filter((i) => !i.name.includes("info"));
  return renderTemplate`${maybeRenderHead()}<header class="w-56 m-auto text-center overflow-hidden"> <label class="font-semibold">Contactanos: </label> <nav class="w-full m-auto text-center flex flex-wrap flex-row justify-center items-center"> <section class="w-full m-3 flex flex-nowrap flex-row justify-center items-center"> ${renderComponent($$result, "TypeIcon", $$TypeIcon, { "iconNames": iconNames })} </section> <section class="flex-1"></section> <section class="w-full text-center"> <button class="animation-pulse font-bold text-gray-700 shadow-2xs shadow-gray-700 hover:opacity-10 p-3 rounded-2xl bg-blue-500" onclick="history.back()">Regresar</button> </section> </nav> </header>`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/components/page-static/NavStatic.astro", void 0);

const $$Astro = createAstro("https://yare-braid.netlify.app");
const getStaticPaths = async () => {
  try {
    const dataResponse = [{ "id": 1, "name": "Box Braids Small", "description": "Este estilo elegante y vers\xE1til, Ideal para quienes buscan un peinado pr\xE1ctico, con la opci\xF3n de personalizarlo con colores y accesorios" }, { "id": 2, "name": "Box Braids Medium", "description": "Perfecto para quienes buscan un peinado pr\xE1ctico y estilizado con menos tiempo de instalaci\xF3n que las trenzas finas" }, { "id": 3, "name": "Box Braids Jumbo", "description": "Trenzas gruesas y voluminosas, ideales para un look audaz y llamativo" }, { "id": 4, "name": "Boho Braids Small", "description": "Trenzas finas con un toque bohemio, ideales para un look relajado y desenfadado con acabado natural y estilizado" }, { "id": 5, "name": "Boho Braids Medium", "description": "Trenzas medianas que irradian un aire bohemio y fresco, perfectas para un look relajado y \xFAnico" }, { "id": 6, "name": "Boho Braids Jumbo", "description": "Un look bohemio excelente con trenzas gruesas que capturan todas las miradas con su estilo audaz y natural" }, { "id": 7, "name": "Box Braids 2", "description": "Trenzas bien definidas y de grosor medio, ofreciendo un estilo limpio, elegante y f\xE1cil de mantener. Ideal para un look duradero con un toque moderno" }, { "id": 8, "name": "Box Braids 4", "description": "Trenzas gruesas y llamativas, perfectas para un look audaz y lleno de volumen, Es r\xE1pido de hacer y destaca por su durabilidad y versatilidad" }, { "id": 9, "name": "Box Braids 6", "description": "Trenzas ultra gruesas que ofrecen un estilo impactante y lleno de personalidad" }, { "id": 10, "name": "Box Braids 8 o 10", "description": "Trenzas voluminosas que aportan un estilo potente y lleno de personalidad, ideales para un look fuerte, duradero y de gran impacto visual" }, { "id": 11, "name": "Front Braids", "description": "Trenzas delanteras que enmarcan el rostro con un estilo fresco y elegante, perfectas para un look pr\xE1ctico y chic. Ideal para quienes buscan un toque \xFAnico y moderno en su peinado" }];
    return dataResponse.map((item) => ({
      params: { id: item.id.toString() },
      props: { data: item }
    }));
  } catch (error) {
    console.error("\u26A0\uFE0F Error en getStaticPaths:", error);
    return [];
  }
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "id": id, "data": data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IndexStatic", $$IndexStatic, { "data": data })} ${renderComponent($$result2, "NavStatic", $$NavStatic, { "name": data.name })} ` })}`;
}, "C:/Users/HOME/Desktop/Astro/yare-braids/src/pages/braid/[id].astro", void 0);

const $$file = "C:/Users/HOME/Desktop/Astro/yare-braids/src/pages/braid/[id].astro";
const $$url = "/braid/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
