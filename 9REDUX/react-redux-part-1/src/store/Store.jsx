import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "../reducers/counterSlice";


export const Store = configureStore({
  reducer: {
    counterReducers: counterReducers,
  },
});
