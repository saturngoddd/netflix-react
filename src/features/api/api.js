import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = "045f168f4757bfe444735140401d7ed0";
export const movieApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Movie"],
  endpoints: (builder) => ({
    getNetflixOriginals: builder.query({
      query: () => `/discover/tv?api_key=${API_KEY}&with_networks=213`,
      providesTags: ["Movie"],
    }),
  }),
});

export const { useGetNetflixOriginalsQuery } = movieApi;
