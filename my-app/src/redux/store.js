import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './organizationSlice';
import createOrgSuccessSlice from './createOrgSuccessSlice'

export const store = configureStore({
  reducer: {
    organization: organizationReducer,
    orgSuccess: createOrgSuccessSlice,
  },
});