import { useState, useContext, useEffect } from 'react'
import {
  Card,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';
import { Advertise } from '../../components';

export function EditProfile() {

  const url = import.meta.env.VITE_URL;
  const [ details, setDetails ] = useState(false);

  useEffect(() => {
    axios.get(`${url}/user/`)
    .then((res) => {
      console.log(res);
      setDetails(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className='w-full h-full flex justify-evenly items-start my-5 md:m-10'>
      <Card className="w-[60%]">
        <div className='w-full'>
          <div className="w-full flex justify-center items-center mt-5">
            <Typography color="blue" className='text-3xl md:text-6xl font-primary font-thin' >Personal Information</Typography>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:px-20 gap-x-20 gap-y-8'>
            <Input label="Name" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Secondary Email" size="lg" />
            <Input label="Password" size="lg" />
            <Input label="Phone Number" size="lg" />
            <Input label="Gender" size="lg" />
          </div>
        </div>
        <div className='w-full'>
          <div className="w-full flex justify-center items-center">
            <Typography color="blue" className='text-3xl md:text-6xl font-primary font-thin' >Contact Information</Typography>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:px-20 gap-x-20 gap-y-8'>
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Email" size="lg" />
          </div>
        </div>
      </Card>
      <Advertise />
    </div>
  )
}

export default EditProfile