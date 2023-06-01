import { createSlice } from '@reduxjs/toolkit';

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: { tweets: [] },
  reducers: {
    addTweet: (state, action) => {
      state.push(action.payload);
    },
    },
});

export const { addTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;