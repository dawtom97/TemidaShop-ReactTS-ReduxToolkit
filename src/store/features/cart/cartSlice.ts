import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '../../../db/fakeData';
import { SingleProduct } from '../../../types/SingleProduct.types';
import {v4 as uuidv4} from 'uuid';

const initialState = {
    items: [
        {
            ...products[0],
            amount: 1,
            size: 'm',
            color: '#ea366b',
            cartId: uuidv4()
        }
    ],
    total: 0


}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<SingleProduct>) => {
            state.items = state.items.concat(action.payload as never)
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.cartId !== action.payload)
        },
        increaseAmount: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.cartId === action.payload);
            if (item) item.amount = item.amount + 1;
        },
        decreaseAmount: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.cartId === action.payload);
            if (item) item.amount = item.amount - 1;
        },
        calculateTotals: (state) => {
            let totalToPay = 0
            state.items.map(item => {
                totalToPay += item.amount * item.price;
            });
            state.total = Number(totalToPay.toFixed(2));
        }
    }
})

export const { addToCart, increaseAmount, decreaseAmount, removeFromCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer