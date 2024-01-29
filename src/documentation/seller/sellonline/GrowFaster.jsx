import { Typography } from "@material-tailwind/react";
import { IoCheckmark } from "react-icons/io5";
export function GrowFaster(){
    return(
       <div className="p-5 w-[80%]">
                <Typography className="text-2xl font-semibold ">Ignite Your Growth</Typography>
            <div className="flex pt-5 w-[65%]">
                <IoCheckmark className="h-6 w-6 text-blue-500 "/>  
                <Typography> Leverage our Price Recommendation Tool to set the perfect pricing strategy for your diverse range of crackers.</Typography>
            </div>
            <div className="flex pt-5 w-[65%]">
                <IoCheckmark className="h-6 w-6 text-blue-500 "/>  
                <Typography>Our Product Recommendation Tool suggests popular and trending crackers, helping you diversify your product selection.</Typography>        
            </div>
            <div className="flex pt-5 w-[65%]">
                <IoCheckmark className="h-6 w-6 text-blue-500 "/>  
                <Typography>Utilize our advertising solutions to showcase your unique crackers and connect with a broader audience.</Typography>
            </div>
            <div className="flex pt-5 w-[65%]">
                <IoCheckmark className="h-6 w-6 text-blue-500 "/>  
                <Typography>Enhance your experience with Paid Account Management services, offering dedicated support for personalized guidance tailored to your cracker business.</Typography>
            </div>
            <div className="flex pt-5 w-[65%]">
                <IoCheckmark className="h-6 w-6 text-blue-500 "/>  
                <Typography> Showcase your crackers in the best light with our assistance in creating high-quality product catalogs and images.</Typography>
            </div>
       </div>
    );
}
export default GrowFaster