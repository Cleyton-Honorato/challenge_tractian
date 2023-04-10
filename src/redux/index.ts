import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { mainApi } from "../api/main.api";
import AssetsGridSlice from "./AssetsGrid/AssetsGrid.slice";
import UsersSlice from "./Users/Users.slice";

export const appReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
  assetsGrid: AssetsGridSlice,
  usersList: UsersSlice,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(mainApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
