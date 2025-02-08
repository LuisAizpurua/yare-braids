import type { APIRoute } from "astro";
import { Braids, db } from "astro:db";

export const GET: APIRoute = async ({params, request})=>{
    const data = await db.select().from(Braids);

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