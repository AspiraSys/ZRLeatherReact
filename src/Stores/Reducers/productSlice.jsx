import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Yeh initial products ka empty array hai
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // Payload se products update honge
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
