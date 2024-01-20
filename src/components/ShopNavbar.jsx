import { useState, useEffect } from 'react'
import { Button,
  Typography,
} from '@material-tailwind/react'
import { FiShoppingBag } from "react-icons/fi";
import { MdFilterAlt } from "react-icons/md";
import { FilterProducts } from "../components"

export function ShopNavbar({ shopName = 'Standard Fireworks' }) {

  const [filterOpen, setFilterOpen] = useState(false);
  const openFilter = () => setFilterOpen(true);
  const closeFilter = () => setFilterOpen(false);
    
  return (
    <div className='mt-3 w-full h-full flex justify-between items-center px-7'>
      <div className='flex justify-center items-center gap-4'>
        <img src="/img/standard.png" className='w-10 h-10 rounded-full object-contain border border-blue-500 shadow-xl shadow-blue-900/20 ring-4 ring-blue-500/30' alt='Shop Logo' />
        <span className='font-secondary'>{shopName}</span>
      </div>
      <div className='flex justify-center items-center gap-2 md:gap-8'>
        <Button color="blue" variant='outlined' onClick={openFilter} className='flex justify-center items-center gap-3 p-2' >
          <MdFilterAlt className='w-5 h-5 md:w-7 md:h-7' />
          <Typography color='blue' className='hidden md:block font-secondary' >Filters</Typography>
        </Button>
        <Button color="blue" className='flex justify-center items-center gap-3 p-2' >
          <FiShoppingBag className='w-5 h-5 md:w-7 md:h-7' />
          <Typography color='white' className='hidden md:block font-secondary' >Shop Cart</Typography>
        </Button>
        <div className='flex justify-center items-center gap-1'>
          <Typography color='black' className='hidden md:block font-secondary text-2xl' >Total Price :</Typography>
          <Typography color='black' className='font-secondary text-xl md:text-2xl whitespace-nowrap' >₹ 00.00</Typography>
        </div>
      </div>
      <FilterProducts open={filterOpen} closeDrawer={closeFilter} />
    </div>
  )
}

export default ShopNavbar