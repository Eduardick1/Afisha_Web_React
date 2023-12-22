import { createSlice } from "@reduxjs/toolkit";
const initialState: { idsFollowed: string[] } = {
  idsFollowed: [],
};

const FollowedIDSSlice = createSlice({
  name: "followersIDS",
  initialState,
  reducers: {
    addFollowers(state, { payload }: { payload: string }) {
      state.idsFollowed.push(payload);
    },
    removeFollowers(state, { payload }: { payload: string }) {
      state.idsFollowed = state.idsFollowed.filter((id) => id !== payload);
    },
  },
});

export const { addFollowers, removeFollowers } = FollowedIDSSlice.actions;

export default FollowedIDSSlice.reducer;
