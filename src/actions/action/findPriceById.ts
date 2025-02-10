import { defineAction } from "astro:actions";
import {db, eq, Prices } from "astro:db";
import { z } from "astro:schema";

export const findPriceById = defineAction({
  accept: 'json',
  input: z.object({
   id: z.number()
  }),
 handler: async ({id}) => {
  const data =  await db.select().from(Prices).where(eq(Prices.id, id));
  return data;
 },
});