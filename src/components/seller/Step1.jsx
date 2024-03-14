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

export function Step1({handleNext, handlePrev}) {
  const [MobOtp, setMobOtp] = useState('');
  const [mailOtp, setMailOtp] = useState('');
      React.useEffect(()=>{
        console.log(MobOtp,mailOtp);
      },[MobOtp,mailOtp])
       return (
       <section className="md:mt-9">
        <div className="flex flex-col gap-5 justify-center items-center py-6 ">
            <span className="relative w-full"><Input size="lg"  variant="outlined" label="Enter Mobile Number*" /><span className="absolute top-3 right-3 text-blue-600 text-sm">Send OTP</span></span>
            <div className=" w-full flex flex-col gap-2"> 
              <Typography className="font-secondary text-xs text-gray-600">* Enter OTP sent to your mobile number</Typography>
              <OtpInput
                containerStyle={"w-96 flex justify-start items-start gap-1 h-10"}
                inputStyle={"border-[1px] border-gray-500  text-2xl   rounded-md text-gray-800"}
                className=""
                placeholder="000000"
                onPaste={(otp)=>setMobOtp(otp)}
                value={MobOtp}
                onChange={(otp)=>setMobOtp(otp)}
                inputType="text"
                numInputs={6}
                renderSeparator={<span>:</span>}
                renderInput={(props) => <input {...props} />}
              />
              <Typography className="font-secondary text-xs text-gray-600">Didn’t receive OTP? <span className="text-blue-500 cursor-pointer"> Resend OTP</span></Typography>
            </div>
            <span className="relative w-full"><Input size="lg"  variant="outlined" label="Enter EmailID*" /><span className="absolute top-3 right-3 text-blue-600 text-sm">Send OTP</span></span>
            <div className=" w-full flex flex-col gap-2">
              <Typography className="font-secondary text-xs text-gray-600">* Enter OTP sent to your MailID</Typography>
              <OtpInput
                containerStyle={"w-96 flex justify-start items-start gap-1 h-10"}
                inputStyle={"border-[1px] border-gray-500  text-2xl   rounded-md text-gray-800"}
                className=""
                placeholder="000000"
                onPaste={(otp)=>setMailOtp(otp)}
                value={mailOtp}
                onChange={(otp)=>setMailOtp(otp)}
                inputType="text"
                numInputs={6}
                renderSeparator={<span>:</span>}
                renderInput={(props) => <input {...props} />}
              />
              <Typography className="font-secondary text-xs text-gray-600">Didn’t receive OTP? <span className="text-blue-500 cursor-pointer"> Resend OTP</span></Typography>
            </div>
            <Input size="lg" variant="outlined" label="Enter GSTIN*"/>
        </div>
        <div className="">
            <Typography className="font-secondary text-gray-700 text-sm pr-10 font-semibold">GSTIN is required to sell products on Cracky.You can also share it in the final step.</Typography>
            <Typography className="font-secondary text-gray-600 text-sm">By continuing, I agree to Flipkart’s <span className="text-blue-500">Terms of Use</span> & <span className="text-blue-500">Privacy Policy</span> </Typography>
        </div>
        <div className="py-5">
            <Button onClick={()=>handleNext(1)} className="bg-[#192A51] capitalize font-secondary font-thin flex  justify-center items-center gap-3" size="sm"><span className="">Register & Continue</span> <FaArrowRight/> </Button>
        </div>
       </section>
    )
  }
  
  export default Step1