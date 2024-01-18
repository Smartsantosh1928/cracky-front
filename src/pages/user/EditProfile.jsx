import React,{ useState, useContext, useEffect } from 'react'
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
  Option,
} from "@material-tailwind/react";
import Select from 'react-select'
import axios from 'axios';
import { Advertise, FileUpload } from '../../components';
import { CiEdit,CiCircleCheck  } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FcMultipleSmartphones } from "react-icons/fc";
import { FaSave } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import AddressData from '../../data/common/AddressData.json';

export function EditProfile() {

  const url = import.meta.env.VITE_URL;
  const [ details, setDetails ] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPincode, setSelectedPincode] = useState('');
  const [ data, setData ] = useState([]);
  const [ dialogOpen, setDialogOpen ] = useState(false);

  const handleDialogOpen = () => { 
    setDialogOpen(!dialogOpen);
  };

  const handleStateChange = (event) => {
    console.log(event.value);
    setSelectedState(event.value);
    setSelectedDistrict('');
    setSelectedCity('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.value);
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.value);
    setSelectedPincode(event.pincode);
  }

  const handlePincodeChange = (event) => {
    setSelectedPincode(event.target.value);
  }

  console.log(selectedState, selectedDistrict, selectedCity);
  
  useEffect(() => {
    const statesSet = new Set();
    // AddressData.forEach(item => {
    //   if (!statesSet.has(item.State)) {
    //     statesSet.add(item.State);
    //   }
    // });
    // console.log([...statesSet]);

    const transformedData = {};
    
    AddressData.forEach(item => {
      const { State, District, City, Pincode } = item;
    
      if (!transformedData[State]) {
        transformedData[State] = {};
      }
    
      if (!transformedData[State][District]) {
        transformedData[State][District] = {};
      }
    
      if (!transformedData[State][District][City]) {
        transformedData[State][District][City] = [];
      }
    
      transformedData[State][District][City].push({ Pincode, Area: item.Area });
    });
    
    console.log(Object.keys(transformedData));
    setData(transformedData);

    // axios.get(`${url}/user/`)
    // .then((res) => {
    //   console.log(res);
    //   setDetails(res.data);
    // })
    // .catch((err) => {
    // })
  }, [])


  return (
    <div className='w-full h-full flex justify-center md:justify-evenly items-center md:items-start flex-col md:flex-row gap-5 my-5'>
      <Card className="md:w-[20%] w-[80%]">
        <div className='flex justify-center items-center flex-col gap-5 mt-5 w-full h-full'>
          <div className='flex flex-col  justify-center items-center'>
            <Typography color="blue-gray" className="text-3xl mb-2 font-secondary">
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
            <CiEdit className="w-7 h-7 p-1 cursor-pointer rounded-full absolute top-0 bg-blue-gray-500 text-white right-1" onClick={handleDialogOpen} />
            </div>
        </div>
        <CardFooter className="flex justify-center mt-5 gap-1 pt-2">
          <Typography variant='small' color='gray' >
            Customer Sincle
          </Typography>
          <Typography variant='small' color='black' >
            2019
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-[80%] md:w-[50%] h-full">
        <div className='flex justify-between items-center w-full p-5'>
          <Typography color="black" className="text-xl md:text-2xl text-black/70 font-primary tracking-wide">
            Edit Profile
          </Typography>
          <div className='flex justify-evenly gap-3 items-center'>
            <Button className='px-3 py-1 flex justify-center items-center text-xl gap-1 bg-blue-gray-200' >
              <span className='text-sm'>
                Cancel
              </span>
            </Button>
            <Button color="blue" className='px-3 py-1 flex justify-center items-center text-xl gap-1' >
              <FaSave className='w-5 h-5' />
              <span className='text-sm'>
                Save
              </span>
            </Button>
          </div>
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
                    <Typography color="blue-gray">Contact Information</Typography>
                  </div>
                </Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel key="userInfo" value="userInfo">
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-6'>
                      <div className='md:flex flex-col gap-7 hidden'>
                        <Typography color="blue-gray" variant='lead' >Name</Typography>
                        <Typography color="blue-gray" variant='lead' >Email</Typography>
                        <Typography color="blue-gray" variant='lead' >Phone Number</Typography>
                        <Typography color="blue-gray" variant='lead' >Gender</Typography>
                        <Typography color="blue-gray" variant='lead' >Email Offers</Typography>
                      </div>
                      <div className='flex flex-col gap-5 md:-ml-32'>
                        <Input color="blue" label="Name" />
                        <Input color="blue" label="Email" />
                        <Input color="blue" label="Phone" />
                        <div className='ml-0 md:-ml-3'>
                          <Typography color="blue-gray" variant='lead' className='block md:hidden' >Gender</Typography>
                          <Checkbox color="blue" label="Male" />
                          <Checkbox color="blue" label="Female" />
                          <Checkbox color="blue" label="Others" />
                        </div>
                        <div className='w-[60%] ml-0 md:-ml-3'>
                          <Typography color="blue-gray" variant='lead' className='block md:hidden' >Email Offers</Typography>
                          <Checkbox icon={<CiCircleCheck className='w-6 h-6'/>} color='green' label="Yes" className='outline-none' />
                          <Checkbox icon={<FaRegCircleXmark className='w-6 h-6'/>} color='red' label="No" />
                        </div>
                      </div>  
                    </div>
                </TabPanel>
            </TabsBody>
            <TabsBody className=''>
                <TabPanel key="contactInfo" value="contactInfo">
                  <div className='min-h-[520px]'>
                    <Typography color="blue-gray" className='text-2xl md:text-4xl' >Delivery Address 1</Typography>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-6'>
                      <div className='md:flex flex-col gap-7 hidden'>
                        <Typography color="blue-gray" variant='lead' >Address Line 1</Typography>
                        <Typography color="blue-gray" variant='lead' >Address Line 2</Typography>
                        <Typography color="blue-gray" variant='lead' >State</Typography>
                        {selectedState && <Typography color="blue-gray" variant='lead' >District</Typography>}
                        {selectedDistrict && <Typography color="blue-gray" variant='lead' >City</Typography>}
                        {selectedCity && <Typography color="blue-gray" variant='lead' >Area</Typography>}
                        {selectedArea && <Typography color="blue-gray" variant='lead' >Pin Code</Typography>}
                      </div>
                      <div className='flex flex-col gap-5 md:-ml-32'>
                        <Input color="blue" label="Address Line 1" />
                        <Input color="blue" label="Address Line 2" />
                        <Select options={Object.keys(data).map(state => ({ value: state, label: state }))} onChange={handleStateChange} label="State" />
                        {selectedState && <Select options={Object.keys(data[selectedState]).map(district => ({ value: district, label: district }))} onChange={handleDistrictChange} label="District" />}
                        {selectedDistrict && <Select options={Object.keys(data[selectedState][selectedDistrict]).map(city => ({ value: city, label: city }))} onChange={handleCityChange} label="City" />}
                        {selectedCity && <Select options={data[selectedState][selectedDistrict][selectedCity].map(area => ({ value: area.Area, label: area.Area, pincode: area.Pincode }))} onChange={handleAreaChange} label="Area" />}
                        {selectedArea && <Input color="blue" label="Pin Code" value={selectedPincode} />}
                      </div>  
                    </div>
                    <div className='flex justify-end items-center mt-5'>
                      <Typography color="blue" variant='small' >At most 5 delivery addess can be added</Typography>
                    </div>
                  </div>
                </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
      <Advertise />
      <FileUpload dialogOpen={dialogOpen} handleOpen={handleDialogOpen} multiple={true} />
    </div>
  )
}

export default EditProfile