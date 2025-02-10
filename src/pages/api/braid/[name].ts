import type { APIRoute } from "astro";
import { BraidPrices, Braids, db, Prices } from "astro:db";
import { eq } from "drizzle-orm";


export const GET: APIRoute = async ({params, request})=>{
    const nameParam = params.name?.toLowerCase();
    const response = await db.select().from(Braids)

   const dataResult = response.filter(({name})=> name.toLowerCase() === nameParam).map((data)=> data);

    if(!dataResult){
        return new Response(
            JSON.stringify({"msg":"data not found"}),
            {
                status: 404,
                headers: {
                  'Content-Type': 'application/json',
            }
        })}

    return new Response(
        JSON.stringify(dataResult[0]),
        {
            status: 201,
            headers: {
              'Content-Type': 'application/json',
        }
    }
    )
}