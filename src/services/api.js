// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  tagTypes: ['products'],
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https:/iim.etherial.fr' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getProductComments: builder.query({
      query: (productId) => `/products/${productId}/comments`,
    }),
    createProductComment: builder.mutation({
        query: (data) => ({
            url: `/products/${data.productId}/comments`,
            method: 'POST',
            body: data,
        }),
        invalidatesTags: ['products'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery ,useGetProductCommentsQuery, useCreateProductCommentMutation } = productApi