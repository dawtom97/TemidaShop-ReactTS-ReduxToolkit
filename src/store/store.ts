import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import productsReducer from './features/products/productsSlice'

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        products: productsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch