// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/slices/productSlice.js";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;