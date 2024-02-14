import { Typography } from "@material-tailwind/react";
import { IoCheckmark } from "react-icons/io5";
export function GrowFaster(){
    return(
       <div className="w-full grid p-5">
                <Typography className="text-3xl font-secondary font-semibold">Ignite Your Growth</Typography>
                <div className="w-10 flex h-1.5 bg-red-500 rounded-full mt-4"></div>
            <div className="flex gap-4 pt-5">
                <IoCheckmark className="h-6 w-6 text-blue-500 "/>  
                <Typography className="font-secondary"> Leverage our Price Recommendation Tool to set the perfect pricing strategy for your diverse range of crackers.</Typography>
            </div>
            <div className="flex gap-4 pt-5">
                <IoCheckmark className="h-6 w-6 text-blue-500 "/>  
                <Typography className="font-secondary">Our Product Recommendation Tool suggests popular and trending crackers, helping you diversify your product selection.</Typography>        
            </div>
            <div className="flex gap-4 pt-5">
                <IoCheckmark className="h-6 w-6 text-blue-500 "/>  
                <Typography className="font-secondary">Utilize our advertising solutions to showcase your unique crackers and connect with a broader audience.</Typography>
            </div>
            <div className="flex gap-4 pt-5">
                <IoCheckmark className="h-7 w-7 text-blue-500 "/>  
                <Typography className="font-secondary">Enhance your experience with Paid Account Management services, offering dedicated support for personalized guidance tailored to your cracker business.</Typography>
            </div>
            <div className="flex gap-4 pt-5">
                <IoCheckmark className="h-6 w-6 text-blue-500 "/>  
                <Typography className="font-secondary"> Showcase your crackers in the best light with our assistance in creating high-quality product catalogs and images.</Typography>
            </div>
       </div>
    );
}
export default GrowFaster