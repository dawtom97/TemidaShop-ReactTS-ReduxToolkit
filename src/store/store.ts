import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import modalReducer from './features/modal/modalSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        modal: modalReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch