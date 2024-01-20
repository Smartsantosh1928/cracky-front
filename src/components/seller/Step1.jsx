import {Button,Menu,
    Input,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
  } from "@material-tailwind/react"
  import React from "react";
import { CgHome } from "react-icons/cg";
    
  export function Step1() {
       return (
       <section className="md:mt-9">
        <div className="flex flex-col gap-5 justify-center items-center py-6 ">
            <Input size="lg"  variant="outlined" label="Enter Mobile Number*" icon={<CgHome/>}/>
            <Input size="lg" variant="outlined" label="EmailID*"/>
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