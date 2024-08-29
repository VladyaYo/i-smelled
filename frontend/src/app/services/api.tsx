import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
const apiKey = process.env.REACT_APP_IP_API;

export const homeApi = createApi({
    reducerPath: 'home',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000'}),
    endpoints: (builder) => ({
        getContents: builder.query({
          query: () => `/home`,
        }),
      }),
  });
///4ea7e29660cf8e997eba646d5cf5736b
export const locationApi = createApi({
    reducerPath: 'location',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.ipapi.com'}),
    endpoints: (builder) => ({
        getLocation: builder.query({
          query: () => `api/check?access_key=${apiKey}`,
        }),
      }),
  });
  export const { useGetContentsQuery } = homeApi;
  export const { useGetLocationQuery } = locationApi
