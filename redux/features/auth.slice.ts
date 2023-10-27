import { AuthState } from "@/Props/productProps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: AuthState = {
  user: null,
  loading: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserRequest: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.user = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { getUserRequest, getUserSuccess, setUser } = auth.actions;

export default auth.reducer;
