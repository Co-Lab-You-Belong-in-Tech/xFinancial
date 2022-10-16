import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './goals/goalsSlice';

const store = configureStore({
  reducer: { goal: goalReducer },
});

export default store;
