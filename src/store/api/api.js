import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (searchQuery) => `/recipe?_sort=id&_order=desc&q=${searchQuery}`,
      providesTags: (result,error,id) => [
        {
          type: "Recipe",
          id: id
        },
      ],
    }),
  }),
});

export const { useGetRecipesQuery } = api;

