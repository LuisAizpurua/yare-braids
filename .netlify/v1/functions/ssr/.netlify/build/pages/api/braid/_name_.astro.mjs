import { d as db, B as Braids } from '../../../chunks/_astro_db_BQyudGe1.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ params, request }) => {
  const nameParam = params.name?.toLowerCase();
  const response = await db.select().from(Braids);
  const dataResult = response.filter(({ name }) => name.toLowerCase() === nameParam).map((data) => data);
  if (!dataResult) {
    return new Response(
      JSON.stringify({ "msg": "data not found" }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  return new Response(
    JSON.stringify(dataResult[0]),
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
