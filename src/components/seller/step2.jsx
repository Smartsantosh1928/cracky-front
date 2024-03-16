import {Button,Menu,
    Input,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
  } from "@material-tailwind/react"
import React,{useState} from "react";
import OtpInput from 'react-otp-input';
import { FaArrowRight } from "react-icons/fa6";
import { VscEye,VscEyeClosed  } from "react-icons/vsc";
import PasswordStrengthBar from "react-password-strength-bar"
import { BsExclamationCircle } from "react-icons/bs";


export function Step2({handleNext, handlePrev}) {
  const [MobOtp, setMobOtp] = useState('');
  const [mailOtp, setMailOtp] = useState('');
      React.useEffect(()=>{
        console.log(MobOtp,mailOtp);
      },[MobOtp,mailOtp])
       return (
       <section className="md:mt-9">
        <div className="">
            <Typography className="font-secondary text-gray-700 text-sm pr-10 font-semibold">Almost there ...</Typography>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center py-6 ">
            <Input size="lg"  variant="outlined" label="Create Password* " icon={<VscEyeClosed  className="w-6 h-6"/>} />
            <Input size="lg"  variant="outlined" label="Confirm Password* " icon={<VscEyeClosed  className="w-6 h-6"/>} />
            <PasswordStrengthBar scoreWordClassName={"text-center"} className="w-full" password={"1234gh@rt76g"} />
            <Input size="lg" variant="outlined" label="Enter Full Name*"/>
            <span className="relative w-full"><Input size="lg"  variant="outlined" label="Enter Display Name*" /><BsExclamationCircle  color="gray" className="absolute top-3 w-5 h-5 md:-right-7 "/>  </span>
        </div>
        <div className="py-5">
            <Button onClick={()=>handleNext(2)} className="bg-[#192A51] font-secondary font-thin capitalize flex  justify-center items-center gap-3" size="sm"><span className="">Continue</span> <FaArrowRight/> </Button>
        </div>
       </section>
    )
  }
  
  export default Step2