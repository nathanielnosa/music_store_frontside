import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false; // Reset error flag
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
      state.error = false; // Reset error flag
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
});

export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
