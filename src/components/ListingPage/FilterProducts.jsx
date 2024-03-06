import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography,Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Input,
  Card,
} from "@material-tailwind/react";
import { FcSearch } from 'react-icons/fc';
import ListPageCards from './ListPageCards';
  const marks = [
    {
      value: 0,
      label: '1000',
    },
    {
      value: 20,
      label: '2000',
    },
    {
      value: 40,
      label: '3000',
    },
    {
      value: 60,
      label: '5000',
    },
    {
      value: 80,
      label: '10000',
    },
    {
      value: 100,
      label: '10000+',
    },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-6 w-20 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }
 
export function FilterProducts(){
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const placeholders = ['Crackers', 'Sparklers', 'Fountains', 'Rockets', 'Fireworks'];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);  
  const [openAcc3, setOpenAcc3] = React.useState(true);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
  const intervalId = setInterval(() => {
    setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
  }, 6000);
 return(
  <div className="flex h-full w-full bg-gray-200">
    <div className="flex w-[25%] px-10 pt-10">
      <Card className="mt-5  h-screen w-80 ml-4 bg-white rounded-2xl">
        <Typography className="text-lg font-secondary text-brown-900 font-bold p-2 flex justify-center items-center">Product List</Typography>
        <div className="w-full p-6">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className="font-secondary font-semibold">Morning Crackers</AccordionHeader>
        <AccordionBody className='flex flex-col '>
            <Checkbox
                label={
                <Typography color="blue-gray" className=" font-secondary text-lg">Bijili</Typography> }
            />
            <Checkbox
                label={
                <Typography color="blue-gray" className="font-secondary text-lg">Bijili</Typography> }
            />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(2)} className="font-secondary font-semibold">Night Crackers</AccordionHeader>
        <AccordionBody className='flex flex-col '>
            <Checkbox
                label={
                <Typography color="blue-gray" className=" font-secondary text-lg">Bijili</Typography> }
            />
            <Checkbox
                label={
                <Typography color="blue-gray" className="font-secondary text-lg">Bijili</Typography> }
            />
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc3} icon={<Icon id={3} open={open}  />}>
      <AccordionHeader onClick={() => handleOpen(3)}className="font-secondary font-semibold">Price Range</AccordionHeader>
         <AccordionBody>
         <Box className='ml-4 w-5/6'>
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="off"
            marks={marks}
          />
        </Box>
         </AccordionBody>
      </Accordion>
        </div>
      </Card>
    </div>
    <div className="w-[75%]">
        
        <div className='bg-red-gray-500 grid grid-cols-3 grid-rows-1  gap-10 p-5 '>
            <ListPageCards />
            <ListPageCards />
            <ListPageCards />
            <ListPageCards />
            <ListPageCards />
            <ListPageCards />
        </div>
      
    </div>
  </div>
 );
}
export default FilterProducts