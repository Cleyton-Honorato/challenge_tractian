import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setGrid } from "../redux/AssetsGrid/AssetsGrid.slice";

import {
  GetCompaniesResponse,
  GetAssetsDetailsResponse,
  GetUnitsResponse,
  GetWorkordersResponse,
  GetUsersResponse
} from "./types";
import { setUsers } from "../redux/Users/Users.slice";

const URL = "https://my-json-server.typicode.com/tractian/fake-api/";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getCompanies: builder.query<GetCompaniesResponse, void>({
      query: () => ({
        url: "companies",
        params: {},
      }),
    }),

    getUsers: builder.query<GetUsersResponse, void>({
      query: () => ({
        url: "users",
        params: {},
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        dispatch(setUsers(data));
      },
    }),

    getAssets: builder.query<GetAssetsDetailsResponse[], void>({
      query: () => ({
        url: "assets",
        params: {},
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        dispatch(setGrid(data));
      },
    }),

    getAssetsDetails: builder.query<
      GetAssetsDetailsResponse,
      { id: string | undefined }
    >({
      query: ({ id }) => ({
        url: `assets/${id}`,
        params: {},
      }),
    }),

    getUnits: builder.query<GetUnitsResponse, void>({
      query: () => ({
        url: "units",
        params: {},
      }),
    }),

    getWorkOrders: builder.query<GetWorkordersResponse, void>({
      query: () => ({
        url: "workorders",
        params: {},
      }),
    }),
  }),
});

export const {
  useGetAssetsQuery,
  useGetAssetsDetailsQuery,
  useGetCompaniesQuery,
  useGetUnitsQuery,
  useGetWorkOrdersQuery,
  useGetUsersQuery,
} = mainApi;
