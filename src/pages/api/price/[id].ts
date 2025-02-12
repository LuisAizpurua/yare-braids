import type { APIRoute } from "astro";
import { BraidPrices, Braids, db, Prices } from "astro:db";
import { eq } from "drizzle-orm";

export const GET: APIRoute = async ({params, request})=>{
    const id_client = Number(params.id);
    const data = await db.select().from(BraidPrices)
    .innerJoin(Prices, eq(BraidPrices.priceId, Prices.id))
    .where(eq(BraidPrices.braidId,id_client))

    if(!data){
        return new Response(
            JSON.stringify({"msg":"data not found"}),
            {
                status: 404,
                headers: {
                  'Content-Type': 'application/json',
            }
        })}

    return new Response(
        JSON.stringify(data),
        {
            status: 201,
            headers: {
              'Content-Type': 'application/json',
        }
    }
    )
}