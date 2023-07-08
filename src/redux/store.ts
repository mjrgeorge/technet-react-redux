import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import cartProduct from './features/product/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: cartProduct,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
