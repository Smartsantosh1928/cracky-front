import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'User',
  initialState: {
    user : null,
  },
  reducers: {
    SetUser : (state,action) => {
        state.user = action.payload;
    },
    RemoveUser : (state) => {
      state.user = null;
    }
  },
});

export const { SetUser, RemoveUser } = UserSlice.actions;
export default UserSlice.reducer;