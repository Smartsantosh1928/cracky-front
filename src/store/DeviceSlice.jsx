import { createSlice } from '@reduxjs/toolkit';

const DeviceSlice = createSlice({
  name: 'Device',
  initialState: {
    isMobile : false,
  },
  reducers: {
    ToggleDevice : (state) => {
      state.isMobile = !state.isMobile;
    }
  },
});

export const { ToggleDevice } = DeviceSlice.actions;
export default DeviceSlice.reducer;