import { ProductProps, WishlistState } from "@/Props/productProps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: WishlistState = {
  items: [],
};

export const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductProps>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } =
  wishlist.actions;

export default wishlist.reducer;
