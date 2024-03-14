import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice';
import DeviceReducer from './DeviceSlice';
import UserSlice from './UserSlice';

const Store = configureStore({
  reducer: {
    auth : AuthReducer,
    device : DeviceReducer,
    user : UserSlice,
  },
});

export default Store;