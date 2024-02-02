import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    stateTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
  },
});

export const { stateTitleFilter, resetFilters, setAuthorFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
