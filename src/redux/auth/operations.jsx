import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6463b2fa043c103502aa080d.mockapi.io' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 1) => `/tweets?page=${page}`,
    }),
    toggleFollow: builder.mutation({
      query: ({ userId, followStatus }) => ({
        url: `/tweets/${userId}`,
        method: 'PUT',
        body: { followStatus },
        async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            usersApi.util.updateQueryData('getPost', id, (draft) => {
              Object.assign(draft, patch);
            })
          );
          try {
            await queryFulfilled();
          } catch {
            patchResult.undo();
          }
        },
      }),
    }),
    
    updateFollowersCount: builder.mutation({
      query: (userId, increment) => ({
        url: `/tweets/${userId}`,
        method: 'PATCH',
        body: { increment },
      }),
    }),
    updateFollowStatus: builder.mutation({
      query: (userId, followStatus) => ({
        url: `/tweets/${userId}`,
        method: 'PATCH',
        body: { followStatus },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useToggleFollowMutation,
  useUpdateFollowersCountMutation,
  useUpdateFollowStatusMutation,
} = usersApi;



// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://6463b2fa043c103502aa080d.mockapi.io';

// export const fetchContact = createAsyncThunk(
//   'tweets/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/tweets');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addTweets = createAsyncThunk(
//   'tweets/addTweets',
//   async ({ user, tweets, followers, avatar }, thunkAPI) => {
//     try {
//       const response = await axios.post('/tweets', { user, tweets, followers, avatar });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteTweets = createAsyncThunk(
//   'tweets/deleteTweets',
//   async (userId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tweets/${userId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );




