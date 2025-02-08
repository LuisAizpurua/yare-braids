import { defineAction } from "astro:actions";
import { Braids, db, eq } from "astro:db";
import { z } from "astro:schema";
import type { braidsType } from "src/interface/braids.interface";

export const findById = defineAction({
   accept: 'json',
   input: z.object({
    id: z.number()
   }),
  handler: async ({id}) => {
   const data = await db.select().from(Braids).where(d=> eq(d.id, id))
    return data;
  },
});