import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Checkbox,
    CardFooter,
} from "@material-tailwind/react";
import { LoginAuth, LogoutAuth, RegisterAuth } from '../store/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ReactSVG } from 'react-svg';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import signin from "/lotties/login.svg"
import signup from "/lotties/sign-up.svg"


export function Authenticator() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.auth);

    const [switched, setSwitched] = useState();

    const handleButtonClick = () => {
        setSwitched(!switched);
    };


  return (
    <div>
        <Dialog
            open
            size={"lg"}
            handler={() => dispatch(LogoutAuth())}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.3, y: -100 },
            }}
        >
            {/* <DialogHeader className="justify-end -mt-2">
                <IconButton
                    color="blue-gray"
                    size="md"
                    variant="text"
                    onClick={() => dispatch(LogoutAuth())}
                >
                    <IoIosCloseCircleOutline className="w-7 h-7" />
                </IconButton>
            </DialogHeader> */}
            <DialogBody className="relative grid place-items-center gap-4 ">
                
            <Card className={`w-full flex flex-row justify-between pb-5 font-secondary bg-[#f1eaff] `} >
           <CardHeader
                    shadow={true}
                    floated={false}
                    className={`w-full h-full z-50  transition-all  duration-[700ms] ${auth=="login" ? 'translate-x-0 bg-white' : 'bg-white translate-x-full'} ${auth=='login' ? 'animate-slideLeft' : 'animate-slideRight'} `}
                > { auth=="login" ?
                    (<div className=" flex flex-col justify-center  ">
                    <Typography variant="h3" color="blue" className="w-full h-full mb-3 mt-5  text-center items-center font-primary">
                        Login
                    </Typography>
                    <Typography variant="paragraph" className="font-secondary text-center" >
                        Get access to your Orders, Wishlist and Recommendations
                    </Typography>
                    <ReactSVG className="" loading={() => <span>Loading...</span>} src={signin}>
                        SVG is not supported
                    </ReactSVG></div>):(
                    <div className="">
                    <Typography variant="h3" color="deep-orange" className="w-full h-full mb-3 text-center items-center font-primary mt-5">
                        Sign Up
                    </Typography>
                    <Typography variant="paragraph" className="font-secondary text-center">
                        Sign up with your Email & basic information to get started
                    </Typography>
                    <ReactSVG className="md:p-9 " loading={() => <span>Loading</span>} src={signup}>
                        SVG is not supported
                    </ReactSVG>
                    {/* <img src={`/lotties/sign-up.svg`}  className={`md:p-8`} alt="" /> */}
                    </div>)}
                </CardHeader>
                
                <div className={`w-full h-full justify-center flex flex-col transition-transform duration-[700ms] ${auth=='login' ? 'translate-x-0' : '-translate-x-full'} ${auth=='login' ? 'animate-slideLeft' : 'animate-slideRight'}`}>
                {auth=="login" ?(
                    <div className="mt-10">
                    <CardBody className="flex flex-col gap-3">
                        <Input label="Email" variant="outlined" size="lg"/>
                        <Input label="Password" size="lg" />
                        <Typography
                            variant="small"
                            color="blue"
                            className="w-full h-full flex justify-end cursor-pointer font-secondary"
                        >
                            Forget Password ?
                        </Typography>
                        <div className="md:-ml-2.5">
                            <Checkbox label="Remember Me" color="blue" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0 flex flex-col gap-3">
                        <Typography variant="small" className="font-primary" >By continuing, you agree to Cracky's <Link to={"/"} className="text-blue-400 underline underline-offset-1" >Conditions of Use</Link> and <Link to={"/"} className="text-blue-400 underline underline-offset-1" >Privacy Notice</Link>.</Typography>
                        <Button variant="gradient" color="blue" fullWidth className="font-secondary flex justify-center items-center">
                            Sign In
                            <IoIosArrowRoundForward className="w-6 h-6 ml-1"/>
                        </Button>
                        <Typography variant="paragraph" className="mt-6 flex justify-center">
                            New to Cracky?
                            <Typography
                                variant="paragraph"
                                color="blue"
                                className="ml-1 font-secondary cursor-pointer"
                                onClick={() => dispatch(RegisterAuth())}
                            >
                            Create an account
                            </Typography>
                        </Typography>
                        <div className="w-full h-full mt-2 flex justify-center items-center flex-col ">
                            <span className="border border-b-0 border-blue-gray-300 w-[90%]"></span>
                            <div className="w-full h-full mt-4 flex justify-center items-center gap-5">
                                <Card className="p-3">
                                    <FcGoogle className="w-6 h-6" />
                                </Card>
                                <Card className="p-3">
                                    <FaFacebook className="w-6 h-6 text-blue-500" />
                                </Card>
                            </div>
                        </div>
                    </CardFooter>
                </div>):(
                    <div className="h-full flex flex-col justify-center items-center mr-5">
                    <CardBody className="flex flex-col gap-3 mt-9">
                        <Input label="Email" size="lg" />
                        <Input label="Password" size="lg" />
                        <Input label="Confirm Password" size="lg" />
                        <div className="-ml-2.5">
                            <Checkbox color='deep-orange' label={<Typography className="text-sm font-secondary" >Get Offers via email & you can unsubscribe anytime</Typography>} className=""  />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0 flex flex-col gap-3">
                        <Typography variant="small" className="font-primary" >By continuing, you agree to Cracky's <Link to={"/"} className="text-orange-900/90 underline underline-offset-1" >Conditions of Use</Link> and <Link to={"/"} className="text-orange-900/90 underline underline-offset-1" >Privacy Notice</Link>.</Typography>
                        <Button variant="gradient" color="deep-orange" fullWidth className="font-secondary flex justify-center items-center">
                            Create your Cracky account
                            <IoIosArrowRoundForward className="w-6 h-6 ml-1"/>
                        </Button>
                        <Typography variant="paragraph" className="mt-2 flex justify-center">
                            Existing customer?
                            <Typography
                                variant="paragraph"
                                color="deep-orange"
                                className="ml-1 font-secondary cursor-pointer"
                                onClick={() => dispatch(LoginAuth())}
                            >
                            Sign In
                            </Typography>
                        </Typography>
                        <div className="w-full h-full mt-2 flex justify-center items-center flex-col">
                            <span className="border border-b-0 border-blue-gray-300 w-[90%]"></span>
                            <div className="w-full h-full mt-4 flex justify-center items-center gap-5">
                                <Card className="p-3">
                                    <FcGoogle className="w-6 h-6" />
                                </Card>
                                <Card className="p-3">
                                    <FaFacebook className="w-6 h-6 text-blue-500" />
                                </Card>
                            </div>
                        </div>
                    </CardFooter>
                </div>
                )}</div>
                </Card>
            </DialogBody>
        </Dialog>
    </div>
  )
}

export default Authenticator