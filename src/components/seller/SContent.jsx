import { useState, useEffect } from 'react'
import {data} from '../../data/seller/content'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, animateScroll as scroll  } from 'react-scroll';
import Createaccount from '../../documentation/seller/sellonline/createaccount';
import ListProducts from '../../documentation/seller/sellonline/ListProducts';
import StorageShipping from '../../documentation/seller/sellonline/StorageShipping';
import ReceivePayments from'../../documentation/seller/sellonline/ReceivePayments';
import GrowFaster from '../../documentation/seller/GrowFaster';
import HelpSupport from '../../documentation/seller/sellonline/HelpSupport';
export function SContent() {
      const submenus = data["sellonline"];
      return (
        <section className='bg-white  gap-2 w-[100%] pb-5'>
            <hr />
           <div className='w-[100%] flex justify-center gap-8 mx-auto'>
            <div className='sticky top-14 mt-5 h-[370px] bottom-5 w-1/5 '>
               <div className='flex flex-col'>
                  {submenus.map(({title,href},index)=>{
                     return ( <Link activeClass='active' className='cursor-pointer font-thin transition-transform duration-300 text-md' smooth={true} spy={true} offset={-60} to={href}>                      
                              <div className=' p-2 font-extralight text-left flex justify-start items-center'>
                                 <BsChevronDoubleRight  className={`hidden`}/>
                                 <span className='translate-x-9'>{title}</span>
                              </div>                
                     </Link> )
                  })}
               </div>
            </div>
            <div className=' mt-5 w-[60%]'>
                  <section id="create"  className='min-h-[600px]'><Createaccount /></section>
                  <section id="list"  className='min-h-[400px]'><ListProducts /></section>
                  <section id="storage"  className='min-h-[400px]'><StorageShipping /></section>
                  <section id="receive"  className='min-h-[300px] '><ReceivePayments /></section>
                  <section id="grow"  className='min-h-[400px]'><GrowFaster /></section>
                  <section id="seller"  className='min-h-[400px]'><HelpSupport /></section>   
           </div>
           </div>
        </section>
  )
}

export default SContent