import { configureStore } from "@reduxjs/toolkit";

// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
// import counterReducer from "../features/counter/counterSlice";

import { api } from "../services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
