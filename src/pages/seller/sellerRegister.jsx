import logo from "/img/logo.png"
import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { CiCircleCheck   } from "react-icons/ci";
import {Advertise} from "../../components"
import {Step1} from "../../components/seller"
export function SellerRegister() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className='w-full bg-white min-h-screen min-w-screen flex md:p-2'>
       <nav className=' w-[15%]'>
          <img className='w-24 h-24' src={logo} alt="logo" />
       </nav>
       <div className=' w-[70%] md:px-32 md:pt-9'>
          <div className="w-[75%] mr-auto">
          <Stepper
            lineClassName="bg-[#ECF4FB]"
            activeLineClassName="bg-[#192A51]"
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step 
              className="relative"
              activeClassName="ring-0 !bg-[#192A51] text-white"
              completedClassName="!bg-[#192A51] text-white"
            >
              <CiCircleCheck strokeWidth={0.8}   className="h-5 w-5" />
              <div className="absolute -top-1.5 -right-28 text-black text-sm uppercase">Email ID & GST</div>
            </Step>
            <Step 
            className="bg-[#ECF4FB] relative"
            activeClassName="ring-0 !bg-[#192A51] text-white"
            completedClassName="!bg-[#192A51] text-white"
            >
              <CiCircleCheck   strokeWidth={0.8} className="h-5 w-5" />
              <div className="absolute -top-1.5 -right-40 text-black text-sm uppercase">Password Creation</div>
            </Step>
            <Step 
            className="bg-[#ECF4FB] relative"
            activeClassName="ring-0 !bg-[#192A51] text-white"
            completedClassName="!bg-[#192A51] text-white"
            >
              <CiCircleCheck  strokeWidth={0.8}  className="h-5 w-5" />
              <div className="absolute -top-1.5 -right-24 text-black text-sm uppercase">ONBOARDING</div>
            </Step>
          </Stepper>
        <div className=" ">
          <div><Step1/></div>
          <div></div>
          <div></div>
        </div>
      </div>
      </div>    
        <Advertise/>
    </div>
  )
}

export default SellerRegister