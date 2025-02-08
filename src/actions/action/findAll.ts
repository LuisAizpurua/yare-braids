import { defineAction } from "astro:actions";
import { Braids, db } from "astro:db";

export const findAll = defineAction({
  // input: z.object({}),
  handler: async () => {
   const all = await db.select().from(Braids)
    return all;
  },
});
