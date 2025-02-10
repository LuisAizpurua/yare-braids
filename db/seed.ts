import { db, Braids } from 'astro:db';
import type { braidsType } from '../src/interface/braids.interface';
import data from "../src/data/braids.data.json";
import type { BraidsType } from 'src/interface/braidsPrices.interface';

export default async function seed() {
	//  const allBraids: BraidsType = data;
	//  await db.insert(Braids).values(allBraids);
}
