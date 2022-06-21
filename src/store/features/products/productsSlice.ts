import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '../../../db/fakeData'

type SingleProduct = {
    id: string,
    title: string,
    short: string,
    price: number,
    salePrice: null | number,
    colors: string[],
    sizes: string[],
    images: string[]
}

export interface ProductsState {
    allItems: SingleProduct[],
    singleItem: any
}

const initialState: ProductsState = {
    allItems: products,
    singleItem: {}
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getSingleProduct: (state, action:PayloadAction<string | undefined>) => {
            state.singleItem = state.allItems.filter(product => product.id === action.payload)
            console.log(state.singleItem)
        }
    }
})

export const { getSingleProduct } = productsSlice.actions;

export default productsSlice.reducer;