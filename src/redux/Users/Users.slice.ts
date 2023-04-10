import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "../../api/types";

import { InitialState } from "./types";

export const initialState: InitialState = {
  users: [],
};

const Users = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUsers: (state, { payload }: PayloadAction<Users[]>) => {
      state.users = payload;
    },
  },
});

export const { setUsers } = Users.actions;

export {};

export default Users.reducer;
