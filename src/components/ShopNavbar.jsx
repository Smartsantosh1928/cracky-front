import React from 'react'
import { Button,
  Typography,
 } from '@material-tailwind/react'

export function ShopNavbar({ shopName = 'Standard Fireworks' }) {

    
  return (
    <div className='w-full h-full flex justify-between items-center px-7'>
      <div className='flex justify-center items-center flex-col'>
        <img src="/img/standard.png" className='w-20 h-20 mt-3 rounded-full object-contain border border-blue-500 shadow-xl shadow-blue-900/20 ring-4 ring-blue-500/30' alt='Shop Logo' />
        <Typography color="blueGray" className='text-2xl font-bold'>{shopName}</Typography>
      </div>
      <div>

      </div>
    </div>
  )
}

export default ShopNavbar