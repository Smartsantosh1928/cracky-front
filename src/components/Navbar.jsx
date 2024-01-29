import { useState, useEffect } from 'react'
import { Input, Button, IconButton,Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  Tooltip } from "@material-tailwind/react"
import { FcSearch, FcShop, FcBusinessman } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { BsCartCheck } from "react-icons/bs";
import { CiInboxIn, CiGift } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";
import "../styles/Navbar.css"
import { MdFavoriteBorder } from "react-icons/md";
import { PiPackageBold } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { LoginAuth, RegisterAuth } from '../store/AuthSlice';
import Authenticator from './Authenticator';
import Cookies from 'universal-cookie';
import { SetUser, RemoveUser } from "../store/UserSlice";
import axios from "../utils/axios.config"
import { Link } from 'react-router-dom';

export function Navbar() {

  const placeholders = ['Crackers', 'Sparklers', 'Fountains', 'Rockets', 'Fireworks'];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isShaking, setShaking] = useState(true);
  const [ accessToken, setAccessToken ] = useState(null);

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.auth);
  const isMobile = useSelector(state => state.device.isMobile);
  const user = useSelector(state => state.user.user);
  const cookies = new Cookies();

  const handleLogin = () => {
    dispatch(LoginAuth());
  }

  const handleRegister = () => {
    dispatch(RegisterAuth());
  }

  useEffect(() => {
    if(user==null){
      const accessToken = cookies.get('accessToken');
      const refreshToken = cookies.get('refreshToken');
      if(accessToken) setAccessToken(accessToken);
      console.log(accessToken, refreshToken);

      if (accessToken)
        sessionStorage.setItem("accessToken", accessToken);
      if (refreshToken)
        localStorage.setItem("refreshToken", refreshToken);
    }
  },[])

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if(accessToken) setAccessToken(accessToken);
  },[])

  useEffect(() => {
    if(user==null){
      axios.get("/auth/me")
      .then((res) => {
        dispatch(SetUser(res.data.user));
      })
    }
  },[auth, accessToken])

  const handleSignOut = () => {
    axios.post("/auth/logout")
    .then((res) => {
      dispatch(RemoveUser());
      sessionStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setShaking(false);
    }, 15000)
    
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isMobile]);

  return (
    <>
      <nav className="w-full h-full md:h-[70px] flex justify-start items-center lg:p-8 lg:py-11">
        <Avatar
          alt="Cracky"
          className="cursor-pointer md:w-44 md:h-44 w-28 h-20 ml-3"
          src="/img/logo.png"
        />
        {!isMobile && <div className='ml-5 w-[60rem]'>
          <Input label={"Search "+placeholders[currentPlaceholderIndex]+"..."} className='bg-white' color='blue-gray' size='lg' icon={<FcSearch className='w-6 h-6' />} />
        </div>}
          <div className='w-full flex justify-end items-center'>
            <div className='w-full md:w-[90%] flex justify-end md:mr-0 gap-6 md:gap-4 mr-4 items-center'>
              {user==null && 
              <div className='relative flex flex-col'>
                <Button variant="gradient" color='blue-gray' className='rounded-full flex  items-center gap-3 py-2 font-secondary font-bold' onClick={handleLogin} >Login
                  <CgProfile className='w-6 h-6' />
                </Button>
                {(!isMobile && isShaking) && (
                <div className='absolute -bottom-14 z-40 ' >
                  <div className='shake-login w-full'> 
                    <button onClick={handleRegister} className='relative w-full h-full  text-white bg-blue-400 flex justify-center items-center gap-3 py-2 px-2.5 font-secondary font-bold ' >
                      Sign Up
                      <CgProfile className='w-6 h-6' />
                    </button>
                    <span className='absolute -top-1 left-[46%] z-40 w-3 h-3  bg-blue-400 rotate-45'></span>
                  </div>
                </div>)}
              </div>}
              {isMobile ? <Tooltip
                content="Cart"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Typography variant='paragraph' className="cursor-pointer" >
                  <BsCartCheck className='w-6 h-6' />
                </Typography>
              </Tooltip>
              : <Button variant="outlined" color='blue-gray' className='rounded-full flex justify-center items-center gap-3 py-2 font-secondary font-bold '>cart
                <BsCartCheck className='w-6 h-6' />
              </Button>}
              {isMobile ? <Link to={'/seller'}><Tooltip
                content="Become a Seller"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Typography variant='paragraph' className="cursor-pointer">
                  <FcShop className='w-6 h-6' />
                </Typography>
              </Tooltip></Link> : <Link to={'/seller'}><Button variant="text" color='blue-gray' className='rounded-full justify-center flex items-center gap-3 font-secondary font-bold '>Become a Seller
                <FcShop className='w-6 h-6' />
              </Button></Link>}
              <Menu>
                <MenuHandler>
                  {user==null ? <IconButton variant="outlined" color='blue-gray' className='rounded-full mr-4 md:mr-0' ><FcBusinessman className='w-8 h-8 cursor-pointer' /></IconButton> : 
                  <Avatar
                    alt="User Profile"
                    className="cursor-pointer"
                    src={user ? `${user.profilePictureUrl}` : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"}
                  />}
                </MenuHandler>
                <MenuList>
                  <MenuItem className="flex items-center gap-2">
                    <CgProfile className='w-5 h-5' />          
                    <Typography variant="small" className="font-medium">
                      My Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <PiPackageBold className='w-5 h-5' />
                    <Typography variant="small" className="font-medium">
                      Orders
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <MdFavoriteBorder className='w-5 h-5' />
                    <Typography variant="small" className="font-medium">
                      Wishlist
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <CiGift className='w-5 h-5' />
                    <Typography variant="small" className="font-medium">
                      Rewards
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <CiInboxIn className='w-5 h-5' />
                    <Typography variant="small" className="font-medium">
                      Inbox
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <FaHandsHelping className='w-5 h-5' />
                    <Typography variant="small" className="font-medium">
                      Help
                    </Typography>
                  </MenuItem>
                  {user!=null && <><hr className="my-2 border-blue-gray-50" />
                  <MenuItem className="flex items-center gap-2 " onClick={handleSignOut}>
                    <LiaSignOutAltSolid className='w-5 h-5' />
                    <Typography variant="small" className="font-medium">
                      Sign Out
                    </Typography>
                  </MenuItem></>}
                </MenuList>
              </Menu>
            </div>
          </div>
      </nav>
      {isMobile && <div className='p-3 -mt-5 w-full'>
          <Input label={"Search "+placeholders[currentPlaceholderIndex]+"..."} className='bg-white' color='blue-gray' size='lg' icon={<FcSearch className='w-6 h-6' />} />
      </div>}
      {auth!=null && <Authenticator />}
      <div className='w-full h-full flex justify-center items-center mt-2'>
        <span className="border border-b-0 border-gray-500 w-full"></span>
      </div>
    </>
  )
}

export default Navbar