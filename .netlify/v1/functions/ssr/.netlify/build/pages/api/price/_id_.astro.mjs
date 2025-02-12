import { d as db, a as BraidPrices, P as Prices } from '../../../chunks/_astro_db_BQyudGe1.mjs';
import { eq } from 'drizzle-orm';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ params, request }) => {
  const id_client = Number(params.id);
  const data = await db.select().from(BraidPrices).innerJoin(Prices, eq(BraidPrices.priceId, Prices.id)).where(eq(BraidPrices.braidId, id_client));
  if (!data) {
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
