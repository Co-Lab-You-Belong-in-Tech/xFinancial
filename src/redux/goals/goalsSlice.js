/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL =
  'https://script.google.com/macros/s/AKfycbweN_lYAyS6iOqeqMlvij5Vnvh_o71mzoO1DBQjAUiljdggPxB2KgqVbY7Xg4nKsC4/exec?action=getGoals';
const initialState = {
  loading: false,
  goals: [],
  error: '',
};

export const getGoals = createAsyncThunk('goals/getGoals', async () => {
  const response = await fetch(URL);
  const data = response.json();
  return data;
});

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getGoals.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.loading = false;
        state.goals = action.payload;
        state.error = '';
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default goalSlice.reducer;
