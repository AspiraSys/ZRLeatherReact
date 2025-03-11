import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  highlight: "All",
  availability: "All",
  style: "All",
  categories: "All",
  priceRange: [0, 5000],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setHighlight: (state, action) => {
      state.highlight = action.payload;
    },
    setAvailability: (state, action) => {
      state.availability = action.payload;
    },
    setStyle: (state, action) => {
      state.style = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setHighlight, setAvailability, setStyle, setCategories, setPriceRange } =
  filterSlice.actions;
export default filterSlice.reducer;
