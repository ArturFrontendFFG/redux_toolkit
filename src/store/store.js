import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducers as rootReducer } from "./rootReducer";
import { api } from "./api/api";
import { createLogger } from "redux-logger";
const logger = createLogger({
  collapsed: false,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
});
