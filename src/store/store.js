import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/products-reducer';
import cartReducer from './cart/cart-reducer';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
