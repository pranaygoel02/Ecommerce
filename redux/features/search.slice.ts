import { SearchState } from "@/Props/productProps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: SearchState = {
    items: [],
    loading: false,
    queries: [],
    show: false,
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    showSearch(state) {
        state.show = true;
    },
    hideSearch(state) {
        state.show = false;
    },
    addQuery(state, action: PayloadAction<string>) {
        state.queries.push(action.payload);
    }
  },
});

export const { showSearch, hideSearch, addQuery } = search.actions;

export default search.reducer;
