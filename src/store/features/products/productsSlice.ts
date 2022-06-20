import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../db/fakeData'

type SingleProduct = {
    id: number,
    name: string,
    short: string,
    price: number,
    salePrice: null | number,
    colors: string[],
    sizes: string[],
    images: string[]
}

export interface ProductsState {
    products: SingleProduct[]
}

const initialState: ProductsState = {
    products: products
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{}
})

export default productsSlice.reducer;