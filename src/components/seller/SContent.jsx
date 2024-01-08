import { useState, useEffect } from 'react'
import {data} from '../../data/seller/content'
import { Link } from 'react-scroll';
export function SContent() {
      const submenus = data["sellonline"];
      return (
        <section className='bg-white  gap-2 w-[100%] pb-5'>
            <hr />
           <div className='w-[85%] flex justify-center gap-10 mx-auto'>
            <div className='sticky top-5 mt-5 h-[300px] w-1/3 border-2 border-red-600'>
               <div className='flex flex-col'>
                  {submenus.map(({title,href},index)=>{
                     return ( <Link activeClass='active' className='cursor-pointer' smooth={true} spy={true} offset={-200} to={href}>                      
                              {title}                     
                     </Link> )
                  })}
               </div>
            </div>
            <div className=' mt-5 h-[2000px] w-2/4 border-2  border-black'>
                  <section id="create"  className='min-h-[600px] bg-red-500'></section>
                  <section id="list"  className='min-h-[600px] bg-red-500'></section>
                  <section id="storage"  className='min-h-[600px] bg-red-500'></section>
                  <section id="receive"  className='min-h-[600px] bg-red-500'></section>
                  <section id="grow"  className='min-h-[600px] bg-red-500'></section>
                  <section id="seller"  className='min-h-[600px] bg-red-500'></section>   
           </div>
           </div>
        </section>
  )
}

export default SContent