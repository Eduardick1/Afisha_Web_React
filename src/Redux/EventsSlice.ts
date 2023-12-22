import { createSlice } from "@reduxjs/toolkit";
import { FilterCategory } from "../utils/TYPES";

interface Istate {
  category: FilterCategory;
  date: Date;
  Page: number;
  isLimit: boolean;
}

const initialState: Istate = {
  category: "All",
  date: new Date(),
  Page: 1,
  isLimit: false,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: { payload: FilterCategory }) {
      state.category = action.payload;
    },
    setDate(state, { payload }: { payload: Date }) {
      state.date = new Date(payload);
    },
    setPage(state, { payload }: { payload: number }) {
      state.Page = payload;
    },
  },
});

export const { setCategory, setDate, setPage } = FilterSlice.actions;

export default FilterSlice.reducer;
