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
    ForgetPassword: (state) => {
      state.auth = "forgetPassword";
    },
    LogoutAuth : (state) => {
      state.auth = null;
    }
  },
});

export const { LoginAuth, RegisterAuth, LogoutAuth, ForgetPassword } = AuthSlice.actions;
export default AuthSlice.reducer;