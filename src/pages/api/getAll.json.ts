import type { APIRoute } from "astro";
import { Braids, db } from "astro:db";

export const prerender = false

export const GET: APIRoute = async ({params, request})=>{
    const data = await db.select().from(Braids)

    if(!data){
        return  new Response(
            JSON.stringify({msg:'Not found data'}),
            {
                status: 404,
                headers: {
                  'Content-Type': 'application/json',
            }
        })
    }


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