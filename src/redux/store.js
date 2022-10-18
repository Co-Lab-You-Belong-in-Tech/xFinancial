import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import goalReducer from './features/goals/goalsSlice';
import questionsReducer from './features/questions/questionsSlice';

// const logger = ReduxLoggerOptions.createLogger();

const store = configureStore({
  reducer: {
    goal: goalReducer,
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
