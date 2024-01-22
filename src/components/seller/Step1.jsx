import {Button,Menu,
    Input,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
  } from "@material-tailwind/react"
  import React,{useState} from "react";
import { CgHome } from "react-icons/cg";
import OtpInput from 'react-otp-input';

export function Step1() {
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
            <Input size="lg" variant="outlined" label="EnterGSTIN*"/>
        </div>
        <div className="">
            <Typography className="font-secondary text-sm pr-10">GSTIN is required to sell products on Cracky.You can also share it in the final step.</Typography>
            <Typography className="font-secondary text-sm">By continuing, I agree to Flipkart’s Terms of Use & Privacy Policy</Typography>
        </div>
        <div className="py-5">
            <Button color="" className="flex justify-center items-center gap-3" size="sm"><span className="">Register & Continue</span> <CgHome/> </Button>
        </div>
       </section>
    )
  }
  
  export default Step1