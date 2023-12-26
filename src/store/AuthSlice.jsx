import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    auth : null,
  },
  reducers: {
    LoginAuth : (state) => {
      state.auth = "login";
    },
    RegisterAuth : (state) => {
      state.auth = "register";
    },
    LogoutAuth : (state) => {
      state.auth = null;
    }
  },
});

export const { LoginAuth, RegisterAuth, LogoutAuth } = AuthSlice.actions;
export default AuthSlice.reducer;