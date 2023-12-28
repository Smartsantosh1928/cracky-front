import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice';
import DeviceReducer from './DeviceSlice';

const Store = configureStore({
  reducer: {
    auth : AuthReducer,
    device : DeviceReducer,
  },
});

export default Store;