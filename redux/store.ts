import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import cartReducer from "./features/cart.slice";
import wishlistReducer from "./features/wishlist.slice";
import authReducer from './features/auth.slice'
import searchReducer from './features/search.slice'
import navStackReducer from './features/nav.slice'

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["search", "nav_stack"],
};

const searchPersistConfig = {
    key: 'search',
    storage: storage,
    blacklist: ['show']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    nav_stack: navStackReducer,
    search: persistReducer(searchPersistConfig, searchReducer)
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
