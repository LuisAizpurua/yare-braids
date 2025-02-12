import { d as db, B as Braids } from '../../chunks/_astro_db_BQyudGe1.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ params, request }) => {
  const data = await db.select().from(Braids);
  if (!data) {
    return new Response(
      JSON.stringify({ msg: "Not found data" }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  return new Response(
    JSON.stringify(data),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
