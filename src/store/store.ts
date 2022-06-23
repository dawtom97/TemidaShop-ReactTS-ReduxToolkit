import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch