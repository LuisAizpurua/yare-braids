import { column, defineDb, defineTable } from 'astro:db';

const Braids = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    price: column.json(),
    description: column.text({optional: true})
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Braids
  }
});
