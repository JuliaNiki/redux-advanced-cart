import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantityItems: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantityItems++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.qty++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantityItems--;
      if (existingItem.qty === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.qty--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});
