import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilterCategory, IPlace, IState, LIMIT_PER_PAGE } from "../utils/TYPES";
import axios from "axios";
import { setPagination, setTotalPages } from "./paginationSlice";

const initialState: IState = {
  banners: [],
  isLoading: false,
  isError: false,
};

interface ThunkProps {
  category: FilterCategory;
  Page: number;
}

export const fetchBanners = createAsyncThunk(
  "banners/fetchBanners",
  async function (
    { category, Page }: ThunkProps,
    { dispatch, rejectWithValue }
  ) {
    const url = `http://localhost:3000/Events?${
      category !== "All" ? `category=${category}&` : ""
    }_sort=date&_order=asc&_page=${Page}&_limit=${LIMIT_PER_PAGE}`;

    try {
      const responce = await axios.get(url);
      if (responce.statusText !== "OK") {
        throw new Error("Fetching Error");
      }
      let total = responce.headers["x-total-count"] as string;
      if (responce.headers["link"])
        dispatch(setPagination(responce.headers["link"]));
      dispatch(setTotalPages(Math.floor(+total / LIMIT_PER_PAGE)));
      // if (parseInt(total) >= 12) dispatch(setLimit(true));
      // if (+total >= 13) {
      //   console.log(
      //     responce.headers["link"]
      //       .split(",")
      //       .map((link: string) =>
      //         link.split(";").map((item) => item.trim().slice(1, -1))
      //       )
      //   );
      // }
      return responce.data;
    } catch (error) {
      rejectWithValue(error);
      console.error(error);
    }
  }
);

const BannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBanners.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      fetchBanners.fulfilled,
      (state, { payload }: { payload: IPlace[] }) => {
        state.banners = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchBanners.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default BannersSlice.reducer;
