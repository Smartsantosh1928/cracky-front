import { useState, useEffect } from 'react'
import {Carousel} from 'react-responsive-carousel'
import { images } from '../data/bannerdata';
import { PiArrowFatLinesLeft,PiArrowFatLinesRight } from "react-icons/pi";

export function Banner() {
    const [isMobile,setIsMobile] = useState(false);
    function handleResize(){
        if(window.innerWidth<768){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }
    useEffect(()=>{
        if(window.innerWidth<768){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[])
    console.log(isMobile);
    return <section className='lg:min-h-[87vh] w-full'>
           <Carousel
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    (!isMobile&&hasPrev) && (
                        <button type="button" className=' lg:p-5 ' onClick={onClickHandler} title={label} style={{ ...{
                            position: 'absolute',
                            zIndex: 2,
                            top: 'calc(25% - 15px)',
                            cursor: 'pointer',
                            background: 'rgba(255, 255, 255, 0.2)', // Translucent white
                            backdropFilter: 'blur(30px)', // Blur effect
                            border: '1px solid rgba(255, 255, 255, 0.5)', // Border with slight transparency
                            borderRadius: '0.5rem' // Optional: adds rounded corners
                        }, left: 15}}>
                            <PiArrowFatLinesLeft className='lg:w-10 lg:h-10 text-black'/>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    (!isMobile&&hasNext) &&(
                        <button type="button"  className=' lg:p-5 ' onClick={onClickHandler} title={label} style={{ ...{
                            position: 'absolute',
                            zIndex: 2,
                            top: 'calc(25% - 15px)',
                            cursor: 'pointer',
                            background: 'rgba(255, 255, 255, 0.2)', // Translucent white
                            backdropFilter: 'blur(30px)', // Blur effect
                            border: '1px solid rgba(255, 255, 255, 0.5)', // Border with slight transparency
                            borderRadius: '0.5rem' // Optional: adds rounded corners
                        }, right: 15}}>
                            <PiArrowFatLinesRight className='lg:w-10 lg:h-10 text-black'/>
                        </button>
                    )
                }
            //    showArrows={true}
               autoPlay={true}
               interval={3000}
               infiniteLoop={true}
               showThumbs={false}
               showStatus={false}
               useKeyboardArrows={true}
               swipeable={true}
               showIndicators={isMobile}
               thumbWidth={100}
            >
            {
                images?.map(({id,src})=>{
                    return <div key={id}>
                            <img src={src} alt="Images" />
                            {!isMobile&&<div className="absolute bottom-0 right-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#e3e6e6] to-transparent"></div>}
                        </div>
                 })
            }
        </Carousel>
    </section>
}
export default Banner;