import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6463b2fa043c103502aa080d.mockapi.io/contacts/tweets' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    updateFollowStatus: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body: { followStatus: true },
      }),
    }),
    updateFollowersCount: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body: (data) => ({
          followersCount: data.followersCount + 1,
        }),
      }),
    }),
  }),
});

export const { useGetUsersQuery, useUpdateFollowStatusMutation, useUpdateFollowersCountMutation } =
  usersApi;