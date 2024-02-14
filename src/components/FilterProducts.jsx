import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography,Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,} from "@material-tailwind/react";
import { FcSearch } from 'react-icons/fc';
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
  const intervalId = setInterval(() => {
    setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
  }, 5000);
 return(
  <div className="flex bg-gray-200">
    <div className="flex w-[20%]">
      <Card className="mt-5 w-80 ml-4 bg-white">
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
    <div className="w-[80%]  h-screen bg-white  mt-5">
        <div className='ml-10 mt-20 w-[60rem] flex'>
          <Input label={"Search "+placeholders[currentPlaceholderIndex]+"..."} className='bg-white' color='blue-gray' size='lg' icon={<FcSearch className='w-6 h-6' />} />
        </div>
        <div className='bg-red-gray-500 grid grid-cols-3 grid-rows-1  gap-2 p-1'>
        <div className='flex '>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src="/img/crack1.png"
                    alt="card-image"
                    className="h-80 w-80 mt-5 justify-center object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                      Bijili Crackers
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                    ₹200.00
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Buy Now
                  </Button>
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="mt-5 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
            </Card>
        </div>
        <div className='flex '>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src="/img/crack1.png"
                    alt="card-image"
                    className="h-80 w-80 mt-5 justify-center object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                      Bijili Crackers
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                    ₹200.00
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Buy Now
                  </Button>
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="mt-5 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
            </Card>
        </div>
        <div className='flex '>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src="/img/crack1.png"
                    alt="card-image"
                    className="h-80 w-80 mt-5 justify-center object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                      Bijili Crackers
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                    ₹200.00
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Buy Now
                  </Button>
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="mt-5 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
            </Card>
        </div>
        <div className='flex '>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src="/img/crack1.png"
                    alt="card-image"
                    className="h-80 w-80 mt-5 justify-center object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                      Bijili Crackers
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                    ₹200.00
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Buy Now
                  </Button>
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="mt-5 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
            </Card>
        </div>
        <div className='flex '>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src="/img/crack1.png"
                    alt="card-image"
                    className="h-80 w-80 mt-5 justify-center object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                      Bijili Crackers
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                    ₹200.00
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Buy Now
                  </Button>
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="mt-5 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
            </Card>
        </div>
        <div className='flex '>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src="/img/crack1.png"
                    alt="card-image"
                    className="h-80 w-80 mt-5 justify-center object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                      Bijili Crackers
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                    ₹200.00
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Buy Now
                  </Button>
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="mt-5 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
            </Card>
        </div>
        </div>
      
    </div>
  </div>
 );
}
export default FilterProducts