import { useState, useEffect } from 'react'
import {data} from '../../data/seller/content'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, animateScroll as scroll  } from 'react-scroll';
export function SContent() {
      const submenus = data["sellonline"];
      return (
        <section className='bg-white  gap-2 w-[100%] pb-5'>
            <hr />
           <div className='w-[100%] flex justify-center gap-8 mx-auto'>
            <div className='sticky top-14 mt-5 h-[370px] bottom-5 w-1/5 '>
               <div className='flex flex-col'>
                  {submenus.map(({title,href},index)=>{
                     return ( <Link activeClass='active  ' className='cursor-pointer transition-transform duration-300 text-md' smooth={true} spy={true} offset={-60} to={href}>                      
                              <div className=' p-2 font-extralight text-left flex justify-start items-center'>
                                 <BsChevronDoubleRight  className={`hidden`}/>
                                 <span className='translate-x-5'>{title}</span>
                              </div>                
                     </Link> )
                  })}
               </div>
            </div>
            <div className=' mt-5 w-[60%] border-2  border-black'>
                  <section id="create"  className='min-h-[600px] bg-red-500'></section>
                  <section id="list"  className='min-h-[600px] bg-green-500'></section>
                  <section id="storage"  className='min-h-[600px] bg-red-500'></section>
                  <section id="receive"  className='min-h-[600px] bg-yellow-500'></section>
                  <section id="grow"  className='min-h-[600px] bg-red-500'></section>
                  <section id="seller"  className='min-h-[600px] bg-teal-500'></section>   
           </div>
           </div>
        </section>
  )
}

export default SContent