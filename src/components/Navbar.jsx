import { useState, useEffect } from 'react'
import { Input, Button, IconButton,Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography, } from "@material-tailwind/react"
import { FcSearch, FcShop } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { BsCartCheck } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { CiSettings, CiInboxIn  } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";
import "../styles/Navbar.css"

export function Navbar() {

  const placeholders = ['Crackers', 'Sparklers', 'Fountains', 'Rockets', 'Fireworks'];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <>
      <nav className="w-full h-[70px] flex justify-start items-center p-6 mt-7">
        <div className='text-3xl font-bold bg-red-500 text-orange-200 p-3 rounded-2xl cursor-pointer'>
          Cracky
        </div>
        <div className='ml-5 w-[60rem]'>
          <Input label={"Search "+placeholders[currentPlaceholderIndex]+"..."} className='bg-[#fcf5f5]' color='blue' size='lg' icon={<FcSearch className='w-6 h-6' />} />
        </div>
          <div className='w-full flex justify-end items-center'>
            <div className='w-[65%] flex justify-evenly items-center'>
              <Button variant="gradient" color='blue' className='rounded-full flex items-center gap-3 py-2'>Login
                <CgProfile className='w-6 h-6' />
              </Button>
              <Button variant="outlined" color='blue' className='rounded-full flex items-center gap-3 py-2'>cart
                <BsCartCheck className='w-6 h-6' />
              </Button>
              <Button variant="text" color='blue' className='rounded-full flex items-center gap-3'>Become a Seller
                <FcShop className='w-6 h-6' />
              </Button>
              <IconButton variant="text">
                <TfiMenuAlt className='w-6 h-6 text-blue-500 cursor-pointer' />
              </IconButton>
              <Menu>
                <MenuHandler>
                  <Avatar
                    variant="circular"
                    alt="User Name"
                    className="cursor-pointer"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  />
                </MenuHandler>
                <MenuList>
                  <MenuItem className="flex items-center gap-2">
                    <CgProfile className='w-5 h-5' />          
                    <Typography variant="small" className="font-medium">
                      My Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <CiSettings className='w-5 h-5' />
                    <Typography variant="small" className="font-medium">
                      Edit Profile
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
                  <hr className="my-2 border-blue-gray-50" />
                  <MenuItem className="flex items-center gap-2 ">
                    <LiaSignOutAltSolid className='w-5 h-5' />
                    <Typography variant="small" className="font-medium">
                      Sign Out
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar