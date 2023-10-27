import { ProductProps, CartState } from "@/Props/productProps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const initialState: CartState = {
  items: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductProps>) => {
      state.items.push({ product: action.payload, quantity: 1 });
      toast.success("Item added to cart");
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
      toast.success("Item removed from cart");
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(
        (item) => item.product.id === action.payload
      );
      state.items[index].quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(
        (item) => item.product.id === action.payload
      );
      state.items[index].quantity -= 1;
    },
    setQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const index = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );
      state.items[index].quantity = action.payload.quantity;
    }
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, setQuantity } =
  cart.actions;

export default cart.reducer;
