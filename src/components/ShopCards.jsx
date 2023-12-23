import { useState, useEffect } from 'react'
import ShopCard from './ShopCard';
export function ShopCards() {
    return <div className='lg:px-8 grid grid-cols-4'>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
    </div>
}
export default ShopCards;