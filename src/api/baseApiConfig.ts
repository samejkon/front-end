import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseApiConfig = {
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://datn-backend-production-abfd.up.railway.app/api',
    prepareHeaders: (headers, { getState }) => {
      // Use getState to access your redux store
      //const token = getState().auth.token;

      //console.log('token will prepare in here')
      headers.set('authorization', `Bearer ${localStorage.getItem('access_token')}`)

      return headers
    }
  }),

  endpoints: () => ({})
}
