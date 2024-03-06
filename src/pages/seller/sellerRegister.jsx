import logo from "/img/logo.png"
import React from "react";
import { Stepper, Step, Button,Card,CardBody,CardHeader,Typography} from "@material-tailwind/react";
import { CiCircleCheck,CiPhone   } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import {Advertise} from "../../components"
import {Step1,Step2,Step3} from "../../components/seller"
export function SellerRegister() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = (num) => !isLastStep && setActiveStep(num);
  const handlePrev = (num) => !isFirstStep && setActiveStep(num);

  return (
    <div className=' w-full bg-white min-h-screen min-w-screen flex md:p-2'>
       <nav className='md:-mt-3 w-[25%]'>
          <img className='w-24 h-24 sticky top-0' src={logo} alt="logo" />
          <div className="min-h-[65vh] w-full ">           
            <Card className="w-[80%] md:ml-5 sticky top-24 min-h-full border-2" color="lime">
              <CardHeader shadow={false} floated={false} className="bg-inherit">
                <Typography className="flex justify-center items-center gap-2 font-secondary font-bold text-2xl text-center">
                  <CgSandClock/>Processing ...
                </Typography>
              </CardHeader>
              <CardBody>
                 <div className="flex flex-col justify-center items-center gap-2">
                    <span className="w-[85%] flex justify-between items-center"><span className="flex justify-center gap-3 items-center"><CiPhone className="w-5 h-5 " strokeWidth={2} color="black"/> <Typography className="font-secondary font-semibold text-black/80">Mobile Number</Typography></span><IoCheckmarkDoneCircle color="green " className="w-6 h-6 "/></span>
                    <span className="w-[85%] flex justify-between items-center"><span className="flex justify-center gap-3 items-center"><CiPhone className="w-5 h-5 " strokeWidth={2} color="black"/> <Typography className="font-secondary font-semibold text-black/80">Email ID</Typography></span><IoCheckmarkDoneCircle color="green " className="w-6 h-6 "/></span>
                    <span className="w-[85%] flex justify-between items-center"><span className="flex justify-center gap-3 items-center"><CiPhone className="w-5 h-5 " strokeWidth={2} color="black"/> <Typography className="font-secondary font-semibold text-black/80">GSTIN Number</Typography></span><IoCheckmarkDoneCircle color="green " className="w-6 h-6 "/></span>
                    <span className="w-[85%] flex justify-between items-center"><span className="flex justify-center gap-3 items-center"><CiPhone className="w-5 h-5 " strokeWidth={2} color="black"/> <Typography className="font-secondary font-semibold text-black/80">Password Creation</Typography></span><IoCheckmarkDoneCircle color="green " className="w-6 h-6 "/></span>
                    <span className="w-[85%] flex justify-between items-center"><span className="flex justify-center gap-3 items-center"><CiPhone className="w-5 h-5 " strokeWidth={2} color="black"/> <Typography className="font-secondary font-semibold text-black/80">Full Name</Typography></span><IoCheckmarkDoneCircle color="green " className="w-6 h-6 "/></span>
                    <span className="w-[85%] flex justify-between items-center"><span className="flex justify-center gap-3 items-center"><CiPhone className="w-5 h-5 " strokeWidth={2} color="black"/> <Typography className="font-secondary font-semibold text-black/80">Display Name</Typography></span><IoCheckmarkDoneCircle color="green " className="w-6 h-6 "/></span>
                    <span className="w-[85%] flex justify-between items-center"><span className="flex justify-center gap-3 items-center"><CiPhone className="w-5 h-5 " strokeWidth={2} color="black"/> <Typography className="font-secondary font-semibold text-black/80">Mobile Number</Typography></span><IoCheckmarkDoneCircle color="green " className="w-6 h-6 "/></span>
                 </div>
              </CardBody>
            </Card>
          </div>
       </nav>
       <div className='bg-white w-[50%]  '>
          <div className="w-[75%] mr-auto">
          <Stepper
          className="sticky top-0 z-50 bg-white h-28 md:-mt-3 "
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
          {(() => {
            switch (activeStep) {
              case 0:
                return <Step1 handleNext={handleNext} handlePrev={handlePrev} />;
              case 1:
                return <Step2 handleNext={handleNext} handlePrev={handlePrev} />;
              case 2:
                return <Step3 handleNext={handleNext} handlePrev={handlePrev} />;
              default:
                return null; // or some default component
            }
          })()}
</div>

      </div>
      </div>    
        <Advertise/>
      </div>
  )
}

export default SellerRegister