import { configureStore } from "@reduxjs/toolkit";
import shopyReducer from "./shofySlice";

export const store = configureStore({
  reducer: {
    shopy: shopyReducer,
  },
});
