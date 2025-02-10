import { defineAction } from "astro:actions";
import { Braids, db, eq } from "astro:db";
import { z } from "astro:schema";

export const findBraidById = defineAction({
   accept: 'json',
   input: z.object({
    id: z.number()
   }),
  handler: async ({id}) => {
   const data =  await db.select().from(Braids).where(eq(Braids.id, id));
   return data;
  },
});