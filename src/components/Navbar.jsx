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
 
export function Navbar() {

  const placeholders = ['Crackers', 'Sparklers', 'Fountains', 'Rockets', 'Fireworks'];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [ isMobile, setIsMobile ] = useState(false);
  const [ user, setUser ] = useState(null);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.auth);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener('resize', handleResize);
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    }; 
  }, []);

  return (
    <>
      <nav className="w-full h-full md:h-[70px] flex justify-start items-center p-2 lg:p-8 lg:py-11">
        <div className='text-lg  md:text-3xl font-bold bg-red-500 text-orange-200 p-3 rounded-2xl cursor-pointer'>
          Cracky
        </div>
        {!isMobile && <div className='ml-5 w-[60rem]'>
          <Input label={"Search "+placeholders[currentPlaceholderIndex]+"..."} className='bg-white' color='blue-gray' size='lg' icon={<FcSearch className='w-6 h-6' />} />
        </div>}
          <div className='w-full flex justify-end items-center'>
            <div className='md:w-[65%] flex justify-center gap-4 md:gap-0 md:justify-evenly items-center'>
              {user==null && <Button variant="gradient" color='blue-gray' className='rounded-full flex  items-center gap-3 py-2 font-secondary font-bold '>Login
                <CgProfile className='w-6 h-6' />
              </Button>}
              {isMobile ? <Tooltip
                content="Cart"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Typography variant='paragraph' >
                  <BsCartCheck className='w-6 h-6' />
                </Typography>
              </Tooltip>
              : <Button variant="outlined" color='blue-gray' className='rounded-full flex justify-center items-center gap-3 py-2 font-secondary font-bold '>cart
                <BsCartCheck className='w-6 h-6' />
              </Button>}
              {isMobile ? <Tooltip
                content="Become a Seller"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Typography variant='paragraph'>
                  <FcShop className='w-6 h-6' />
                </Typography>
              </Tooltip> : <Button variant="text" color='blue-gray' className='rounded-full justify-center flex items-center gap-3 font-secondary font-bold '>Become a Seller
                <FcShop className='w-6 h-6' />
              </Button>}
              <Menu>
                <MenuHandler>
                  {user==null ? <IconButton variant="outlined" color='blue-gray' className='rounded-full mr-2' ><FcBusinessman className='w-8 h-8 cursor-pointer' /></IconButton> : <Avatar
                    variant="circular"
                    alt="User Name"
                    className="cursor-pointer mr-2"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
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
                  <MenuItem className="flex items-center gap-2 ">
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

    </>
  )
}

export default Navbar