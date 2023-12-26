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
    IconButton
} from "@material-tailwind/react";
import { LoginAuth, LogoutAuth, RegisterAuth } from '../store/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCloseCircleOutline } from "react-icons/io";

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
            size={"md"}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.3, y: -100 },
            }}
        >
            <DialogHeader className="justify-between">
                {auth=="login" ? "Login" : "Register"}
                <IconButton
                    color="blue-gray"
                    size="md"
                    variant="text"
                    onClick={handleOpen}
                >
                    <IoIosCloseCircleOutline className="w-7 h-7" />
                </IconButton>
            </DialogHeader>
            <DialogBody divider className="grid place-items-center gap-4">
                <Card className="w-full max-w-[48rem] flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    startups
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Lyft launching cross-platform service this week
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                    Like so many organizations these days, Autodesk is a company in
                    transition. It was until recently a traditional boxed software company
                    selling licenses. Yet its own business model disruption is only part
                    of the story
                    </Typography>
                    <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                    </a>
                </CardBody>
                </Card>
            </DialogBody>
        </Dialog>
    </div>
  )
}

export default Authenticator