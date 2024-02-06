import React from "react";
import { useState } from "react";
import { Card, Typography,Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,} from "@material-tailwind/react";
  import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from 'rsuite';
  
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
 
 return(
  <div className="flex bg-gray-200">
    <div className="flex w-[20%]  h-screen">
      <Card className="h-screen mt-5 w-80 ml-4 bg-white">
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
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(3)} className="font-secondary font-semibold">Price Range</AccordionHeader>
         <AccordionBody>
                
         </AccordionBody>
      </Accordion>
        </div>
      </Card>
    </div>
    <div className="flex w-[80%]  h-screen bg-white  mt-5">

    </div>
  </div>
 );
}
export default FilterProducts