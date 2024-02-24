import { useState, useEffect } from 'react';
import { Advertise } from '../../components';
import { Card,
    Typography,
    CardBody,
    Button
} from '@material-tailwind/react';
import { MdMarkEmailRead } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
// import { CgProfile } from "react-icons/cg";
import axios from "../../utils/axios.config"
import { Link } from 'react-router-dom';
import { FaSquarePhone } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export function Profile() {
    
    const iconClass = 'w-6 h-6 text-blue-500';
    const [ details, setDetails ] = useState([]);
    const url = import.meta.env.VITE_URL;

    useEffect(() => {
        axios.get(`${url}/user/`)
        .then((res) => {
            console.log(res.data.user);
            setDetails(res.data.user);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

  return (
    <div className='w-full h-full flex justify-evenly items-start my-5 md:m-10'>
        <Card className="w-[60%] h-full" >
            <CardBody className='w-full h-full' >
                <div className='flex justify-between items-center'>
                    <Typography className='font-secondary text-4xl' >Personal Information</Typography>
                    <Link to={"edit"}>
                    <Button color='blue' variant='gradient' className='flex justify-center items-center gap-1 font-secondary' > <CiEdit className='w-6 h-6' /> Edit Profile</Button>
                    </Link>
                </div>
                <div className='w-full h-full flex flex-col gap-5 mt-6'>
                    <div className='font-secondary flex'>
                        <img src={details.profilePictureUrl} alt="profile Picture" className='w-28 h-28 rounded-full' />
                        <div className='p-4 flex justify-start flex-col items-start'>
                            <div className='flex gap-5'>
                                <Typography className='font-secondary text-2xl' >{details.name}</Typography>
                                <div>   
                                    <div className='gradient-card'>Standard</div>
                                </div>
                            </div>
                            <div className='flex gap-2 justify-center items-center'>
                                <MdMarkEmailRead className={iconClass} />
                                <Typography className='font-secondary text-lg' >{details.email}</Typography>
                            </div>
                            <div className='flex gap-2 justify-center items-center'>
                                <FaSquarePhone className={iconClass} />
                                <Typography className='font-secondary text-lg' >{details.phoneNumber}</Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-col gap-5 justify-start items-start'>
                        {/* <div className='flex gap-5 justify-start items-start'>
                            <Typography className='font-secondary text-2xl' >Connections</Typography>
                            <div className='grid grid-cols-3 gap-5'>
                                {details?.providers?.map((provider,key) => <Card key={key} className='flex justify-center items-center flex-row gap-3 p-2 md:-mt-3'>
                                {provider=="google" && <FcGoogle className='w-6 h-6' />}
                                {provider=="facebook" && <FaFacebook className='w-6 h-6' />}
                                {provider=="email" && <MdMarkEmailRead className='w-6 h-6' />}
                                <Typography color="blue-gray" className='text-xl hidden md:block' >{provider.charAt(0).toUpperCase() + provider.slice(1)}</Typography>
                                </Card>)}
                            </div>
                        </div>
                        <div>
                            <Typography className='font-secondary text-2xl' >Bio</Typography>
                            <Typography className='font-secondary text-lg' ></Typography>
                        </div> */}
                    </div>
                </div>
            </CardBody>
        </Card>
        <Advertise />
    </div>
  )
}

export default Profile