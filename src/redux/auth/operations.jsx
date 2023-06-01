import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6463b2fa043c103502aa080d.mockapi.io' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/tweets',
    }),
    updateFollowStatus: builder.mutation({
      query: (userId) => ({
        url: `/tweets/${userId}`, 
        method: 'PUT',
        body: { followStatus: true },
      }),
    }),
    updateFollowersCount: builder.mutation({
      query: (userId) => ({
        url: `/tweets/${userId}`, 
        method: 'PUT',
        body: (data) => ({
          followersCount: data.user.followersCount + 1, 
        }),
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateFollowStatusMutation,
  useUpdateFollowersCountMutation,
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




