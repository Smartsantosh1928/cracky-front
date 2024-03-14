import {
    Dialog,
    DialogBody,
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    Input,
    Checkbox,
    CardFooter,
} from "@material-tailwind/react";
import { LoginAuth, LogoutAuth, RegisterAuth, ForgetPassword } from '../store/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import signin from "/lotties/login.svg"
import signup from "/lotties/sign-up.svg"
import PasswordStrengthBar from "react-password-strength-bar"
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";
import { BsShieldFillExclamation } from "react-icons/bs";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

export function Authenticator() {

    const url = import.meta.env.VITE_URL;
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.auth);
    const isMobile = useSelector(state => state.device.isMobile);

    const [ details, setDetails ] = useState({email: "", password: "", confirmPassword: "", emailOffers: false, passwordOpen: false, confirmPasswordOpen: false, errors: true});
    const [ errors, setErrors ] = useState({ email: "", password: "", confirmPassword: "" });

    const handlePasswordOpen = (type) => {
        if(type == "p"){
            setDetails(prevState => ({
                ...prevState,
                passwordOpen: !prevState.passwordOpen
            }))
        }
        else{
            setDetails(prevState => ({
                ...prevState,
                confirmPasswordOpen: !prevState.confirmPasswordOpen
            }))
        }
    }

    useEffect(() => {
        let hasErrors = false;
    
        if (auth === "login") {
            hasErrors = !(errors.email === "" && errors.password === "" && details.email !== "" && details.password !== "");
        } else if (auth === "forgetPassword") {
            hasErrors = !(errors.email === "" && details.email !== "");
        } else {
            hasErrors = !(errors.email === "" && errors.password === "" && errors.confirmPassword === "" &&
                details.email !== "" && details.password !== "" && details.confirmPassword !== "");
        }
    
        setDetails(prevDetails => ({
            ...prevDetails,
            errors: hasErrors
        }));
    }, [errors, auth]);
    
    const validateDetails = (name, value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
      
        if (name === 'password') {
          if (value.length < 8) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              password: 'Password must be at least 8 characters long.',
            }));
          }
          if (value !== details.confirmPassword) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              confirmPassword: "Passwords don't match.",
            }));
          }else{
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: "",
              }));
          }
        } else if (name === 'confirmPassword') {
          if (value !== details.password) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              confirmPassword: "Passwords don't match.",
            }));
          }
        } else if (name === 'email') {
          if (!emailRegex.test(value)) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: 'Please provide a valid email address.',
            }));
          }
        }
    };
      
    const handleChange = (e) => {
        if(e.target.value == "on") {
            setDetails(prevState => ({
                ...prevState,
                [e.target.name]: e.target.checked
            }));
            return;
        }
        const { name, value } = e.target;
        setDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
        validateDetails(name,value)
    }

    const handleSignIn = () => {
        console.log(details);
        axios.post(url + "/auth/login", {
            email: details.email,
            password: details.password
        })
        .then((res) => {
            const data = res.data;
            if (data.success) {
                sessionStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);
                toast.success(data.message)
                dispatch(LogoutAuth())
            } else {
                toast.error(data.message);
            }
        })
        .catch((error) => {
            if (error.response) {
                const responseData = error.response.data;
                toast.error(responseData.message);
            } else {
                toast.error("An error occurred");
            }
        });
    }

    const handleSignUp = () => {
        axios.post(url + "/auth/register", {
            email: details.email,
            password: details.password,
            emailOffers: details.emailOffers
        })
        .then((res) => {
            const data = res.data;
            console.log(data);
            if (data.success) {
                sessionStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);
                toast.success(data.message)
                dispatch(LogoutAuth())
            } else {
                toast.error(data.message);
            }
        })
        .catch((error) => {
            if (error.response) {
                const responseData = error.response.data;
                toast.error(responseData.message);
            } else {
                toast.error("An error occurred");
            }
        });
    }    

    const handleKeyUp = (e, type) => {
        if(e.key == "Enter"){
            if(type == "login"){
                handleSignIn();
            }
            else if(type == "register"){
                handleSignUp();
            }
            else{
                handleForgetPassword();
            }
        }
    }

    const handleForgetPassword = () => {

    }

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
            <DialogBody className="relative grid place-items-center gap-4 ">
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Card className={`w-full flex flex-row justify-between pb-5 font-secondary bg-[#f1eaff] `} >
            <IoIosCloseCircleOutline className={`w-7 h-7 absolute -top-16 -right-8 md:-top-12 md:-right-12 bg-white rounded-full cursor-pointer z-50`} onClick={() => dispatch(LogoutAuth())} />
            {!isMobile && <CardHeader
                    shadow={true}
                    floated={false}
                    className={`w-full h-full z-50  transition-all  duration-[700ms] ${auth=="login" ? 'translate-x-0 bg-white' : 'bg-white translate-x-full'} ${auth=='login' ? 'animate-slideLeft' : 'animate-slideRight'} `}
                >   {auth=="login" &&
                    (<div className=" flex flex-col justify-center  ">
                    <Typography variant="h3" color="blue" className="w-full h-full mb-3 mt-5  text-center items-center font-primary">
                        Login
                    </Typography>
                    <Typography variant="paragraph" className="font-secondary text-center" >
                        Get access to your Orders, Wishlist and Recommendations
                    </Typography>
                    <ReactSVG className="" loading={() => <span>Loading...</span>} src={signin}>
                        SVG is not supported
                    </ReactSVG></div>)}
                    {auth=="forgetPassword" &&
                    (<div className=" flex flex-col justify-center  ">
                    <Typography variant="h3" color="blue" className="w-full h-full mb-3 mt-5  text-center items-center font-primary tracking-wider">
                        Reset Password
                    </Typography>
                    <Typography variant="paragraph" className="font-secondary text-center px-5" >
                        Enter your email address to receive Password Reset link
                    </Typography>
                    <ReactSVG className="" loading={() => <span>Loading...</span>} src={signin}>
                        SVG is not supported
                    </ReactSVG></div>)}
                    {auth=="register"&&(
                    <div className="">
                    <Typography variant="h3" color="deep-orange" className="w-full h-full mb-3 text-center items-center font-primary mt-5">
                        Sign Up
                    </Typography>
                    <Typography variant="paragraph" className="font-secondary text-center px-3">
                        Sign up with your Email & basic information to get started
                    </Typography>
                    <ReactSVG className="md:p-9 " loading={() => <span>Loading</span>} src={signup}>
                        SVG is not supported
                    </ReactSVG>
                    </div>)}
                </CardHeader>}
                
                <div className={`w-full h-full justify-center flex flex-col transition-transform duration-[700ms] ${auth=='login' ? 'translate-x-0' : 'md:-translate-x-full'} ${auth=='login' ? 'animate-slideLeft' : 'md:animate-slideRight'}`}>
                {isMobile && <Typography variant="h4" color={auth=="register"? "deep-orange" :"blue"} className="w-full text-center font-secondary mt-2" >
                        {auth=="login" && "Login"}
                        {auth=="forgetPassword" && "Reset Password"}
                        {auth=="register" && "Sign Up"}
                    </Typography>}
                {auth=="login" &&(
                    <div className="">
                    <CardBody className="flex flex-col gap-3">
                        <Input label="Email" variant="outlined" size="lg" value={details.email} name="email" onChange={handleChange}/>
                        {errors.email!="" && <Typography
                            variant="small"
                            className="-mt-[10px] ml-1 flex items-center gap-1 font-normal text-red-400"
                        >
                            <BsShieldFillExclamation className="w-3 h-3" />{errors.email}    
                        </Typography>}
                        <Input label="Password" size="lg" name="password" type={details.passwordOpen ? "text": "password"} 
                        icon={details.passwordOpen ? <PiEyeThin className="w-6 h-6 cursor-pointer" onClick={() => handlePasswordOpen("p")} /> : <PiEyeSlashThin className="w-6 h-6 cursor-pointer" onClick={() => handlePasswordOpen("p")} />} 
                        value={details.password} onChange={handleChange} onKeyUp={(e) => handleKeyUp(e,"login")} />
                        {errors.password!="" && <Typography
                            variant="small"
                            className="-mt-[10px] ml-1 flex items-center gap-1 font-normal text-red-400"
                        >
                            <BsShieldFillExclamation className="w-3 h-3" />{errors.password}    
                        </Typography>}
                        <Typography
                            variant="small"
                            color="blue"
                            className="w-full h-full flex justify-end cursor-pointer font-secondary"
                            onClick={() => dispatch(ForgetPassword())}
                        >
                            Forget Password ?
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex flex-col gap-3">
                        <Typography variant="small" className="font-primary" >By continuing, you agree to Cracky's <Link to={"/"} className="text-blue-400 underline underline-offset-1" >Conditions of Use</Link> and <Link to={"/"} className="text-blue-400 underline underline-offset-1" >Privacy Notice</Link>.</Typography>
                        <Button variant="gradient" color="blue" disabled={details.errors} fullWidth onClick={handleSignIn} className="font-secondary flex justify-center items-center">
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
                                <a href={ `${url}/auth/google`}>
                                    <Card className="p-3 cursor-pointer" >
                                        <FcGoogle className="w-6 h-6" />
                                    </Card>
                                </a>
                                <a href={ `${url}/auth/facebook`}>
                                    <Card className="p-3 cursor-pointer" >
                                        <FaFacebook className="w-6 h-6 text-blue-500" />
                                    </Card>
                                </a>
                            </div>
                        </div>
                    </CardFooter>
                </div>)}
                {auth=="forgetPassword" &&(
                    <div className="ml-0 md:-ml-10 md:px-3">
                    <CardBody className="flex flex-col gap-3">
                        <Input label="Email" size="lg" name="email" value={details.email} onChange={handleChange} />
                        {errors.email!="" && <Typography
                            variant="small"
                            className="-mt-[10px] ml-1 flex items-center gap-1 font-normal text-red-400"
                        >
                            <BsShieldFillExclamation className="w-3 h-3" />{errors.email}
                        </Typography>}
                    </CardBody>
                    <CardFooter className="py-0 flex flex-col gap-3">
                        <Button variant="gradient" onKeyUp={(e) => handleKeyUp(e,"fp")} color="blue" disabled={details.errors} onClick={handleForgetPassword} fullWidth className="font-secondary flex justify-center items-center">
                            Send Reset Link
                            <IoIosArrowRoundForward className="w-6 h-6 ml-1"/>
                        </Button>
                        <Typography variant="paragraph" className="mt-2 flex justify-center">
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
                        <div className="w-full h-full flex justify-center items-center flex-col">
                            <span className="border border-b-0 border-blue-gray-300 w-[90%]"></span>
                            <div className="w-full h-full mt-4 flex justify-center items-center gap-5">
                                <a href={ `${url}/auth/google`}>
                                    <Card className="p-3 cursor-pointer" >
                                        <FcGoogle className="w-6 h-6" />
                                    </Card>
                                </a>
                                <a href={ `${url}/auth/facebook`}>
                                    <Card className="p-3 cursor-pointer" >
                                        <FaFacebook className="w-6 h-6 text-blue-500" />
                                    </Card>
                                </a>
                            </div>
                        </div>
                    </CardFooter>
                </div>
                )}
                {auth=="register"&&(
                    <div className="ml-0 md:-ml-10 md:px-3">
                    <CardBody className="flex flex-col gap-3">
                        <Input label="Email" size="lg" name="email" value={details.email} onChange={handleChange} />
                        {errors.email!="" && <Typography
                            variant="small"
                            className="-mt-[10px] ml-1 flex items-center gap-1 font-normal text-red-400"
                        >
                            <BsShieldFillExclamation className="w-3 h-3" />{errors.email}    
                        </Typography> }
                        <Input label="Password" size="lg" icon={details.passwordOpen ? <PiEyeThin className="w-6 h-6 cursor-pointer" onClick={() => handlePasswordOpen("p")} /> : <PiEyeSlashThin className="w-6 h-6 cursor-pointer" onClick={() => handlePasswordOpen("p")} />} name="password"  type={details.passwordOpen ? "text": "password"} value={details.password} onChange={handleChange} />
                        {errors.password!="" && <Typography
                            variant="small"
                            className="-mt-[10px] ml-1 flex items-center gap-1 font-normal text-red-400"
                        >
                            <BsShieldFillExclamation className="w-3 h-3" />{errors.password}    
                        </Typography>}
                        <Input label="Confirm Password" onKeyUp={(e) => handleKeyUp(e,"register")} size="lg" icon={details.confirmPasswordOpen ? <PiEyeThin className="w-6 h-6 cursor-pointer" onClick={() => handlePasswordOpen("c")} /> : <PiEyeSlashThin className="w-6 h-6 cursor-pointer" onClick={() => handlePasswordOpen("c")} />} name="confirmPassword"  type={details.confirmPasswordOpen ? "text": "password"} value={details.confirmPassword} onChange={handleChange} />
                        {errors.confirmPassword!="" && <Typography
                            variant="small"
                            className="-mt-[10px] ml-1 flex items-center gap-1 font-normal text-red-400"
                        >
                            <BsShieldFillExclamation className="w-3 h-3" />{errors.confirmPassword}    
                        </Typography>}
                        <PasswordStrengthBar password={details.password} />
                        <div className="-ml-2.5 -mt-6">
                            <Checkbox color='deep-orange' name="emailOffers" checked={details.emailOffers} onChange={handleChange} label={<Typography className="text-sm font-secondary" >Get Offers via email & you can unsubscribe anytime</Typography>} className=""  />
                        </div>
                    </CardBody>
                    <CardFooter className="py-0 flex flex-col gap-3">
                        <Typography variant="small" className="font-primary -mt-5" >By continuing, you agree to Cracky's <Link to={"/"} className="text-orange-900/90 underline underline-offset-1" >Conditions of Use</Link> and <Link to={"/"} className="text-orange-900/90 underline underline-offset-1" >Privacy Notice</Link>.</Typography>
                        <Button variant="gradient" color="deep-orange" disabled={details.errors} onClick={handleSignUp} fullWidth className="font-secondary flex justify-center items-center">
                            Create account
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
                        <div className="w-full h-full flex justify-center items-center flex-col">
                            <span className="border border-b-0 border-blue-gray-300 w-[90%]"></span>
                            <div className="w-full h-full mt-4 flex justify-center items-center gap-5">
                            <a href={ `${url}/auth/google`}>
                                    <Card className="p-3 cursor-pointer" >
                                        <FcGoogle className="w-6 h-6" />
                                    </Card>
                                </a>
                                <a href={ `${url}/auth/facebook`}>
                                    <Card className="p-3 cursor-pointer" >
                                        <FaFacebook className="w-6 h-6 text-blue-500" />
                                    </Card>
                                </a>
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