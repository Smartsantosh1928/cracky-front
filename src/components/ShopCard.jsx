import { useState, useEffect } from 'react'
import logo from '../../public/img/arul.png' 
import img from '../../public/img/crack1.png' 
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
   
export function ShopCard() {
    return (
    <Card className="py-0">
      <CardHeader floated={false} className='overflow-hidden flex justify-start items-center relative h-[20%] p-4 '  >
            <div className='flex justify-start items-center gap-3'>
                <img src={logo} className='h-10 w-11' alt="" />
                <Typography className='font-secondary font-bold lg:text-xl'>{'Sri Mithra Crackers'}</Typography>
            </div>
            <div className='absolute right-0 top-0 rotate-45 flex justify-center items-end translate-x-12 -translate-y-4 pb-0.5 pr-1 bg-red-500 text-white  w-28 h-14'>
                { 85 }%
            </div>
        </CardHeader>
      <CardBody className="text-center">
      <div className='bg-red-gray-500 grid grid-cols-2 grid-rows-2 h-full w-full gap-2 p-1'>
                <div className=' flex flex-col items-center justify-center bg-white overflow-hidden'>
                    <img src={img} className='h-[80%] w-[80%] ' alt="" />
                    <Typography className='text-xs font-secondary text-black'>name</Typography>
                </div>
                <div className=' flex flex-col items-center justify-center bg-white overflow-hidden'>
                    <img src={img} className='h-[80%] w-[80%] ' alt="" />
                    <Typography className='text-xs font-secondary text-black'>name</Typography>
                </div>
                <div className=' flex flex-col items-center justify-center bg-white overflow-hidden'>
                    <img src={img} className='h-[80%] w-[80%] ' alt="" />
                    <Typography className='text-xs font-secondary text-black'>name</Typography>
                </div>
                <div className=' flex flex-col items-center justify-center bg-white overflow-hidden'>
                    <img src={img} className='h-[80%] w-[80%] ' alt="" />
                    <Typography className='text-xs font-secondary text-black'>name</Typography>
                </div>
            </div>
      </CardBody>

    </Card>
  );
}
export default ShopCard;


{/* <div className=' h-[400px] w-full  border-1 bg-white border-black z-30'>
        <div className='overflow-hidden flex justify-start items-center relative h-[15%] pl-5'  >
            <div className='flex justify-start items-center gap-3'>
                <img src={logo} className='h-10 w-10' alt="" />
                <Typography className='font-secondary font-bold lg:text-2xl'>{'Sri Mithra Crackers'}</Typography>
            </div>
            <div className='absolute right-0 top-0 rotate-45 flex justify-center items-end translate-x-12 -translate-y-4 pb-0.5 pr-1 bg-red-500 text  w-28 h-14'>
                { 85 }%
            </div>
        </div>
        <div className='head relative h-[70%]'  >
            <div className='bg-red-gray-500 grid grid-cols-2 grid-rows-2 h-full w-full gap-2 p-1'>
                <div className=' flex flex-col items-center justify-center bg-white overflow-hidden'>
                    <img src={img} className='h-[80%] w-[80%] ' alt="" />
                    <Typography className='text-xs '>name</Typography>
                </div>
                <div className=' flex flex-col items-center justify-center bg-white overflow-hidden'>
                    <img src={img} className='h-[80%] w-[80%] ' alt="" />
                    <Typography className='text-xs '>name</Typography>
                </div>
                <div className=' flex flex-col items-center justify-center bg-white overflow-hidden'>
                    <img src={img} className='h-[80%] w-[80%] ' alt="" />
                    <Typography className='text-xs '>name</Typography>
                </div>
                <div className=' flex flex-col items-center justify-center bg-white overflow-hidden'>
                    <img src={img} className='h-[80%] w-[80%] ' alt="" />
                    <Typography className='text-xs '>name</Typography>
                </div>
            </div>
        </div>
        <div className='head relative h-[15%] bg-blue-gray-900'  >
            
        </div>
    </div> */}