import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '../../../db/fakeData'
import { SingleProduct } from '../../../types/SingleProduct.types';

export interface ProductsState {
    allItems: SingleProduct[],
    singleItem: unknown,
    likedItems: SingleProduct[],
    similarProducts: SingleProduct[]
}

const initialState: ProductsState = {
    allItems: products,
    singleItem: {},
    likedItems: [products[1]],
    similarProducts: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getSingleProduct: (state, action:PayloadAction<string | undefined>) => {
            state.singleItem = state.allItems.filter(product => product.id === action.payload)
        },
        addToLiked: (state,action:PayloadAction<SingleProduct> ) => {          
           state.likedItems = state.likedItems.concat(action.payload);
        },
        removeFromLiked: (state,action:PayloadAction<string>) => {
            state.likedItems = state.likedItems.filter(item => item.id !== action.payload)
        },
        getSimilarProducts: (state,action:PayloadAction<string[]>) => {
            state.similarProducts = state.allItems.filter(product => product.category === action.payload)
        }
    }
})

export const { getSingleProduct,addToLiked,removeFromLiked,getSimilarProducts } = productsSlice.actions;

export default productsSlice.reducer;