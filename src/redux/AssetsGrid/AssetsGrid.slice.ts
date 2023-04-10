import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitialState, Data } from "./types";

export const initialState: InitialState = {
  data: [],
};

const AssetsGrid = createSlice({
  name: "AssetsGrid",
  initialState,
  reducers: {
    setGrid: (state, { payload }: PayloadAction<Data[]>) => {
      state.data = payload;
    },
  },
});

export const { setGrid } = AssetsGrid.actions;

export {};

export default AssetsGrid.reducer;
