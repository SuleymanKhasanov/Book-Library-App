import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    stateTitleFilter: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const setTitleFilter = filterSlice.actions.stateTitleFilter;

export const selectTitleFilter = (state) => state.filter.title;

export default filterSlice.reducer;
