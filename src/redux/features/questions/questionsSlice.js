/* eslint-disable */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import questionService from './questionsService';

const initialState = {
  questions: [],
  status: 'idle',
  error: null,
};

export const getQuestions = createAsyncThunk(
  'questions/getQuestions',
  async () => {
    const questions = await questionService.getQuestions();
    return questions;
  },
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    questionAdded: {
      reducer(state, action) {
        state.questions.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.questions = action.payload;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { questionAdded } = questionsSlice.actions;
export const selectAllQuestions = (state) => state.questions.questions;
export const getQuestionsStatus = (state) => state.questions.status;

export default questionsSlice.reducer;
