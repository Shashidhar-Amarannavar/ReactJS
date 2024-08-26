import { createSlice } from '@reduxjs/toolkit';

const createOrgSuccessSlice = createSlice({
    name: 'orgSuccess',
    initialState: {
        success: false
    },
    reducers: {
        setSuccess: (state, action) => {
            state.success = action.payload
        }
    }
});

export const { setSuccess } = createOrgSuccessSlice.actions;
export default createOrgSuccessSlice.reducer;