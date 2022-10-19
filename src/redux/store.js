import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import goalReducer from './features/goals/goalsSlice';
import questionsReducer from './features/questions/questionsSlice';
import recommendationsReducer from './features/recommendations/recommendationsSlice';

const store = configureStore({
  reducer: {
    goal: goalReducer,
    questions: questionsReducer,
    recommendations: recommendationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
