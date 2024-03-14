import { useState, useEffect } from 'react'
import { 
  Breadcrumbs,
  Card,
  CardFooter,
  CardHeader,cardBody,Tooltip,
  Typography,
  CardBody } from "@material-tailwind/react"
import banimg from "/img/svks.webp" 
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiWalletLight,PiHeadphonesLight,PiHandbagThin } from "react-icons/pi";
import { FaChevronLeft,FaAngleRight, FaChevronRight } from "react-icons/fa6";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import { all } from 'axios';


export function SBanner() {
    const isMobile = useSelector(state => state.device.isMobile);
    console.log(isMobile);
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
            <div className='w-[85%] mx-auto pb-5'>
                <Typography className='font-secondary font-extrabold text-4xl text-black/75 py-10'><span className='text-blue-600'>Seller Success </span>Stories</Typography>
                <Carousel
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            (!isMobile&&hasPrev) && (
                                <button type="button" className=' lg:p-5 bg-white' onClick={onClickHandler} title={label} style={{ ...{
                                    position: 'absolute',
                                    zIndex: 10,
                                    top: 'calc(38%)',
                                    cursor: 'pointer',
                                    background: 'rgba(255, 255, 255)', // Translucent white
                                    borderRadius:10, // Optional: adds rounded corners
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
                                
                                }, left:-7}}>
                                    <FaChevronLeft className='lg:w-5  z-50 lg:h-5 text-black/50'/>
                                </button>
                            )
                        }

                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            (!isMobile&&hasNext) &&(
                                <button type="button"  className=' lg:p-5 bg-white' onClick={onClickHandler} title={label} style={{ ...{
                                    position: 'absolute',
                                    zIndex: 2,
                                    top: 'calc(38%)',
                                    cursor: 'pointer',
                                    background: 'rgba(255, 255, 255)', // Translucent white
                                    borderRadius:10, // Optional: adds rounded corners
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
                
                                }, right: -7}}>
                                    <FaChevronRight className='lg:w-5  z-50 lg:h-5 text-black/50'/>
                                </button>
                            )
                        }

                        renderIndicator={(onClickHandler, isSelected, index, label) => {
                            if (isSelected) {
                                return (
                                    <li
                                        className='transition-all duration-300'
                                        style={{ ...{
                                                background: '#fff',
                                                width: 20,
                                                height: 8,
                                                display: 'inline-block',
                                                margin: '0 5px',
                                                borderRadius:100,
                                            }, background: '#1E88E5' }}
                                        aria-label={`Selected: ${label} ${index + 1}`}
                                        title={`Selected: ${label} ${index + 1}`}
                                    />
                                );
                            }
                            return (
                                <li
                                    style={
                                           { background: 'gray',
                                            width: 8,
                                            height: 8,
                                            borderRadius:100,
                                            display: 'inline-block',
                                            margin: '0 5px',}
                                        }
                                    onClick={onClickHandler}
                                    onKeyDown={onClickHandler}
                                    value={index}
                                    key={index}
                                    role="button"
                                    tabIndex={0}
                                    title={`${label} ${index + 1}`}
                                    aria-label={`${label} ${index + 1}`}
                                />
                            );
                        }}
                        
                    //    showArrows={true}
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    showThumbs={true}
                    showStatus={false}
                    useKeyboardArrows={true}
                    swipeable={true}
                    showIndicators={true}
                    thumbWidth={100}
                    className='bg-[#ecf4fb] rounded-[50px] ml-5 overflow-x-visible'
                >
                <div className="w-full flex justify-center gap-10 p-10">
                    <div className="relative w-[14%]">
                        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" className='rounded-full' />
                    </div>
                    <div className="w-[78%] flex flex-col justify-center gap-3 items-start">
                        <Typography color="blue-gray" className="text-2xl px-3 font-bold font-secondary">
                        Natalie Paisley
                        </Typography>
                        <Typography color="blue-gray" className="font-medium font-secondary text-left px-3 py-1" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas odio sit ducimus tempore iste laboriosam, aliquam beatae quos aperiam corrupti cupiditate voluptates dolorum nesciunt numquam nemo reprehenderit saepe similique dolores.
                        Lorem ipsum dolor, sit amet quos aperiam corrupti cupiditate voluptates dolorum  que dolores.
                        </Typography>
                    </div>
                </div>
                <div className="w-full flex justify-center gap-10 p-10">
                    <div className=" w-[13%]">
                        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" className='rounded-full' />
                    </div>
                    <div className="w-[78%] flex flex-col justify-center gap-3 items-start">
                        <Typography color="blue-gray" className="text-2xl px-3 font-bold font-secondary">
                        Natalie Paisley
                        </Typography>
                        <Typography color="blue-gray" className="font-medium font-secondary text-left px-3 py-1" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas odio sit ducimus tempore iste laboriosam, aliquam beatae quos aperiam corrupti cupiditate voluptates dolorum nesciunt numquam nemo reprehenderit saepe similique dolores.
                        Lorem ipsum dolor, sit amet quos aperiam corrupti cupiditate voluptates dolorum  que dolores.
                        </Typography>
                    </div>
                </div>
                <div className="w-full flex justify-center gap-10 p-10">
                    <div className=" w-[13%]">
                        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" className='rounded-full' />
                    </div>
                    <div className="w-[78%] flex flex-col justify-center gap-3 items-start">
                        <Typography color="blue-gray" className="text-2xl px-3 font-bold font-secondary">
                        Natalie Paisley
                        </Typography>
                        <Typography color="blue-gray" className="font-medium font-secondary text-left px-3 py-1" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas odio sit ducimus tempore iste laboriosam, aliquam beatae quos aperiam corrupti cupiditate voluptates dolorum nesciunt numquam nemo reprehenderit saepe similique dolores.
                        Lorem ipsum dolor, sit amet quos aperiam corrupti cupiditate voluptates dolorum  que dolores.
                        </Typography>
                    </div>
                </div>
                </Carousel>
            </div>
        </section>
  )
}

export default SBanner