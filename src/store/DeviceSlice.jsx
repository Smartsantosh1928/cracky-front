import { createSlice } from '@reduxjs/toolkit';

const DeviceSlice = createSlice({
  name: 'Device',
  initialState: {
    isMobile : false,
  },
  reducers: {
    ToggleDevice : (state, action) => {
      state.isMobile = action.payload;
    }
  },
});

export const { ToggleDevice } = DeviceSlice.actions;
export default DeviceSlice.reducer;