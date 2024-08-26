import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

export const homeApi = createApi({
    reducerPath: 'home',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000'}),
    endpoints: (builder) => ({
        getContents: builder.query({
          query: () => `/home`,
        }),
      }),
  });
  
  export const { useGetContentsQuery } = homeApi;
