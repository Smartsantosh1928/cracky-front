import { useState, useEffect } from 'react'
import { 
  Breadcrumbs,
  Card,
  Typography,
  CardBody } from "@material-tailwind/react"
import banimg from "/img/svks.webp" 
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiWalletLight,PiChartLineDownThin,PiHeadphonesLight,PiHandbagThin } from "react-icons/pi";
import { LiaCartArrowDownSolid } from "react-icons/lia";
export function SBanner() {
     return (
        <section className='bg-white -z-10 min-h-[91vh]'>
            <div className='relative flex justify-center '>
                <img src={banimg} alt="" className=' h-66 w-[75%] ' />
                <div className='absolute left-32 -top-4  flex justify-start'>
                    <div className='w-full flex flex-col justify-center'>
                        <Breadcrumbs  separator={<BsChevronDoubleRight className='w-4 h-6' />} className='bg-transparent mt-6'>
                            <Link to={"#"} className="opacity-60 flex justify-center items-center">
                                <IoHome />
                            </Link>
                            <Link to={"#"} className='font-secondary'>Sell Online</Link>
                        </Breadcrumbs>
                        <Typography className='font-primary font-bold text-black/80 text-5xl mt-10'>Sell Online with Cracky</Typography>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Card shadow={false} className='drop-shadow-xl w-[85%]'>
                    <CardBody className='w-full flex justify-between    '>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center px-6'>
                            <HiOutlineUserGroup strokeWidth={1.5} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>45 crore+  Cracky customers</Typography>
                        </div>
                        <span className='min-w-[2px] max-h-[45px] opacity-40 mt-9 bg-blue-gray-500'></span>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center px-6'>
                            <PiWalletLight    strokeWidth={1.5} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>7* days secure & regular payments</Typography>
                        </div>
                        <span className='min-w-[2px] max-h-[45px] opacity-40 mt-9 bg-blue-gray-500'></span>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center px-6'>
                            <LiaCartArrowDownSolid  strokeWidth={0} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>Low cost of doing business</Typography>
                        </div>
                        <span className='min-w-[2px] max-h-[45px] opacity-40 mt-9 bg-blue-gray-500'></span>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center px-10'>
                            <PiHeadphonesLight  strokeWidth={2} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>One click Seller Support</Typography>
                        </div>
                        <span className='min-w-[2px] max-h-[45px] opacity-40 mt-9 bg-blue-gray-500'></span>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center px-6'>
                            <PiHandbagThin strokeWidth={8} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>Access to The Big Billion Days & more</Typography>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
  )
}

export default SBanner