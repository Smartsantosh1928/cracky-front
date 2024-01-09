import { useState, useContext, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  Typography,
  Input,
  Avatar,
  Checkbox,
  IconButton,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import axios from 'axios';
import { Advertise } from '../../components';
import { CiEdit,CiCircleCheck  } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FcMultipleSmartphones } from "react-icons/fc";
import { FaSave } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

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
    })
  }, [])

  return (
    <div className='w-full h-full flex justify-center md:justify-evenly items-center md:items-start flex-col md:flex-row gap-5 my-5'>
      <Card className="md:w-[20%] w-[80%]">
        <div className='flex justify-center items-center flex-col gap-5 mt-5 w-full h-full'>
          <div className='flex flex-col  justify-center items-center'>
            <Typography variant="h3" color="blue-gray" className="mb-2 font-secondary">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="font-medium font-secondary" textGradient>
              Email
            </Typography>
          </div>
          <div className='relative'>
            <Avatar
              size="xxl"
              alt="avatar"
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              className="border border-blue-500 shadow-xl shadow-blue-900/20 ring-4 ring-blue-500/30"
            />
            <CiEdit className="w-7 h-7 p-1 cursor-pointer rounded-full absolute top-0 bg-blue-gray-500 text-white right-1" />
            </div>
        </div>
        <CardFooter className="flex justify-center gap-1 pt-2">
          <Typography variant='small' color='gray' >
            Customer Sincle
          </Typography>
          <Typography variant='small' color='black' >
            2019
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-[80%] md:w-[50%]">
        <div className='flex justify-between items-center w-full p-5'>
          <Typography variant="h3" color="black" className="text-black/70 font-primary tracking-wide">
            Edit Profile
          </Typography>
          <Button color="blue" className='px-10 flex justify-center items-center text-xl gap-1' >
            <FaSave className='w-6 h-6' />
            Save
          </Button>
        </div>
        <CardBody>
          <Tabs value="userInfo">
            <TabsHeader>
                <Tab key="userInfo" value="userInfo">
                  <div className="flex items-center gap-2">
                    <CgProfile className='w-6 h-6' />
                    <Typography color="blue-gray">User Information</Typography>
                  </div>
                </Tab>
                <Tab key="contactInfo" value="contactInfo">
                  <div className="flex items-center gap-2">
                    <FcMultipleSmartphones className='w-6 h-6' />
                    <Typography color="blue-gray">User Information</Typography>
                  </div>
                </Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel key="userInfo" value="userInfo">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5' >
                      <Input color="blue" label="Name" />
                      <Input color="blue" label="Email" 
                        icon={true ? 
                          <abbr title='Verified'><CiCircleCheck className='w-6 h-6 text-green-800' /></abbr>
                        : 
                          <abbr title='Not Verified'><FaRegCircleXmark className='w-6 h-6 text-red-800'/></abbr>
                        }
                      />
                      <Input color="blue" label="Phone" />
                      <Input color="blue" label="" />
                    </div>
                </TabPanel>
            </TabsBody>
            <TabsBody>
                <TabPanel key="contactInfo" value="contactInfo">
                    fhuerwhf8uewrshfrwsuifhwes8rifhjsw
                </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
      <Advertise />
    </div>
  )
}

export default EditProfile