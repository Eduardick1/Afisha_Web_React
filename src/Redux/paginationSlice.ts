import { createSlice } from "@reduxjs/toolkit";
import { initial } from "lodash";
type linkRel = "first" | "prev" | "next" | "last";

interface IPageLink {
  link: string;
  rel: linkRel;
}

interface IPagesState {
  links: IPageLink[];
  total: number;
}

const initialState: IPagesState = {
  links: [],
  total: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination(state, { payload }: { payload: string }) {
      state.links = payload.split(",").map((datalink) =>
        datalink.split(";").reduce((acc, val, index) => {
          if (index === 0) {
            acc["link"] = val.trim().slice(1, -1);
          }
          if (index === 1) {
            acc["rel"] = val.trim().slice(5, -1) as linkRel;
          }
          return acc;
        }, {} as IPageLink)
      );
    },
    setTotalPages(state, { payload }: { payload: number }) {
      state.total = payload;
    },
  },
});

export const { setPagination, setTotalPages } = paginationSlice.actions;

export default paginationSlice.reducer;
