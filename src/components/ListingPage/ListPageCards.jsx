import React,{useState} from 'react';
import { AiFillThunderbolt } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,} from "@material-tailwind/react";


export function ListPageCards(){
  const initialText = "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.We use the useState hook to manage the state of the component. The isExpanded state variable is used to determine whether the full text should be displayed.The toggleExpansion function toggles the value of isExpanded when the Read more link is clicked.Depending on the value of isExpanded, we either display the full text or the truncated text with the Read more link.";
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const text = initialText;
  const words = text.split(' ');
  const isLongText = words.length > 25;

    return(
       <div>
        <div className='flex '>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src="/img/crack1.png"
                    alt="card-image"
                    className="h-80 w-80  justify-center object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between ">
                    <Typography color="blue-gray" className="font-secondary text-lg font-bold">
                      Bijili Crackers
                    </Typography>
                    <Typography color="blue-gray" className="font-secondary text-lg font-bold">
                    ₹200.00
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                    
                  >
                    {isExpanded ? text : (isLongText ? words.slice(0, 25).join(' ') + '...' : text)}
                    {isLongText && (
                      <a href="#" onClick={toggleExpansion} className='text-blue-800'>
                        {isExpanded ? ' Read less' : ' Read more'}
                      </a>
                    )}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                   <Typography className='flex text-lg px-5 font-secondary font-bold text-deep-purple-900'><AiFillThunderbolt className='flex ml-16 mt-1.5 text-orange-500'/>BUY NOW</Typography>
                  </Button>
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="mt-5 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                     <Typography className='flex text-lg px-5 font-secondary font-bold text-deep-purple-900 gap-2'><FaShoppingCart className='flex ml-9 mt-1 text-orange-500'/>ADD TO CART</Typography>
                  </Button>
                </CardFooter>
            </Card>
        </div>
       </div>
    );
}
export default ListPageCards 