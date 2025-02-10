import { findAll, findAllBraid } from "./action/findAll";
import { findBraidById } from "./action/findBraidById";
import { findPriceById } from "./action/findPriceById";

export const server =  {
    findAll,
    findPriceById,
    findBraidById,
    findAllBraid
}