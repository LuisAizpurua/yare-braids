
export interface braidsType{
    id: number,
    name: string,
    price: prices[]
    description: string | null
}

export interface prices{
    total: number,
    includeMaterial: boolean,
    infoExtra?: string[]
}