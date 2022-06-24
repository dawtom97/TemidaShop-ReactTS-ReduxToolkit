import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../db/fakeData';


const initialState = {
    items: [
        {
            item: products[0],
            amount: 1
        }
    ]
        
    
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) => {
            const newCartItem = {
                item: products[action.payload],
                amount:1,
            }
           state.items = state.items.concat(newCartItem)
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer