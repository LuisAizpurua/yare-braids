import { defineAction } from "astro:actions";
import { BraidPrices, Braids, db, eq, Prices } from "astro:db";


export const findAll = defineAction({
  handler: async () => {
   const all = await db.select().from(Braids)
          .innerJoin(BraidPrices, eq(Braids.id, BraidPrices.braidId))
          .innerJoin(Prices, eq(BraidPrices.priceId, Prices.id))
    return all;
  },
});

export const findAllBraid = defineAction({
  handler: async () => {
   const all = await db.select().from(Braids)
   return all;
  },
});
