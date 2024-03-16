import {Button,Menu,
  Input,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react"
import { FaArrowRight } from "react-icons/fa6";
import AddressData from '../../data/common/AddressData.json';
import React,{ useState, useContext, useEffect } from 'react'
import Select from 'react-select'

export function Step3({handleNext, handlePrev}) {
      
  const [ addressData, setAddressData ] = useState([])
  const [ address, setAddress ] = useState({})

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

        console.log(transformedData);
        setAddressData(transformedData);
      }, [])

      const handleAddressChange = (e) => {
        setAddress({...address,[e.value] : e.label})
      }

        return (
        <section className="md:mt-9">
        <div className="flex flex-col gap-5 justify-center items-start py-6 ">
            <Typography className="font-secondary text-gray-700 text-sm pr-10 font-semibold">Enter you Address Details</Typography>
            <Input label="Address Line 1 ..." type="text"></Input>
            <Input label="Address Line 2 ..." type="text"></Input>
            <Select name='state' value={address.state=="" ? "" : ({ value: "state", label: address.state })} options={Object.keys(addressData).map(state => ({ value: "state", label: state }))} onChange={handleAddressChange} />
            {address.state && <Select placeholder="hii" name='district' value={address.district=="" ? "" : ({ value: "district", label: address.district })} options={Object.keys(addressData[address.state]).map(district => ({ value: "district", label: district }))} onChange={handleAddressChange} />}
            {address.district && <Select name='city' value={address.city=="" ? "" : ({ value: "city", label: address.city })} options={Object.keys(addressData[address.state][address.district]).map(city => ({ value: "city", label: city }))} onChange={handleAddressChange} />}
            {address.city && <Select name='area' value={address.area=="" ? "" : ({ value: "area", label: address.area })} options={addressData[address.state][address.district][address.city].map(area => ({ value: "area", label: area.Area, "pincode": area.Pincode }))} onChange={handleAddressChange} />}
            {address.area && <Input color="blue" disabled label="Pin Code" value={address.pincode} />}
                      
        </div>
        <div className="py-5">
            <Button onClick={()=>handleNext(2)} className="bg-[#192A51] font-secondary font-thin capitalize flex  justify-center items-center gap-3" size="sm"><span className="">Continue</span> <FaArrowRight/> </Button>
        </div>
        </section>
    ) 
}
  
  export default Step3