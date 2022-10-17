import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './goals/goalsSlice';
import questionReducer from './questions/questionsSlice';

const store = configureStore({
  reducer: { goal: goalReducer, question: questionReducer },
});
export default store;
