import React, { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { ToggleDevice } from "./store/DeviceSlice";
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import { Dashboard } from "./layout/user/Dashboard"
import { SDashboard } from "./layout/seller/Dashboard"
import { SellerRegister } from "./pages/seller";
import CardForm from "./components/ListingPage/CardForm";
import "react-toastify/dist/ReactToastify.css";
import ListingPage from "./components/ListingPage/ListingPage";

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  
    // useGoogleOneTapLogin({
    //   onError: error => {
    //     console.log(error);
    //     dispatch(RemoveUser());
    //   },
    //   onSuccess: response => {
    //     dispatch(SetUser(response));
    //   },
    //   googleAccountConfigs: {
    //     client_id: "595225179666-msgtfmk4avtiu3ujd0e6cd9d1oukmkhv.apps.googleusercontent.com"
    //   },
    // });

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        dispatch(ToggleDevice(window.innerWidth < 768));
      }, 100); // 100ms delay for debounce
    };
    // Check initially and set up the resize event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/user/*" element={<Dashboard />} />
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/*" element={<SDashboard />} />
        <Route path="/ListingPage/*" element={<ListingPage/>} />
        <Route path="/ListingPage/CardForm" element={<CardForm/>} />
        <Route path="/shop/:shop_id/*" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/user" replace />} />
      </Routes>
      
    </>
  )
}

export default App
