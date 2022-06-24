export type SingleProduct = {
    id: string,
    title: string,
    short: string,
    price: number,
    salePrice: null | number,
    colors: string[],
    sizes: string[],
    images: string[],
    category:string[]
}