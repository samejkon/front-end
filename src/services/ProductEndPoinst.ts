import { createApi } from '@reduxjs/toolkit/query/react'
import { baseApiConfig } from '@/api/baseApiConfig';

const emptySplitApi = createApi({
    reducerPath: 'productApi',
    ...baseApiConfig
  });
const apiWithTag = emptySplitApi.enhanceEndpoints({addTagTypes: ['Product']});
export const CartsApi = apiWithTag.injectEndpoints({
  
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => 'cart',
      providesTags: (result) =>
      result
        ? [
            ...result.data.map(({ id } : {id : number | string}) => ({ type: 'Product' as const, id })),
            { type: 'Product', id: 'LIST' },
          ]
        : [{ type: 'Product', id: 'LIST' }],
    }),
    addToCart: builder.mutation({
      query: (payload) => ({
        url: 'cart/add',
        method: 'POST',
        body: payload,
      
      }),
      invalidatesTags: [{ type: 'Carts', id: 'LIST' }],
    }),
    updateCart: builder.mutation({
      query: (payload) => ({
        url: `cart/${payload.id}`,
        method: 'PUT',
        body: {quantity : payload.quantity},
      }),
      invalidatesTags: (id) => [{ type: 'Carts', id },  { type: 'Carts', id: 'LIST' }],
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Carts', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetCartsQuery,
  useAddToCartMutation,
  useDeleteCartMutation,
  useUpdateCartMutation,
  useLazyGetCartsQuery,
  usePrefetch
} = CartsApi;