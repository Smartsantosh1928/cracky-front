import { useState, useEffect } from 'react'
import {Carousel} from 'react-responsive-carousel'
import { images } from '../data/bannerdata';


export function Banner() {
    return <section className='lg:min-h-[87vh] '>
           <Carousel
               showArrows={true}
               autoPlay={true}
               interval={3000}
               infiniteLoop={true}
               showThumbs={false}
               showStatus={false}
               useKeyboardArrows={true}
               swipeable={true}
               showIndicators={false}
            >
            {
                images?.map(({id,src})=>{
                    return <div key={id}>
                            <img src={src} alt="Images" />
                            <div className="absolute bottom-0 right-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#e3e6e6] to-transparent"></div>
                        </div>
                 })
            }
        </Carousel>
    </section>
}
export default Banner;