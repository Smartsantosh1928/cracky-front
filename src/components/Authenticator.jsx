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

export function Authenticator() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.auth);

    const handleOpen = () => {
        dispatch(LogoutAuth());
    }

  return (
    <div>
        <Dialog
            open
            size={"lg"}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.3, y: -100 },
            }}
        >
            <DialogHeader className="justify-end -mt-2">
                <IconButton
                    color="blue-gray"
                    size="md"
                    variant="text"
                    onClick={handleOpen}
                >
                    <IoIosCloseCircleOutline className="w-7 h-7" />
                </IconButton>
            </DialogHeader>
            <DialogBody className="grid place-items-center gap-4 -mt-5">
            <Card className="w-full flex flex-row py-2 font-secondary">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="w-full h-full"
                >
                    <Typography variant="h3" color="blue" className="w-full h-full mb-3 flex justify-center items-center font-secondary">
                        {auth=="login" ? "Login" : "Register"}
                    </Typography>
                    <Typography variant="paragraph" className="font-primary" >
                        {auth=="login" ? "Get access to your Orders, Wishlist and Recommendations" : "Sign up with your Basic Information to get started"}
                    </Typography>
                    <ReactSVG loading={() => <span>Loading</span>} src="/lotties/login.svg">
                        SVG is not supported
                    </ReactSVG>
                </CardHeader>
                <div className="w-full h-full justify-center flex flex-col">
                    <CardBody className="flex flex-col gap-3">
                        <Input label="Email" size="lg" />
                        <Input label="Password" size="lg" />
                        <Typography
                            variant="small"
                            color="blue"
                            className="w-full h-full flex justify-end cursor-pointer font-secondary"
                        >
                            Forget Password?
                        </Typography>
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" color="blue" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0 flex flex-col gap-3">
                        <Typography variant="small" className="font-primary" >By continuing, you agree to Cracky's <Link to={"/"} className="text-blue-200" >Conditions of Use</Link> and <Link to={"/"} className="text-blue-200" >Privacy Notice</Link>.</Typography>
                        <Button variant="gradient" color="blue" fullWidth className="font-secondary">
                            Sign In
                        </Button>
                        <Typography variant="paragraph" className="mt-6 flex justify-center">
                            New to Cracky?
                            <Typography
                                variant="paragraph"
                                color="blue"
                                className="ml-1 font-secondary cursor-pointer"
                            >
                            Create an account
                            </Typography>
                        </Typography>
                    </CardFooter>
                </div>
                </Card>
            </DialogBody>
        </Dialog>
    </div>
  )
}

export default Authenticator