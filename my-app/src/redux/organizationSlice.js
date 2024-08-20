// src/redux/organizationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const organizationSlice = createSlice({
  name: 'organization',
  initialState: {
    name: '',
    description: '',
  },
  reducers: {
    setOrganization: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { setOrganization, setDescription } = organizationSlice.actions;
export default organizationSlice.reducer;
