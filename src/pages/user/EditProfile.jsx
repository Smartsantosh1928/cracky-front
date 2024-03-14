import React,{ useState, useContext, useEffect } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Avatar,
  Checkbox,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Radio 
} from "@material-tailwind/react";
import Select from 'react-select'
import axios from "../../utils/axios.config"
import { Advertise, FileUpload } from '../../components';
import { CiEdit,CiCircleCheck  } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FcMultipleSmartphones } from "react-icons/fc";
import { FaSave } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import AddressData from '../../data/common/AddressData.json';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';

export function EditProfile() {

  const url = import.meta.env.VITE_URL;
  const [ details, setDetails ] = useState({});
  const [ addressData, setAddressData ] = useState([]);
  const [ dialogOpen, setDialogOpen ] = useState(false);
  const [ address, setAddress ] = useState([]);

  useEffect(() => {
      axios.get(`${url}/auth/me`)
      .then(res => {
        setDetails(res.data.user);
      })
      .catch(err => console.log(err.response))
  },[])

  useEffect(() => {
    setAddress(details.address)
  },[details])

  // useEffect(() => {
  //   console.log(details);
  // },[details])

  const addAddress = () => {
    if(address.length >= 5) {
      toast.error('At most 5 delivery address can be added');
      return;
    }
    setAddress([...address, {
      addressLine1: '',
      addressLine2: '',
      state: '',
      district: '',
      city: '',
      area: '',
      pincode: ''
    }]);
  }

  const removeAddress = (index) => {
    const list = [...address];
    list.splice(index,1);
    setAddress(list);
  }

  const handleDialogOpen = () => { 
    setDialogOpen(!dialogOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = details;
    data.address = address;
    setDetails(data);
    // console.log(data);
    axios.put(`${url}/user/update`,data)
    .then(res => {
      toast.success('Profile updated successfully');
    }).catch(err => {
      toast.error('Something went wrong. Please try again later');
    })
  }

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  const handleAddressChange = (e,index) => {
    if(e.pincode){
      const { value, label, pincode } = e;
      const list = [...address];
      list[index][value] = label;
      list[index].pincode = pincode;
      setAddress(list);
      return;
    }
    if(e.value){
      const { value, label } = e;
      const list = [...address];
      if(value === 'state'){
        list[index].district = '';
        list[index].city = '';
        list[index].area = '';
        list[index].pincode = '';
      }
      if(value === 'district'){
        list[index].city = '';
        list[index].area = '';
        list[index].pincode = '';
      }
      if(value === 'city'){
        list[index].area = '';
        list[index].pincode = '';
      }
      list[index][value] = label;
      setAddress(list);
      return;
    }
    const { name, value } = e.target;
    const list = [...address];
    list[index][name] = value;
    setAddress(list);
  }
  
  useEffect(() => {
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
    
    setAddressData(transformedData);
  }, [])


  return (
    <div className='w-full h-full flex justify-center md:justify-evenly items-center md:items-start flex-col md:flex-row gap-5 my-5'>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
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
              src={details.profilePictureUrl}
              className="border border-blue-500 shadow-xl shadow-blue-900/20 ring-4 ring-blue-500/30"
            />
            <CiEdit className="w-7 h-7 p-1 cursor-pointer rounded-full absolute top-0 bg-blue-gray-500 text-white right-1" onClick={handleDialogOpen} />
            </div>
        </div>
        <CardFooter className="flex justify-center mt-5 gap-1 pt-2">
          <Typography variant='small' color='gray' >
            Customer Since
          </Typography>
          <Typography variant='small' color='black' >
            {2019}
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
            <Button color="blue" onClick={handleSubmit} className='px-3 py-1 flex justify-center items-center text-xl gap-1' >
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
                        <Typography color="blue-gray" variant='lead' >Connections</Typography>
                      </div>
                      <div className='flex flex-col gap-5 md:-ml-32'>
                        <Input color="blue" label="Name" name='name' value={details.name} onChange={handleDetailsChange} />
                        <Input color="blue" label="Email" name='email' value={details.email} disabled />
                        <Input color="blue" label="Phone" name='phoneNumber' value={details.phoneNumber} onChange={handleDetailsChange} />
                        <div className='ml-0 md:-ml-3'>
                          <Typography color="blue-gray" variant='lead' className='block md:hidden' >Gender</Typography>
                          <Radio color="blue" name='gender' label="Male" value="male" checked={details.gender=="male"} onChange={handleDetailsChange} />
                          <Radio color="blue" name='gender' label="Female" value="female" checked={details.gender=="female"} onChange={handleDetailsChange} />
                          <Radio color="blue" name='gender' label="Others" value="others" checked={details.gender=="others"} onChange={handleDetailsChange} />
                        </div>
                        <div className='w-[60%] ml-0 md:-ml-3'>
                          <Typography color="blue-gray" variant='lead' className='block md:hidden' >Email Offers</Typography>
                          <Radio icon={<CiCircleCheck className='w-6 h-6'/>} name='emailOffers' value={true} color='green' label="Yes" checked={details.emailOffers== "true" || details.emailOffers==true} onChange={handleDetailsChange} />
                          <Radio icon={<FaRegCircleXmark className='w-6 h-6'/>} name='emailOffers' value={false} color='red' label="No" checked={details.emailOffers=="false" || details.emailOffers==false} onChange={handleDetailsChange} />
                        </div>
                        <div className='ml-0 md:-ml-3'>
                          <Typography color="blue-gray" variant='lead' className='block md:hidden' >Connections</Typography>
                          <div className='grid grid-cols-3 gap-5'>
                            {details?.providers?.map((provider,key) => <Card key={key} className='flex justify-center items-center flex-row gap-3 py-2 md:-mt-3'>
                              {provider=="google" && <FcGoogle className='w-6 h-6' />}
                              {provider=="facebook" && <FaFacebook className='w-6 h-6' />}
                              {provider=="email" && <MdMarkEmailRead className='w-6 h-6' />}
                              <Typography color="blue-gray" className='text-xl hidden md:block' >{provider.charAt(0).toUpperCase() + provider.slice(1)}</Typography>
                            </Card>)}
                          </div>
                        </div>
                      </div>  
                    </div>
                </TabPanel>
            </TabsBody>
            <TabsBody className='overflow-auto'>
                <TabPanel key="contactInfo" value="contactInfo" className='grid gap-10'>
                  {address && address.map((e,key) => <div className='h-full border-4 p-3'>
                    <div className='flex justify-between'>
                      <Typography color="blue-gray" className='text-2xl md:text-2xl' >Delivery Address {key+1}</Typography>
                      <IoIosCloseCircleOutline className='w-7 h-7 cursor-pointer text-red-400' onClick={() => removeAddress(key)} />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-6'>
                      <div className='md:flex flex-col gap-7 hidden'>
                        <Typography color="blue-gray" variant='lead' >Address Line 1</Typography>
                        <Typography color="blue-gray" variant='lead' >Address Line 2</Typography>
                        <Typography color="blue-gray" variant='lead' >State</Typography>
                        {e.state && <Typography color="blue-gray" variant='lead' >District</Typography>}
                        {e.district && <Typography color="blue-gray" variant='lead' >City</Typography>}
                        {e.city && <Typography color="blue-gray" variant='lead' >Area</Typography>}
                        {e.area && <Typography color="blue-gray" variant='lead' >Pin Code</Typography>}
                      </div>
                      <div className='flex flex-col gap-5 md:-ml-32'>
                        <Input color="blue" label="Address Line 1" name='addressLine1' value={e.addressLine1} onChange={(e) => handleAddressChange(e,key)} />
                        <Input color="blue" label="Address Line 2" name='addressLine2' value={e.addressLine2} onChange={(e) => handleAddressChange(e,key)} />
                        <Select name='state' value={e.state=="" ? "" : ({ value: "state", label: e.state })} options={Object.keys(addressData).map(state => ({ value: "state", label: state }))} onChange={(e) => handleAddressChange(e,key)} />
                        {e.state && <Select name='district' value={e.district=="" ? "" : ({ value: "district", label: e.district })} options={Object.keys(addressData[e.state]).map(district => ({ value: "district", label: district }))} onChange={(e) => handleAddressChange(e,key)} />}
                        {e.district && <Select name='city' value={e.city=="" ? "" : ({ value: "city", label: e.city })} options={Object.keys(addressData[e.state][e.district]).map(city => ({ value: "city", label: city }))} onChange={(e) => handleAddressChange(e,key)} />}
                        {e.city && <Select name='area' value={e.area=="" ? "" : ({ value: "area", label: e.area })} options={addressData[e.state][e.district][e.city].map(area => ({ value: "area", label: area.Area, "pincode": area.Pincode }))} onChange={(e) => handleAddressChange(e,key)} />}
                        {e.area && <Input color="blue" disabled label="Pin Code" value={e.pincode} />}
                      </div>  
                    </div>
                  </div>)}
                  <div className='flex justify-center items-end flex-col mt-5'>
                    <Button color="blue" onClick={addAddress} className='px-3 py-1 flex justify-center items-center text-xl gap-1' >
                      <IoIosAddCircleOutline className='w-5 h-5' />
                      <span className='text-sm'>
                        Add new
                      </span>
                    </Button>
                    <Typography color="blue" variant='small' >At most 5 delivery addess can be added</Typography>
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