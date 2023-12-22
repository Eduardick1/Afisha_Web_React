import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPlace, IsingleState } from "../utils/TYPES";
import axios from "axios";

const initialState: IsingleState = {
  banner: null,
  isLoading: false,
  isError: false,
};

export const fetchSingleBanner = createAsyncThunk(
  "single/fetchSingle",
  async function ({ id }: Pick<IPlace, "id">, { rejectWithValue }) {
    try {
      const responce = await axios.get(`http://localhost:3000/Events?id=${id}`);
      if (responce.statusText !== "OK") {
        throw new Error("Fetching Error");
      }
      return responce.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const SingleSlice = createSlice({
  name: "singleBanner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleBanner.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      fetchSingleBanner.fulfilled,
      (state, { payload }: { payload: IPlace[] }) => {
        state.banner = payload[0];
        state.isLoading = false;
      }
    );
    builder.addCase(fetchSingleBanner.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default SingleSlice.reducer;
