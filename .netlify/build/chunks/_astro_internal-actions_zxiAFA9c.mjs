import { g as getActionQueryString } from './shared_ClgjG3Yl.mjs';
import 'es-module-lexer';
import 'kleur/colors';
import './astro/server_Bp8y7U-m.mjs';
import 'clsx';
import 'cookie';
import 'html-escaper';
import { d as db, B as Braids, a as BraidPrices, P as Prices } from './_astro_db_BQyudGe1.mjs';
import { d as defineAction } from './server_I0L8n47T.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
import * as z from 'zod';

const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
async function handleAction(param, path, context) {
  {
    const { getAction } = await import('./server_I0L8n47T.mjs').then(n => n.b);
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
}
toActionProxy();

const findAll = defineAction({
  handler: async () => {
    const all = await db.select().from(Braids).innerJoin(BraidPrices, eq(Braids.id, BraidPrices.braidId)).innerJoin(Prices, eq(BraidPrices.priceId, Prices.id));
    return all;
  }
});
const findAllBraid = defineAction({
  handler: async () => {
    const all = await db.select().from(Braids);
    return all;
  }
});

const findBraidById = defineAction({
  accept: "json",
  input: z.object({
    id: z.number()
  }),
  handler: async ({ id }) => {
    const data = await db.select().from(Braids).where(eq(Braids.id, id));
    return data;
  }
});

const findPriceById = defineAction({
  accept: "json",
  input: z.object({
    id: z.number()
  }),
  handler: async ({ id }) => {
    const data = await db.select().from(Prices).where(eq(Prices.id, id));
    return data;
  }
});

const server = {
  findAll,
  findPriceById,
  findBraidById,
  findAllBraid
};

export { server };
