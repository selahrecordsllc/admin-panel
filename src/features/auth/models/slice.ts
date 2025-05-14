import { InitialState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  isLoggedIn: false,
  token: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    enter: (state, { payload }: PayloadAction<InitialState['token']>) => {
      state.isLoggedIn = true;
      state.token = payload;
    },
    exit: state => {
      state.isLoggedIn = false;
      state.token = '';
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
