import {Button,Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react"
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom"; 
  
export function Menus({menuItems,name}) {
     return (
     <>
     <Menu  allowHover>
     <MenuHandler>
     <Typography
          variant="text"
          className="group flex items-center gap-1.5  p-6 font-medium hover:bg-transparent hover:text-blue-500 text-base font-secondary capitalize tracking-normal focus:bg-white"
     >
          {name}
          <FaChevronRight
          strokeWidth={2.5}
          className={`h-3 text-black w-3.5 transition-transform group-hover:rotate-90`}
          />
     </Typography>
     </MenuHandler>
     <MenuList className="hidden border-none py-4 drop-shadow-xl grid-cols-2 overflow-visible lg:grid -mt-3">
          <div className="col-span-4 flex w-full flex-col border-none">
               {menuItems.map(({ title, href }) => (
               <Link to={href} key={title}>
               <MenuItem className='hover:bg-white'>
                    <Typography color="gray" className="text-sm font-secondary w-48  " >
                    {title}
                    </Typography>
               </MenuItem>
               </Link>
               ))}
          </div>
     </MenuList>
     </Menu>
     </>
  )
}

export default Menus