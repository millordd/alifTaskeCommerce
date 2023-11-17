import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      const alreadyAdded = state.products.find((x) => x.id === payload.id);
      if (alreadyAdded) {
        const updatedProduct = {
          ...payload,
          total: +payload.price * +payload.quantity,
        };

        state.products = state.products.map((x) => {
          if (x.id === alreadyAdded.id) {
            return updatedProduct;
          }
          return x;
        });

        state.products = updatedStore;
        return;
      }
      state.products = [
        ...state.products,
        {
          ...payload,
          quantity: 1,
          total: payload.price,
        },
      ];
    },
    removeProduct(state, action) {
      state.products = state.products.filter(({ id }) => action.payload !== id);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
