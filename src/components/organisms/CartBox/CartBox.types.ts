

export type CartItemsProps = {
    items:{
        id: string,
        title: string,
        short: string,
        price: number,
        salePrice: null | number,
        colors: string[],
        sizes: string[],
        images: string[],
        category: string[],
        size: string,
        color:string,
        amount:number,
        cartId:string
    }[],
 
}
