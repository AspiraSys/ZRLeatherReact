import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Reducers/filterSlice";
import productReducer from "./Reducers/productSlice"; 

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    products: productReducer,
  },
});
