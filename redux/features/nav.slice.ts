import { NavState } from "@/Props/productProps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: NavState = {
    items: [],
};

export const navState = createSlice({
  name: "nav_state",
  initialState,
  reducers: {
    push(state, action: PayloadAction<string>) {
        state.items.push(action.payload);
    },
    pop: (state) => {
        state.items.pop();
    },
    removeAll: (state) => {
        state.items = [];
    },
  },
});

export const { push, pop, removeAll } = navState.actions;

export default navState.reducer;
