import { useState, useEffect } from 'react';
import { Advertise } from '../../components';
import { Card,
    Typography,
    CardBody,
    Button
} from '@material-tailwind/react';
import { MdMarkEmailRead } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import axios from "../../utils/axios.config"
import { Link } from 'react-router-dom';

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
                        <div className='p-4'>
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
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
        <Advertise />
    </div>
  )
}

export default Profile