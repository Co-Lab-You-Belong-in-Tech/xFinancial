import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import goalReducer from './features/goals/goalsSlice';
import questionsReducer from './features/questions/questionsSlice';
import recommendationsReducer from './features/recommendations/recommendationsSlice';
import recQuesReducer from './features/recommendations/recQuesSlice';

const store = configureStore({
  reducer: {
    goal: goalReducer,
    questions: questionsReducer,
    recommendations: recommendationsReducer,
    recQues: recQuesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
