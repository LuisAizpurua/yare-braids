
export interface BraidsType {
    id:          number;
    name:        string;
    prices: PricesType[];
    description: string;
}

export interface PricesType {
    total:           number;
    includeMaterial: boolean;
    infoExtra:      string| null;
}