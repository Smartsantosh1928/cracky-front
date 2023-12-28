import { useState, useEffect } from 'react'
import ShopCard from './ShopCard';

export function ShopCards() {
    return <div className='lg:p-8 gap-5 grid grid-cols-1 lg:grid-cols-4 z-40 lg:-mt-[350px]'>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>   
        <ShopCard/>
        <ShopCard/>   
        <ShopCard/>
        <ShopCard/>   
        <ShopCard/>
        <ShopCard/>   
        <ShopCard/>
        <ShopCard/>   
    </div>
}
export default ShopCards;