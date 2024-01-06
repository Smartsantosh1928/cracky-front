import { useState, useEffect } from 'react'
import { 
  Breadcrumbs,
  Avatar,
  Card,
  Typography,
  Tooltip } from "@material-tailwind/react"
import banimg from "/img/svks.webp" 
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
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
        </section>
     </>
  )
}

export default SBanner