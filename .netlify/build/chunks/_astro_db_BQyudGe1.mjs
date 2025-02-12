import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://braids-info-luisaizpurua.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN
});
const Braids = asDrizzleTable("Braids", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Braids", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Braids", "primaryKey": false, "optional": false } }, "description": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "description", "collection": "Braids", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Prices = asDrizzleTable("Prices", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Prices", "primaryKey": true } }, "total": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "total", "collection": "Prices", "primaryKey": false, "optional": false } }, "includeMaterial": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "includeMaterial", "collection": "Prices" } }, "infoExtra": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "infoExtra", "collection": "Prices", "primaryKey": false, "optional": true } } }, "deprecated": false, "indexes": {} }, false);
const BraidPrices = asDrizzleTable("BraidPrices", { "columns": { "braidId": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "braidId", "collection": "BraidPrices", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Braids", "primaryKey": true } } } }, "priceId": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "priceId", "collection": "BraidPrices", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Prices", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);

export { Braids as B, Prices as P, BraidPrices as a, db as d };
