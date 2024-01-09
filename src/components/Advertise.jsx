import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button
} from "@material-tailwind/react";
   
export function Advertise() {
  return (
    <Card className="w-[20%] hidden md:block overflow-hidden sticky top-10">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="/img/crackers.jpg"
            alt="Advertise"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            Diwali Sales 
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            Get upto 70% off on all crackers
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
            <Button
                color="blue"
                variant='outlined'
                buttonType="link"
                size="lg"
                ripple="dark"
            >
                View Products
            </Button>
                
        </CardFooter>
      </Card>
  )
}

export default Advertise