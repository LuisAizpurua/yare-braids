export interface BraidsPricesType {
    Braids:      BraidsType;
    BraidPrices: BraidPrices;
    Prices:      PricesType;
}

export interface BraidPrices {
    _id:     number;
    braidId: number;
    priceId: number;
}

export interface BraidsType {
    id:          number;
    name:        string;
    description: string | null;
}

export interface PricesType {
    id:              number;
    total:           number;
    includeMaterial: boolean;
    infoExtra:      string| null;
}