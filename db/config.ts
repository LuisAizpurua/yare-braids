import { column, defineDb, defineTable } from 'astro:db';

const Braids = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text()
  }
});

const Prices = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    total: column.number(),
    includeMaterial: column.boolean(),
    infoExtra: column.text({ optional: true })
  }
});

const BraidPrices = defineTable({
  columns: {
    braidId: column.number({ references: () => Braids.columns.id }),
    priceId: column.number({ references: () => Prices.columns.id })
  }
});


// https://astro.build/db/config
export default defineDb({
  tables: {
    Braids,
    Prices,
    BraidPrices
  }
});
