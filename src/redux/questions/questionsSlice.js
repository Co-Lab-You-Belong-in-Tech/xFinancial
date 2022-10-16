/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL =
  'https://script.google.com/macros/s/AKfycbweN_lYAyS6iOqeqMlvij5Vnvh_o71mzoO1DBQjAUiljdggPxB2KgqVbY7Xg4nKsC4/exec?action=getQuestions&goalId=';
const initialState = {
  loading: false,
  questions: [],
  error: '',
};

export const getQuestions = createAsyncThunk(
  'questions/getQuestions',
  async (id) => {
    const response = await fetch(`${URL}${id}`);
    const data = response.json();
    return data;
  },
);

const questionSlice = createSlice({
  name: 'question',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
        state.error = '';
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default questionSlice.reducer;
