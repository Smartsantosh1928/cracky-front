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
import axios from 'axios';

export function Profile() {
    
    const iconClass = 'w-6 h-6 text-blue-500';
    const [ details, setDetails ] = useState([]);
    const url = import.meta.env.VITE_URL;

    useEffect(() => {
        axios.get(`${url}/user/`)
        .then((res) => {
            console.log(res);
            setDetails(res.data);
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
                    <Typography variant='h3' >Personal Information</Typography>
                    <Button color='blue' variant='gradient' className='flex justify-center items-center gap-1' > <CiEdit className='w-6 h-6' /> Edit Profile</Button>
                </div>
                <div className='w-full h-full flex flex-col gap-5 mt-6'>
                    {details.map(e => {
                        <div className='flex items-center gap-2'>
                            {e.icon}
                            <Typography variant='lead' >{e.name}</Typography>
                        </div>
                    })}
                </div>
            </CardBody>
        </Card>
        <Advertise />
    </div>
  )
}

export default Profile