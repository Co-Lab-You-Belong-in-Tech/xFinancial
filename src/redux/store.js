import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './goals/goalsSlice';
import questionsReducer from './features/questions/questionsSlice';

const store = configureStore({
  reducer: {
    goal: goalReducer,
    questions: questionsReducer,
  },
});

export default store;
