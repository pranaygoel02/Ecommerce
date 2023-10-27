"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
