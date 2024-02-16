import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    // Endpoint pour récupérer tous les produits
    getProducts: builder.query({
      query: () => '/products',
    }),
    // Endpoint pour récupérer les commentaires d'un produit spécifique
    getProductComments: builder.query({
      query: (productId) => `/products/${productId}/comments`,
    }),
    // Endpoint pour créer un commentaire sur un produit spécifique
    createProductComment: builder.mutation({
      query: (data) => ({
        url: `/products/${data.productId}/comments`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

// Export des hooks pour utiliser les endpoints dans les composants React
export const {
  useGetProductsQuery,
  useGetProductCommentsQuery,
  useCreateProductCommentMutation,
} = productsApi;
