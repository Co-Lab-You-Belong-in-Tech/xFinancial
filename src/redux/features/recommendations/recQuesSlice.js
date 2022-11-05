/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://script.google.com/macros/s/AKfycbweN_lYAyS6iOqeqMlvij5Vnvh_o71mzoO1DBQjAUiljdggPxB2KgqVbY7Xg4nKsC4/exec?action=getRecQues';

const initialState = {
  loading: false,
  recQues: [],
  error: '',
};

export const getRecQues = createAsyncThunk(
  'recQues/getRecQues',
  async () => {
    const response = await fetch(URL);
    const data = response.json();
    return data;
  },
);

const recQuesSlice = createSlice({
  name: 'recQues',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getRecQues.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecQues.fulfilled, (state, action) => {
        state.loading = false;
        state.recQues = action.payload;
        state.error = '';
      })
      .addCase(getRecQues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recQuesSlice.reducer;
