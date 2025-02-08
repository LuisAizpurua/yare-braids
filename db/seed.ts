import { db, Braids } from 'astro:db';
import type { braidsType } from '../src/interface/braids.interface';
import data from "../src/data/braids.data.json";

export default async function seed() {
	 const allBraids: braidsType[] = data;
	 await db.insert(Braids).values(allBraids);
}
