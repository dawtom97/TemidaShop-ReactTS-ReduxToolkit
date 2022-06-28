

export type ProductProps = {
    images: string[],
    category: string[],
    title:string,
    price:number,
    id:string,
    short: string,
    colors: string[],
    sizes: string[],
    salePrice: null | number,
    cartId?: string
}