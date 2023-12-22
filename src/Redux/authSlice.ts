import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuth: false },
  reducers: {
    setAuth(state, { payload }: { payload: boolean }) {
      state.isAuth = payload;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
