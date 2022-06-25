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
            ...products[0], 
            amount: 1,
            size: 'm',
            color:'#ea366b'
        }
    ],
    total: 0
        
    
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action:PayloadAction<SingleProduct>) => {
            state.items = state.items.concat(action.payload as never)
        },
        // toPay: (state) => {
        //     const money = state.items.map(item => {
        //         const amount = item.amount;
        //         const price = item.item.price;
        //         const total = amount * price;
        //         console.log(total)
        //     })
        //     console.log(money)
        // }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer