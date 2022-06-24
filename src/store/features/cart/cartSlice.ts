import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '../../../db/fakeData';
import { SingleProduct } from '../../../types/SingleProduct.types';


type CartItemProps = {
   item?: SingleProduct,
   amount?:number
}

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
        addToCart: (state,action:PayloadAction<SingleProduct>) => {
            console.log(action.payload)
            const newCartItem: CartItemProps= {
                item: action.payload,
                amount:1,
            }
            state.items = state.items.concat(newCartItem as never)
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer