import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './organizationSlice';

export const store = configureStore({
  reducer: {
    organization: organizationReducer,
  },
});