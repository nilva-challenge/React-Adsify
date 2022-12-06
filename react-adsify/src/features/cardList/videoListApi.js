import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoListApi = createApi({
  reducerPath: "videoList",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://picsum.photos/v2/",
  }),
  endpoints: (builder) => ({
    videoList: builder.query({
      query: () => "/list",
    }),
  }),
});

export const { useVideoListQuery } = videoListApi;
