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
import { SlWallet } from "react-icons/sl";
export function SBanner() {
     return (
     <>
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
                <Card shadow={false} className='shado drop-shadow-xl w-[75%]'>
                    <CardBody className='w-full flex justify-between '>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center'>
                            <HiOutlineUserGroup strokeWidth={1} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>45 crore+ Flipkart  customers</Typography>
                        </div>
                        <span className='w-.0 h-1 bg-black'></span>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center'>
                            <SlWallet    strokeWidth={1} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>45 crore+ Flipkart  customers</Typography>
                        </div>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center'>
                            <HiOutlineUserGroup strokeWidth={1} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>45 crore+ Flipkart  customers</Typography>
                        </div>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center'>
                            <HiOutlineUserGroup strokeWidth={1} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>45 crore+ Flipkart  customers</Typography>
                        </div>
                        <div className='w-1/5 flex flex-col items-center gap-3 justify-center'>
                            <HiOutlineUserGroup strokeWidth={1} className='text-blue-600 h-12 w-12'/>
                            <Typography className='font-secondary text-black/80 text-center'>45 crore+ Flipkart  customers</Typography>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
     </>
  )
}

export default SBanner