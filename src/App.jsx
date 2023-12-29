import React, { useEffect } from "react"
import { Home } from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { ToggleDevice } from "./store/DeviceSlice";
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import { SetUser, RemoveUser } from "./store/UserSlice";

function App() {

  const dispatch = useDispatch();
  const isMobile = useSelector(state => state.device.isMobile);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      dispatch(ToggleDevice(true));
    } else {
      dispatch(ToggleDevice(false));
    }
  }

  useGoogleOneTapLogin({
    onError: error => {
      console.log(error);
      dispatch(RemoveUser());
    },
    onSuccess: response => {
      console.log(response);
      dispatch(SetUser(response));
    },
    googleAccountConfigs: {
      client_id: "595225179666-msgtfmk4avtiu3ujd0e6cd9d1oukmkhv.apps.googleusercontent.com"
    },
  });

  useEffect(() => {  
    if (window.innerWidth < 768) {
      console.log("mobile");
      dispatch(ToggleDevice(true));
    } else {
      console.log("laptop");
      dispatch(ToggleDevice(false));
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }; 
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
