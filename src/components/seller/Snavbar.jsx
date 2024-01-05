import { useState, useEffect } from 'react'
import { Input, Button, IconButton,Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  Typography,
  Tooltip } from "@material-tailwind/react"
import { useDispatch, useSelector } from 'react-redux';
import { LoginAuth, RegisterAuth } from '../../store/AuthSlice';
import Authenticator from '../Authenticator';
import Cookies from 'universal-cookie';
import { SetUser, RemoveUser } from "../../store/UserSlice";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import Menus from './menus';
 
const menuItems = [
  {
    title: "Create Account",
    href:"#"
  },
  {
    title: "List Product",
    href:"#"
  },
  {
    title: "Storage & Shipping",
    href:"#"
  },
  {
    title: "Receive Payments",
    href:"#"
  },
  {
    title: "Grow Faster",
    href:"#"
  },
  {
    title: "Seller App",
    href:"#"
  },
  {
    title: "Seller Support",
    href:"#"
  },
];

    
  
export function SNavbar() {
     return (
     <>
     <nav className="overflow-hidden w-full bg-white h-full  md:h-16 flex justify-between items-center pl-6  md:py-0">
     <div className='flex justify-start items-center'>
      <Avatar
            alt="Cracky"
            className="cursor-pointer rounded-full md:w-24 md:h-24 w-28 h-22"
            src="/img/logo.png"
      />
        <div className='flex justify-start items-center'>
          <Menus name={"Sell Online"} menuItems={menuItems}/>
          <Menus name={"Fees and Commision"} menuItems={menuItems}/>
          <Menus name={"Grow"} menuItems={menuItems}/>
          <Menus name={"Learn"} menuItems={menuItems}/>
        </div>
      </div>
      <div className='flex justify-center items-center '>
        <Typography className='md:p-8  font-primary hover:'>Login </Typography>
        <Button className='bg-yellow-700 lowercase text-black  p-8 md:text-xl font-normal font-secondary'>Start Selling </Button>
      </div>
     </nav>
     </>
  )
}

export default SNavbar