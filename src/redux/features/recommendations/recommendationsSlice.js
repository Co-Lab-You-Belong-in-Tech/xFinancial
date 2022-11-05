/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://script.google.com/macros/s/AKfycbweN_lYAyS6iOqeqMlvij5Vnvh_o71mzoO1DBQjAUiljdggPxB2KgqVbY7Xg4nKsC4/exec?action=getRecommendations';

const initialState = {
  loading: false,
  recommendations: [],
  error: '',
};

export const getRecommendations = createAsyncThunk(
  'recommendations/getRecommendations',
  async () => {
    const response = await fetch(URL);
    const data = response.json();
    return data;
  },
);

const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getRecommendations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendations = action.payload;
        state.error = '';
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recommendationsSlice.reducer;
