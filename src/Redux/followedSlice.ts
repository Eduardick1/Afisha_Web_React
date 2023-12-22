import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";
import axios from "axios";
import { IState, IPlace } from "../utils/TYPES";

const initialState: IState & { title: "Followed" } = {
  // ids: [],
  title: "Followed",
  isLoading: false,
  isError: false,
  banners: [],
};

export const fetchFollowers = createAsyncThunk<
  IPlace[],
  void,
  { state: RootState }
>(
  "followers/fetchFollowers",
  async function (_, { rejectWithValue, getState }) {
    const { idsFollowed } = getState().localStore.IDSfollowers;
    const url = `http://localhost:3000/Events?${idsFollowed
      .map((id) => "id=" + id)
      .join("&")}`;
    try {
      if (idsFollowed.length <= 0) return [];
      const responce = await axios.get(url);
      if (responce.statusText !== "OK") {
        throw new Error("Fetching Error");
      }
      return responce.data;
    } catch (error) {
      rejectWithValue(error);
      console.log(error);
    }
  }
);

const FollowedSlice = createSlice({
  name: "followers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollowers.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      fetchFollowers.fulfilled,
      (state, { payload }: { payload: IPlace[] }) => {
        state.banners = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchFollowers.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default FollowedSlice.reducer;
